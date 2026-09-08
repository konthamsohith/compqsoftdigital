const fs = require('fs');
const parsedPosts = require('./parsed_posts.json');

const blogGridPath = '/Users/sohith/Documents/cqd/src/components/blog/BlogGrid.tsx';
let content = fs.readFileSync(blogGridPath, 'utf8');

// The easiest way to update the file safely is to extract the mockPosts array, 
// evaluate it, update it, and rewrite the block.
const startIndex = content.indexOf('const mockPosts = [');
const endIndex = content.indexOf('];\nexport default function BlogGrid()');

if (startIndex > -1 && endIndex > -1) {
  let mockPostsStr = content.substring(startIndex + 'const mockPosts = '.length, endIndex + 1);
  
  // We can't eval easily because it's not valid JSON (has unquoted keys, trailing commas, etc).
  // But we can parse it as JS.
  let mockPosts;
  eval(`mockPosts = ${mockPostsStr};`);
  
  // Update mockPosts with parsed data
  for (let i = 0; i < mockPosts.length && i < parsedPosts.length; i++) {
    mockPosts[i].title = parsedPosts[i].title || mockPosts[i].title;
    mockPosts[i].excerpt = parsedPosts[i].excerpt || mockPosts[i].excerpt;
    mockPosts[i].href = parsedPosts[i].href || mockPosts[i].href;
    
    // Some dates had comma issues from parsing like "Sep 10," -> "Sep 10, 2025"
    let newDate = parsedPosts[i].date;
    let newReadTime = parsedPosts[i].readTime;
    
    if (newDate.endsWith(',') && newReadTime.startsWith('2025')) {
      newDate = newDate + ' 2025';
      newReadTime = newReadTime.replace('2025', '');
    }
    
    mockPosts[i].date = newDate || mockPosts[i].date;
    mockPosts[i].readTime = newReadTime || mockPosts[i].readTime;
  }
  
  // Convert back to string
  const newMockPostsStr = JSON.stringify(mockPosts, null, 2)
    .replace(/"id": /g, 'id: ')
    .replace(/"imageSrc": /g, 'imageSrc: ')
    .replace(/"category": /g, 'category: ')
    .replace(/"title": /g, 'title: ')
    .replace(/"excerpt": /g, 'excerpt: ')
    .replace(/"date": /g, 'date: ')
    .replace(/"readTime": /g, 'readTime: ')
    .replace(/"href": /g, 'href: ');
    
  const newContent = content.substring(0, startIndex) + 'const mockPosts = ' + newMockPostsStr + ';\n' + content.substring(endIndex + 2);
  
  fs.writeFileSync(blogGridPath, newContent);
  console.log('Successfully updated BlogGrid.tsx');
} else {
  console.log('Could not find mockPosts array bounds');
}
