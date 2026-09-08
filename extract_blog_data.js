const fs = require('fs');

const blogGridPath = '/Users/sohith/Documents/cqd/src/components/blog/BlogGrid.tsx';
let content = fs.readFileSync(blogGridPath, 'utf8');

const startIndex = content.indexOf('const mockPosts = [');
const endIndex = content.indexOf('];\nexport default function BlogGrid()');

if (startIndex > -1 && endIndex > -1) {
  let mockPostsStr = content.substring(startIndex, endIndex + 1);
  
  // Create src/data/blogData.ts
  const dataPath = '/Users/sohith/Documents/cqd/src/data/blogData.ts';
  fs.mkdirSync('/Users/sohith/Documents/cqd/src/data', { recursive: true });
  fs.writeFileSync(dataPath, `export ${mockPostsStr};\n`);
  
  // Update BlogGrid.tsx to import mockPosts
  let newContent = content.substring(0, startIndex) + "import { mockPosts } from '@/data/blogData';\n\n" + "export default function BlogGrid()" + content.substring(endIndex + '];\nexport default function BlogGrid()'.length);
  
  fs.writeFileSync(blogGridPath, newContent);
  console.log('Successfully extracted mockPosts to src/data/blogData.ts');
} else {
  console.log('Could not find mockPosts array bounds');
}
