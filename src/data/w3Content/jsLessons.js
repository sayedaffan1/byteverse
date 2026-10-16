export const JS_W3_LESSONS = [
  {
    "id": "js_home",
    "category": "JS Tutorial",
    "title": "JavaScript HOME",
    "summary": "JavaScript is the world's most popular programming language. JavaScript is the programming language of the Web.",
    "eli5": {
      "story": "HTML is the robot's body, and CSS is the robot's shiny paint. But without batteries, the robot just stands frozen! JavaScript is the batteries, the brain, and the muscles. It makes the robot walk, talk, play games, celebrate high scores, and respond when you click its buttons!",
      "analogy": "🧠 Batteries & Brains: JavaScript brings everything to life! When you tap a button, JavaScript makes the magic happen.",
      "rules": [
        "HTML creates the buttons.",
        "CSS makes the buttons pretty and glowing.",
        "JavaScript listens: \"Did someone tap me? Quick, pop up confetti!\""
      ]
    },
    "body": "JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.\n\n### Why Study JavaScript?\nJavaScript is one of the 3 languages all web developers must learn:\n1. **HTML** to define the content of web pages.\n2. **CSS** to specify the layout and styling of web pages.\n3. **JavaScript** to program the behavior and interactivity of web pages.",
    "tryItCode": "// JavaScript makes things happen!\nconsole.log(\"Robot batteries activated!\");\nconst batteryLevel = 100;\nconsole.log(\"Ready to play! Battery at:\", batteryLevel + \"%\");",
    "codeType": "js",
    "notes": "In HTML, JavaScript code is inserted between <script> and </script> tags.",
    "exercise": {
      "question": "Which HTML tag is used to embed or reference client-side JavaScript code?",
      "options": [
        "<js>",
        "<javascript>",
        "<script>",
        "<code>"
      ],
      "correct": 2,
      "hint": "It is called <script>."
    },
    "referenceTable": [
      {
        "item": "let",
        "description": "Declares a block-scoped mutable variable"
      },
      {
        "item": "const",
        "description": "Declares a block-scoped read-only constant"
      },
      {
        "item": "function",
        "description": "Declares a reusable block of code"
      },
      {
        "item": "console.log()",
        "description": "Writes output to the browser debugging console"
      }
    ]
  },
  {
    "id": "js_variables",
    "category": "JS Fundamentals",
    "title": "JS Variables: let, const & var",
    "summary": "Variables are containers for storing data values. In modern JavaScript, we declare variables using const and let.",
    "eli5": {
      "story": "Imagine you have two plastic toy boxes with labels. One box is glued shut with superglue; you can only look inside, but you can never change what is in it. That box is named \"const\" (constant). The other box has an open lid that you can swap toys in and out of anytime. That box is named \"let\"!",
      "analogy": "📦 Toy Boxes: Use \"const\" for your birthday (it never changes), and use \"let\" for your video game score (it goes up and down).",
      "rules": [
        "const = permanent label (cannot be reassigned).",
        "let = changeable label (can be updated).",
        "Always pick const unless you know the value will change."
      ]
    },
    "body": "### 4 Ways to Declare a JavaScript Variable:\n1. `var` (legacy, function-scoped, avoid in modern code)\n2. `let` (modern, block-scoped, can be reassigned)\n3. `const` (modern, block-scoped, CANNOT be reassigned)\n4. Nothing (implicit global, never do this!)",
    "tryItCode": "const playerName = \"Affan Sayed\";\nlet coins = 50;\n\nconsole.log(\"Player:\", playerName);\nconsole.log(\"Initial Coins:\", coins);\n\ncoins = coins + 25; // Player found a treasure chest!\nconsole.log(\"New Coins after chest:\", coins);",
    "codeType": "js",
    "tips": "Variables declared with let and const must be Declared before use and cannot be redeclared in the same scope.",
    "exercise": {
      "question": "Which keyword should you use to declare a variable whose value will NEVER be reassigned?",
      "options": [
        "let",
        "var",
        "const",
        "immutable"
      ],
      "correct": 2,
      "hint": "Short for constant."
    }
  },
  {
    "id": "js_datatypes",
    "category": "JS Fundamentals",
    "title": "JS Data Types & Typeof",
    "summary": "JavaScript variables can hold different data types: numbers, strings, objects, booleans, and more.",
    "eli5": {
      "story": "Think of toys in your bedroom! Some toys are building blocks (numbers: 1, 2, 3), some are storybooks with words (strings: \"Once upon a time\"), and some are light switches that are either ON or OFF (booleans: true or false). JavaScript keeps them in different toy chests!",
      "analogy": "🏷️ Toy Categories: Words go in quotes (\"hello\"), numbers stand alone (42), and switches are true/false.",
      "rules": [
        "Strings: Words wrapped in quotes (\"ByteVerse\").",
        "Numbers: Plain math numbers (10, 3.14).",
        "Booleans: Only two values: true (YES) or false (NO)."
      ]
    },
    "body": "### 8 Basic Data Types in JavaScript:\n1. **String**: `\"Hello World\"`\n2. **Number**: `42` or `3.14159`\n3. **BigInt**: For arbitrarily large integers.\n4. **Boolean**: `true` or `false`\n5. **Undefined**: Variable declared without a value.\n6. **Null**: Intentional absence of any object value.\n7. **Symbol**: Unique identifier.\n8. **Object**: Complex data (Objects, Arrays, Dates).",
    "tryItCode": "const title = \"ByteVerse\";\nconst version = 2.0;\nconst isAwesome = true;\nconst hero = { name: \"Affan Sayed\", rank: 1 };\nconst tags = [\"HTML\", \"CSS\", \"JS\"];\n\nconsole.log(\"title type:\", typeof title);\nconsole.log(\"version type:\", typeof version);\nconsole.log(\"isAwesome type:\", typeof isAwesome);\nconsole.log(\"hero type:\", typeof hero);\nconsole.log(\"tags is array:\", Array.isArray(tags));",
    "codeType": "js",
    "notes": "In JavaScript, typeof null returns \"object\". This is a famous historical bug in the language kept for backward compatibility!",
    "exercise": {
      "question": "What data type can only be either true or false?",
      "options": [
        "String",
        "Number",
        "Boolean",
        "Binary"
      ],
      "correct": 2,
      "hint": "Named after George Boole."
    }
  },
  {
    "id": "js_operators",
    "category": "JS Fundamentals",
    "title": "JS Conditionals & Operators (if / else)",
    "summary": "Conditional statements are used to perform different actions based on different conditions.",
    "eli5": {
      "story": "Imagine walking up to a water park slide! The lifeguard looks at you and checks: \"Are you taller than 4 feet?\" IF yes: \"Enjoy the mega slide!\" ELSE: \"Please play in the kiddie pool for now!\" JavaScript uses \"if\" and \"else\" to make decisions just like that lifeguard!",
      "analogy": "🚦 The Traffic Light: Green light -> GO! Red light -> STOP! Yellow light -> SLOW DOWN!",
      "rules": [
        "=== checks if two things are strictly equal in value and type.",
        "if (condition) { do this } else { do that }.",
        "&& means AND (both must be true); || means OR (either can be true)."
      ]
    },
    "body": "### Comparison Operators:\n- `===`: Strict equality (checks value AND type).\n- `!==`: Strict inequality.\n- `>`, `<`, `>=`, `<=`: Greater than, less than.\n\n### Logical Operators:\n- `&&`: AND (both conditions must be true)\n- `||`: OR (at least one condition must be true)\n- `!`: NOT (inverts boolean value)\n\n### If / Else Syntax:\n```javascript\nif (score >= 90) {\n  console.log(\"Grade: A\");\n} else if (score >= 80) {\n  console.log(\"Grade: B\");\n} else {\n  console.log(\"Keep practicing!\");\n}\n```",
    "tryItCode": "const playerXP = 1250;\nconst hasSecretKey = true;\n\nif (playerXP >= 1000 && hasSecretKey) {\n  console.log(\"🏆 Gate of Champions UNLOCKED! Welcome Master Coder!\");\n} else {\n  console.log(\"🔒 The gate remains locked. Gather more XP in the Arcade!\");\n}",
    "codeType": "js",
    "tips": "Always use strict equality === instead of loose equality == to prevent unexpected type coercion bugs!",
    "exercise": {
      "question": "Which operator checks if BOTH conditions on the left and right are true?",
      "options": [
        "||",
        "&&",
        "!=",
        "=="
      ],
      "correct": 1,
      "hint": "Double ampersand: &&."
    }
  },
  {
    "id": "js_functions",
    "category": "JS Functions",
    "title": "JS Functions & Arrow Functions",
    "summary": "A JavaScript function is a block of code designed to perform a particular task. It is executed when \"something\" invokes (calls) it.",
    "eli5": {
      "story": "Imagine a magical Smoothie Blender in your kitchen! You put in bananas and strawberries (inputs / arguments). You press the button. The blender runs its secret mixing recipe, and POOF: it pours out a delicious smoothie (return value)! A function is that blender recipe: write it once, use it 100 times!",
      "analogy": "🥤 The Smoothie Blender: Give it fruit (inputs), it mixes them up, and gives you a tasty smoothie (output)!",
      "rules": [
        "Define a function with the recipe instructions.",
        "Pass arguments (like ingredients) inside the (parentheses).",
        "Use \"return\" to send the finished smoothie back!"
      ]
    },
    "body": "### Modern ES6 Arrow Functions\nArrow functions allow a shorter syntax for writing function expressions:\n```javascript\nconst multiply = (x, y) => x * y;\n```\n\n### Function Anatomy:\n- **Parameters**: Variable names listed in function definition.\n- **Arguments**: Real values passed to the function when invoked.\n- **Return Value**: The result handed back to the caller.",
    "tryItCode": "// The Smoothie Blender Function\nfunction makeSmoothie(fruit1, fruit2) {\n  return fruit1 + \" & \" + fruit2 + \" Smoothie!\";\n}\n\n// Modern Arrow Function\nconst calculateScore = (wins, bonus) => (wins * 100) + bonus;\n\nconsole.log(makeSmoothie(\"Banana\", \"Strawberry\"));\nconsole.log(\"Player Score:\", calculateScore(5, 50));",
    "codeType": "js",
    "notes": "If an arrow function has only one statement that returns a value, you can omit the brackets and the return keyword.",
    "exercise": {
      "question": "What is the correct syntax for an arrow function that returns the double of x?",
      "options": [
        "x => x * 2",
        "function(x) => x * 2",
        "-> x * 2",
        "x -> { x * 2 }"
      ],
      "correct": 0,
      "hint": "The arrow is written as =>."
    }
  },
  {
    "id": "js_objects",
    "category": "JS Data Structures",
    "title": "JS Objects & Destructuring",
    "summary": "JavaScript objects are collections of named values (properties and methods).",
    "eli5": {
      "story": "Imagine your student ID card or a superhero character sheet! The card has your photo, your hero name, your level, and special powers. In JavaScript, an Object is that character sheet wrapped inside curly brackets: { name: \"Batman\", level: 99, fly: true }!",
      "analogy": "📇 The Superhero ID Card: Objects hold key-value pairs describing all details of a single character or item.",
      "rules": [
        "Objects use curly brackets { key: \"value\" }.",
        "Access properties with dot notation: hero.name.",
        "Objects can hold functions called methods: hero.attack()!"
      ]
    },
    "body": "### Creating and Accessing Objects:\n```javascript\nconst car = {\n  make: \"Tesla\",\n  model: \"Model S\",\n  year: 2026,\n  start: function() {\n    return \"Engine started silently!\";\n  }\n};\n```\n\n### Object Destructuring:\nExtract properties cleanly into standalone variables:\n```javascript\nconst { make, model } = car;\nconsole.log(make); // \"Tesla\"\n```",
    "tryItCode": "const player = {\n  name: \"Affan Sayed\",\n  title: \"ByteVerse Grandmaster\",\n  level: 50,\n  skills: [\"HTML\", \"CSS\", \"JavaScript\", \"Python\"],\n  greet() {\n    return \"Hello, I am \" + this.name + \", ready to code!\";\n  }\n};\n\nconsole.log(player.greet());\nconsole.log(\"First skill:\", player.skills[0]);\n\n// Destructuring\nconst { title, level } = player;\nconsole.log(\"Title & Level:\", title, \"| LVL:\", level);",
    "codeType": "js",
    "tips": "Use \"const\" to declare objects. Even though the variable cannot be reassigned, its inner properties can be updated!",
    "exercise": {
      "question": "How do you access the \"age\" property of an object named \"person\"?",
      "options": [
        "person.age",
        "person->age",
        "person@age",
        "person#age"
      ],
      "correct": 0,
      "hint": "Use dot notation: object.property."
    }
  },
  {
    "id": "js_arrays",
    "category": "JS Data Structures",
    "title": "JS Arrays & High-Order Methods (map, filter)",
    "summary": "JavaScript arrays are used to store multiple values in a single variable, and modern methods make transforming data effortless.",
    "eli5": {
      "story": "Imagine a line of colorful train cars! In car #0 you put an apple, in car #1 a banana, in car #2 a cookie. Now, imagine a magic paint wand called map() that walks down the train and dips every fruit in chocolate! That is how modern array methods work.",
      "analogy": "🚂 The Train Cars: Arrays hold ordered items starting at seat #0; map() transforms every item, filter() picks only the best!",
      "rules": [
        "Array indexing starts at 0, NOT 1!",
        ".map(fn) transforms every item and returns a brand-new array.",
        ".filter(fn) keeps only items that pass your test!"
      ]
    },
    "body": "### Modern Array Methods:\n- `.push(item)`: Adds to the end of the array.\n- `.pop()`: Removes the last item.\n- `.map(fn)`: Creates a new array populated with the results of calling a function on every element.\n- `.filter(fn)`: Creates a new array with elements that pass the test function.\n- `.includes(item)`: Returns true if the array contains the value.",
    "tryItCode": "const scores = [45, 92, 78, 100, 60, 85];\n\n// Filter: keep scores >= 80 (Honors)\nconst honors = scores.filter(score => score >= 80);\nconsole.log(\"Honors Scores:\", honors);\n\n// Map: award 10 bonus XP to everyone\nconst boosted = scores.map(score => score + 10);\nconsole.log(\"Boosted Scores:\", boosted);",
    "codeType": "js",
    "tips": "Neither .map() nor .filter() mutate the original array; they create and return fresh new arrays!",
    "exercise": {
      "question": "Which array method creates a new array by transforming every element with a function?",
      "options": [
        ".filter()",
        ".map()",
        ".forEach()",
        ".transform()"
      ],
      "correct": 1,
      "hint": "It \"maps\" each old value to a new value."
    }
  },
  {
    "id": "js_loops",
    "category": "JS Fundamentals",
    "title": "JS Loops: for, while & for...of",
    "summary": "Loops can execute a block of code a number of times as long as a specified condition is true.",
    "eli5": {
      "story": "Imagine your mom says: \"Do 5 jumping jacks!\" You jump: 1, 2, 3, 4, 5. After the 5th jump, you stop and drink water. A loop is that jumping jack counter: it runs your instructions over and over until the counter hits the target number!",
      "analogy": "🎡 The Ferris Wheel: The wheel spins around and around until the ride attendant hits the stop button after 5 laps.",
      "rules": [
        "for (let i = 0; i < 5; i++) runs exactly 5 times.",
        "for (const item of array) visits every item in an array automatically.",
        "Always make sure the loop condition ends so your computer doesn't get stuck in an infinite loop!"
      ]
    },
    "body": "### Types of Loops in JavaScript:\n- `for`: Loops through a block of code a number of times.\n- `for...of`: Loops through the values of an iterable object (like an array).\n- `for...in`: Loops through the properties of an object.\n- `while`: Loops through a block of code while a specified condition is true.",
    "tryItCode": "const languages = [\"HTML\", \"CSS\", \"JavaScript\", \"Python\"];\n\nconsole.log(\"--- Standard For Loop ---\");\nfor (let i = 0; i < languages.length; i++) {\n  console.log(\"Language #\" + (i + 1) + \":\", languages[i]);\n}\n\nconsole.log(\"--- Modern For...Of Loop ---\");\nfor (const lang of languages) {\n  console.log(\"✨ ByteVerse Track:\", lang);\n}",
    "codeType": "js",
    "notes": "Use break to exit a loop early, and continue to skip the current iteration and jump to the next.",
    "exercise": {
      "question": "Which loop syntax is ideal for cleanly looping through values of an array without managing index i?",
      "options": [
        "for...in",
        "for...of",
        "loop...array",
        "repeat...while"
      ],
      "correct": 1,
      "hint": "for (const item of items)"
    }
  },
  {
    "id": "js_dom",
    "category": "JS & The Browser",
    "title": "JS HTML DOM Manipulation",
    "summary": "With the HTML DOM, JavaScript can access and change all the elements of an HTML document.",
    "eli5": {
      "story": "Imagine you are playing a video game where you have a magic wand that can point at any tree on the screen and turn it purple, or point at a castle door and make it fly open! The DOM (Document Object Model) is the magic wand that lets JavaScript reach into the webpage and change any word, color, or image on the fly!",
      "analogy": "🪄 The Magic Wand: document.querySelector() points to any HTML tag, and .textContent changes its words instantly!",
      "rules": [
        "document.getElementById(\"id\") grabs an element by its ID.",
        "element.textContent = \"New text\" changes what the words say.",
        "element.style.color = \"red\" paints the element using CSS."
      ]
    },
    "body": "### The DOM Tree:\nWhen a web page is loaded, the browser creates a Document Object Model of the page.\nWith JavaScript, you can:\n- Change HTML content (`.textContent`, `.innerHTML`)\n- Change CSS styles (`.style.property`)\n- Add and remove HTML attributes (`.setAttribute()`)\n- Add and remove CSS classes (`.classList.add()`, `.classList.remove()`)",
    "tryItCode": "// Simulating DOM manipulation in console\nconst mockElement = {\n  id: \"hero-title\",\n  textContent: \"Old Boring Title\",\n  classList: [\"text-white\"],\n  style: { color: \"white\" }\n};\n\nconsole.log(\"Before:\", mockElement.textContent);\nmockElement.textContent = \"🚀 Cyber ByteVerse Champion!\";\nmockElement.style.color = \"#00f2fe\";\nconsole.log(\"After DOM Update:\", mockElement.textContent, \"| Color:\", mockElement.style.color);",
    "codeType": "js",
    "tips": "Prefer textContent over innerHTML when inserting plain text to protect your website against Cross-Site Scripting (XSS) attacks.",
    "exercise": {
      "question": "Which method selects the first element matching a CSS selector string in the document?",
      "options": [
        "document.find()",
        "document.querySelector()",
        "document.select()",
        "document.getElement()"
      ],
      "correct": 1,
      "hint": "querySelector accepts any CSS selector (.class, #id, tag)."
    }
  },
  {
    "id": "js_events",
    "category": "JS & The Browser",
    "title": "JS Event Listeners (Clicks & Keys)",
    "summary": "HTML events are \"things\" that happen to HTML elements. When JavaScript is used in HTML pages, JavaScript can \"react\" on these events.",
    "eli5": {
      "story": "Have you ever rung someone's doorbell? When you press the button (the click event), a bell rings inside the house and your friend runs to open the door (the event handler)! An Event Listener is that doorbell: it sits quietly waiting, and the second a user taps, it jumps into action!",
      "analogy": "🔔 The Doorbell: addEventListener(\"click\", runSecretCode) waits for the user to press the button, then immediately runs your instructions.",
      "rules": [
        "element.addEventListener(\"event\", function) is the modern way to listen for actions.",
        "Common events: \"click\", \"keydown\", \"mouseover\", \"submit\".",
        "event.preventDefault() stops forms from refreshing the whole webpage."
      ]
    },
    "body": "### Adding an Event Listener:\n```javascript\nconst button = document.querySelector(\"#my-button\");\nbutton.addEventListener(\"click\", (event) => {\n  console.log(\"Button was clicked!\", event);\n});\n```\n\n### Common DOM Events:\n- **Mouse**: `click`, `dblclick`, `mouseenter`, `mouseleave`\n- **Keyboard**: `keydown`, `keyup`\n- **Form**: `submit`, `change`, `input`, `focus`, `blur`\n- **Window**: `load`, `resize`, `scroll`",
    "tryItCode": "// Simulating an event listener trigger\nfunction triggerDoorbell(visitorName) {\n  console.log(\"🔔 DING DONG! Doorbell pressed by:\", visitorName);\n  console.log(\"Door opened! Welcome to ByteVerse Arcade!\");\n}\n\ntriggerDoorbell(\"Affan Sayed\");\ntriggerDoorbell(\"Cyber Explorer\");",
    "codeType": "js",
    "notes": "You can attach multiple event listeners to the same element without overwriting previous handlers.",
    "exercise": {
      "question": "Which method registers an event handler on a DOM element?",
      "options": [
        "attachEvent()",
        "addEventListener()",
        "listen()",
        "on()"
      ],
      "correct": 1,
      "hint": "addEventListener(\"click\", ...)"
    }
  },
  {
    "id": "js_async",
    "category": "JS Advanced",
    "title": "JS Async / Await & Fetch API",
    "summary": "Promises and async/await make asynchronous programming in JavaScript easier to read and write, especially when fetching data from APIs.",
    "eli5": {
      "story": "Imagine ordering a pizza on the phone! The restaurant gives you an order receipt (a Promise). You don't freeze and stand still like a statue while waiting for the chef to cook; you watch cartoons or play games! When the doorbell rings with the hot pizza, you \"await\" it and eat! That is async/await in JavaScript.",
      "analogy": "🍕 Ordering Pizza: You order food (fetch API), keep doing your work while it cooks (async), and grab it when it arrives (await)!",
      "rules": [
        "fetch(url) requests data from an online server or API.",
        "async functions can pause with await without freezing the computer screen.",
        "Always wrap await in try { ... } catch (err) { ... } in case the internet disconnects!"
      ]
    },
    "body": "### The Fetch API with Async/Await:\n```javascript\nasync function fetchUserData(userId) {\n  try {\n    const response = await fetch(`https://api.example.com/users/${userId}`);\n    if (!response.ok) throw new Error(\"Network error\");\n    const data = await response.json();\n    return data;\n  } catch (error) {\n    console.error(\"Failed to load user:\", error);\n  }\n}\n```",
    "tryItCode": "// Simulating an async API call with Promises\nfunction fakeApiFetch() {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve({ user: \"Affan Sayed\", rank: \"Master\", ping: \"24ms\" });\n    }, 100);\n  });\n}\n\nasync function loadProfile() {\n  console.log(\"📡 Contacting server satellite...\");\n  const data = await fakeApiFetch();\n  console.log(\"✅ Data received:\", data);\n}\n\nloadProfile();",
    "codeType": "js",
    "tips": "An async function always returns a Promise, even if you return a plain string or number.",
    "exercise": {
      "question": "Which keyword is used inside an async function to wait for a Promise to resolve?",
      "options": [
        "pause",
        "wait",
        "await",
        "hold"
      ],
      "correct": 2,
      "hint": "async paired with await."
    }
  },
  {
    "id": "js_storage",
    "category": "JS & The Browser",
    "title": "JS LocalStorage (Saving Game Data)",
    "summary": "The localStorage object allows you to save key/value pairs in the browser that survive even when the browser is closed and reopened.",
    "eli5": {
      "story": "Have you ever played a game on your Nintendo or iPad and saved your progress before going to sleep? The next morning, your high score and coins are still there! That memory card inside your web browser is called localStorage. ByteVerse uses localStorage to remember your XP and badges!",
      "analogy": "💾 The Memory Card: localStorage saves your game save file in the browser forever until you clear history.",
      "rules": [
        "localStorage.setItem(\"key\", \"value\") saves a secret item.",
        "localStorage.getItem(\"key\") reads the saved item back.",
        "Use JSON.stringify() to save objects, and JSON.parse() to load them!"
      ]
    },
    "body": "### The Web Storage API:\n- `localStorage`: Stores data with NO expiration date (persists after browser closes).\n- `sessionStorage`: Stores data for one session (data is lost when the browser tab closes).\n\n### Syntax:\n```javascript\n// Save data\nlocalStorage.setItem(\"username\", \"Affan Sayed\");\n\n// Retrieve data\nconst name = localStorage.getItem(\"username\");\n\n// Remove data\nlocalStorage.removeItem(\"username\");\n\n// Clear all\nlocalStorage.clear();\n```",
    "tryItCode": "// Simulating localStorage save and load\nconst mockStorage = {};\n\n// Save high score\nmockStorage[\"byteverse_xp\"] = \"2500\";\nconsole.log(\"💾 Saved XP to Memory Card:\", mockStorage[\"byteverse_xp\"]);\n\n// Load high score\nconst savedXP = parseInt(mockStorage[\"byteverse_xp\"], 10);\nconsole.log(\"🎮 Loaded XP on restart:\", savedXP, \"| Level:\", Math.floor(savedXP / 100));",
    "codeType": "js",
    "notes": "localStorage can only store strings! To save arrays or objects, convert them first with JSON.stringify(myObject).",
    "exercise": {
      "question": "Which method saves a key/value pair into browser localStorage?",
      "options": [
        "localStorage.save()",
        "localStorage.setItem()",
        "localStorage.put()",
        "localStorage.store()"
      ],
      "correct": 1,
      "hint": "setItem(key, value)"
    }
  }
];
