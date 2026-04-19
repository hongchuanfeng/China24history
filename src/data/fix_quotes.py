import re

# 读取文件
with open('dynasties.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# 找出所有description: "..."的模式，并转义描述中的双引号
def escape_quotes(match):
    prefix = match.group(1)  # description: "
    desc = match.group(2)    # 描述内容
    suffix = match.group(3)  # " 或 ",
    # 转义描述中的双引号（不包括已经转义的）
    desc_escaped = re.sub(r'(?<!\\)"', '\\"', desc)
    if desc_escaped != desc:
        return f'{prefix}{desc_escaped}{suffix}'
    return match.group(0)  # 没有变化

pattern = r'(description:\s*")([^"]*?)("\s*,?\s*$)'
new_content = re.sub(pattern, escape_quotes, content, flags=re.MULTILINE)

# 写回文件
with open('dynasties.ts', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Quotes escaping completed")
