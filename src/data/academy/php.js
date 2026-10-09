export const PHP_CURRICULUM = {
  title: 'PHP: Server-Side Hypertext Architecture (0% to 10,000,000%)',
  tagline: 'From variables and form handling to modern OOP, PDO prepared statements, and MVC frameworks.',
  overview: 'PHP is the engine behind over 75% of web servers, powering WordPress, Wikipedia, Slack\'s backend, and modern frameworks like Laravel and Symfony. Learn server requests, session lifecycles, and bulletproof security.',
  modules: [
    {
      level: '0% Beginner',
      levelCode: 'beginner',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      topics: [
        {
          id: 'php-syntax-variables',
          title: 'PHP Tags, Syntax & String Concatenation',
          summary: 'PHP code lives inside <?php ... ?> tags. Variables always start with a dollar sign ($) and string concatenation uses a dot (.) instead of plus (+).',
          keyPoints: [
            'Variables start with $ (e.g., $username = "Neo";).',
            'String concatenation uses the dot operator: "Hello " . $username . "!".',
            'echo outputs strings directly to the HTTP response stream.'
          ],
          code: `<?php
  $site_name = "ByteVerse Platform";
  $version = 3.0;
  $is_online = true;

  echo "Welcome to " . $site_name . " (v" . $version . ")\\n";
  echo "Server status: " . ($is_online ? "ONLINE" : "OFFLINE");
?>`,
          type: 'php',
          quiz: {
            question: 'Which operator is used to concatenate two strings in PHP?',
            options: ['+', '&', '.', 'concat()'],
            correct: 2,
            explanation: 'In PHP, the period (.) operator concatenates strings.'
          }
        },
        {
          id: 'php-arrays-types',
          title: 'Indexed & Associative Arrays',
          summary: 'PHP arrays are versatile hash maps that can act as traditional indexed lists or key-value dictionaries.',
          keyPoints: [
            'Indexed array: $skills = ["HTML", "CSS", "PHP"];',
            'Associative array: $user = ["name" => "Alex", "role" => "Admin"];',
            'Iterate with foreach ($array as $key => $value).'
          ],
          code: `<?php
  $player = [
    "username" => "CyberSamurai",
    "level" => 25,
    "xp" => 5400
  ];

  foreach ($player as $key => $val) {
    echo ucfirst($key) . ": " . $val . "\\n";
  }
?>`,
          type: 'php',
          quiz: {
            question: 'How do you create an associative array in PHP?',
            options: ['["key": "val"]', '["key" => "val"]', '{"key": "val"}', 'array("key" -> "val")'],
            correct: 1,
            explanation: 'Associative arrays in PHP use the fat comma arrow (=>) to map keys to values.'
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
          id: 'php-superglobals-forms',
          title: 'Superglobals: $_GET, $_POST & Form Security',
          summary: 'Receive form submissions safely, sanitize inputs against Cross-Site Scripting (XSS), and inspect server metadata with $_SERVER.',
          keyPoints: [
            '$_GET parses URL query parameters (?search=term).',
            '$_POST retrieves data sent in the HTTP POST body.',
            'NEVER echo raw user inputs! Always use htmlspecialchars($input, ENT_QUOTES, "UTF-8") to prevent XSS attacks.'
          ],
          code: `<?php
  // Safe form input processing
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = filter_input(INPUT_POST, 'email', FILTER_VALIDATE_EMAIL);
    $comment = htmlspecialchars($_POST['comment'] ?? '', ENT_QUOTES, 'UTF-8');

    if ($email) {
      echo "Valid feedback recorded from: " . $email;
    }
  }
?>`,
          type: 'php',
          quiz: {
            question: 'Which function neutralizes malicious HTML/JS injected by attackers to prevent XSS in PHP?',
            options: ['strip_all()', 'htmlspecialchars()', 'clean_input()', 'urlencode()'],
            correct: 1,
            explanation: 'htmlspecialchars() converts special characters like < and > into safe HTML entities.'
          }
        },
        {
          id: 'php-sessions-cookies',
          title: 'Sessions & Authentication State',
          summary: 'Persist logged-in user credentials and shopping carts across page transitions using server-side $_SESSION.',
          keyPoints: [
            'session_start() must be invoked at the very beginning of the script before any HTML is sent.',
            'Sessions store state securely on the server; the client only holds an encrypted session cookie (PHPSESSID).',
            'session_destroy() logs out the user and clears state.'
          ],
          code: `<?php
  session_start();

  // Store user login state
  $_SESSION['user_id'] = 42;
  $_SESSION['role'] = 'Grandmaster';

  echo "Session active for User #" . $_SESSION['user_id'];
?>`,
          type: 'php',
          quiz: {
            question: 'What rule must you follow before reading or writing $_SESSION in a PHP file?',
            options: ['Include the database', 'Call session_start() before any output is sent', 'Set a password', 'Only run on Linux'],
            correct: 1,
            explanation: 'session_start() must be called before any headers or output are sent to the browser.'
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
          id: 'php-pdo-prepared-statements',
          title: 'PDO & Prepared Statements (SQL Injection Immunity)',
          summary: 'Connect to databases using PHP Data Objects (PDO) and utilize parameterized prepared statements to eliminate SQL Injection vulnerabilities completely.',
          keyPoints: [
            'PDO is an abstraction layer supporting MySQL, PostgreSQL, SQLite, and Oracle.',
            'Prepared statements send SQL syntax and parameter data separately to the database engine.',
            'User input is never interpreted as executable SQL, completely neutralizing SQL injection.'
          ],
          code: `<?php
  // PDO Database Connection & Parameterized Query
  $pdo = new PDO("mysql:host=localhost;dbname=byteverse;charset=utf8mb4", "db_user", "secret_pass", [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC
  ]);

  $stmt = $pdo->prepare("SELECT id, username, xp FROM users WHERE email = :email");
  $stmt->execute(['email' => 'alex@byteverse.dev']);
  $user = $stmt->fetch();
?>`,
          type: 'php',
          quiz: {
            question: 'Why do PDO prepared statements eliminate SQL Injection attacks?',
            options: ['They encrypt the internet', 'The database engine compiles the SQL query structure separately from the user data', 'They delete dangerous strings', 'They only work on integers'],
            correct: 1,
            explanation: 'Because SQL syntax is parsed and compiled before parameter values are injected, input can never alter query logic.'
          }
        },
        {
          id: 'php-oop-namespaces',
          title: 'Modern OOP: Classes, Interfaces & Namespaces',
          summary: 'Build scalable modern software with PHP 8+ object-oriented principles, constructor property promotion, strict typing, interfaces, and namespaces.',
          keyPoints: [
            'declare(strict_types=1); enforces strict type checking.',
            'Constructor promotion: public function __construct(public string $name) {} eliminates boilerplate.',
            'Namespaces prevent class name collisions across third-party Composer packages.'
          ],
          code: `<?php
  namespace App\\Models;

  class Player {
    public function __construct(
      public readonly string $username,
      private int $score = 0
    ) {}

    public function addScore(int $points): int {
      $this->score += $points;
      return $this->score;
    }
  }

  $player = new Player("CyberValkyrie");
  echo "Player: " . $player->username;
?>`,
          type: 'php',
          quiz: {
            question: 'What is the purpose of namespaces in modern PHP?',
            options: ['To translate PHP into English', 'To prevent naming collisions between different classes and libraries', 'To rename files on disk', 'To speed up CPU processing'],
            correct: 1,
            explanation: 'Namespaces organize code into logical hierarchies and prevent conflicts between identical class names.'
          }
        }
      ]
    }
  ]
};
