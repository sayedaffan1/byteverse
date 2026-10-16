export const PHP_W3_LESSONS = [
  {
    "id": "php_home",
    "category": "PHP Tutorial",
    "title": "PHP HOME",
    "summary": "PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.",
    "eli5": {
      "story": "Imagine walking into a bakery restaurant! You sit at a table in the front (the browser). You see a menu and order a chocolate birthday cake with custom candles. The secret kitchen in the back is PHP! The chef bakes the fresh cake according to your order, puts it on a plate, and sends it out to your table! You never touch the kitchen oven; PHP does all the cooking safely behind closed doors.",
      "analogy": "👨‍🍳 The Restaurant Kitchen Chef: PHP works on the server to cook up dynamic HTML web pages before sending them to your screen.",
      "rules": [
        "PHP code runs on the server computer, NOT in the browser.",
        "Starts with <?php and ends with ?>.",
        "Variables always start with a dollar sign $ (like $money or $order)."
      ]
    },
    "body": "PHP is an acronym for \"PHP: Hypertext Preprocessor\".\nPHP is a widely-used, open source scripting language.\nPHP scripts are executed on the server.\nPHP powers over 75% of web servers, including WordPress and Wikipedia.",
    "tryItCode": "<!DOCTYPE html>\n<html>\n<body>\n\n<?php\n$chef = \"Affan Sayed\";\necho \"Chef $chef is cooking your dynamic webpage on the server!\";\n?>\n\n</body>\n</html>",
    "codeType": "php",
    "notes": "PHP files have a default file extension of \".php\" and can contain text, HTML, CSS, JavaScript, and PHP code.",
    "exercise": {
      "question": "What does PHP stand for?",
      "options": [
        "PHP: Hypertext Preprocessor",
        "Private Home Page",
        "Personal Hypertext Processor",
        "Programmed Hypertext Parser"
      ],
      "correct": 0,
      "hint": "It is a recursive acronym."
    },
    "referenceTable": [
      {
        "item": "echo",
        "description": "Outputs one or more strings"
      },
      {
        "item": "$variable",
        "description": "Every PHP variable must begin with a dollar sign"
      },
      {
        "item": "session_start()",
        "description": "Starts or resumes a user session"
      }
    ]
  },
  {
    "id": "php_syntax",
    "category": "PHP Tutorial",
    "title": "PHP Syntax & Echo",
    "summary": "A PHP script can be placed anywhere in the document. A PHP script starts with <?php and ends with ?>.",
    "eli5": {
      "story": "Imagine writing in a secret diary with invisible ink! Whenever you want the diary to speak out loud to the world, you shout: \"echo Hello World!\" In PHP, echo is the megaphone that shouts words onto the webpage for visitors to read.",
      "analogy": "📢 The Megaphone: echo \"Hello!\" tells the server to shout words straight into the HTML page.",
      "rules": [
        "Open PHP with <?php and close with ?>.",
        "Every single PHP statement must end with a semicolon ; !",
        "echo is faster than print and can output text and HTML."
      ]
    },
    "body": "### Basic PHP Syntax:\n```php\n<?php\n// PHP code goes here\necho \"Hello World!\";\n?>\n```\n\n### Comments in PHP:\n- Single line: `// comment` or `# comment`\n- Multi-line: `/* comment */`\n\n### Case Sensitivity:\nIn PHP, keywords (e.g. `if`, `else`, `while`, `echo`), classes, and functions are NOT case-sensitive.\n**However**, all variable names ARE case-sensitive! (`$color` is different from `$Color`).",
    "tryItCode": "<?php\n// Comments help document your server code\necho \"<h1>Welcome to Server-Side PHP!</h1>\";\necho \"<p>PHP generated this HTML heading on the server.</p>\";\n\n$color = \"neon-blue\";\n$Color = \"laser-green\"; // Different variable!\necho \"Color 1: $color | Color 2: $Color\";\n?>",
    "codeType": "php",
    "tips": "If a file contains only PHP code, it is best practice to omit the closing ?> tag to avoid accidental whitespace issues.",
    "exercise": {
      "question": "Which PHP statement is commonly used to output text to the browser screen?",
      "options": [
        "print_screen",
        "echo",
        "out",
        "display"
      ],
      "correct": 1,
      "hint": "Four letters: echo."
    }
  },
  {
    "id": "php_variables",
    "category": "PHP Fundamentals",
    "title": "PHP Variables & String Concatenation",
    "summary": "In PHP, a variable starts with the $ sign, followed by the name of the variable. Strings are joined with a dot (.) operator.",
    "eli5": {
      "story": "Have you ever played with toy money with dollar signs on it? In PHP, every single variable is super wealthy: they all wear a dollar sign necklace ($name, $score, $coins)! And to glue two words together, PHP uses a tiny dot (.) like a dab of craft glue!",
      "analogy": "💵 The Dollar Sign Necklace: Every variable wears a $ badge; the dot (.) is craft glue joining words together.",
      "rules": [
        "Every variable name starts with $.",
        "Use the dot operator . to concatenate strings ($first . \" \" . $last).",
        "Double quotes \"$name\" automatically expand variables inside!"
      ]
    },
    "body": "### Rules for PHP Variables:\n- A variable starts with the `$` sign, followed by the name.\n- A variable name must start with a letter or underscore.\n- A variable name cannot start with a number.\n- Variable names are case-sensitive (`$age` and `$AGE` are two different variables).\n\n### String Concatenation:\nIn PHP, string concatenation uses the dot (`.`) operator, NOT the plus (`+`) sign:\n```php\n$greeting = \"Hello \" . $name . \"!\";\n```",
    "tryItCode": "<?php\n$heroName = \"Affan Sayed\";\n$level = 42;\n$rank = \"Grandmaster\";\n\n// String concatenation using dot (.)\n$announcement = \"Hero: \" . $heroName . \" (Level \" . $level . \") - \" . $rank;\necho $announcement . \"<br>\";\n\n// Double quotes variable expansion\necho \"Welcome back, $heroName! Your rank is $rank.\";\n?>",
    "codeType": "php",
    "notes": "In double quotes \"...\", variables are parsed and replaced with their values. In single quotes '...', text is printed literally as written.",
    "exercise": {
      "question": "Which operator is used to concatenate two strings together in PHP?",
      "options": [
        "Plus (+)",
        "Dot (.)",
        "Ampersand (&)",
        "Comma (,)"
      ],
      "correct": 1,
      "hint": "PHP uses the dot (.) character."
    }
  },
  {
    "id": "php_conditionals",
    "category": "PHP Fundamentals",
    "title": "PHP If...Else & Loops",
    "summary": "Conditional statements are used to perform different actions based on different conditions. Loops execute code repeatedly.",
    "eli5": {
      "story": "Imagine a bouncer at a cyber party door! The bouncer asks: \"Do you have VIP pass ($vip == true)?\" IF yes: \"Enter the VIP lounge!\" ELSE IF: \"Are you over 18?\" ELSE: \"Sorry, please wait in line!\" PHP checks conditions step-by-step just like that bouncer.",
      "analogy": "🚪 The Club Bouncer: if / elseif / else lets PHP decide who gets in and who gets denied.",
      "rules": [
        "if (condition) { ... } elseif (condition) { ... } else { ... }.",
        "foreach ($array as $item) loops over items easily.",
        "switch ($track) handles multiple choices cleanly."
      ]
    },
    "body": "### The if...elseif...else Statement:\n```php\nif ($score >= 90) {\n  echo \"Grade: A\";\n} elseif ($score >= 75) {\n  echo \"Grade: B\";\n} else {\n  echo \"Grade: C\";\n}\n```\n\n### Foreach Loop (Great for Arrays):\n```php\n$languages = [\"HTML\", \"CSS\", \"JS\", \"PHP\"];\nforeach ($languages as $lang) {\n  echo \"Track: $lang <br>\";\n}\n```",
    "tryItCode": "<?php\n$playerScore = 88;\n\nif ($playerScore >= 90) {\n  echo \"🏆 Rank: Master Architect!<br>\";\n} elseif ($playerScore >= 75) {\n  echo \"⭐ Rank: Senior Developer!<br>\";\n} else {\n  echo \"🌱 Rank: Cadet in Training!<br>\";\n}\n\necho \"<br><strong>Enrolled Tracks:</strong><br>\";\n$tracks = [\"HTML5\", \"CSS3\", \"JavaScript\", \"PHP 8.2\"];\nforeach ($tracks as $index => $track) {\n  echo \"#\" . ($index + 1) . \" \" . $track . \"<br>\";\n}\n?>",
    "codeType": "php",
    "tips": "Use the foreach loop for iterating over arrays in PHP. It prevents off-by-one errors common in regular for loops!",
    "exercise": {
      "question": "Which loop is specifically designed for iterating through elements in an array in PHP?",
      "options": [
        "while",
        "do...while",
        "foreach",
        "repeat"
      ],
      "correct": 2,
      "hint": "It loops \"for each\" item."
    }
  },
  {
    "id": "php_arrays",
    "category": "PHP Data Structures",
    "title": "PHP Arrays: Indexed & Associative",
    "summary": "An array stores multiple values in one single variable. PHP supports indexed, associative, and multidimensional arrays.",
    "eli5": {
      "story": "Imagine a row of mailboxes at an apartment building! An indexed mailbox has simple numbers: 0, 1, 2. But an associative mailbox has nameplates: [\"boss\" => \"Affan\", \"designer\" => \"Sarah\", \"coder\" => \"Alex\"]! Associative arrays let you look up people by their name instead of a number.",
      "analogy": "📬 The Mailbox Nameplates: Indexed arrays use numbers (0, 1); Associative arrays use descriptive key names (\"name\" => \"Affan\").",
      "rules": [
        "Indexed array: $fruits = [\"Apple\", \"Banana\", \"Orange\"].",
        "Associative array: $user = [\"name\" => \"Affan\", \"role\" => \"Admin\"].",
        "Access associative items by key: $user[\"name\"]."
      ]
    },
    "body": "### 1. Indexed Arrays:\nArrays with a numeric index (starts at 0):\n```php\n$cars = [\"Tesla\", \"BMW\", \"Toyota\"];\necho $cars[0]; // Tesla\n```\n\n### 2. Associative Arrays:\nArrays that use named keys that you assign to them:\n```php\n$developer = [\n  \"name\" => \"Affan Sayed\",\n  \"project\" => \"ByteVerse\",\n  \"rating\" => 5.0\n];\necho $developer[\"name\"]; // Affan Sayed\n```",
    "tryItCode": "<?php\n// Associative array definition\n$profile = [\n  \"username\" => \"Affan Sayed\",\n  \"role\" => \"Lead Architect\",\n  \"level\" => 99,\n  \"status\" => \"Online\"\n];\n\necho \"User: \" . $profile[\"username\"] . \"<br>\";\necho \"Role: \" . $profile[\"role\"] . \"<br>\";\necho \"Account Status: \" . $profile[\"status\"] . \"<br>\";\n\n// Adding a new key\n$profile[\"badges\"] = 12;\necho \"Unlocked Badges: \" . $profile[\"badges\"];\n?>",
    "codeType": "php",
    "notes": "The arrow operator => (double arrow) is used to assign values to keys in associative arrays.",
    "exercise": {
      "question": "Which operator is used to associate a key with a value in a PHP associative array?",
      "options": [
        "->",
        "=>",
        ":",
        "="
      ],
      "correct": 1,
      "hint": "The \"fat arrow\": =>"
    }
  },
  {
    "id": "php_functions",
    "category": "PHP Functions",
    "title": "PHP Custom Functions",
    "summary": "A function is a block of statements that can be used repeatedly in a program. PHP has over 1,000 built-in functions, plus user-defined functions.",
    "eli5": {
      "story": "Imagine an automatic coffee machine with a red button labeled \"Make Cappuccino\"! Every time you press that button, the machine measures coffee beans, steams milk, pours it into a cup, and sprinkles cinnamon. You don't have to explain how to make cappuccino each time; you just call the function!",
      "analogy": "☕ The Coffee Machine: Define the steps once inside function makeCoffee(), then call it anytime you want a fresh cup.",
      "rules": [
        "function functionName($param) { return $result; }.",
        "Function names are NOT case-sensitive in PHP.",
        "Use type declarations like function add(int $a, int $b): int for bulletproof code."
      ]
    },
    "body": "### Creating a Function:\n```php\nfunction calculateTax(float $subtotal, float $rate = 0.08): float {\n  return $subtotal * $rate;\n}\n\n$tax = calculateTax(100.00); // 8.00\n```\n\n### Default Parameter Values:\nIf you call a function without arguments, it uses the default value specified in the parameter definition.",
    "tryItCode": "<?php\n// Custom calculation function with default argument\nfunction calculateXP(int $gamesWon, int $bonusPerWin = 50): int {\n  $base = $gamesWon * 100;\n  return $base + ($gamesWon * $bonusPerWin);\n}\n\n$p1Score = calculateXP(3);      // Uses default 50 bonus\n$p2Score = calculateXP(5, 100);  // Custom 100 bonus\n\necho \"Player 1 XP (3 wins): $p1Score XP<br>\";\necho \"Player 2 XP (5 wins with super bonus): $p2Score XP\";\n?>",
    "codeType": "php",
    "tips": "Use strict types by adding declare(strict_types=1); at the very top of your PHP script for enterprise-grade type safety.",
    "exercise": {
      "question": "Which keyword is used to declare a custom function in PHP?",
      "options": [
        "def",
        "fun",
        "function",
        "fn"
      ],
      "correct": 2,
      "hint": "function myFunction() { ... }"
    }
  },
  {
    "id": "php_forms",
    "category": "PHP Forms",
    "title": "PHP Form Handling & $_POST Security",
    "summary": "The PHP superglobals $_GET and $_POST are used to collect form-data safely and securely.",
    "eli5": {
      "story": "When you mail a secret birthday invitation in a sealed envelope, nobody walking past can see what is written inside. That sealed envelope is an HTTP POST request! The PHP mail clerk receives the envelope, opens it, and reads your $_POST[\"guest_name\"] safely.",
      "analogy": "✉️ The Sealed Envelope: $_POST delivers your passwords and forms securely without showing them in the web address bar.",
      "rules": [
        "$_POST reads secret inputs from submitted forms.",
        "htmlspecialchars() washes the input so naughty attackers can't inject viruses.",
        "Never trust raw input without sanitizing it first!"
      ]
    },
    "body": "### The $_POST Method\nInformation sent from a form with the POST method is invisible to others (all names/values are embedded within the body of the HTTP request).\n\n### The $_GET Method\nInformation sent from a form with the GET method is visible to everyone (all variable names and values are displayed in the URL query string: `?name=value`).",
    "tryItCode": "<?php\n// Simulating incoming form submission\n$_POST['username'] = \"Affan Sayed\";\n$_POST['role'] = \"Grandmaster Developer\";\n\n$name = htmlspecialchars($_POST['username']);\n$role = htmlspecialchars($_POST['role']);\n\necho \"Welcome \" . $name . \"!<br>\";\necho \"Your rank is: \" . $role;\n?>",
    "codeType": "php",
    "tips": "Use POST when updating data, creating records, or submitting passwords.",
    "exercise": {
      "question": "Which PHP function converts special HTML characters to prevent XSS attacks?",
      "options": [
        "strip_tags()",
        "htmlspecialchars()",
        "clean_xss()",
        "filter_html()"
      ],
      "correct": 1,
      "hint": "Converts < and > into safe entities."
    }
  },
  {
    "id": "php_sessions_cookies",
    "category": "PHP Advanced",
    "title": "PHP Sessions & Cookies (User Login)",
    "summary": "A session is a way to store information (in variables) to be used across multiple pages. Unlike a cookie, the information is not stored on the user's computer.",
    "eli5": {
      "story": "Imagine going to an amusement park! At the entrance gate, they strap a waterproof VIP wristband onto your wrist. Whenever you walk up to a roller coaster, the guard looks at your wristband and says: \"Welcome VIP!\" In PHP, that wristband is a Session: you log in once, and the server remembers you on every page you visit!",
      "analogy": "🎟️ The VIP Wristband: session_start() gives the user a session token so the website remembers their login state across all pages.",
      "rules": [
        "Always call session_start() at the very top before any HTML output.",
        "Store session data in the superglobal array $_SESSION[\"user_id\"] = 42.",
        "session_destroy() logs the user out and wipes the session."
      ]
    },
    "body": "### Working with PHP Sessions:\n1. **Start the session**: `session_start();` (must be the first thing in your document).\n2. **Set session variables**: `$_SESSION[\"favcolor\"] = \"green\";`\n3. **Read session variables**: `echo $_SESSION[\"favcolor\"];`\n4. **Destroy a session**: `session_unset(); session_destroy();`\n\n### Sessions vs Cookies:\n- **Sessions**: Stored securely on the server; client only holds a session cookie ID.\n- **Cookies**: Stored directly on the client machine via `setcookie()`.",
    "tryItCode": "<?php\n// Simulating PHP session management\n$mockSession = [];\n\n// Step 1: User logs in\n$mockSession[\"user_id\"] = 101;\n$mockSession[\"username\"] = \"Affan Sayed\";\n$mockSession[\"logged_in_at\"] = date(\"Y-m-d H:i:s\");\n\n// Step 2: Checking authentication state\nif (isset($mockSession[\"user_id\"])) {\n  echo \"✅ User is authenticated!<br>\";\n  echo \"Welcome back, \" . $mockSession[\"username\"] . \"!<br>\";\n  echo \"Session Timestamp: \" . $mockSession[\"logged_in_at\"];\n} else {\n  echo \"🔒 Please log in to view this page.\";\n}\n?>",
    "codeType": "php",
    "notes": "Session data is encrypted and cannot be tampered with by the user, making it ideal for authentication tokens and shopping carts.",
    "exercise": {
      "question": "Which function must be called before using or accessing $_SESSION variables in PHP?",
      "options": [
        "start_session()",
        "session_start()",
        "init_session()",
        "session_begin()"
      ],
      "correct": 1,
      "hint": "session_start();"
    }
  },
  {
    "id": "php_mysql_connect",
    "category": "PHP Database",
    "title": "PHP & MySQL Database Connection (PDO)",
    "summary": "PHP 5 and later can work with a MySQL database using MySQLi extension or PDO (PHP Data Objects).",
    "eli5": {
      "story": "Imagine you are a detective with a walkie-talkie connecting you to a giant national archive vault! You push the button and say: \"Please find record #77!\" That walkie-talkie is PDO. It safely asks the database questions without letting spies tamper with the message!",
      "analogy": "📻 The Encrypted Walkie-Talkie: PDO prepared statements protect your database against SQL injection attacks.",
      "rules": [
        "PDO works with 12 different database types (MySQL, PostgreSQL, SQLite, etc.).",
        "Always use Prepared Statements to prevent SQL injection hacks.",
        "$stmt->execute([\"id\" => 1]) sends user input safely separated from the SQL code!"
      ]
    },
    "body": "### Connecting with PDO (Best Practice):\n```php\ntry {\n  $pdo = new PDO(\"mysql:host=localhost;dbname=byteverse\", \"root\", \"password\");\n  $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);\n  \n  // Prepared Statement (100% Safe from SQL Injection)\n  $stmt = $pdo->prepare(\"SELECT * FROM users WHERE email = :email\");\n  $stmt->execute(['email' => $email]);\n  $user = $stmt->fetch();\n} catch (PDOException $e) {\n  echo \"Connection failed: \" . $e->getMessage();\n}\n```",
    "tryItCode": "<?php\n// Simulating secure PDO Prepared Statement\n$query = \"SELECT username, role, xp FROM users WHERE id = :id\";\n$parameters = [\":id\" => 1];\n\necho \"Prepared SQL Query: $query<br>\";\necho \"Safely bound parameter: :id => \" . $parameters[\":id\"] . \"<br><br>\";\necho \"Query Result (Mock Database):<br>\";\necho \"--------------------------------<br>\";\necho \"Affan Sayed | Grandmaster | 9999 XP\";\n?>",
    "codeType": "php",
    "tips": "Never concatenate raw variables directly into SQL queries! Always use PDO prepared statements with bind parameters.",
    "exercise": {
      "question": "Why should you always use Prepared Statements when querying databases with PHP?",
      "options": [
        "Makes queries 10x faster",
        "Prevents SQL Injection attacks",
        "Saves disk space",
        "Required by HTML"
      ],
      "correct": 1,
      "hint": "It isolates data from executable SQL commands."
    }
  },
  {
    "id": "php_oop",
    "category": "PHP Advanced",
    "title": "PHP Object-Oriented Programming (Classes)",
    "summary": "From PHP 5 onwards, PHP supports full Object-Oriented Programming (OOP) with classes, objects, inheritance, and access modifiers.",
    "eli5": {
      "story": "Imagine you have a plastic cookie cutter shaped like a star. The cookie cutter is the Class. Every time you press it into dough, you get a real edible star cookie! The star cookie is the Object. You can bake 100 cookies from that single cutter!",
      "analogy": "⭐ The Cookie Cutter: A Class is the blueprint/cookie cutter; an Object is the real baked cookie created with \"new Cookie()\".",
      "rules": [
        "class Hero { public $name; } defines the blueprint.",
        "$player = new Hero() bakes a real object from the class.",
        "__construct() runs automatically when an object is born!"
      ]
    },
    "body": "### OOP Principles in PHP:\n- **Class**: Blueprint for objects.\n- **Object**: An instance of a class.\n- **Constructor**: `__construct()` initializes properties when an object is created.\n- **Access Modifiers**:\n  - `public`: Accessible from everywhere.\n  - `protected`: Accessible within class and child classes.\n  - `private`: Accessible ONLY inside the class itself.",
    "tryItCode": "<?php\nclass Player {\n  public $username;\n  public $level;\n\n  public function __construct($name, $lvl = 1) {\n    $this->username = $name;\n    $this->level = $lvl;\n  }\n\n  public function levelUp() {\n    $this->level++;\n    return $this->username . \" reached Level \" . $this->level . \"! 🎉\";\n  }\n}\n\n$hero = new Player(\"Affan Sayed\", 98);\necho \"Player created: \" . $hero->username . \" (LVL \" . $hero->level . \")<br>\";\necho $hero->levelUp();\n?>",
    "codeType": "php",
    "notes": "OOP makes large codebases modular, reusable, testable, and clean.",
    "exercise": {
      "question": "Which special method in a PHP class is called automatically when an object is instantiated?",
      "options": [
        "__init__()",
        "__construct()",
        "__start()",
        "__create()"
      ],
      "correct": 1,
      "hint": "Two underscores: __construct()"
    }
  }
];
