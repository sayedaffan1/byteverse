export const JS_W3_LESSONS = [
  {
    id: 'js_home',
    category: 'JS Tutorial',
    title: 'JavaScript HOME',
    summary: 'JavaScript is the world\'s most popular programming language. JavaScript is the programming language of the Web.',
    eli5: {
      story: 'HTML is the robot\'s body, and CSS is the robot\'s shiny paint. But without batteries, the robot just stands frozen! JavaScript is the batteries, the brain, and the muscles. It makes the robot walk, talk, play games, celebrate high scores, and respond when you click its buttons!',
      analogy: '🧠 Batteries & Brains: JavaScript brings everything to life! When you tap a button, JavaScript makes the magic happen.',
      rules: [
        'HTML creates the buttons.',
        'CSS makes the buttons pretty and glowing.',
        'JavaScript listens: "Did someone tap me? Quick, pop up confetti!"'
      ]
    },
    body: `JavaScript is easy to learn. This tutorial will teach you JavaScript from basic to advanced.

### Why Study JavaScript?
JavaScript is one of the 3 languages all web developers must learn:
1. **HTML** to define the content of web pages.
2. **CSS** to specify the layout and styling of web pages.
3. **JavaScript** to program the behavior and interactivity of web pages.`,
    tryItCode: `// JavaScript makes things happen!
console.log("Robot batteries activated!");
const batteryLevel = 100;
console.log("Ready to play! Battery at:", batteryLevel + "%");`,
    codeType: 'js',
    notes: 'In HTML, JavaScript code is inserted between <script> and </script> tags.',
    exercise: {
      question: 'Which HTML tag is used to embed or reference client-side JavaScript code?',
      options: ['<js>', '<javascript>', '<script>', '<code>'],
      correct: 2,
      hint: 'It is called <script>.'
    },
    referenceTable: [
      { item: 'let', description: 'Declares a block-scoped mutable variable' },
      { item: 'const', description: 'Declares a block-scoped read-only constant' },
      { item: 'function', description: 'Declares a reusable block of code' },
      { item: 'console.log()', description: 'Writes output to the browser debugging console' }
    ]
  },
  {
    id: 'js_variables',
    category: 'JS Tutorial',
    title: 'JS Variables: var, let & const',
    summary: 'Variables are containers for storing data values. In modern JavaScript, we declare variables using const and let.',
    eli5: {
      story: 'Imagine you have two plastic toy boxes with labels. One box is glued shut with superglue; you can only look inside, but you can never change what is in it. That box is named "const" (constant). The other box has an open lid that you can swap toys in and out of anytime. That box is named "let"!',
      analogy: '📦 Toy Boxes: Use "const" for your birthday (it never changes), and use "let" for your video game score (it goes up and down).',
      rules: [
        'const = permanent label (cannot be reassigned).',
        'let = changeable label (can be updated).',
        'Always pick const unless you know the value will change.'
      ]
    },
    body: `### 4 Ways to Declare a JavaScript Variable:
1. \`var\` (legacy, function-scoped, avoid in modern code)
2. \`let\` (modern, block-scoped, can be reassigned)
3. \`const\` (modern, block-scoped, CANNOT be reassigned)
4. Nothing (implicit global, never do this!)`,
    tryItCode: `const playerName = "Affan Sayed";
let coins = 50;

console.log("Player:", playerName);
console.log("Initial Coins:", coins);

coins = coins + 25; // Player found a treasure chest!
console.log("New Coins after chest:", coins);`,
    codeType: 'js',
    tips: 'Variables declared with let and const must be Declared before use and cannot be redeclared in the same scope.',
    exercise: {
      question: 'Which keyword should you use to declare a variable whose value will NEVER be reassigned?',
      options: ['let', 'var', 'const', 'immutable'],
      correct: 2,
      hint: 'Short for constant.'
    }
  },
  {
    id: 'js_functions',
    category: 'JS Tutorial',
    title: 'JS Functions & Arrow Functions',
    summary: 'A JavaScript function is a block of code designed to perform a particular task. It is executed when "something" invokes (calls) it.',
    eli5: {
      story: 'Imagine a magical Smoothie Blender in your kitchen! You put in bananas and strawberries (inputs / arguments). You press the button. The blender runs its secret mixing recipe, and POOF: it pours out a delicious smoothie (return value)! A function is that blender recipe: write it once, use it 100 times!',
      analogy: '🥤 The Smoothie Blender: Give it fruit (inputs), it mixes them up, and gives you a tasty smoothie (output)!',
      rules: [
        'Define a function with the recipe instructions.',
        'Pass arguments (like ingredients) inside the (parentheses).',
        'Use "return" to send the finished smoothie back!'
      ]
    },
    body: `### Modern ES6 Arrow Functions
Arrow functions allow a shorter syntax for writing function expressions:
\`\`\`javascript
const multiply = (x, y) => x * y;
\`\`\``,
    tryItCode: `// The Smoothie Blender Function
function makeSmoothie(fruit1, fruit2) {
  return fruit1 + " & " + fruit2 + " Smoothie!";
}

console.log(makeSmoothie("Banana", "Strawberry"));
console.log(makeSmoothie("Mango", "Pineapple"));`,
    codeType: 'js',
    notes: 'If an arrow function has only one statement that returns a value, you can omit the brackets and the return keyword.',
    exercise: {
      question: 'What is the correct syntax for an arrow function that returns the double of x?',
      options: ['x => x * 2', 'function(x) => x * 2', '-> x * 2', 'x -> { x * 2 }'],
      correct: 0,
      hint: 'The arrow is written as =>.'
    }
  }
];
