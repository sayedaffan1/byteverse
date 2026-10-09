export const ACADEMY_CONTENT = {
  html: {
    title: 'HTML5: The Foundation of the Web',
    tagline: 'HyperText Markup Language gives structure and meaning to web content.',
    overview: 'HTML acts like the bones and blueprint of a building. It organizes text, images, buttons, and media into elements wrapped in tags like <h1>, <p>, and <button>.',
    sections: [
      {
        id: 'anatomy',
        title: '1. Anatomy of an HTML Element',
        content: `Every HTML tag usually has an opening tag, content, and a closing tag:
\`\`\`html
<p class="intro">Welcome to the ByteVerse!</p>
\`\`\`
- **Tag name**: \`p\` (paragraph).
- **Attribute**: \`class="intro"\` gives extra information to style or script the element.
- **Closing tag**: Always has a slash \`</p>\`.`,
        runnable: {
          code: `<h1>Hello Developer!</h1>
<p>HTML creates the <strong>content</strong> you see on every page.</p>
<button style="padding: 8px 16px; background: #00f2fe; color: #000; border-radius: 6px; font-weight: bold;">Click Me</button>`,
          type: 'html'
        }
      },
      {
        id: 'semantics',
        title: '2. Semantic HTML Elements',
        content: `Modern HTML uses tags that explain what the content is, not just how it looks:
- \`<header>\`: Logo, navigation, and top bar.
- \`<nav>\`: Navigation links.
- \`<main>\`: The primary content of the page.
- \`<article>\`: Standalone self-contained content (blog post, card).
- \`<section>\`: Group of related content.
- \`<footer>\`: Bottom links, copyright, author information.`,
        runnable: {
          code: `<header style="border-bottom: 1px solid #334155; padding-bottom: 8px; margin-bottom: 8px;">
  <span style="color: #00f2fe; font-weight: bold; font-size: 1.25rem;">ByteVerse Logo</span>
</header>
<main>
  <h3>Semantic Structure</h3>
  <p>Search engines and screen-readers rely on semantic tags for accessibility.</p>
</main>`,
          type: 'html'
        }
      },
      {
        id: 'forms',
        title: '3. Forms & Inputs',
        content: `Forms are the bridge between the frontend and backend servers.
- \`<form action="/submit" method="POST">\`: Wrapper container.
- \`<input type="text">\`: Text field.
- \`<input type="email">\`: Validates email addresses automatically.
- \`<input type="password">\`: Masks secret characters.
- \`<button type="submit">\`: Sends form payload to server.`,
        runnable: {
          code: `<form style="display: flex; flex-direction: column; gap: 8px; max-width: 280px;">
  <label style="font-size: 12px; color: #94a3b8;">Hero Name</label>
  <input type="text" placeholder="e.g. CyberNinja" style="padding: 6px 10px; border-radius: 4px; background: #1e293b; color: white; border: 1px solid #475569;" />
  <button type="button" style="background: #10b981; color: white; padding: 8px; border-radius: 4px; font-weight: bold;">Enroll in Academy</button>
</form>`,
          type: 'html'
        }
      }
    ],
    cheatsheet: [
      { tag: '<!DOCTYPE html>', meaning: 'Tells browser this is modern HTML5' },
      { tag: '<a>', meaning: 'Anchor hyperlink: <a href="https://...">link</a>' },
      { tag: '<img>', meaning: 'Image tag: <img src="cat.png" alt="description">' },
      { tag: '<ul> & <li>', meaning: 'Unordered list and list item' },
      { tag: '<div> & <span>', meaning: 'Generic block and inline wrappers' }
    ],
    pitfalls: [
      'Forgetting to close tags (e.g. <div> without a matching </div>).',
      'Missing the "alt" attribute on <img> tags, hurting SEO and accessibility.',
      'Using <div> for clickable buttons instead of the semantic <button> element.'
    ]
  },

  css: {
    title: 'CSS3: Cascading Style Sheets',
    tagline: 'Transform plain HTML into gorgeous, responsive, animated experiences.',
    overview: 'CSS styles the appearance: layout, colors, typography, spacing, and transitions. It matches HTML elements via selectors (tag, .class, #id).',
    sections: [
      {
        id: 'box-model',
        title: '1. The Box Model',
        content: `Every HTML element is a box composed of 4 layers:
1. **Content**: The text or image itself.
2. **Padding**: Transparent inner space inside the border.
3. **Border**: The stroke around padding.
4. **Margin**: Outer space separating this element from neighbors.`,
        runnable: {
          code: `<div style="background: #1e293b; border: 2px solid #00f2fe; padding: 16px; margin: 12px; border-radius: 8px; color: white; text-align: center;">
  <strong>I am a Box!</strong>
  <p style="font-size: 13px; color: #94a3b8; margin-top: 4px;">Padding inside, border around, margin outside.</p>
</div>`,
          type: 'html'
        }
      },
      {
        id: 'flexbox',
        title: '2. Modern Flexbox Layout',
        content: `Flexbox makes 1-dimensional layouts (rows or columns) effortless:
\`\`\`css
.container {
  display: flex;
  justify-content: space-between; /* horizontal alignment */
  align-items: center;            /* vertical alignment */
  gap: 16px;                      /* spacing between items */
}
\`\`\``,
        runnable: {
          code: `<div style="display: flex; justify-content: space-between; align-items: center; background: #0f172a; padding: 12px; border-radius: 8px; border: 1px dashed #00f2fe;">
  <span style="background: #ec4899; color: white; padding: 6px 12px; border-radius: 4px;">Item 1</span>
  <span style="background: #8b5cf6; color: white; padding: 6px 12px; border-radius: 4px;">Item 2</span>
  <span style="background: #3b82f6; color: white; padding: 6px 12px; border-radius: 4px;">Item 3</span>
</div>`,
          type: 'html'
        }
      },
      {
        id: 'css-grid',
        title: '3. CSS Grid',
        content: `CSS Grid is built for 2-dimensional layouts (both rows and columns simultaneously):
\`\`\`css
.grid-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
\`\`\``,
        runnable: {
          code: `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
  <div style="background: #1e293b; padding: 12px; text-align: center; border-radius: 4px; border: 1px solid #334155;">Col 1</div>
  <div style="background: #1e293b; padding: 12px; text-align: center; border-radius: 4px; border: 1px solid #334155;">Col 2</div>
  <div style="background: #1e293b; padding: 12px; text-align: center; border-radius: 4px; border: 1px solid #334155;">Col 3</div>
</div>`,
          type: 'html'
        }
      }
    ],
    cheatsheet: [
      { tag: 'display: flex', meaning: 'Enables flexible 1D row or column layout' },
      { tag: 'justify-content: center', meaning: 'Centers items along primary axis' },
      { tag: 'align-items: center', meaning: 'Centers items along cross axis' },
      { tag: 'border-radius', meaning: 'Rounds the corners of an element' },
      { tag: 'box-shadow', meaning: 'Adds depth or neon glow to a container' }
    ],
    pitfalls: [
      'Centering confusion: remember justify-content is main axis, align-items is cross axis.',
      'Overriding specificity: mixing inline styles, IDs, and classes without structure.',
      'Not setting box-sizing: border-box on your document.'
    ]
  },

  js: {
    title: 'JavaScript: The Web\'s Superpower',
    tagline: 'Add interactive logic, state management, animations, and dynamic calculations.',
    overview: 'JavaScript runs right inside the browser. It responds to clicks, fetches remote APIs, alters DOM elements, and computes logic in real time.',
    sections: [
      {
        id: 'variables',
        title: '1. Variables & Data Types',
        content: `In modern JS, always use \`const\` (default) and \`let\` (for values that change). Avoid legacy \`var\`:
\`\`\`javascript
const siteName = "ByteVerse"; // String
let userLevel = 1;            // Number
const isOnline = true;         // Boolean
const skills = ["HTML", "CSS", "JS"]; // Array
const player = { name: "Alex", xp: 450 }; // Object
\`\`\``,
        runnable: {
          code: `const playerName = "ByteWarrior";
let playerXP = 320;
playerXP += 100;
console.log(playerName + " now has " + playerXP + " XP!");`,
          type: 'js'
        }
      },
      {
        id: 'functions',
        title: '2. Arrow Functions & Callbacks',
        content: `Modern concise syntax for functions:
\`\`\`javascript
const calculateLevel = (xp) => {
  return Math.floor(xp / 100) + 1;
};
\`\`\``,
        runnable: {
          code: `const doubleScore = (score) => score * 2;
console.log("Doubled score of 50 is: " + doubleScore(50));`,
          type: 'js'
        }
      },
      {
        id: 'dom',
        title: '3. DOM Manipulation & Events',
        content: `Interact with page elements dynamically:
\`\`\`javascript
const btn = document.querySelector("#playBtn");
btn.addEventListener("click", () => {
  alert("Game Started!");
});
\`\`\``,
        runnable: {
          code: `const elements = ["HTML", "CSS", "JS", "Python"];
const upperList = elements.map(el => el.toUpperCase());
console.log("Transformed tech stack:", upperList.join(" -> "));`,
          type: 'js'
        }
      }
    ],
    cheatsheet: [
      { tag: 'const / let', meaning: 'Block-scoped immutable / mutable variables' },
      { tag: 'array.map(fn)', meaning: 'Transforms every item into a new array' },
      { tag: 'array.filter(fn)', meaning: 'Keeps only items that pass a test condition' },
      { tag: 'async / await', meaning: 'Handles asynchronous promises cleanly' },
      { tag: 'JSON.stringify / parse', meaning: 'Converts objects to strings and back' }
    ],
    pitfalls: [
      'Using "==" instead of strict equality "===".',
      'Trying to reassign a variable declared with "const".',
      'Forgetting that JavaScript arrays are zero-indexed (first item is at index 0).'
    ]
  },

  mysql: {
    title: 'MySQL: Relational Data Mastery',
    tagline: 'Organize, query, filter, and join structured relational databases.',
    overview: 'MySQL organizes information into relational tables made of columns and rows. It uses SQL (Structured Query Language) to store, fetch, and aggregate data securely.',
    sections: [
      {
        id: 'select',
        title: '1. Basic SELECT & WHERE Queries',
        content: `Retrieve data from a table with filters:
\`\`\`sql
SELECT username, email, level
FROM users
WHERE level >= 5
ORDER BY level DESC;
\`\`\``,
        runnable: {
          code: `SELECT name, role, xp FROM guild_members WHERE xp > 500 ORDER BY xp DESC;`,
          type: 'sql'
        }
      },
      {
        id: 'joins',
        title: '2. Table JOINs',
        content: `Relational databases split data into normalized tables. Use JOIN to combine them using foreign keys:
\`\`\`sql
SELECT users.username, orders.total_amount
FROM users
INNER JOIN orders ON users.id = orders.user_id;
\`\`\``,
        runnable: {
          code: `SELECT players.name, scores.game_title, scores.high_score 
FROM players 
JOIN scores ON players.id = scores.player_id;`,
          type: 'sql'
        }
      },
      {
        id: 'aggregate',
        title: '3. Aggregation & Grouping',
        content: `Calculate summaries like sums, averages, and counts:
\`\`\`sql
SELECT category, COUNT(*) as total_items, AVG(price) as avg_price
FROM products
GROUP BY category;
\`\`\``,
        runnable: {
          code: `SELECT language, COUNT(*) as solved_count, AVG(score) as avg_score 
FROM quest_logs 
GROUP BY language;`,
          type: 'sql'
        }
      }
    ],
    cheatsheet: [
      { tag: 'SELECT * FROM table', meaning: 'Fetches all rows and columns' },
      { tag: 'WHERE condition', meaning: 'Filters rows that match the condition' },
      { tag: 'ORDER BY col ASC/DESC', meaning: 'Sorts results ascending or descending' },
      { tag: 'JOIN ... ON ...', meaning: 'Links tables matching primary/foreign keys' },
      { tag: 'GROUP BY col', meaning: 'Combines rows with same values into summary rows' }
    ],
    pitfalls: [
      'Executing UPDATE or DELETE without a WHERE clause (modifies entire table!).',
      'Forgetting SQL injection risks (always use parameterized queries / prepared statements).',
      'Selecting SELECT * in production instead of explicitly naming required columns.'
    ]
  },

  python: {
    title: 'Python: Clean, Versatile & Powerful',
    tagline: 'Known for its elegant syntax, readable indentation, and immense standard library.',
    overview: 'Python is used in web backend development (Django, FastAPI), AI/Machine Learning, automation, and data science. Indentation defines code blocks instead of curly braces.',
    sections: [
      {
        id: 'syntax',
        title: '1. Variables & Clean Indentation',
        content: `In Python, spaces matter! 4 spaces per indent level define blocks:
\`\`\`python
player_name = "ShadowByte"
score = 88

if score >= 80:
    print(f"{player_name} unlocked Master Rank!")
else:
    print("Keep practicing!")
\`\`\``,
        runnable: {
          code: `user = "Alex"
hp = 100
inventory = ["Potion", "Sword", "Keycard"]

print(f"Player: {user} | HP: {hp}")
print("Inventory items:", len(inventory))`,
          type: 'python'
        }
      },
      {
        id: 'loops-lists',
        title: '2. Loops & List Comprehensions',
        content: `Iterate cleanly over lists and ranges:
\`\`\`python
# Classic loop
for num in range(1, 4):
    print(f"Countdown: {num}")

# List comprehension
squares = [x**2 for x in range(5)] # [0, 1, 4, 9, 16]
\`\`\``,
        runnable: {
          code: `languages = ["Python", "JavaScript", "HTML", "SQL"]
for rank, lang in enumerate(languages, 1):
    print(f"#{rank}: {lang}")`,
          type: 'python'
        }
      },
      {
        id: 'functions',
        title: '3. Functions & Default Arguments',
        content: `Define reusable functions with \`def\`:
\`\`\`python
def calculate_xp(quests_completed, bonus_multiplier=1.5):
    return int(quests_completed * 100 * bonus_multiplier)
\`\`\``,
        runnable: {
          code: `def greet(hero, title="Apprentice"):
    return f"Welcome, {title} {hero} to ByteVerse!"

print(greet("Zack"))
print(greet("Morgan", title="Grandmaster"))`,
          type: 'python'
        }
      }
    ],
    cheatsheet: [
      { tag: 'def func():', meaning: 'Defines a reusable function block' },
      { tag: 'f"Hello {name}"', meaning: 'f-string for string interpolation' },
      { tag: 'for item in items:', meaning: 'Clean loop through any iterable collection' },
      { tag: 'try / except', meaning: 'Handles runtime exceptions safely' },
      { tag: 'import math / os', meaning: 'Imports modules from standard library' }
    ],
    pitfalls: [
      'Mixing tabs and spaces for indentation causing IndentationError.',
      'Modifying a list while iterating over it.',
      'Using mutable default arguments like def add_item(item, list=[]) (use None instead).'
    ]
  },

  php: {
    title: 'PHP: Hypertext Preprocessor',
    tagline: 'The veteran server-side language powering WordPress, Wikipedia, and Laravel.',
    overview: 'PHP executes on the web server before the response reaches the browser. It receives form submissions, interacts with databases, manages user sessions, and renders dynamic HTML.',
    sections: [
      {
        id: 'php-basics',
        title: '1. PHP Tags & Server Processing',
        content: `PHP code is embedded in files with the \`<?php ... ?>\` tag:
\`\`\`php
<?php
  $siteTitle = "ByteVerse Platform";
  $totalUsers = 15000;
  echo "<h1>Welcome to $siteTitle</h1>";
?>
\`\`\``,
        runnable: {
          code: `<?php
  $user = "MasterCoder";
  $level = 42;
  echo "User: " . $user . " (Level " . $level . ")\\n";
  echo "Server Time: " . date("Y-m-d H:i:s");
?>`,
          type: 'php'
        }
      },
      {
        id: 'superglobals',
        title: '2. Superglobals: $_GET & $_POST',
        content: `PHP automatically organizes incoming HTTP requests into superglobal arrays:
- \`$_GET['id']\`: Values from URL query parameters (\`?id=10\`).
- \`$_POST['password']\`: Values securely submitted via HTTP POST forms.
- \`$_SESSION['user_id']\`: Retains logged-in user state across multiple page views.`,
        runnable: {
          code: `<?php
  // Simulating incoming $_POST form submission
  $_POST['username'] = "CyberKnight";
  $_POST['role'] = "Admin";

  if (!empty($_POST['username'])) {
    echo "Authenticated user: " . htmlspecialchars($_POST['username']);
  }
?>`,
          type: 'php'
        }
      }
    ],
    cheatsheet: [
      { tag: '<?php ... ?>', meaning: 'Delimits PHP code from standard HTML' },
      { tag: '$var = "value";', meaning: 'Variables always start with a dollar sign $' },
      { tag: 'echo $text;', meaning: 'Outputs strings to the HTTP response' },
      { tag: '$_SESSION', meaning: 'Holds user login & cart state across pages' },
      { tag: 'htmlspecialchars()', meaning: 'Sanitizes user input to prevent XSS attacks' }
    ],
    pitfalls: [
      'Missing the $ prefix when referencing variables.',
      'Echoing raw user input without htmlspecialchars() causing XSS vulnerability.',
      'Forgetting session_start() before reading or writing $_SESSION data.'
    ]
  },

  django: {
    title: 'Django: The Web Framework for Perfectionists',
    tagline: 'Batteries-included Python framework with built-in ORM, Auth, Admin, and Security.',
    overview: 'Django follows the MTV (Model-Template-View) design pattern. It handles URL routing, ORM database models, view controllers, and HTML templating seamlessly with high security out of the box.',
    sections: [
      {
        id: 'mtv',
        title: '1. The MTV Architecture',
        content: `1. **Model**: Defines database tables as Python classes (\`models.py\`).
2. **Template**: The user-facing HTML template with dynamic tags (\`{{ title }}\`).
3. **View**: The Python function or class that queries the model and renders the template (\`views.py\`).
4. **URL Conf**: Routes incoming URL paths to the matching view (\`urls.py\`).`,
        runnable: {
          code: `# urls.py
urlpatterns = [
    path('quest/<int:id>/', views.quest_detail, name='quest_detail'),
]

# views.py
def quest_detail(request, id):
    quest = Quest.objects.get(id=id)
    return render(request, 'quest.html', {'quest': quest})`,
          type: 'python'
        }
      },
      {
        id: 'orm',
        title: '2. Django ORM (Object-Relational Mapping)',
        content: `Query databases without writing raw SQL:
\`\`\`python
# Create
player = Player.objects.create(username="ByteHero", level=1)

# Read
top_players = Player.objects.filter(level__gte=10).order_by('-xp')[:5]

# Update
player.level += 1
player.save()
\`\`\``,
        runnable: {
          code: `# Django Model Example
class Achievement(models.Model):
    title = models.CharField(max_length=100)
    xp_reward = models.IntegerField(default=50)
    is_secret = models.BooleanField(default=False)

    def __str__(self):
        return self.title`,
          type: 'python'
        }
      }
    ],
    cheatsheet: [
      { tag: 'python manage.py runserver', meaning: 'Starts local Django development server' },
      { tag: 'python manage.py makemigrations', meaning: 'Prepares database schema changes' },
      { tag: 'python manage.py migrate', meaning: 'Applies migrations to database' },
      { tag: '{{ variable }}', meaning: 'Django template syntax to render data' },
      { tag: '{% for x in list %}', meaning: 'Django template loop block' }
    ],
    pitfalls: [
      'Forgetting to run makemigrations and migrate after editing models.py.',
      'Putting complex business logic inside templates instead of views or model methods.',
      'Not including the {% csrf_token %} tag in HTML POST forms.'
    ]
  }
};
