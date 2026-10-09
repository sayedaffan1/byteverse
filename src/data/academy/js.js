export const JS_CURRICULUM = {
  title: 'JavaScript: The Language of the Web (0% to 10,000,000%)',
  tagline: 'From variables and loops to closures, the Event Loop, Promises, and V8 engine internals.',
  overview: 'JavaScript powers the interactivity, state management, API communication, and frontend architectures of the modern web. Learn core language semantics, functional array methods, asynchronous programming, and runtime internals.',
  modules: [
    {
      level: '0% Beginner',
      levelCode: 'beginner',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      topics: [
        {
          id: 'js-variables-datatypes',
          title: 'Variables, Types & Strict Equality',
          summary: 'Understand modern variable declarations (const by default, let when reassigning) and primitive data types vs reference types.',
          keyPoints: [
            'Primitives: string, number, boolean, null, undefined, symbol, bigint (passed by value).',
            'Objects & Arrays are reference types (stored as memory pointers).',
            'Always use === (strict equality) instead of == to avoid unexpected type coercion surprises (e.g. "" == 0 is true, but "" === 0 is false!).'
          ],
          code: `const username = "CyberCoder";
let userScore = 150;
userScore += 50;

console.log("Player:", username);
console.log("Score:", userScore);
console.log("Type of score:", typeof userScore);`,
          type: 'js',
          quiz: {
            question: 'What is the key difference between == and === in JavaScript?',
            options: ['=== checks both value and type without coercion', '== is faster than ===', '=== is only for strings', 'There is no difference'],
            correct: 0,
            explanation: '=== performs strict equality without converting (coercing) types beforehand.'
          }
        },
        {
          id: 'js-functions-scope',
          title: 'Functions: Declarations vs Arrow Functions',
          summary: 'Master regular function declarations, function expressions, and modern ES6 arrow functions with implicit returns.',
          keyPoints: [
            'function greet() {} is hoisted to the top of its scope.',
            'const greet = () => {} is not hoisted and preserves lexical "this".',
            'Arrow functions with a single expression have implicit returns: const sq = x => x * x;'
          ],
          code: `// Traditional function
function add(a, b) {
  return a + b;
}

// Concise Arrow function with implicit return
const multiply = (a, b) => a * b;

console.log("Addition:", add(10, 5));
console.log("Multiplication:", multiply(10, 5));`,
          type: 'js',
          quiz: {
            question: 'What is unique about the "this" keyword inside an arrow function?',
            options: ['It is always window', 'It inherits "this" lexically from its enclosing context', 'It is undefined', 'It changes on every call'],
            correct: 1,
            explanation: 'Arrow functions do not have their own "this"; they capture the "this" of the surrounding lexical context.'
          }
        }
      ]
    },
    {
      level: '50% Intermediate',
      levelCode: 'intermediate',
      badgeColor: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/30',
      topics: [
        {
          id: 'js-array-methods',
          title: 'Array Power: map, filter, reduce & find',
          summary: 'Master functional programming array transformations without mutating the original array.',
          keyPoints: [
            'map(): Transforms every element into a new array of the same length.',
            'filter(): Returns a subset array containing elements that pass a boolean predicate test.',
            'reduce(): Accumulates array values into a single output (number, object, or grouping).',
            'find() & some(): Locate specific items or check if any item matches.'
          ],
          code: `const quests = [
  { id: 1, title: "HTML Basics", xp: 100, completed: true },
  { id: 2, title: "Flexbox Arena", xp: 150, completed: false },
  { id: 3, title: "JS Engine", xp: 200, completed: true }
];

// 1. Filter completed quests
const done = quests.filter(q => q.completed);

// 2. Calculate total XP earned with reduce
const totalXP = done.reduce((sum, q) => sum + q.xp, 0);

console.log("Completed quests count:", done.length);
console.log("Total Earned XP:", totalXP);`,
          type: 'js',
          quiz: {
            question: 'Which method transforms every item in an array and returns a new array of identical length?',
            options: ['filter()', 'map()', 'reduce()', 'forEach()'],
            correct: 1,
            explanation: 'map() runs a callback on each item and returns a new array with the transformed values.'
          }
        },
        {
          id: 'js-dom-events',
          title: 'DOM Manipulation & Event Delegation',
          summary: 'Select DOM nodes with querySelector, mutate classList and attributes, and leverage Event Delegation to handle events efficiently.',
          keyPoints: [
            'document.querySelector(".class") selects the first match; querySelectorAll selects all.',
            'element.classList.add(), .remove(), .toggle() manipulate CSS classes cleanly.',
            'Event Delegation: Attach a single listener to a parent element to catch events bubbling from child elements via event.target.'
          ],
          code: `const heroes = ["Neo", "Trinity", "Morpheus"];
console.log("Rendering heroes dynamically to console:");
heroes.forEach((hero, index) => {
  console.log(\`Hero #\${index + 1}: \${hero}\`);
});`,
          type: 'js',
          quiz: {
            question: 'What is Event Delegation in the browser DOM?',
            options: ['Assigning an event to every single button', 'Listening for events on a parent element to handle clicks on multiple children via bubbling', 'Canceling an event', 'Stopping the page from loading'],
            correct: 1,
            explanation: 'Event Delegation takes advantage of event bubbling to handle actions from many child elements using one listener on an ancestor.'
          }
        }
      ]
    },
    {
      level: '100% Advanced & Masterclass',
      levelCode: 'advanced',
      badgeColor: 'text-purple-400 bg-purple-500/10 border-purple-500/30',
      topics: [
        {
          id: 'js-async-promises-await',
          title: 'Asynchronous JS: Promises, async/await & Fetch',
          summary: 'Handle non-blocking network requests, timers, and concurrency cleanly using Promises and async/await syntax with try/catch.',
          keyPoints: [
            'A Promise represents an eventual value: pending -> fulfilled or rejected.',
            'async functions always return a Promise automatically.',
            'await pauses execution inside the async function until the promise settles, without freezing the browser UI!',
            'Promise.all() executes multiple independent requests concurrently in parallel.'
          ],
          code: `const fetchUserData = async (id) => {
  try {
    console.log("Fetching user profile for ID:", id);
    // Simulating resolved network request
    const mockUser = await new Promise(resolve => {
      setTimeout(() => resolve({ id, username: "ByteMaster", rank: "Legend" }), 100);
    });
    console.log("Profile Loaded:", mockUser.username, "| Rank:", mockUser.rank);
  } catch (err) {
    console.error("Fetch failed:", err);
  }
};

fetchUserData(42);`,
          type: 'js',
          quiz: {
            question: 'What does "await" do when placed in front of a Promise inside an async function?',
            options: ['It crashes the script', 'It pauses execution within that async function until the Promise resolves', 'It turns the Promise into a number', 'It stops all browser tabs'],
            correct: 1,
            explanation: 'await pauses the local execution flow of the async function until the Promise settles.'
          }
        },
        {
          id: 'js-event-loop-closures',
          title: 'The Event Loop & Closures Demystified',
          summary: 'Master how JavaScript executes single-threaded non-blocking code using the Call Stack, Web APIs, Microtask Queue (Promises), and Macrotask Queue (setTimeout).',
          keyPoints: [
            'Call Stack executes synchronous code one frame at a time.',
            'Microtasks (Promise.then, queueMicrotask) take strict priority over Macrotasks (setTimeout, setInterval).',
            'Closures: A function remembers and accesses variables from its outer lexical scope even after that outer function has returned!'
          ],
          code: `// Closure: Private Counter Factory
function createWallet(initialBalance) {
  let balance = initialBalance; // Private enclosed variable

  return {
    deposit: (amount) => {
      balance += amount;
      return balance;
    },
    getBalance: () => balance
  };
}

const myWallet = createWallet(500);
console.log("Initial Balance:", myWallet.getBalance());
console.log("After Deposit:", myWallet.deposit(250));`,
          type: 'js',
          quiz: {
            question: 'Which queue has higher priority in the JavaScript Event Loop after the call stack clears?',
            options: ['Macrotask Queue (setTimeout)', 'Microtask Queue (Promises)', 'Both run at the same time', 'Neither'],
            correct: 1,
            explanation: 'All microtasks in the microtask queue run before the browser processes the next macrotask.'
          }
        }
      ]
    }
  ]
};
