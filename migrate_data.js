const fs = require('fs');

function extractArray(content, arrayName) {
    const startStr = `const ${arrayName} = [`;
    let startIndex = content.indexOf(startStr);
    if (startIndex === -1) {
        // try export const
        const exportStartStr = `export const ${arrayName}: CaseStudy[] = [`;
        startIndex = content.indexOf(exportStartStr);
        if (startIndex === -1) {
            console.error(`Could not find ${arrayName}`);
            return [];
        }
        startIndex += exportStartStr.length - 1; // point to '['
    } else {
        startIndex += startStr.length - 1; // point to '['
    }

    let openBrackets = 0;
    let endIndex = startIndex;
    for (let i = startIndex; i < content.length; i++) {
        if (content[i] === '[') openBrackets++;
        if (content[i] === ']') openBrackets--;
        if (openBrackets === 0) {
            endIndex = i;
            break;
        }
    }

    let arrayStr = content.substring(startIndex, endIndex + 1);
    
    // Evaluate the array string to a JS object
    // Need to handle missing quotes or trailing commas in some cases
    try {
        return eval(`(${arrayStr})`);
    } catch (e) {
        console.error(`Failed to eval ${arrayName}:`, e);
        return [];
    }
}

const parsedPostsPath = 'parsed_posts.json';
let data = JSON.parse(fs.readFileSync(parsedPostsPath, 'utf8'));

// If data is array (old format), restructure it
if (Array.isArray(data)) {
    data = { blogs: data, news: [], events: [], webinars: [], caseStudies: [] };
}

// Ensure all keys exist
data.news = data.news || [];
data.events = data.events || [];
data.webinars = data.webinars || [];
data.caseStudies = data.caseStudies || [];

// Read News
try {
    const newsContent = fs.readFileSync('src/components/news/NewsList.tsx', 'utf8');
    const newsArray = extractArray(newsContent, 'mockNews');
    data.news = [...newsArray, ...data.news];
    console.log(`Added ${newsArray.length} news items.`);
} catch (e) { console.error('Error reading news', e); }

// Read Events
try {
    const eventsContent = fs.readFileSync('src/components/events/EventsGrid.tsx', 'utf8');
    const eventsArray = extractArray(eventsContent, 'mockEvents');
    data.events = [...eventsArray, ...data.events];
    console.log(`Added ${eventsArray.length} events items.`);
} catch (e) { console.error('Error reading events', e); }

// Read Webinars
try {
    const webinarsContent = fs.readFileSync('src/components/webinars/WebinarsGrid.tsx', 'utf8');
    const webinarsArray = extractArray(webinarsContent, 'mockWebinars');
    data.webinars = [...webinarsArray, ...data.webinars];
    console.log(`Added ${webinarsArray.length} webinars items.`);
} catch (e) { console.error('Error reading webinars', e); }

// Read Case Studies
try {
    const caseStudiesContent = fs.readFileSync('src/components/case-studies/caseStudiesData.ts', 'utf8');
    const caseStudiesArray = extractArray(caseStudiesContent, 'caseStudies');
    data.caseStudies = [...caseStudiesArray, ...data.caseStudies];
    console.log(`Added ${caseStudiesArray.length} case studies items.`);
} catch (e) { console.error('Error reading case studies', e); }

// Deduplicate by title or id if necessary? We'll just overwrite or prepend for now
// To avoid duplicates, maybe we clear it if it's the first time
// Actually, let's just replace them to be safe
data.news = extractArray(fs.readFileSync('src/components/news/NewsList.tsx', 'utf8'), 'mockNews');
data.events = extractArray(fs.readFileSync('src/components/events/EventsGrid.tsx', 'utf8'), 'mockEvents');
data.webinars = extractArray(fs.readFileSync('src/components/webinars/WebinarsGrid.tsx', 'utf8'), 'mockWebinars');
data.caseStudies = extractArray(fs.readFileSync('src/components/case-studies/caseStudiesData.ts', 'utf8'), 'caseStudies');

// Format dates and add hrefs if missing for consistency with CMS
data.news = data.news.map(n => ({...n, date: n.date || 'Soon', href: n.href || `/news/${n.title ? n.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : n.id}`}));
data.events = data.events.map(n => ({...n, href: n.href || `/events/${n.title ? n.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : n.id}`}));
data.webinars = data.webinars.map(n => ({...n, href: n.href || `/webinars/${n.title ? n.title.toLowerCase().replace(/[^a-z0-9]+/g, '-') : n.id}`}));
data.caseStudies = data.caseStudies.map(n => ({...n, href: n.href || `/case-studies/${n.slug || n.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`}));

fs.writeFileSync(parsedPostsPath, JSON.stringify(data, null, 2));
console.log('Successfully migrated data to parsed_posts.json');
