const fs = require('fs');

const blogGridPath = '/Users/sohith/Documents/cqd/src/components/blog/BlogGrid.tsx';
let content = fs.readFileSync(blogGridPath, 'utf8');

const startIndex = content.indexOf('const mockPosts = [');
const endIndex = content.indexOf('];\nexport default function BlogGrid()');

if (startIndex > -1 && endIndex > -1) {
  let mockPostsStr = content.substring(startIndex + 'const mockPosts = '.length, endIndex + 1);
  let mockPosts;
  eval(`mockPosts = ${mockPostsStr};`);
  
  for (let i = 0; i < mockPosts.length; i++) {
    let date = mockPosts[i].date;
    let readTime = mockPosts[i].readTime;
    
    // E.g., date: "Jul", readTime: "303 min read"
    // E.g., date: "Feb", readTime: "152 min read"
    // E.g., date: "Sep 10,", readTime: "20253 min read"
    
    // The issue is in the parse script, readTime absorbed the day or year.
    // Let's re-parse from the original raw values or just fix these strings.
    
    // if readTime matches ^(\d+)(\d)\s*min read$
    // like "303 min read" -> "30" + "3 min read"
    // like "20253 min read" -> "2025" + "3 min read"
    
    let match = readTime.match(/^(\d+)(\d)\s*min read$/);
    if (match) {
      let extraDatePart = match[1];
      let correctReadTime = match[2] + ' min read';
      
      let correctDate = date + ' ' + extraDatePart;
      
      // Clean up comma formatting for year if present
      correctDate = correctDate.replace(', ', ',').replace(',', ', ');
      
      mockPosts[i].date = correctDate;
      mockPosts[i].readTime = correctReadTime;
    }
  }
  
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
  console.log('Successfully fixed dates in BlogGrid.tsx');
}
