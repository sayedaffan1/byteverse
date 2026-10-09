export const PHP_W3_LESSONS = [
  {
    id: 'php_home',
    category: 'PHP Tutorial',
    title: 'PHP HOME',
    summary: 'PHP is a server scripting language, and a powerful tool for making dynamic and interactive Web pages.',
    eli5: {
      story: 'Imagine walking into a bakery restaurant! You sit at a table in the front (the browser). You see a menu and order a chocolate birthday cake with custom candles. The secret kitchen in the back is PHP! The chef bakes the fresh cake according to your order, puts it on a plate, and sends it out to your table! You never touch the kitchen oven; PHP does all the cooking safely behind closed doors.',
      analogy: '👨‍🍳 The Restaurant Kitchen Chef: PHP works on the server to cook up dynamic HTML web pages before sending them to your screen.',
      rules: [
        'PHP code runs on the server computer, NOT in the browser.',
        'Starts with <?php and ends with ?>.',
        'Variables always start with a dollar sign $ (like $money or $order).'
      ]
    },
    body: `PHP is an acronym for "PHP: Hypertext Preprocessor".
PHP is a widely-used, open source scripting language.
PHP scripts are executed on the server.
PHP powers over 75% of web servers, including WordPress and Wikipedia.`,
    tryItCode: `<!DOCTYPE html>
<html>
<body>

<?php
$chef = "Affan Sayed";
echo "Chef $chef is cooking your dynamic webpage on the server!";
?>

</body>
</html>`,
    codeType: 'php',
    notes: 'PHP files have a default file extension of ".php" and can contain text, HTML, CSS, JavaScript, and PHP code.',
    exercise: {
      question: 'What does PHP stand for?',
      options: ['PHP: Hypertext Preprocessor', 'Private Home Page', 'Personal Hypertext Processor', 'Programmed Hypertext Parser'],
      correct: 0,
      hint: 'It is a recursive acronym.'
    },
    referenceTable: [
      { item: 'echo', description: 'Outputs one or more strings' },
      { item: '$variable', description: 'Every PHP variable must begin with a dollar sign' },
      { item: 'session_start()', description: 'Starts or resumes a user session' }
    ]
  },
  {
    id: 'php_forms',
    category: 'PHP Forms',
    title: 'PHP Form Handling & $_POST',
    summary: 'The PHP superglobals $_GET and $_POST are used to collect form-data.',
    eli5: {
      story: 'When you mail a secret birthday invitation in a sealed envelope, nobody walking past can see what is written inside. That sealed envelope is an HTTP POST request! The PHP mail clerk receives the envelope, opens it, and reads your $_POST["guest_name"] safely.',
      analogy: '✉️ The Sealed Envelope: $_POST delivers your passwords and forms securely without showing them in the web address bar.',
      rules: [
        '$_POST reads secret inputs from submitted forms.',
        'htmlspecialchars() washes the input so naughty attackers can\'t inject viruses.',
        'Never trust raw input without sanitizing it first!'
      ]
    },
    body: `### The $_POST Method
Information sent from a form with the POST method is invisible to others (all names/values are embedded within the body of the HTTP request).

### The $_GET Method
Information sent from a form with the GET method is visible to everyone (all variable names and values are displayed in the URL query string: \`?name=value\`).`,
    tryItCode: `<?php
// Simulating incoming form submission
$_POST['username'] = "Affan Sayed";
$_POST['role'] = "Grandmaster Developer";

$name = htmlspecialchars($_POST['username']);
$role = htmlspecialchars($_POST['role']);

echo "Welcome " . $name . "!<br>";
echo "Your rank is: " . $role;
?>`,
    codeType: 'php',
    tips: 'Use POST when updating data, creating records, or submitting passwords.',
    exercise: {
      question: 'Which PHP function converts special HTML characters to prevent XSS attacks?',
      options: ['strip_tags()', 'htmlspecialchars()', 'clean_xss()', 'filter_html()'],
      correct: 1,
      hint: 'Converts < and > into safe entities.'
    }
  }
];
