import os

file_path = "/home/thawshi/code/avenerr/src/lib/business-data.ts"

with open(file_path, "r") as f:
    lines = f.readlines()

new_lines = []
in_target_section = False
target_category = 'title: "Shoulder",'
supplier_name = "Exactech"

for line in lines:
    if target_category in line:
        in_target_section = True
    
    # Check if we are in the target section and find an image field
    # We insert supplier BEFORE image to avoid handling single/multi-line image values
    if in_target_section and 'image:' in line:
        # Get indentation
        indent = line[:line.find('image:')]
        new_lines.append(f'{indent}supplier: "{supplier_name}",\n')
        new_lines.append(line)
    elif in_target_section and '},' in line and (line.strip() == '},' or line.strip() == '],'):
         pass
         new_lines.append(line)
    else:
        if 'title: "Hip",' in line: # Stop when next section starts (Hip follows Shoulder)
            in_target_section = False
        new_lines.append(line)

with open(file_path, "w") as f:
    f.writelines(new_lines)

print("Updated business-data.ts successfully for Shoulder/Exactech.")
