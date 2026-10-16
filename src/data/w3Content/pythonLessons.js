export const PYTHON_W3_LESSONS = [
  {
    "id": "py_home",
    "category": "Python Tutorial",
    "title": "Python HOME",
    "summary": "Python is a popular programming language. Python can be used on a server to create web applications.",
    "eli5": {
      "story": "Imagine a talking robot pet who understands plain English! Other languages make you type messy punctuation like { ; && || }. But Python is so polite and friendly that reading Python code feels like reading a bedtime story! Python is used to build real video games, steer rockets, and teach AI robots how to draw pictures.",
      "analogy": "🐍 The Friendly Robot Pet: Tell it \"print('Hello!')\" and it immediately repeats it with a smile!",
      "rules": [
        "Python reads like simple everyday English.",
        "No confusing semicolons (;) needed at the end of lines.",
        "Super easy for beginners to start writing code in 5 minutes!"
      ]
    },
    "body": "Python is an easy to learn, powerful programming language.\nIt has efficient high-level data structures and a simple but effective approach to object-oriented programming.\n\n### Learning by Examples\nWith our \"Try it Yourself\" editor, you can edit Python code and view the result directly in your browser.",
    "tryItCode": "# Welcome to Python W3-Style\nprint(\"Hello from Python!\")\nhero = \"Affan Sayed\"\npower = 9000\nprint(f\"{hero} power level is over {power}!\")",
    "codeType": "python",
    "notes": "Python was created by Guido van Rossum, and released in 1991.",
    "exercise": {
      "question": "What is the correct file extension for Python files?",
      "options": [
        ".pt",
        ".py",
        ".python",
        ".pyt"
      ],
      "correct": 1,
      "hint": "Two letters: .py."
    },
    "referenceTable": [
      {
        "item": "print()",
        "description": "Outputs text or variables to the console"
      },
      {
        "item": "type()",
        "description": "Returns the data type of an object"
      },
      {
        "item": "len()",
        "description": "Returns the number of items in an object"
      },
      {
        "item": "input()",
        "description": "Allows user input from terminal"
      }
    ]
  },
  {
    "id": "py_syntax",
    "category": "Python Tutorial",
    "title": "Python Syntax & Indentation",
    "summary": "Python syntax can be executed by writing directly in the Command Line or by creating a python file.",
    "eli5": {
      "story": "Have you ever built a tower of building blocks? If you stack them crookedly, the tower falls over. Python is very neat and loves clean blocks! Instead of messy curly brackets, Python says: \"Indent 4 spaces to show that these blocks belong inside this room!\"",
      "analogy": "📏 The 4-Space Ruler: Indentation tells the robot which instructions belong together inside a group.",
      "rules": [
        "Indent lines with 4 spaces to put them inside a loop or if-statement.",
        "Never mix tabs and spaces.",
        "If you forget to indent, Python will politely ask for IndentationError."
      ]
    },
    "body": "### Python Indentation\nIndentation refers to the spaces at the beginning of a code line.\nWhere in other programming languages the indentation in code is for readability only, the indentation in Python is very important!\nPython uses indentation to indicate a block of code.\n\n```python\nif 5 > 2:\n    print(\"Five is greater than two!\")\n```\n\nPython will give you a syntax error if you skip the indentation!",
    "tryItCode": "if 5 > 2:\n    print(\"Five is greater than two!\")\n    print(\"Neat 4-space indentation keeps code tidy!\")\n\nprint(\"Outside the if statement.\")",
    "codeType": "python",
    "tips": "The standard Python indentation is 4 spaces. It makes Python code the cleanest code in the world.",
    "exercise": {
      "question": "What does Python use to indicate a block of code?",
      "options": [
        "Curly brackets {}",
        "Parentheses ()",
        "Indentation (spaces)",
        "Semicolons ;"
      ],
      "correct": 2,
      "hint": "Whitespace matters in Python."
    }
  },
  {
    "id": "py_variables",
    "category": "Python Fundamentals",
    "title": "Python Variables & Types",
    "summary": "Variables are containers for storing data values. Unlike other languages, Python has no command for declaring a variable.",
    "eli5": {
      "story": "Imagine putting a sticky label on your water bottle: \"name = 'Affan'\"! You don't need to tell the bottle what it is; the moment you write it down, Python knows! If you write age = 10, Python says: \"Aha! That's an integer number!\"",
      "analogy": "🏷️ Self-Sticking Labels: Python automatically detects whether you created text, a whole number, or a decimal fraction.",
      "rules": [
        "No keyword (like let or var) needed: just write variable_name = value.",
        "Variable names are case-sensitive (age vs Age).",
        "Use snake_case for multi-word variables (player_score)."
      ]
    },
    "body": "### Creating Variables:\n```python\nx = 5\ny = \"John\"\nprint(type(x)) # <class 'int'>\nprint(type(y)) # <class 'str'>\n```\n\n### Type Casting:\nSpecify a data type explicitly:\n```python\nx = str(3)    # '3'\ny = int(3)    # 3\nz = float(3)  # 3.0\n```",
    "tryItCode": "hero_name = \"Affan Sayed\"\nhero_level = 99\nhero_power = 95.8\nis_master = True\n\nprint(f\"Hero: {hero_name} | Level: {hero_level}\")\nprint(f\"Power: {hero_power} | Certified Master: {is_master}\")\nprint(\"Data type of hero_name:\", type(hero_name).__name__)",
    "codeType": "python",
    "tips": "Use f-strings like f\"Hello {name}!\" for the cleanest string formatting in Python 3.6+.",
    "exercise": {
      "question": "Which function returns the data type of a variable in Python?",
      "options": [
        "typeof()",
        "type()",
        "datatype()",
        "kind()"
      ],
      "correct": 1,
      "hint": "type(variable)"
    }
  },
  {
    "id": "py_strings",
    "category": "Python Fundamentals",
    "title": "Python String Methods & f-strings",
    "summary": "Strings in Python are arrays of bytes representing unicode characters, with dozens of built-in manipulation methods.",
    "eli5": {
      "story": "Imagine a cartoon speech bubble! Inside, someone yells: \"hello world\". Python has magic buttons: click .upper() and it turns into giant uppercase \"HELLO WORLD\"! Click .replace(\"world\", \"galaxy\") and it zooms across the stars!",
      "analogy": "💬 The Speech Bubble: Python lets you slice, capitalize, count, and format words with simple methods.",
      "rules": [
        ".upper() makes everything CAPITALS; .lower() makes it whisper.",
        ".strip() trims away messy blank spaces on edges.",
        "f\"Hello {name}\" lets you slip variables directly inside sentences!"
      ]
    },
    "body": "### Common String Methods:\n- `.upper()`: Returns uppercase string.\n- `.lower()`: Returns lowercase string.\n- `.strip()`: Removes whitespace from beginning and end.\n- `.replace(old, new)`: Replaces a substring.\n- `.split(separator)`: Splits string into a list.\n- `len(string)`: Returns character count.",
    "tryItCode": "phrase = \"  welcome to byteverse coding arcade!  \"\ncleaned = phrase.strip().title()\nprint(\"Original:\", phrase)\nprint(\"Cleaned & Title Case:\", cleaned)\nprint(\"Contains 'arcade'?:\", \"arcade\" in phrase)\nprint(\"Length:\", len(cleaned))",
    "codeType": "python",
    "notes": "Strings in Python are immutable: calling .upper() returns a new string and does not modify the original.",
    "exercise": {
      "question": "How do you check how many characters are in a Python string named s?",
      "options": [
        "s.length",
        "s.size()",
        "len(s)",
        "count(s)"
      ],
      "correct": 2,
      "hint": "Use the global len() function."
    }
  },
  {
    "id": "py_lists",
    "category": "Python Collections",
    "title": "Python Lists",
    "summary": "Lists are used to store multiple items in a single variable. Lists are created using square brackets.",
    "eli5": {
      "story": "Imagine your pencil case or backpack! Inside, you put a red crayon, a blue eraser, a ruler, and a sharpener. In Python, that pencil case is a List: my_backpack = [\"Crayon\", \"Eraser\", \"Ruler\"]. You can add new pencils or take out stickers anytime!",
      "analogy": "🎒 The Pencil Case: Keep all your favorite items in order inside [square brackets].",
      "rules": [
        "Start with [ and end with ].",
        "Items are separated with commas.",
        "Use .append(\"item\") to slip a new toy into your pencil case!"
      ]
    },
    "body": "### List Characteristics:\n- **Ordered**: Items maintain their exact order.\n- **Changeable**: You can add, replace, and delete items.\n- **Allow Duplicates**: You can hold two of the same item.",
    "tryItCode": "backpack = [\"Laser Blade\", \"Health Potion\", \"Shield\"]\nprint(\"Items in backpack:\", len(backpack))\nprint(\"First item:\", backpack[0])\n\n# Add new item\nbackpack.append(\"Speed Boots\")\nprint(\"Updated backpack:\", backpack)",
    "codeType": "python",
    "tips": "Negative indexing lets you access from the end: backpack[-1] is the very last item in the list!",
    "exercise": {
      "question": "Which method adds an item to the end of a Python list?",
      "options": [
        "push()",
        "add()",
        "append()",
        "insert_last()"
      ],
      "correct": 2,
      "hint": "my_list.append(item)"
    }
  },
  {
    "id": "py_tuples_sets",
    "category": "Python Collections",
    "title": "Python Tuples & Sets",
    "summary": "Tuples store multiple items in parentheses (immutable). Sets store unique items in curly brackets (unordered).",
    "eli5": {
      "story": "Imagine carving your birthday onto a stone tablet with a chisel! Once carved, it can NEVER be erased or changed: that is a Tuple (1998, 10, 15). Now imagine a magic candy bag where you drop in 10 green candies: the bag magically merges them so only 1 unique candy exists: that is a Set!",
      "analogy": "🗿 Stone Tablet vs Magic Bag: Tuples are carved in stone (cannot be modified); Sets automatically delete duplicates.",
      "rules": [
        "Tuples use parentheses (1, 2, 3) and cannot be changed.",
        "Sets use curly brackets {1, 2, 3} and allow zero duplicate items.",
        "Sets are ultra-fast for checking if something exists (if x in my_set:)."
      ]
    },
    "body": "### 1. Tuples:\n- Created with `()`.\n- Immutable (cannot add, change, or remove items after creation).\n\n### 2. Sets:\n- Created with `{}`.\n- Unordered, unchangeable (can add/remove), and NO duplicates allowed.",
    "tryItCode": "# Tuple (Immutable Coordinates)\ncoordinates = (40.7128, -74.0060)\nprint(\"NYC Coordinates Tuple:\", coordinates)\n\n# Set (Removes duplicate items automatically)\ninventory = {\"Key\", \"Coin\", \"Key\", \"Potion\", \"Coin\", \"Shield\"}\nprint(\"Unique Inventory Items Set:\", inventory)",
    "codeType": "python",
    "notes": "A tuple with only one item must have a trailing comma: single_item = (\"apple\",). Without the comma, Python sees it as a string!",
    "exercise": {
      "question": "Can you change or reassign items in a Python Tuple after creation?",
      "options": [
        "Yes, using .modify()",
        "No, tuples are immutable",
        "Only if converted to set",
        "Yes, anytime"
      ],
      "correct": 1,
      "hint": "Tuples are immutable."
    }
  },
  {
    "id": "py_dictionaries",
    "category": "Python Collections",
    "title": "Python Dictionaries",
    "summary": "Dictionaries are used to store data values in key:value pairs. A dictionary is a collection which is ordered, changeable and does not allow duplicates.",
    "eli5": {
      "story": "Have you ever opened a real dictionary book looking for the word \"Dinosaur\"? You look up the word (the key), and right next to it is the explanation: \"A giant prehistoric lizard!\" (the value). In Python, a dictionary pairs words with their meanings: {\"word\": \"meaning\"}!",
      "analogy": "📖 The Real Dictionary: Look up any keyword in curly brackets, and it instantly hands you its saved value.",
      "rules": [
        "Dictionaries use { \"key\": \"value\" } syntax.",
        "Access values using square brackets: hero[\"name\"].",
        "Keys must be unique; assigning to an existing key updates its value."
      ]
    },
    "body": "### Syntax:\n```python\nplayer = {\n  \"name\": \"Affan Sayed\",\n  \"track\": \"Python & Django\",\n  \"level\": 99\n}\nprint(player[\"name\"]) # Affan Sayed\n```\n\n### Dictionary Methods:\n- `.keys()`: Returns all keys.\n- `.values()`: Returns all values.\n- `.items()`: Returns key-value tuple pairs.\n- `.get(key, default)`: Safely gets value without crashing if key is missing!",
    "tryItCode": "profile = {\n  \"hero\": \"Affan Sayed\",\n  \"role\": \"Master Architect\",\n  \"score\": 9500,\n  \"badges\": [\"HTML Champion\", \"Python Master\"]\n}\n\nprint(\"Player:\", profile[\"hero\"])\nprint(\"Total Badges:\", len(profile[\"badges\"]))\n\n# Safe lookup with .get()\nrank = profile.get(\"rank\", \"Grandmaster\")\nprint(\"Rank:\", rank)",
    "codeType": "python",
    "tips": "Always use .get(\"key\") instead of profile[\"key\"] if you are not 100% sure the key exists. It prevents KeyError crashes!",
    "exercise": {
      "question": "Which dictionary method safely retrieves a value with a fallback default if the key is missing?",
      "options": [
        "fetch()",
        "get()",
        "find()",
        "lookup()"
      ],
      "correct": 1,
      "hint": "dict.get(key, default)"
    }
  },
  {
    "id": "py_conditionals",
    "category": "Python Fundamentals",
    "title": "Python If...Else & Logical Operators",
    "summary": "Python supports the usual logical conditions from mathematics: equals, not equals, less than, greater than, and logical operators.",
    "eli5": {
      "story": "Imagine walking up to a spaceship launchpad! The computer checks: \"Is oxygen level > 90? AND is fuel tank full?\" IF both are true: \"3, 2, 1, LIFTOFF!\" ELIF fuel is low: \"Please refuel!\" ELSE: \"Launch aborted!\" Python uses plain English words \"and\", \"or\", and \"not\" for logic.",
      "analogy": "🚀 The Spaceship Launch Checklist: All safety rules must pass before the rocket fires its thrusters.",
      "rules": [
        "Python uses English words: and, or, not (no && or || symbols!).",
        "Always end the if, elif, and else lines with a colon (:).",
        "Indent lines inside the condition with 4 spaces."
      ]
    },
    "body": "### Syntax:\n```python\nif score >= 90:\n    print(\"Grade: A\")\nelif score >= 80:\n    print(\"Grade: B\")\nelse:\n    print(\"Keep studying!\")\n```\n\n### Logical Operators:\n- `and`: True if both conditions are true.\n- `or`: True if at least one condition is true.\n- `not`: Inverts the boolean result.",
    "tryItCode": "xp = 2400\nhas_boss_key = True\n\nif xp >= 2000 and has_boss_key:\n    print(\"🏆 Citadel gates OPEN! Enter the Boss Chamber!\")\nelif xp >= 1000:\n    print(\"⚔️ Almost there! Find the Boss Key in the Arcade!\")\nelse:\n    print(\"🌱 Gather more XP to level up your hero.\")",
    "codeType": "python",
    "notes": "Python supports shorthand one-line if/else ternary: status = \"Pass\" if score >= 50 else \"Fail\".",
    "exercise": {
      "question": "What character MUST be placed at the end of an if statement line in Python?",
      "options": [
        "Semicolon (;)",
        "Colon (:)",
        "Period (.)",
        "Curly bracket ({)"
      ],
      "correct": 1,
      "hint": "if condition:"
    }
  },
  {
    "id": "py_loops",
    "category": "Python Fundamentals",
    "title": "Python For & While Loops (range)",
    "summary": "A for loop is used for iterating over a sequence (list, tuple, dictionary, set, or string). A while loop executes as long as a condition is true.",
    "eli5": {
      "story": "Imagine your coach gives you 5 practice soccer balls and says: \"Kick every single ball into the goal!\" The loop takes ball #1 (KICK!), ball #2 (KICK!), ball #3 (KICK!), ball #4 (KICK!), ball #5 (KICK!). When the ball bag is empty, the loop finishes with a cheer!",
      "analogy": "⚽ The Soccer Ball Bag: for ball in balls kicks every ball in order until the bag is empty.",
      "rules": [
        "for item in my_list: visits every item automatically.",
        "range(5) counts: 0, 1, 2, 3, 4 (starts at 0, stops before 5).",
        "break exits the loop immediately; continue skips to the next item."
      ]
    },
    "body": "### The for Loop & range():\n```python\nfor i in range(1, 6):\n    print(f\"Lap #{i}\")\n```\n\n### The while Loop:\n```python\ncountdown = 5\nwhile countdown > 0:\n    print(countdown)\n    countdown -= 1\nprint(\"Blastoff!\")\n```",
    "tryItCode": "tracks = [\"HTML\", \"CSS\", \"JavaScript\", \"Python\", \"Django\"]\n\nprint(\"--- ByteVerse Academy Modules ---\")\nfor index, track in enumerate(tracks, start=1):\n    print(f\"Track #{index}: {track}\")\n\nprint(\"\\n--- Counting with range(3) ---\")\nfor num in range(3):\n    print(f\"Countdown: {3 - num}...\")\nprint(\"Ready, Set, Code!\")",
    "codeType": "python",
    "tips": "Use enumerate(my_list) when you need both the index number and the item value inside your loop!",
    "exercise": {
      "question": "What numbers will range(1, 4) generate?",
      "options": [
        "1, 2, 3, 4",
        "1, 2, 3",
        "0, 1, 2, 3",
        "1, 4"
      ],
      "correct": 1,
      "hint": "range stops BEFORE the second number: 1, 2, 3."
    }
  },
  {
    "id": "py_functions",
    "category": "Python Functions",
    "title": "Python Functions & Scope",
    "summary": "A function is a block of code which only runs when it is called. You can pass data, known as parameters, into a function.",
    "eli5": {
      "story": "Imagine a magic microwave! You open the door, put in popcorn kernels, set the timer, and press START. Inside, it pops the corn, and DING! It hands you a hot bag of buttered popcorn. In Python, \"def make_popcorn(flavor):\" is that magical machine: write it once, use it for every movie night!",
      "analogy": "🍿 The Popcorn Machine: def creates the recipe, arguments are the ingredients, and return hands you the delicious snack.",
      "rules": [
        "Define a function with def function_name():.",
        "Use return to send a result back to the caller.",
        "Default parameter: def greet(name=\"Friend\") works even if no name is given!"
      ]
    },
    "body": "### Defining Functions:\n```python\ndef calculate_xp(games_won, bonus=100):\n    return (games_won * 50) + bonus\n\nscore = calculate_xp(4) # 300\n```\n\n### Arbitrary Arguments (*args and **kwargs):\n- `*args`: Receives a tuple of positional arguments.\n- `**kwargs`: Receives a dictionary of keyword arguments.",
    "tryItCode": "def award_achievement(player, badge_name, xp_reward=150):\n    announcement = f\"🎉 {player} unlocked '{badge_name}'! (+{xp_reward} XP)\"\n    return announcement\n\nprint(award_achievement(\"Affan Sayed\", \"Python Polyglot\"))\nprint(award_achievement(\"Cyber Cadet\", \"First Tag Placed\", xp_reward=50))",
    "codeType": "python",
    "notes": "Variables created inside a function belong to the local scope of that function and cannot be accessed outside.",
    "exercise": {
      "question": "Which keyword is used to define a function in Python?",
      "options": [
        "function",
        "def",
        "func",
        "define"
      ],
      "correct": 1,
      "hint": "Short for define: def."
    }
  },
  {
    "id": "py_modules",
    "category": "Python Advanced",
    "title": "Python Modules & PIP Packages",
    "summary": "Consider a module to be the same as a code library. A file containing a set of functions you want to include in your application.",
    "eli5": {
      "story": "Imagine you want to build a real robot! You don't need to smelt your own iron from rocks or invent lightbulbs from scratch; you just buy pre-made wheels and motors from the hobby shop. In Python, \"import math\" or \"import random\" is that hobby shop: millions of pre-made superpowers ready to use!",
      "analogy": "🛒 The Superpower Shop: import lets you borrow thousands of incredible tools built by engineers worldwide.",
      "rules": [
        "import math lets you calculate square roots and trigonometry.",
        "from datetime import date gives you today's calendar date.",
        "pip install package_name downloads new superpowers from the internet."
      ]
    },
    "body": "### Using Built-in Modules:\n```python\nimport math\nprint(math.sqrt(64)) # 8.0\n\nimport random\nprint(random.randint(1, 6)) # Dice roll\n```\n\n### PIP Package Manager:\nInstall third-party packages from PyPI (Python Package Index):\n```bash\npip install requests django numpy\n```",
    "tryItCode": "import math\nimport random\n\n# Dice roll simulation\ndice = random.randint(1, 6)\nprint(f\"🎲 Rolled a {dice} on a 6-sided die!\")\n\n# Math calculation\nradius = 5\ncircle_area = math.pi * math.pow(radius, 2)\nprint(f\"Area of circle (r={radius}): {circle_area:.2f}\")",
    "codeType": "python",
    "tips": "Use \"import math as m\" to give a module a short convenient nickname in your code.",
    "exercise": {
      "question": "Which tool is the standard package installer for Python libraries?",
      "options": [
        "npm",
        "pip",
        "apt",
        "composer"
      ],
      "correct": 1,
      "hint": "PIP installs packages."
    }
  },
  {
    "id": "py_classes",
    "category": "Python OOP",
    "title": "Python Classes & Objects (OOP)",
    "summary": "Python is an object oriented programming language. Almost everything in Python is an object, with its properties and methods.",
    "eli5": {
      "story": "Imagine you have an architectural drawing blueprint of a dream house with 3 bedrooms and a swimming pool. The blueprint is the Class. Every time a construction crew follows that blueprint in real life, they build a real house with real bricks that you can walk into! That real house is the Object.",
      "analogy": "📐 The Architectural Blueprint: class House: is the paper plan; house1 = House() is the real physical building.",
      "rules": [
        "class ClassName: defines the blueprint.",
        "def __init__(self, name): is the constructor that runs when an object is born.",
        "self refers to the current individual instance."
      ]
    },
    "body": "### Creating a Class and Object:\n```python\nclass Hero:\n    def __init__(self, name, track):\n        self.name = name\n        self.track = track\n        self.xp = 0\n\n    def add_xp(self, amount):\n        self.xp += amount\n        return f\"{self.name} now has {self.xp} XP!\"\n\nhero1 = Hero(\"Affan Sayed\", \"Python & Django\")\nprint(hero1.add_xp(500))\n```",
    "tryItCode": "class ByteVersePlayer:\n    def __init__(self, username, level=1):\n        self.username = username\n        self.level = level\n        self.coins = 100\n\n    def level_up(self):\n        self.level += 1\n        self.coins += 50\n        return f\"⚡ {self.username} leveled up to LVL {self.level}! (+50 coins)\"\n\nplayer1 = ByteVersePlayer(\"Affan Sayed\", level=99)\nprint(f\"Player: {player1.username} | Coins: {player1.coins}\")\nprint(player1.level_up())",
    "codeType": "python",
    "notes": "The self parameter is a reference to the current instance of the class, and is used to access variables that belong to the class.",
    "exercise": {
      "question": "Which method in a Python class is executed automatically when a new object is initialized?",
      "options": [
        "__start__()",
        "__init__()",
        "__create__()",
        "__new__()"
      ],
      "correct": 1,
      "hint": "__init__(self)"
    }
  }
];
