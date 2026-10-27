// Comprehensive W3Schools-Aligned MCQ Exam Question Banks
// Each exam features 10-12 curated questions with code snippets, 4 options, correct index, and in-depth explanations.

export const MCQ_EXAM_TRACKS = {
  html: {
    id: 'html',
    name: 'HTML5 Web Architect',
    badge: '🧱',
    description: 'Certified mastery of HTML5 semantic structure, web forms, multimedia, and modern DOM elements according to W3C standards.',
    passingScore: 75,
    durationMinutes: 10,
    xpReward: 250,
    questions: [
      {
        id: 'html_1',
        question: 'What does HTML stand for in modern web development?',
        options: [
          'Hyper Text Markup Language',
          'High Tech Modern Language',
          'Hyperlink and Text Management Language',
          'Home Tool Markup Language'
        ],
        correct: 0,
        explanation: 'HTML stands for Hyper Text Markup Language. It was created by Tim Berners-Lee in 1991 and is the standard markup language used worldwide to structure web pages.'
      },
      {
        id: 'html_2',
        question: 'Which of the following is the correct HTML5 document type declaration?',
        code: '<!DOCTYPE ...>',
        options: [
          '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN">',
          '<!DOCTYPE html5>',
          '<!DOCTYPE html>',
          '<doctype html type="web">'
        ],
        correct: 2,
        explanation: 'In HTML5, the declaration is case-insensitive and simply written as <!DOCTYPE html>. It tells modern browsers to render in standard mode rather than quirks mode.'
      },
      {
        id: 'html_3',
        question: 'Which HTML5 semantic element is best suited to contain independent, self-contained content such as a blog post or news story?',
        options: [
          '<section>',
          '<article>',
          '<aside>',
          '<div>'
        ],
        correct: 1,
        explanation: 'The <article> element specifies independent, self-contained content that could be distributed or reused independently (e.g. blog post, forum post, product card). <section> groups thematic content.'
      },
      {
        id: 'html_4',
        question: 'What is the required attribute for an <img> tag to provide alternative text for screen readers and search engines?',
        code: '<img src="logo.png" ...="ByteVerse Logo">',
        options: [
          'title',
          'caption',
          'alt',
          'description'
        ],
        correct: 2,
        explanation: 'The alt attribute provides an alternative text for an image if it cannot be displayed and is essential for web accessibility (WCAG) and SEO.'
      },
      {
        id: 'html_5',
        question: 'Which HTML attribute specifies that an <input> field must be filled out before submitting a form?',
        options: [
          'validate="true"',
          'required',
          'mandatory',
          'must-fill'
        ],
        correct: 1,
        explanation: 'The "required" boolean attribute in HTML5 specifies that the user must enter a value before the browser allows the enclosing form to be submitted.'
      },
      {
        id: 'html_6',
        question: 'What is the correct way to open a hyperlink in a new browser tab or window?',
        code: '<a href="https://affansayed.vercel.app" ... >Affan Portfolio</a>',
        options: [
          'target="_new"',
          'target="_blank"',
          'window="open"',
          'rel="newtab"'
        ],
        correct: 1,
        explanation: 'target="_blank" tells the browser to open the linked document in a new window or tab. It is modern best practice to pair this with rel="noopener noreferrer" for security.'
      },
      {
        id: 'html_7',
        question: 'Which HTML5 element is used to draw graphics, animations, or games on the fly via JavaScript scripting?',
        options: [
          '<graphic>',
          '<draw>',
          '<canvas>',
          '<paint>'
        ],
        correct: 2,
        explanation: 'The HTML5 <canvas> element provides a scriptable 2D/WebGL raster drawing surface used for charts, visual effects, and retro games.'
      },
      {
        id: 'html_8',
        question: 'Which tag pair is used to create an unordered bullet-point list?',
        options: [
          '<ol> and <li>',
          '<ul> and <li>',
          '<dl> and <dt>',
          '<list> and <item>'
        ],
        correct: 1,
        explanation: '<ul> defines an unordered (bulleted) list, while <ol> defines an ordered (numbered) list. Individual items inside both are marked with <li>.'
      },
      {
        id: 'html_9',
        question: 'Where should the <title> tag be placed in an HTML document according to standard specifications?',
        options: [
          'Inside the <body> tag at the top',
          'Inside the <head> element',
          'Directly after the <!DOCTYPE html> tag',
          'Inside the <header> element'
        ],
        correct: 1,
        explanation: 'The <title> element is required in all HTML documents and must be placed inside the <head> element. It defines the title of the document shown in the browser tab.'
      },
      {
        id: 'html_10',
        question: 'Which HTML5 input type offers built-in mobile keypad optimization and regex email validation?',
        options: [
          '<input type="text" validate="email">',
          '<input type="email">',
          '<input type="mail">',
          '<input type="address">'
        ],
        correct: 1,
        explanation: 'HTML5 introduced <input type="email">, which activates the @ symbol keyboard on mobile devices and triggers native browser email format verification.'
      },
      {
        id: 'html_11',
        question: 'Which HTML tag is used to embed audio files natively without requiring third-party plugins like Flash?',
        options: [
          '<sound>',
          '<audio>',
          '<music>',
          '<mp3>'
        ],
        correct: 1,
        explanation: 'The HTML5 <audio> tag is used to embed audio files. It supports attributes such as controls, autoplay, and loop, with <source> children for multiple codecs.'
      },
      {
        id: 'html_12',
        question: 'What does the HTML "target" attribute set to "_self" do?',
        options: [
          'Opens the link in the same browsing context/frame (default)',
          'Opens the link in the parent frame',
          'Opens the link in a modal dialog',
          'Cancels navigation'
        ],
        correct: 0,
        explanation: '_self is the default value; it opens the linked document in the exact same frame or window where the user clicked it.'
      }
    ]
  },

  css: {
    id: 'css',
    name: 'CSS3 Visual & Layout Specialist',
    badge: '🎨',
    description: 'Certified mastery of modern CSS3 styling, Flexbox, CSS Grid layouts, responsive media queries, and keyframe animations.',
    passingScore: 75,
    durationMinutes: 10,
    xpReward: 250,
    questions: [
      {
        id: 'css_1',
        question: 'What does CSS stand for in web engineering?',
        options: [
          'Cascading Style Sheets',
          'Computer Screen Styling',
          'Creative Styling Syntax',
          'Colorful Sheet Styles'
        ],
        correct: 0,
        explanation: 'CSS stands for Cascading Style Sheets. It dictates how HTML elements are formatted, styled, laid out, and animated on screens or print.'
      },
      {
        id: 'css_2',
        question: 'Which CSS Box Model property determines the space between the content boundary and the element border?',
        options: [
          'margin',
          'padding',
          'outline',
          'spacing'
        ],
        correct: 1,
        explanation: 'Padding clears an area around the content inside the border. Margin clears an area outside the border. The order from inside out: Content -> Padding -> Border -> Margin.'
      },
      {
        id: 'css_3',
        question: 'To center a child element both vertically and horizontally using CSS Flexbox on the parent container, which combination is correct?',
        code: '.parent {\n  display: flex;\n  /* Which rules center children? */\n}',
        options: [
          'align-items: center; justify-content: center;',
          'text-align: center; vertical-align: middle;',
          'float: center; margin: auto;',
          'place-items: center-all;'
        ],
        correct: 0,
        explanation: 'In Flexbox, justify-content: center aligns items along the primary axis (horizontal by default), while align-items: center aligns items along the cross axis (vertical).'
      },
      {
        id: 'css_4',
        question: 'Which CSS property defines a responsive 3-column equal grid layout with CSS Grid?',
        options: [
          'grid-template-columns: repeat(3, 1fr);',
          'grid-columns: 33% 33% 33%;',
          'grid-layout: 3-column-flex;',
          'display: grid-3;'
        ],
        correct: 0,
        explanation: 'grid-template-columns: repeat(3, 1fr) creates three equal columns using fractional units (1fr each), distributing available space cleanly without rounding errors.'
      },
      {
        id: 'css_5',
        question: 'What is the default value of the "position" property for HTML elements?',
        options: [
          'relative',
          'absolute',
          'static',
          'fixed'
        ],
        correct: 2,
        explanation: 'HTML elements are positioned static by default. Static elements are not affected by top, bottom, left, or right properties and flow according to normal page layout.'
      },
      {
        id: 'css_6',
        question: 'Which selector has the HIGHEST specificity according to the CSS Cascading rule?',
        options: [
          'An ID selector (#navbar)',
          'A class selector (.active-item)',
          'An element selector (p)',
          'A universal selector (*)'
        ],
        correct: 0,
        explanation: 'CSS Specificity hierarchy: Inline styles (1000) > IDs (100) > Classes/attributes/pseudo-classes (10) > Elements/pseudo-elements (1). Thus #navbar overrides .active-item.'
      },
      {
        id: 'css_7',
        question: 'Which modern CSS property is used to achieve the trendy "Glassmorphism" frosted-glass blur effect?',
        options: [
          'filter: glass(10px);',
          'backdrop-filter: blur(12px);',
          'background-blur: 12px;',
          'opacity-filter: frosted;'
        ],
        correct: 1,
        explanation: 'backdrop-filter: blur(...) applies visual blurring effects to the area behind an element, enabling modern frosted-glass and cyber-glassmorphic aesthetic designs.'
      },
      {
        id: 'css_8',
        question: 'Which CSS declaration ensures an element\'s padding and border are included inside its total width and height calculation?',
        options: [
          'box-sizing: border-box;',
          'box-sizing: content-box;',
          'dimension-model: inclusive;',
          'border-calculation: inner;'
        ],
        correct: 0,
        explanation: 'box-sizing: border-box forces the browser to calculate width and height including padding and border, preventing unexpected layout overflows.'
      },
      {
        id: 'css_9',
        question: 'How do you define a custom CSS Variable (Custom Property) at the global root level?',
        code: ':root {\n  /* Which syntax is valid? */\n}',
        options: [
          '$cyber-cyan: #00f2fe;',
          '--cyber-cyan: #00f2fe;',
          '@cyber-cyan: #00f2fe;',
          'var-cyber-cyan = #00f2fe;'
        ],
        correct: 1,
        explanation: 'CSS Custom Properties must begin with two hyphens (e.g., --cyber-cyan: #00f2fe;) and are accessed using the var(--cyber-cyan) function.'
      },
      {
        id: 'css_10',
        question: 'Which media query targets mobile screens with a viewport width of 768 pixels or narrower?',
        options: [
          '@media (max-width: 768px) { ... }',
          '@media screen and (min-width: 768px) { ... }',
          '@media mobile-only { ... }',
          '@viewport (width <= 768px) { ... }'
        ],
        correct: 0,
        explanation: '@media (max-width: 768px) applies styles only when the viewport width is 768px or less, making it the standard responsive breakpoint for mobile and small tablet screens.'
      },
      {
        id: 'css_11',
        question: 'Which CSS rule specifies an animation sequence that transitions from start to end?',
        options: [
          '@animation myKeyframes { ... }',
          '@keyframes myFadeIn { 0% { opacity: 0; } 100% { opacity: 1; } }',
          '@transition myMotion { ... }',
          '@frames fadeIn { from; to; }'
        ],
        correct: 1,
        explanation: 'The @keyframes at-rule defines the animation sequence using percentages (0% to 100%) or keywords (from, to).'
      },
      {
        id: 'css_12',
        question: 'What does the "z-index" property control in CSS?',
        options: [
          'The 3D zoom magnification of an element',
          'The vertical scrolling speed of an element',
          'The stacking order of positioned elements along the z-axis',
          'The rendering opacity level'
        ],
        correct: 2,
        explanation: 'z-index specifies the 3D stacking order of positioned elements (relative, absolute, fixed, or sticky). An element with higher z-index displays in front of lower ones.'
      }
    ]
  },

  js: {
    id: 'js',
    name: 'Modern JavaScript ES6+ Engineer',
    badge: '⚡',
    description: 'Certified expertise in modern ECMAScript standards, asynchronous promises, DOM manipulation, closures, and object manipulation.',
    passingScore: 75,
    durationMinutes: 10,
    xpReward: 250,
    questions: [
      {
        id: 'js_1',
        question: 'What is the output of the following JavaScript equality check?',
        code: 'console.log(0 == false);\nconsole.log(0 === false);',
        options: [
          'true followed by true',
          'true followed by false',
          'false followed by false',
          'TypeError'
        ],
        correct: 1,
        explanation: 'The loose equality operator (==) performs type coercion (converting false to 0, so 0 == 0 is true). The strict equality operator (===) checks both value and type without coercion, returning false.'
      },
      {
        id: 'js_2',
        question: 'Which keyword declares a block-scoped variable that cannot be reassigned after initialization?',
        options: [
          'var',
          'let',
          'const',
          'immutable'
        ],
        correct: 2,
        explanation: 'const declares a block-scoped variable that cannot be reassigned. Note that if the const holds an object or array, its properties or elements can still be mutated.'
      },
      {
        id: 'js_3',
        question: 'What does the Array.prototype.map() method return?',
        code: 'const nums = [1, 2, 3];\nconst doubled = nums.map(n => n * 2);',
        options: [
          'Mutates the original array in place',
          'Returns a single aggregated number',
          'Returns a brand new array with transformed elements',
          'Returns undefined'
        ],
        correct: 2,
        explanation: 'map() creates a brand new array populated with the results of calling the provided callback function on every element in the calling array, without mutating the original.'
      },
      {
        id: 'js_4',
        question: 'Which method properly parses a JSON string into a native JavaScript object?',
        options: [
          'JSON.stringify(str)',
          'JSON.parse(str)',
          'JSON.toObject(str)',
          'Object.fromJSON(str)'
        ],
        correct: 1,
        explanation: 'JSON.parse() parses a JSON string, constructing the JavaScript value or object described by the string. JSON.stringify() converts a JavaScript object into a JSON string.'
      },
      {
        id: 'js_5',
        question: 'How do you handle asynchronous operations cleanly using modern ES2017 syntax?',
        code: 'async function fetchPlayerData() {\n  const res = ... fetch("/api/player");\n  const data = ... res.json();\n}',
        options: [
          'then',
          'await',
          'yield',
          'defer'
        ],
        correct: 1,
        explanation: 'The await keyword can be placed before any Promise inside an async function. It pauses execution until the Promise resolves, returning the unwrapped value.'
      },
      {
        id: 'js_6',
        question: 'What is the value of "this" inside a standard arrow function `() => {}`?',
        options: [
          'The HTML DOM element that triggered the event',
          'Lexically inherited from the surrounding enclosing scope',
          'Always points to window or globalThis',
          'Undefined in all strict contexts'
        ],
        correct: 1,
        explanation: 'Arrow functions do not have their own this binding. Instead, they lexically bind this from the outer enclosing scope at creation time.'
      },
      {
        id: 'js_7',
        question: 'Which DOM method selects the FIRST element that matches a specified CSS selector string?',
        options: [
          'document.getElementsByClassName()',
          'document.querySelector()',
          'document.querySelectorAll()',
          'document.findElement()'
        ],
        correct: 1,
        explanation: 'document.querySelector() returns the first Element within the document that matches the specified selector, or null if no matches are found.'
      },
      {
        id: 'js_8',
        question: 'What is the output of `typeof null` in JavaScript?',
        options: [
          '"null"',
          '"undefined"',
          '"object"',
          '"number"'
        ],
        correct: 2,
        explanation: 'In JavaScript, typeof null returns "object". This is a historic bug from the initial 1995 JS release that was kept for backwards compatibility.'
      },
      {
        id: 'js_9',
        question: 'Which method registers an event listener on a DOM element without overriding existing listeners?',
        options: [
          'element.onclick = fn;',
          'element.addEventListener("click", fn);',
          'element.attach("click", fn);',
          'element.listen("click", fn);'
        ],
        correct: 1,
        explanation: 'addEventListener allows multiple event handlers to be attached to the same event on an element and supports capture/bubble configuration.'
      },
      {
        id: 'js_10',
        question: 'What does the spread operator (...) do when used with an array?',
        code: 'const a = [1, 2];\nconst b = [...a, 3, 4];',
        options: [
          'Merges arrays into a 2D matrix',
          'Expands the elements of the iterable array in place',
          'Calculates mathematical spread/variance',
          'Converts the array to a string'
        ],
        correct: 1,
        explanation: 'The spread operator (...) expands an iterable array or object into individual elements or keys, allowing clean shallow copies and concatenations.'
      },
      {
        id: 'js_11',
        question: 'What is a Closure in JavaScript?',
        options: [
          'A function that immediately terminates execution',
          'A syntax error when a bracket is not closed',
          'A function bundled together with references to its surrounding lexical state',
          'A method to encrypt JavaScript source code'
        ],
        correct: 2,
        explanation: 'A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In JS, closures give access to an outer function\'s scope from an inner function.'
      },
      {
        id: 'js_12',
        question: 'Which storage API in web browsers stores data with NO expiration date until explicitly cleared by the user or code?',
        options: [
          'sessionStorage',
          'localStorage',
          'cookie (default)',
          'memoryStorage'
        ],
        correct: 1,
        explanation: 'localStorage data persists across browser sessions indefinitely until cleared. sessionStorage is wiped as soon as the browser tab is closed.'
      }
    ]
  },

  python: {
    id: 'python',
    name: 'Python Core & Algorithms Developer',
    badge: '🐍',
    description: 'Certified expertise in Python 3 syntax, data structures (lists, tuples, dicts, sets), OOP classes, list comprehensions, and exception handling.',
    passingScore: 75,
    durationMinutes: 10,
    xpReward: 250,
    questions: [
      {
        id: 'py_1',
        question: 'What is the correct file extension for Python script files?',
        options: [
          '.pyt',
          '.py',
          '.pt',
          '.python'
        ],
        correct: 1,
        explanation: 'Standard Python source code files use the .py extension, which is recognized by the Python interpreter and modern code editors.'
      },
      {
        id: 'py_2',
        question: 'Which Python data structure is IMMUTABLE (cannot be modified after creation)?',
        options: [
          'List [1, 2, 3]',
          'Dictionary {"key": "val"}',
          'Tuple (1, 2, 3)',
          'Set {1, 2, 3}'
        ],
        correct: 2,
        explanation: 'Tuples are immutable sequences in Python. Once a tuple is created, elements cannot be added, removed, or changed. Lists, dicts, and sets are mutable.'
      },
      {
        id: 'py_3',
        question: 'What is the output of the following list comprehension in Python?',
        code: 'evens = [x * 2 for x in range(4)]\nprint(evens)',
        options: [
          '[0, 2, 4, 6]',
          '[2, 4, 6, 8]',
          '[0, 1, 2, 3]',
          '[2, 4, 6]'
        ],
        correct: 0,
        explanation: 'range(4) produces numbers 0, 1, 2, 3. Multiplying each by 2 yields [0, 2, 4, 6]. List comprehensions offer a concise, readable way to construct lists.'
      },
      {
        id: 'py_4',
        question: 'Which keyword is used to define a function in Python?',
        code: '... calculate_score(player):\n    return player.xp * 10',
        options: [
          'function',
          'def',
          'func',
          'define'
        ],
        correct: 1,
        explanation: 'Python uses the "def" keyword (short for define) followed by the function name, parentheses for parameters, and a colon.'
      },
      {
        id: 'py_5',
        question: 'In Python Object-Oriented Programming, what does the first parameter of an instance method represent by convention?',
        code: 'class CyberHero:\n    def __init__(self, name):\n        self.name = name',
        options: [
          'A pointer to the parent class',
          'The current instance of the class (self)',
          'A static reference to the module',
          'The constructor callback'
        ],
        correct: 1,
        explanation: 'By convention, "self" refers to the current instance of the class. It allows instance methods and attributes to be accessed and modified.'
      },
      {
        id: 'py_6',
        question: 'What is the output of `bool([])` in Python?',
        options: [
          'True',
          'False',
          'None',
          'ValueError'
        ],
        correct: 1,
        explanation: 'In Python, empty sequences and collections (such as empty lists [], empty strings "", empty dicts {}, and 0) evaluate to False in a boolean context.'
      },
      {
        id: 'py_7',
        question: 'Which statement correctly handles potential exceptions in Python code without crashing?',
        code: '... :\n    result = 10 / 0\n... ZeroDivisionError:\n    print("Cannot divide by zero")',
        options: [
          'try ... catch',
          'try ... except',
          'attempt ... rescue',
          'guard ... handle'
        ],
        correct: 1,
        explanation: 'Python uses try ... except blocks to catch and handle runtime exceptions gracefully. You can also append else and finally clauses.'
      },
      {
        id: 'py_8',
        question: 'Which built-in function returns the total number of items in a list, string, or dictionary?',
        options: [
          'count()',
          'length()',
          'size()',
          'len()'
        ],
        correct: 3,
        explanation: 'len() is the standard Python built-in function that calls the underlying __len__() method of any sized object.'
      },
      {
        id: 'py_9',
        question: 'How do you create an anonymous single-expression inline function in Python?',
        options: [
          'def inline(x): return x * 2',
          'lambda x: x * 2',
          'arrow (x) => x * 2',
          'anon x: x * 2'
        ],
        correct: 1,
        explanation: 'The lambda keyword creates small anonymous functions. A lambda can take any number of arguments, but can only have one expression.'
      },
      {
        id: 'py_10',
        question: 'What is the recommended modern way to safely open and read a file in Python, ensuring it is automatically closed?',
        code: '... open("data.txt", "r") as file:\n    content = file.read()',
        options: [
          'using',
          'with',
          'using_file',
          'open_safe'
        ],
        correct: 1,
        explanation: 'The "with" statement creates a Context Manager. It guarantees that the file stream is closed immediately upon exiting the block, even if an exception occurs.'
      },
      {
        id: 'py_11',
        question: 'Which operator performs integer floor division in Python 3?',
        code: 'result = 7 // 2',
        options: [
          '/',
          '//',
          '%',
          'div'
        ],
        correct: 1,
        explanation: 'The single slash (/) returns a float (7 / 2 = 3.5). The double slash (//) performs floor division, rounding down to the nearest integer (7 // 2 = 3).'
      },
      {
        id: 'py_12',
        question: 'Which dictionary method retrieves a value for a key, returning a default fallback if the key does not exist?',
        code: 'player = {"name": "Affan"}\nxp = player....("xp", 0)',
        options: [
          'find()',
          'get()',
          'fetch()',
          'lookup()'
        ],
        correct: 1,
        explanation: 'dict.get(key, default) avoids KeyError exceptions. If key is found, it returns the associated value; otherwise, it returns the provided default value.'
      }
    ]
  },

  mysql: {
    id: 'mysql',
    name: 'MySQL Database & Query Architect',
    badge: '🐬',
    description: 'Certified expertise in relational database design, SQL syntax, multi-table JOINs, indexing, aggregation, and data normalization.',
    passingScore: 75,
    durationMinutes: 10,
    xpReward: 250,
    questions: [
      {
        id: 'sql_1',
        question: 'What does SQL stand for in data engineering?',
        options: [
          'Structured Query Language',
          'Standard Questionnaire Logic',
          'Sequential Query Language',
          'System Query Layout'
        ],
        correct: 0,
        explanation: 'SQL stands for Structured Query Language. It is the standard language for relational database management systems (RDBMS) like MySQL, PostgreSQL, and SQLite.'
      },
      {
        id: 'sql_2',
        question: 'Which SQL clause is used to filter records based on specific criteria?',
        code: 'SELECT * FROM users ... score > 500;',
        options: [
          'HAVING',
          'WHERE',
          'FILTER',
          'WHEN'
        ],
        correct: 1,
        explanation: 'The WHERE clause filters rows before any groupings are applied. HAVING is used to filter grouped results after GROUP BY.'
      },
      {
        id: 'sql_3',
        question: 'Which SQL JOIN returns all rows from the left table, and the matched rows from the right table (with NULLs for unmatched right rows)?',
        options: [
          'INNER JOIN',
          'LEFT JOIN',
          'RIGHT JOIN',
          'CROSS JOIN'
        ],
        correct: 1,
        explanation: 'A LEFT JOIN (or LEFT OUTER JOIN) returns all records from the left table, and the matched records from the right table. Unmatched records on the right return NULL values.'
      },
      {
        id: 'sql_4',
        question: 'Which SQL statement inserts new rows into a database table?',
        options: [
          'ADD INTO table VALUES (...)',
          'INSERT INTO table (col1, col2) VALUES (val1, val2);',
          'UPDATE table SET col1 = val1;',
          'CREATE ROW table (...)'
        ],
        correct: 1,
        explanation: 'INSERT INTO is the standard SQL DML command used to add one or more new records into a specified table.'
      },
      {
        id: 'sql_5',
        question: 'What is the function of a PRIMARY KEY in a relational database table?',
        options: [
          'Encrypts sensitive table data',
          'Uniquely identifies each record and guarantees no duplicate or NULL values',
          'Automatically calculates row totals',
          'Connects the database to external APIs'
        ],
        correct: 1,
        explanation: 'A PRIMARY KEY constraint uniquely identifies each record in a database table. Primary keys must contain UNIQUE values, and cannot contain NULL values.'
      },
      {
        id: 'sql_6',
        question: 'Which aggregate function calculates the total sum of a numeric column in SQL?',
        code: 'SELECT ...(total_amount) FROM orders;',
        options: [
          'COUNT()',
          'TOTAL()',
          'SUM()',
          'ADD()'
        ],
        correct: 2,
        explanation: 'SUM() returns the total sum of a numeric column. COUNT() returns the number of rows, AVG() returns the numerical average, and MAX() returns the highest value.'
      },
      {
        id: 'sql_7',
        question: 'To eliminate duplicate values and return only unique rows in a query result, which keyword is used?',
        code: 'SELECT ... country FROM customers;',
        options: [
          'UNIQUE',
          'DISTINCT',
          'DIFFERENT',
          'FILTER'
        ],
        correct: 1,
        explanation: 'The SELECT DISTINCT statement is used to return only distinct (different) values, removing all duplicate records from the final result set.'
      },
      {
        id: 'sql_8',
        question: 'Which SQL command permanently removes a table along with its entire structure, indexes, and data from the database?',
        options: [
          'DELETE TABLE users;',
          'TRUNCATE TABLE users;',
          'DROP TABLE users;',
          'REMOVE TABLE users;'
        ],
        correct: 2,
        explanation: 'DROP TABLE destroys the table definition and all its data. DELETE FROM deletes records while keeping table structure. TRUNCATE empties all records quickly.'
      },
      {
        id: 'sql_9',
        question: 'Which clause is used in conjunction with aggregate functions to group the result set by one or more columns?',
        options: [
          'ORDER BY',
          'GROUP BY',
          'PARTITION BY',
          'CLUSTER BY'
        ],
        correct: 1,
        explanation: 'The GROUP BY statement groups rows that have the same values in specified columns into summary rows (e.g. find number of customers per city).'
      },
      {
        id: 'sql_10',
        question: 'In SQL transaction management, which command saves all changes made during the current transaction permanently to disk?',
        options: [
          'SAVEPOINT',
          'ROLLBACK',
          'COMMIT',
          'PERSIST'
        ],
        correct: 2,
        explanation: 'COMMIT ends the transaction and makes all database modifications permanent. ROLLBACK reverts all changes back to the start of the transaction or savepoint.'
      },
      {
        id: 'sql_11',
        question: 'What does the LIKE operator with "%cyber" match in a SQL query?',
        code: 'SELECT * FROM tags WHERE name LIKE "%cyber";',
        options: [
          'Any value that starts with "cyber"',
          'Any value that ends with "cyber"',
          'Any value that contains "cyber" anywhere',
          'Only the exact word "cyber"'
        ],
        correct: 1,
        explanation: 'In SQL LIKE patterns, % represents zero, one, or multiple characters. "%cyber" matches any string ending with "cyber" (e.g. "neoncyber", "cyber").'
      },
      {
        id: 'sql_12',
        question: 'Why are database INDEXES created on frequently queried columns?',
        options: [
          'To compress the table size',
          'To dramatically speed up data retrieval operations (SELECT performance)',
          'To enforce foreign key constraints',
          'To prevent SQL injection attacks'
        ],
        correct: 1,
        explanation: 'Indexes are used to quickly locate data without having to search every row in a database table every time. They speed up SELECT queries at the cost of slightly slower INSERT/UPDATE operations.'
      }
    ]
  },

  php: {
    id: 'php',
    name: 'PHP Web Backend & Security Developer',
    badge: '🐘',
    description: 'Certified expertise in server-side scripting, superglobals, PDO database connections, session management, and web security best practices.',
    passingScore: 75,
    durationMinutes: 10,
    xpReward: 250,
    questions: [
      {
        id: 'php_1',
        question: 'What does PHP originally and recursively stand for?',
        options: [
          'Personal Home Page (originally) / PHP: Hypertext Preprocessor (recursive)',
          'Programmed Hypertext Parser',
          'Private Hosting Protocol',
          'Public Homepage Processor'
        ],
        correct: 0,
        explanation: 'PHP stood for Personal Home Page when Rasmus Lerdorf created it in 1994. It is now officially a recursive acronym for "PHP: Hypertext Preprocessor".'
      },
      {
        id: 'php_2',
        question: 'All standard variable names in PHP must begin with which character?',
        options: [
          '&',
          '@',
          '$',
          '#'
        ],
        correct: 2,
        explanation: 'In PHP, all variables must begin with a dollar sign ($), followed by the name of the variable (e.g. $username = "Affan";).'
      },
      {
        id: 'php_3',
        question: 'Which PHP superglobal array collects form data submitted with the HTTP POST method?',
        options: [
          '$_GET',
          '$_POST',
          '$_REQUEST',
          '$_SERVER'
        ],
        correct: 1,
        explanation: '$_POST is a PHP superglobal variable which is used to collect form data after submitting an HTML form with method="post", keeping sensitive data out of the URL.'
      },
      {
        id: 'php_4',
        question: 'Which modern PHP database extension provides a consistent database abstraction layer and supports prepared statements against SQL injection?',
        options: [
          'mysql_query() (deprecated)',
          'PDO (PHP Data Objects)',
          'SQLDirect',
          'DB_Connect'
        ],
        correct: 1,
        explanation: 'PDO (PHP Data Objects) is the modern, secure standard for interacting with databases in PHP. It supports multiple RDBMS engines and parameterized prepared statements.'
      },
      {
        id: 'php_5',
        question: 'Which function securely generates a salted cryptographic hash of a user password in modern PHP?',
        code: '$hash = ...( $password, PASSWORD_BCRYPT );',
        options: [
          'md5()',
          'sha1()',
          'password_hash()',
          'crypt_secure()'
        ],
        correct: 2,
        explanation: 'password_hash() uses strong, one-way cryptographic algorithms (like Bcrypt and Argon2) with automatic secure salt generation. password_verify() is used to check the password.'
      },
      {
        id: 'php_6',
        question: 'What function MUST be called at the very top of a PHP script before any HTML output to initialize or resume a user session?',
        options: [
          'session_start()',
          'session_begin()',
          'init_session()',
          'start_cookie()'
        ],
        correct: 0,
        explanation: 'session_start() creates a session or resumes the current one based on a session identifier passed via a GET or POST request, or passed via a cookie.'
      },
      {
        id: 'php_7',
        question: 'What is the string concatenation operator in PHP?',
        code: '$greeting = "Hello " ... $name;',
        options: [
          '+',
          '&',
          '.',
          '::'
        ],
        correct: 2,
        explanation: 'In PHP, the period (.) is the string concatenation operator. The plus (+) operator is strictly for arithmetic addition.'
      },
      {
        id: 'php_8',
        question: 'What is the difference between `include` and `require` in PHP when the target file is not found?',
        options: [
          'include causes a fatal error; require only gives a warning',
          'require emits a fatal E_COMPILE_ERROR and stops script execution; include only emits a warning (E_WARNING) and continues execution',
          'They are 100% identical aliases',
          'require is only used for classes'
        ],
        correct: 1,
        explanation: 'require will produce a fatal error (E_COMPILE_ERROR) and stop the script if the file does not exist. include will only produce a warning (E_WARNING) and the script will continue.'
      },
      {
        id: 'php_9',
        question: 'How do you prevent Cross-Site Scripting (XSS) attacks when echoing user input back to an HTML page in PHP?',
        code: 'echo ...( $userInput, ENT_QUOTES, "UTF-8" );',
        options: [
          'strip_tags()',
          'htmlspecialchars()',
          'urldecode()',
          'sanitize()'
        ],
        correct: 1,
        explanation: 'htmlspecialchars() converts special characters (like <, >, ", \') into HTML entities, preventing malicious scripts from executing in the victim\'s browser.'
      },
      {
        id: 'php_10',
        question: 'What is the correct way to declare a constructor in a modern PHP class?',
        code: 'class CyberWarrior {\n  public function ...($name) {\n    $this->name = $name;\n  }\n}',
        options: [
          'CyberWarrior()',
          '__construct()',
          '__init__()',
          'constructor()'
        ],
        correct: 1,
        explanation: 'PHP uses the magic method __construct() (with two leading underscores) as the class constructor, automatically called when a new instance is created with "new".'
      },
      {
        id: 'php_11',
        question: 'Which operator was introduced in PHP 7 to return the first operand if it exists and is not null, or the second operand otherwise (Null Coalescing)?',
        code: '$username = $_GET["user"] ... "Anonymous";',
        options: [
          '?:',
          '??',
          '!!',
          '||'
        ],
        correct: 1,
        explanation: 'The null coalescing operator (??) returns its first operand if it exists and is not null; otherwise it returns its second operand. It prevents undefined index notices.'
      },
      {
        id: 'php_12',
        question: 'What is the correct closing tag for standard PHP script blocks?',
        options: [
          '</php>',
          '?>',
          '%}',
          ';;;'
        ],
        correct: 1,
        explanation: 'A PHP script block starts with <?php and ends with ?>. (Note: in pure PHP files, omitting the closing ?> tag is recommended to prevent accidental trailing whitespace).'
      }
    ]
  },

  django: {
    id: 'django',
    name: 'Django Full-Stack Architecture Specialist',
    badge: '🦄',
    description: 'Certified expertise in Django web framework, MTV (Model-Template-View) design pattern, ORM database models, migrations, and REST APIs.',
    passingScore: 75,
    durationMinutes: 10,
    xpReward: 250,
    questions: [
      {
        id: 'dj_1',
        question: 'What architectural design pattern does the Django web framework follow?',
        options: [
          'MVC (Model-View-Controller)',
          'MTV (Model-Template-View)',
          'MVVM (Model-View-ViewModel)',
          'Micro-Kernel'
        ],
        correct: 1,
        explanation: 'Django follows the MTV pattern: Model describes database structure, Template describes presentation layer (HTML), and View contains business logic and connects Model to Template.'
      },
      {
        id: 'dj_2',
        question: 'Which CLI command creates a brand new Django project with the default boilerplate files?',
        options: [
          'python manage.py new-project myproject',
          'django-admin startproject myproject',
          'django create myproject',
          'python -m django init'
        ],
        correct: 1,
        explanation: 'django-admin startproject <name> creates the root project directory, settings.py, urls.py, wsgi.py, and manage.py.'
      },
      {
        id: 'dj_3',
        question: 'Which two CLI commands are used in sequence to generate and then execute database schema changes in Django ORM?',
        options: [
          'makemigrations followed by migrate',
          'db:generate followed by db:push',
          'build_schema followed by apply',
          'syncdb followed by commit'
        ],
        correct: 0,
        explanation: 'python manage.py makemigrations inspects models.py and creates migration files. python manage.py migrate executes those SQL DDL changes against the active database.'
      },
      {
        id: 'dj_4',
        question: 'In a Django template, which syntax is used to print/render the value of a variable passed from the view context?',
        options: [
          '{% user.name %}',
          '{{ user.name }}',
          '${user.name}',
          '<%= user.name %>'
        ],
        correct: 1,
        explanation: 'In the Django Template Language (DTL), double curly braces {{ variable }} are used for variable rendering, while {% tag %} is used for logic (loops, if statements, blocks).'
      },
      {
        id: 'dj_5',
        question: 'What built-in Django feature automatically protects POST web forms from malicious cross-site request forgery attacks?',
        code: '<form method="post">\n  {% ... %}\n  <input ...>\n</form>',
        options: [
          'xss_token',
          'csrf_token',
          'auth_protect',
          'secure_form'
        ],
        correct: 1,
        explanation: '{% csrf_token %} injects a hidden input field with a cryptographically secure token checked by Django\'s CSRF middleware on every POST submission.'
      },
      {
        id: 'dj_6',
        question: 'Which Django model field defines a many-to-one relationship (e.g. many Comments belong to one Blog Post)?',
        code: 'class Comment(models.Model):\n    post = models....(Post, on_delete=models.CASCADE)',
        options: [
          'OneToOneField',
          'ManyToManyField',
          'ForeignKey',
          'BelongsToField'
        ],
        correct: 2,
        explanation: 'models.ForeignKey creates a many-to-one relationship. on_delete=models.CASCADE specifies that when the referenced Post is deleted, all child comments are deleted too.'
      },
      {
        id: 'dj_7',
        question: 'How do you query ALL records from a Django model named "Hero" using the ORM?',
        options: [
          'Hero.objects.all()',
          'Hero.find_all()',
          'Hero.query.get()',
          'SELECT * FROM Hero'
        ],
        correct: 0,
        explanation: 'Django models use an ORM Manager called "objects". Hero.objects.all() returns a QuerySet containing all model instances from the database.'
      },
      {
        id: 'dj_8',
        question: 'Which setting in settings.py lists all the apps enabled in the Django project instance?',
        options: [
          'ACTIVE_APPS',
          'INSTALLED_APPS',
          'MIDDLEWARE',
          'REGISTERED_PLUGINS'
        ],
        correct: 1,
        explanation: 'INSTALLED_APPS is a list of all Django applications enabled in the project. Whenever you create a new app with "startapp", you must register it here.'
      },
      {
        id: 'dj_9',
        question: 'What is the command to create an administrative superuser account for the built-in Django Admin portal?',
        options: [
          'python manage.py make_root',
          'python manage.py createsuperuser',
          'django-admin new-admin',
          'python manage.py admin --create'
        ],
        correct: 1,
        explanation: 'python manage.py createsuperuser prompts for username, email, and password to grant full administrator privileges in Django\'s automatic /admin portal.'
      },
      {
        id: 'dj_10',
        question: 'In Django REST Framework (DRF), what component transforms complex model QuerySets into native Python datatypes that can easily be rendered into JSON?',
        options: [
          'Router',
          'Serializer',
          'Renderer',
          'Transformer'
        ],
        correct: 1,
        explanation: 'Serializers allow complex data such as querysets and model instances to be converted to native Python datatypes that can then be easily rendered into JSON or XML.'
      },
      {
        id: 'dj_11',
        question: 'Which Django template tag allows a child template to inherit and extend a master base template?',
        options: [
          '{% import "base.html" %}',
          '{% extends "base.html" %}',
          '{% include "base.html" %}',
          '{% inherit "base.html" %}'
        ],
        correct: 1,
        explanation: '{% extends "base.html" %} tells the template engine that this template "extends" another template. Inside, it overrides specific {% block content %} blocks.'
      },
      {
        id: 'dj_12',
        question: 'What is the primary function of Django Middleware?',
        options: [
          'To format CSS files for production',
          'A framework of hooks into Django\'s request/response processing pipeline',
          'To connect Django directly to Redis cache only',
          'To automate git deployments'
        ],
        correct: 1,
        explanation: 'Middleware is a framework of hooks into Django\'s request/response processing. It is a lightweight, low-level plugin system for globally altering Django\'s input or output.'
      }
    ]
  }
};
