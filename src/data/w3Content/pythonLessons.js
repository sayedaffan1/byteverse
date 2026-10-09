export const PYTHON_W3_LESSONS = [
  {
    id: 'py_home',
    category: 'Python Tutorial',
    title: 'Python HOME',
    summary: 'Python is a popular programming language. Python can be used on a server to create web applications.',
    eli5: {
      story: 'Imagine a talking robot pet who understands plain English! Other languages make you type messy punctuation like { ; && || }. But Python is so polite and friendly that reading Python code feels like reading a bedtime story! Python is used to build real video games, steer rockets, and teach AI robots how to draw pictures.',
      analogy: '🐍 The Friendly Robot Pet: Tell it "print(\'Hello!\')" and it immediately repeats it with a smile!',
      rules: [
        'Python reads like simple everyday English.',
        'No confusing semicolons (;) needed at the end of lines.',
        'Super easy for beginners to start writing code in 5 minutes!'
      ]
    },
    body: `Python is an easy to learn, powerful programming language.
It has efficient high-level data structures and a simple but effective approach to object-oriented programming.

### Learning by Examples
With our "Try it Yourself" editor, you can edit Python code and view the result directly in your browser.`,
    tryItCode: `# Welcome to Python W3-Style
print("Hello from Python!")
hero = "Affan Sayed"
power = 9000
print(f"{hero} power level is over {power}!")`,
    codeType: 'python',
    notes: 'Python was created by Guido van Rossum, and released in 1991.',
    exercise: {
      question: 'What is the correct file extension for Python files?',
      options: ['.pt', '.py', '.python', '.pyt'],
      correct: 1,
      hint: 'Two letters: .py.'
    },
    referenceTable: [
      { item: 'print()', description: 'Outputs text or variables to the console' },
      { item: 'type()', description: 'Returns the data type of an object' },
      { item: 'len()', description: 'Returns the number of items in an object' },
      { item: 'input()', description: 'Allows user input from terminal' }
    ]
  },
  {
    id: 'py_syntax',
    category: 'Python Tutorial',
    title: 'Python Syntax & Indentation',
    summary: 'Python syntax can be executed by writing directly in the Command Line or by creating a python file.',
    eli5: {
      story: 'Have you ever built a tower of building blocks? If you stack them crookedly, the tower falls over. Python is very neat and loves clean blocks! Instead of messy curly brackets, Python says: "Indent 4 spaces to show that these blocks belong inside this room!"',
      analogy: '📏 The 4-Space Ruler: Indentation tells the robot which instructions belong together inside a group.',
      rules: [
        'Indent lines with 4 spaces to put them inside a loop or if-statement.',
        'Never mix tabs and spaces.',
        'If you forget to indent, Python will politely ask for IndentationError.'
      ]
    },
    body: `### Python Indentation
Indentation refers to the spaces at the beginning of a code line.
Where in other programming languages the indentation in code is for readability only, the indentation in Python is very important!
Python uses indentation to indicate a block of code.

\`\`\`python
if 5 > 2:
    print("Five is greater than two!")
\`\`\`

Python will give you a syntax error if you skip the indentation!`,
    tryItCode: `if 5 > 2:
    print("Five is greater than two!")
    print("Neat 4-space indentation keeps code tidy!")

print("Outside the if statement.")`,
    codeType: 'python',
    tips: 'The standard Python indentation is 4 spaces. It makes Python code the cleanest code in the world.',
    exercise: {
      question: 'What does Python use to indicate a block of code?',
      options: ['Curly brackets {}', 'Parentheses ()', 'Indentation (spaces)', 'Semicolons ;'],
      correct: 2,
      hint: 'Whitespace matters in Python.'
    }
  },
  {
    id: 'py_lists',
    category: 'Python Collections',
    title: 'Python Lists',
    summary: 'Lists are used to store multiple items in a single variable. Lists are created using square brackets.',
    eli5: {
      story: 'Imagine your pencil case or backpack! Inside, you put a red crayon, a blue eraser, a ruler, and a sharpener. In Python, that pencil case is a List: my_backpack = ["Crayon", "Eraser", "Ruler"]. You can add new pencils or take out stickers anytime!',
      analogy: '🎒 The Pencil Case: Keep all your favorite items in order inside [square brackets].',
      rules: [
        'Start with [ and end with ].',
        'Items are separated with commas.',
        'Use .append("item") to slip a new toy into your pencil case!'
      ]
    },
    body: `### List Characteristics:
- **Ordered**: Items maintain their exact order.
- **Changeable**: You can add, replace, and delete items.
- **Allow Duplicates**: You can hold two of the same item.`,
    tryItCode: `backpack = ["Laser Blade", "Health Potion", "Shield"]
print("Items in backpack:", len(backpack))
print("First item:", backpack[0])

backpack.append("Magic Gem")
print("Updated backpack:", backpack)`,
    codeType: 'python',
    tips: 'Python lists are zero-indexed: the first item is backpack[0].',
    exercise: {
      question: 'What is the index of the first item in a Python list?',
      options: ['1', '0', '-1', 'first'],
      correct: 1,
      hint: 'Python lists are zero-indexed.'
    }
  }
];
