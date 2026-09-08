const fs = require('fs');

const gridContent = fs.readFileSync('/Users/sohith/Documents/cqd/src/components/blog/BlogGrid.tsx', 'utf8');
const match = gridContent.match(/export const mockPosts = (\[[\s\S]*?\]);/);
let mockPosts = [];
if (match) {
  mockPosts = eval(match[1]); // Safe since it's just local data
} else {
  console.log("Could not find mockPosts");
  process.exit(1);
}

const rawText = fs.readFileSync('/Users/sohith/Documents/cqd/raw_blogs.txt', 'utf8');

const blogContent = {};

// We sort posts by their position in rawText to find the boundaries
const postsWithPositions = mockPosts.map(post => {
  const cleanTitle = post.title.trim();
  let index = rawText.indexOf(cleanTitle);
  
  // Try to find the title after the initial blog grid section (say after index 5000)
  // because the titles appear in the grid first
  let lastIndex = index;
  while(index !== -1) {
    lastIndex = index;
    index = rawText.indexOf(cleanTitle, index + 1);
  }
  
  // Use the last occurrence of the title as the start of the actual article
  return {
    ...post,
    startIndex: lastIndex
  };
}).filter(p => p.startIndex !== -1).sort((a, b) => a.startIndex - b.startIndex);

for (let i = 0; i < postsWithPositions.length; i++) {
  const current = postsWithPositions[i];
  const next = postsWithPositions[i+1];
  
  let endPos = next ? next.startIndex : rawText.length;
  let rawBody = rawText.substring(current.startIndex, endPos);
  
  // Clean up the body
  // Remove the title, date, and read time at the beginning
  const lines = rawBody.split('\n').map(l => l.trim()).filter(l => l.length > 0);
  
  // Skip the title
  if (lines[0] === current.title) lines.shift();
  
  // Skip date and read time (heuristics)
  if (lines.length > 0 && lines[0].match(/^[A-Z][a-z]{2} \d{1,2}(, \d{4})?$/)) lines.shift(); // Date
  if (lines.length > 0 && lines[0].match(/^\d+ min read$/)) lines.shift(); // Read time
  
  // Clean up ending (like "Learn more..." or "1 like. Post not marked as liked")
  let cleanLines = [];
  for (let line of lines) {
    if (line.includes('Post not marked as liked')) continue;
    if (line === 'More' || line === 'Insights' || line === 'All Posts' || line.startsWith('[Blog Posts]')) continue;
    if (line.match(/^\[Case studies\]/)) continue;
    if (line.match(/^\[Events\]/)) continue;
    cleanLines.push(line);
  }
  
  // Also remove footer cruft at the end
  while (cleanLines.length > 0) {
    const last = cleanLines[cleanLines.length - 1];
    if (last.startsWith('Learn more:') || last.startsWith('Sources:') || last.startsWith('Let’s build support systems')) {
      cleanLines.pop();
    } else {
      break;
    }
  }

  const slug = current.href.split('/').pop();
  blogContent[slug] = cleanLines;
}

fs.mkdirSync('/Users/sohith/Documents/cqd/src/data', { recursive: true });
fs.writeFileSync('/Users/sohith/Documents/cqd/src/data/blogContent.json', JSON.stringify(blogContent, null, 2));
console.log('Saved parsed content for', Object.keys(blogContent).length, 'posts');
