import re

content = open('D:/web compatition/KU Competition - Web2026 (1)/Home Page.svg', 'r', encoding='utf-8').read()

all_rects = re.findall(r'<rect[^>]+>', content)

print('=== KEY RECTS WITH POSITIONS ===')
count = 0
for r in all_rects:
    if 'x=' in r and 'y=' in r:
        x = re.search(r'x="([^"]+)"', r)
        y = re.search(r'y="([^"]+)"', r)
        w = re.search(r'width="([^"]+)"', r)
        h = re.search(r'height="([^"]+)"', r)
        fill = re.search(r'fill="(#[^"]+)"', r)
        rx = re.search(r'rx="([^"]+)"', r)
        if x and y:
            info = 'x=' + x.group(1) + ', y=' + y.group(1)
            if w: info += ', w=' + w.group(1)
            if h: info += ', h=' + h.group(1)
            if fill: info += ', fill=' + fill.group(1)
            if rx: info += ', rx=' + rx.group(1)
            print(info)
            count += 1
            if count >= 30:
                break
