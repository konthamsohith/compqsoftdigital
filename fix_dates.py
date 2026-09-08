import re

path = '/Users/sohith/Documents/cqd/src/components/blog/BlogGrid.tsx'
with open(path, 'r') as f:
    content = f.read()

# Fix the dates and readTimes
# "date": "Jul", "readTime": "303 min read"
# -> "date": "Jul 30", "readTime": "3 min read"
# "date": "Sep 10,", "readTime": "20253 min read"
# -> "date": "Sep 10, 2025", "readTime": "3 min read"

def replacer(match):
    date = match.group(1)
    readTimeNum = match.group(2)
    
    # We want to extract the extra part that got stuck to readTime
    # Example: readTimeNum = "303" -> extraDate="30", actualRead="3"
    # Example: readTimeNum = "20253" -> extraDate="2025", actualRead="3"
    if len(readTimeNum) > 1:
        extra = readTimeNum[:-1]
        actual = readTimeNum[-1]
        
        newDate = f"{date} {extra}"
        # clean up comma
        newDate = newDate.replace(", ", ",").replace(",", ", ")
        
        return f'"date": "{newDate}",\n    readTime: "{actual} min read"'
    return match.group(0)

# The keys are currently unquoted because my node script generated unquoted keys for some but quoted values
# Wait, looking at the head output:
# date: "Jul",
# readTime: "303 min read",
pattern = re.compile(r'"date": "(.*?)",\n\s*readTime: "(\d+) min read"')
new_content = pattern.sub(replacer, content)

# But wait, looking at the head output, my previous Node script wrote date and readTime with UNQUOTED keys.
# Let's check the exact string:
#    date: "Jul",
#    readTime: "303 min read",
pattern = re.compile(r'date: "(.*?)",\n\s*readTime: "(\d+) min read"')
def replacer2(match):
    date = match.group(1)
    readTimeNum = match.group(2)
    if len(readTimeNum) > 1:
        extra = readTimeNum[:-1]
        actual = readTimeNum[-1]
        newDate = f"{date} {extra}".replace(", ", ",").replace(",", ", ")
        return f'date: "{newDate}",\n    readTime: "{actual} min read"'
    return match.group(0)

new_content = pattern.sub(replacer2, content)

with open(path, 'w') as f:
    f.write(new_content)
print("done")
