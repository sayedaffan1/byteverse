// Fast, searchable syntax cheat sheets for W3-Academy
export const SYNTAX_CHEAT_SHEETS = {
  html: [
    { name: '<!DOCTYPE html>', category: 'Structure', syntax: '<!DOCTYPE html>', desc: 'Tells browser to parse as modern HTML5 standard.' },
    { name: '<html>', category: 'Structure', syntax: '<html lang="en">...</html>', desc: 'The root container for all web content.' },
    { name: '<head>', category: 'Metadata', syntax: '<head><meta .../><title>...</title></head>', desc: 'Document metadata, stylesheets, and fonts.' },
    { name: '<body>', category: 'Structure', syntax: '<body>...</body>', desc: 'All visible content rendered in the viewport.' },
    { name: '<h1> - <h6>', category: 'Typography', syntax: '<h1>Heading 1</h1>', desc: 'Six levels of section headings (h1 is primary).' },
    { name: '<p>', category: 'Typography', syntax: '<p>Paragraph text</p>', desc: 'Standard block-level paragraph with margin.' },
    { name: '<a>', category: 'Links', syntax: '<a href="https://example.com" target="_blank">Link</a>', desc: 'Hyperlink to another URL or anchor.' },
    { name: '<img>', category: 'Media', syntax: '<img src="cat.jpg" alt="Description" width="300" />', desc: 'Embeds an image; alt attribute required for WCAG.' },
    { name: '<button>', category: 'Forms', syntax: '<button type="button">Click Me</button>', desc: 'Clickable button element.' },
    { name: '<input>', category: 'Forms', syntax: '<input type="text" placeholder="Name" required />', desc: 'User input field (text, email, password, etc.).' },
    { name: '<form>', category: 'Forms', syntax: '<form action="/submit" method="POST">...</form>', desc: 'Container for form controls submitted together.' },
    { name: '<ul> & <li>', category: 'Lists', syntax: '<ul><li>Item 1</li><li>Item 2</li></ul>', desc: 'Unordered (bulleted) list.' },
    { name: '<ol> & <li>', category: 'Lists', syntax: '<ol><li>First</li><li>Second</li></ol>', desc: 'Ordered (numbered) list.' },
    { name: '<div>', category: 'Layout', syntax: '<div class="container">...</div>', desc: 'Generic block-level division container.' },
    { name: '<span>', category: 'Layout', syntax: '<span class="highlight">Text</span>', desc: 'Generic inline text container.' },
    { name: '<canvas>', category: 'Graphics', syntax: '<canvas id="myCanvas" width="400" height="200"></canvas>', desc: 'Raster drawing surface scriptable with JS.' },
    { name: '<audio>', category: 'Media', syntax: '<audio controls src="sound.mp3"></audio>', desc: 'Native audio player element.' },
    { name: '<video>', category: 'Media', syntax: '<video controls width="400" src="movie.mp4"></video>', desc: 'Native video player element.' },
    { name: '<header>', category: 'Semantic', syntax: '<header><h1>Brand</h1><nav>...</nav></header>', desc: 'Introductory container for a page or section.' },
    { name: '<nav>', category: 'Semantic', syntax: '<nav><a href="/">Home</a></nav>', desc: 'Block of major navigation links.' },
    { name: '<article>', category: 'Semantic', syntax: '<article><h2>Post Title</h2><p>...</p></article>', desc: 'Self-contained independent composition.' },
    { name: '<section>', category: 'Semantic', syntax: '<section><h2>Chapter</h2><p>...</p></section>', desc: 'Thematic grouping of content.' },
    { name: '<aside>', category: 'Semantic', syntax: '<aside><p>Sidebar info</p></aside>', desc: 'Content tangentially related to surrounding content.' },
    { name: '<footer>', category: 'Semantic', syntax: '<footer><p>&copy; 2026 ByteVerse</p></footer>', desc: 'Footer for its nearest section or root.' }
  ],

  css: [
    { name: 'display: flex', category: 'Flexbox', syntax: 'display: flex; gap: 1rem;', desc: 'Enables 1D flexible layout mode on children.' },
    { name: 'justify-content', category: 'Flexbox', syntax: 'justify-content: center | space-between;', desc: 'Aligns items along the main axis.' },
    { name: 'align-items', category: 'Flexbox', syntax: 'align-items: center | flex-start;', desc: 'Aligns items along the cross axis.' },
    { name: 'display: grid', category: 'Grid', syntax: 'display: grid; grid-template-columns: repeat(3, 1fr);', desc: 'Enables 2D grid layout with rows & columns.' },
    { name: 'grid-gap / gap', category: 'Grid', syntax: 'gap: 16px 24px;', desc: 'Sets gutter spacing between grid rows and columns.' },
    { name: 'position', category: 'Layout', syntax: 'position: relative | absolute | fixed | sticky;', desc: 'Determines element positioning flow in document.' },
    { name: 'box-sizing', category: 'Box Model', syntax: 'box-sizing: border-box;', desc: 'Includes padding and border within total width/height.' },
    { name: 'margin', category: 'Box Model', syntax: 'margin: 0 auto; /* horizontal centering */', desc: 'Clears an area outside of an element border.' },
    { name: 'padding', category: 'Box Model', syntax: 'padding: 1rem 1.5rem;', desc: 'Clears an area inside the element around content.' },
    { name: 'backdrop-filter', category: 'Effects', syntax: 'backdrop-filter: blur(12px);', desc: 'Blurs the graphical area behind an element (glassmorphism).' },
    { name: 'background', category: 'Color', syntax: 'background: linear-gradient(135deg, #0f172a, #1e293b);', desc: 'Sets all background styling including gradients.' },
    { name: 'border-radius', category: 'Borders', syntax: 'border-radius: 9999px; /* pill shape */', desc: 'Rounds the corners of an element outer border.' },
    { name: 'box-shadow', category: 'Effects', syntax: 'box-shadow: 0 10px 25px -5px rgba(0,0,0,0.5);', desc: 'Adds cast shadow effects around an element frame.' },
    { name: 'transition', category: 'Animation', syntax: 'transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);', desc: 'Smoothly animates CSS property changes over time.' },
    { name: '@keyframes', category: 'Animation', syntax: '@keyframes pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.5; } }', desc: 'Defines an animation sequence of intermediate keyframe steps.' },
    { name: '@media', category: 'Responsive', syntax: '@media (max-width: 768px) { .sidebar { display: none; } }', desc: 'Applies CSS rules conditionally based on device viewport.' },
    { name: 'CSS Variables', category: 'Variables', syntax: ':root { --neon: #10b981; } .card { color: var(--neon); }', desc: 'Custom properties reusable across the stylesheet.' }
  ],

  js: [
    { name: 'let & const', category: 'Variables', syntax: 'const PI = 3.14; let score = 0;', desc: 'Block-scoped modern variable declarations (prefer const).' },
    { name: 'Arrow Functions', category: 'Functions', syntax: 'const add = (a, b) => a + b;', desc: 'Concise function syntax with lexical "this" binding.' },
    { name: 'Array.map()', category: 'Arrays', syntax: 'const doubled = [1, 2, 3].map(n => n * 2);', desc: 'Returns new array transformed by callback.' },
    { name: 'Array.filter()', category: 'Arrays', syntax: 'const evens = [1, 2, 3, 4].filter(n => n % 2 === 0);', desc: 'Returns elements that satisfy the predicate test.' },
    { name: 'Array.reduce()', category: 'Arrays', syntax: 'const sum = [1, 2, 3].reduce((acc, curr) => acc + curr, 0);', desc: 'Reduces array to a single accumulator value.' },
    { name: 'Template Literals', category: 'Strings', syntax: '`Hello, ${user.name}! You have ${xp} XP.`', desc: 'Interpolated strings enclosed by backticks.' },
    { name: 'Destructuring', category: 'Objects', syntax: 'const { name, age } = user; const [first, second] = arr;', desc: 'Unpacks properties or elements into variables.' },
    { name: 'Spread Operator', category: 'Arrays', syntax: 'const merged = [...arr1, ...arr2];', desc: 'Expands iterable elements in place.' },
    { name: 'document.querySelector', category: 'DOM', syntax: 'const btn = document.querySelector("#submit-btn");', desc: 'Returns first element matching CSS selector.' },
    { name: 'addEventListener', category: 'Events', syntax: 'btn.addEventListener("click", (e) => { ... });', desc: 'Attaches an event handler without overwriting.' },
    { name: 'fetch() API', category: 'Async', syntax: 'const res = await fetch("https://api.example.com/data");', desc: 'Standard browser API for HTTP network requests.' },
    { name: 'async / await', category: 'Async', syntax: 'async function load() { const data = await fetch(...); }', desc: 'Syntactic sugar for handling Promises cleanly.' },
    { name: 'localStorage', category: 'Storage', syntax: 'localStorage.setItem("user", JSON.stringify(data));', desc: 'Persistent browser key-value client storage.' },
    { name: 'JSON.parse / stringify', category: 'JSON', syntax: 'JSON.parse(str); JSON.stringify(obj);', desc: 'Serializes and parses JSON string representations.' }
  ],

  mysql: [
    { name: 'SELECT', category: 'Query', syntax: 'SELECT column1, column2 FROM users;', desc: 'Retrieves data from one or more database tables.' },
    { name: 'WHERE', category: 'Filter', syntax: 'SELECT * FROM products WHERE price < 50;', desc: 'Filters rows based on specified condition.' },
    { name: 'ORDER BY', category: 'Sorting', syntax: 'SELECT * FROM users ORDER BY created_at DESC;', desc: 'Sorts the result set ascending (ASC) or descending (DESC).' },
    { name: 'INSERT INTO', category: 'DML', syntax: 'INSERT INTO users (name, email) VALUES ("Affan", "affan@dev.com");', desc: 'Inserts new records into a table.' },
    { name: 'UPDATE', category: 'DML', syntax: 'UPDATE users SET xp = xp + 10 WHERE id = 1;', desc: 'Modifies existing records in a table.' },
    { name: 'DELETE FROM', category: 'DML', syntax: 'DELETE FROM sessions WHERE expired_at < NOW();', desc: 'Deletes existing records matching WHERE clause.' },
    { name: 'INNER JOIN', category: 'Joins', syntax: 'SELECT u.name, o.total FROM users u INNER JOIN orders o ON u.id = o.user_id;', desc: 'Returns records that have matching values in both tables.' },
    { name: 'LEFT JOIN', category: 'Joins', syntax: 'SELECT u.name, o.id FROM users u LEFT JOIN orders o ON u.id = o.user_id;', desc: 'Returns all rows from left table, plus matched right rows.' },
    { name: 'GROUP BY', category: 'Aggregate', syntax: 'SELECT country, COUNT(*) FROM customers GROUP BY country;', desc: 'Groups summary rows by common column values.' },
    { name: 'HAVING', category: 'Aggregate', syntax: 'SELECT country, COUNT(*) FROM customers GROUP BY country HAVING COUNT(*) > 5;', desc: 'Filters grouped data (like WHERE, but for aggregates).' },
    { name: 'PRIMARY KEY', category: 'DDL', syntax: 'CREATE TABLE users (id INT AUTO_INCREMENT PRIMARY KEY, ...);', desc: 'Uniquely identifies each record; no duplicate or NULL values.' },
    { name: 'CREATE INDEX', category: 'Performance', syntax: 'CREATE INDEX idx_user_email ON users(email);', desc: 'Creates an index to accelerate query lookup speeds.' }
  ],

  python: [
    { name: 'print()', category: 'I/O', syntax: 'print(f"Cyber Hero: {hero.name}")', desc: 'Prints formatted output to stdout.' },
    { name: 'def function():', category: 'Functions', syntax: 'def calculate_xp(level: int) -> int:\n    return level * 100', desc: 'Defines a named function with parameters and return value.' },
    { name: 'List Comprehension', category: 'Collections', syntax: 'squares = [x**2 for x in range(10) if x % 2 == 0]', desc: 'Concise syntax to filter and map iterables into a list.' },
    { name: 'Dictionary', category: 'Collections', syntax: 'player = {"name": "Affan", "xp": 1200, "rank": "Master"}', desc: 'Key-value mapping data structure.' },
    { name: 'Tuple', category: 'Collections', syntax: 'coordinates = (1920, 1080)', desc: 'Immutable, ordered sequence of items.' },
    { name: 'class OOP:', category: 'OOP', syntax: 'class Hero:\n    def __init__(self, name):\n        self.name = name', desc: 'Defines a class blueprint with constructor and methods.' },
    { name: 'try / except', category: 'Exceptions', syntax: 'try:\n    res = 10 / n\nexcept ZeroDivisionError:\n    res = 0', desc: 'Catches and handles runtime exceptions.' },
    { name: 'with open():', category: 'Files', syntax: 'with open("data.json", "r") as f:\n    data = json.load(f)', desc: 'Context manager that automatically closes files.' },
    { name: 'lambda', category: 'Functions', syntax: 'sort_by_xp = sorted(players, key=lambda p: p["xp"])', desc: 'Inline anonymous single-expression function.' },
    { name: 'import module', category: 'Modules', syntax: 'import math, random\nfrom datetime import datetime', desc: 'Imports modules and standard library packages.' }
  ],

  php: [
    { name: 'echo', category: 'Output', syntax: 'echo "<h1>Welcome to ByteVerse</h1>";', desc: 'Outputs one or more strings to the HTTP response.' },
    { name: '$variable', category: 'Variables', syntax: '$username = "Affan"; $total_xp = 500;', desc: 'Declares a variable starting with dollar sign ($).' },
    { name: '$_POST & $_GET', category: 'Superglobals', syntax: '$email = filter_input(INPUT_POST, "email", FILTER_SANITIZE_EMAIL);', desc: 'Superglobals holding incoming form and query data.' },
    { name: 'session_start()', category: 'Sessions', syntax: 'session_start(); $_SESSION["user_id"] = $user["id"];', desc: 'Initializes or resumes an active session.' },
    { name: 'PDO Connection', category: 'Database', syntax: '$pdo = new PDO("mysql:host=localhost;dbname=app", $user, $pass);', desc: 'Modern, secure abstraction for database interaction.' },
    { name: 'Prepared Statement', category: 'Security', syntax: '$stmt = $pdo->prepare("SELECT * FROM users WHERE id = ?");\n$stmt->execute([$id]);', desc: 'Prevents SQL injection attacks by separating SQL from data.' },
    { name: 'password_hash()', category: 'Security', syntax: '$hash = password_hash($password, PASSWORD_BCRYPT);', desc: 'Creates strong, salted cryptographic password hash.' },
    { name: 'htmlspecialchars()', category: 'Security', syntax: 'echo htmlspecialchars($input, ENT_QUOTES, "UTF-8");', desc: 'Escapes HTML entities to defend against XSS attacks.' },
    { name: 'class & __construct', category: 'OOP', syntax: 'class Warrior {\n  public function __construct(public string $name) {}\n}', desc: 'Object-oriented class with constructor property promotion.' }
  ],

  django: [
    { name: 'django-admin', category: 'CLI', syntax: 'django-admin startproject myproject', desc: 'Creates the core Django project root structure.' },
    { name: 'python manage.py', category: 'CLI', syntax: 'python manage.py startapp core\npython manage.py runserver', desc: 'Runs management commands against current project.' },
    { name: 'makemigrations', category: 'ORM', syntax: 'python manage.py makemigrations\npython manage.py migrate', desc: 'Generates migration files and updates database schema.' },
    { name: 'models.Model', category: 'ORM', syntax: 'class Post(models.Model):\n    title = models.CharField(max_length=200)', desc: 'Defines database table schema using Python classes.' },
    { name: 'Model.objects.all()', category: 'ORM', syntax: 'posts = Post.objects.filter(published=True).order_by("-date")', desc: 'ORM QuerySet for filtering and sorting records.' },
    { name: 'urls.py & path()', category: 'Routing', syntax: 'urlpatterns = [ path("posts/<int:id>/", views.post_detail, name="post-detail") ]', desc: 'Maps URL routes to Python view handler functions.' },
    { name: '{% extends %}', category: 'Templates', syntax: '{% extends "base.html" %}\n{% block content %}...{% endblock %}', desc: 'Template inheritance system in Django DTL.' },
    { name: '{{ variable }}', category: 'Templates', syntax: '<h1>Welcome, {{ user.username }}!</h1>', desc: 'Renders variable value from view context dictionary.' },
    { name: '{% csrf_token %}', category: 'Security', syntax: '<form method="post">{% csrf_token %}...</form>', desc: 'Injects hidden CSRF verification token for POST forms.' },
    { name: 'admin.site.register', category: 'Admin', syntax: 'from django.contrib import admin\nadmin.site.register(Post)', desc: 'Registers model with the automatic Django admin portal.' }
  ]
};
