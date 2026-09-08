const fs = require('fs');

const path = '/Users/sohith/.gemini/antigravity-ide/brain/02f63123-5bf3-4aee-8ae9-bca6b12150ed/.system_generated/logs/transcript_full.jsonl';
const lines = fs.readFileSync(path, 'utf8').split('\n');
const line = lines[1020]; // 0-indexed for line 1021
const json = JSON.parse(line);

fs.writeFileSync('/Users/sohith/Documents/cqd/raw_blogs.txt', json.content);
console.log('Saved raw_blogs.txt with length: ', json.content.length);
