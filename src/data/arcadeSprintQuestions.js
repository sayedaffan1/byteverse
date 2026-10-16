export const SPRINT_QUESTIONS = [
  {
    id: 1,
    tech: 'HTML',
    question: 'Which tag is used to create the largest heading in HTML?',
    options: ['<h1>', '<head>', '<h6>', '<heading>'],
    correct: 0,
    hint: 'Headings range from h1 (biggest) to h6 (smallest).'
  },
  {
    id: 2,
    tech: 'CSS',
    question: 'Which Flexbox property aligns items along the horizontal main axis?',
    options: ['justify-content', 'align-items', 'flex-direction', 'align-content'],
    correct: 0,
    hint: 'justify-content controls the main axis; align-items controls cross axis.'
  },
  {
    id: 3,
    tech: 'JavaScript',
    question: 'What does `[1, 2, 3].map(x => x * 2)` return?',
    options: ['[2, 4, 6]', '[1, 2, 3, 2]', '6', 'undefined'],
    correct: 0,
    hint: 'map() transforms each element by multiplying it by 2.'
  },
  {
    id: 4,
    tech: 'Python',
    question: 'How do you check the length of a string `s` in Python?',
    options: ['len(s)', 's.length', 's.size()', 'count(s)'],
    correct: 0,
    hint: 'Python uses the built-in len() function.'
  },
  {
    id: 5,
    tech: 'MySQL',
    question: 'Which SQL keyword is used to filter records in a SELECT query?',
    options: ['WHERE', 'FILTER', 'HAVING_ALL', 'FIND'],
    correct: 0,
    hint: 'WHERE specifies conditions rows must satisfy.'
  },
  {
    id: 6,
    tech: 'PHP',
    question: 'What symbol must all PHP variables start with?',
    options: ['$', '@', '#', '&'],
    correct: 0,
    hint: 'In PHP, every variable begins with a dollar sign like $name.'
  },
  {
    id: 7,
    tech: 'Django',
    question: 'Which file defines the URL routing patterns in a Django project?',
    options: ['urls.py', 'routes.py', 'views.py', 'settings.py'],
    correct: 0,
    hint: 'urls.py maps URLs to view functions.'
  },
  {
    id: 8,
    tech: 'CSS',
    question: 'What is the default CSS `position` value for HTML elements?',
    options: ['static', 'relative', 'absolute', 'fixed'],
    correct: 0,
    hint: 'All elements start with position: static in standard document flow.'
  },
  {
    id: 9,
    tech: 'JavaScript',
    question: 'Which keyword declares a block-scoped variable that CANNOT be reassigned?',
    options: ['const', 'let', 'var', 'static'],
    correct: 0,
    hint: 'const creates immutable variable bindings.'
  },
  {
    id: 10,
    tech: 'Python',
    question: 'What data type is created by `{ "name": "Affan", "rank": 1 }`?',
    options: ['dict', 'list', 'tuple', 'set'],
    correct: 0,
    hint: 'Key-value pairs enclosed in curly brackets define a dictionary.'
  },
  {
    id: 11,
    tech: 'HTML',
    question: 'Which attribute makes an `<input>` field mandatory to submit?',
    options: ['required', 'mandatory', 'validate', 'needed'],
    correct: 0,
    hint: 'The boolean attribute "required" prevents blank form submissions.'
  },
  {
    id: 12,
    tech: 'MySQL',
    question: 'Which command permanently removes all records from a table without deleting the schema?',
    options: ['TRUNCATE TABLE', 'REMOVE ALL', 'DROP TABLE', 'CLEAR ROWS'],
    correct: 0,
    hint: 'TRUNCATE empties the table instantly.'
  },
  {
    id: 13,
    tech: 'JavaScript',
    question: 'Which method converts a JavaScript object into a JSON string?',
    options: ['JSON.stringify()', 'JSON.parse()', 'Object.toJSON()', 'JSON.encode()'],
    correct: 0,
    hint: 'JSON.stringify() turns objects into JSON text strings.'
  },
  {
    id: 14,
    tech: 'PHP',
    question: 'Which superglobal array contains form data sent via HTTP POST?',
    options: ['$_POST', '$_GET', '$_DATA', '$_SUBMIT'],
    correct: 0,
    hint: '$_POST collects form values submitted with method="POST".'
  },
  {
    id: 15,
    tech: 'Django',
    question: 'Which command applies pending database migrations in Django?',
    options: ['python manage.py migrate', 'python manage.py makemigrations', 'python manage.py dbsync', 'python manage.py update_db'],
    correct: 0,
    hint: 'migrate runs SQL commands against your database.'
  },
  {
    id: 16,
    tech: 'CSS',
    question: 'What CSS rule makes an element fill its container with 50% rounded corners (a perfect circle)?',
    options: ['border-radius: 50%', 'border: round', 'shape: circle', 'circle: true'],
    correct: 0,
    hint: 'border-radius: 50% turns squares into circles.'
  },
  {
    id: 17,
    tech: 'Python',
    question: 'What is the output of `[x**2 for x in [1, 2, 3]]`?',
    options: ['[1, 4, 9]', '[2, 4, 6]', '[1, 2, 3]', '9'],
    correct: 0,
    hint: 'List comprehension squares each item (1*1, 2*2, 3*3).'
  },
  {
    id: 18,
    tech: 'JavaScript',
    question: 'Which strict equality operator checks both value AND type?',
    options: ['===', '==', '=', '<=>'],
    correct: 0,
    hint: '=== does not perform automatic type coercion.'
  },
  {
    id: 19,
    tech: 'MySQL',
    question: 'Which SQL function counts the total number of rows matching a query?',
    options: ['COUNT(*)', 'TOTAL(*)', 'SUM(*)', 'LEN(*)'],
    correct: 0,
    hint: 'COUNT(*) calculates matching row counts.'
  },
  {
    id: 20,
    tech: 'HTML',
    question: 'Which tag displays an image on a webpage?',
    options: ['<img>', '<image>', '<picture-src>', '<pic>'],
    correct: 0,
    hint: 'The self-closing <img> tag uses the src attribute.'
  },
  {
    id: 21,
    tech: 'CSS',
    question: 'Which CSS property defines the transparency of an element?',
    options: ['opacity', 'transparent', 'filter: alpha', 'visibility: clear'],
    correct: 0,
    hint: 'opacity accepts values from 0.0 (invisible) to 1.0 (opaque).'
  },
  {
    id: 22,
    tech: 'JavaScript',
    question: 'What will `Boolean("")` (empty string) evaluate to?',
    options: ['false', 'true', 'undefined', 'NaN'],
    correct: 0,
    hint: 'Empty strings are falsy values in JavaScript.'
  },
  {
    id: 23,
    tech: 'Python',
    question: 'Which keyword creates a function in Python?',
    options: ['def', 'function', 'fun', 'define'],
    correct: 0,
    hint: 'Functions are declared with "def function_name():".'
  },
  {
    id: 24,
    tech: 'Django',
    question: 'Where do you define database models/tables in a Django app?',
    options: ['models.py', 'database.py', 'schema.py', 'tables.py'],
    correct: 0,
    hint: 'models.py defines Python classes inherited from models.Model.'
  },
  {
    id: 25,
    tech: 'PHP',
    question: 'Which function starts or resumes a session in PHP?',
    options: ['session_start()', 'start_session()', 'session_init()', 'session_open()'],
    correct: 0,
    hint: 'session_start() must be called before using $_SESSION.'
  }
];
