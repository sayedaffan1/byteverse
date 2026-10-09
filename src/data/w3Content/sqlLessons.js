export const SQL_W3_LESSONS = [
  {
    id: 'sql_home',
    category: 'SQL Tutorial',
    title: 'SQL HOME',
    summary: 'SQL is a standard language for storing, manipulating and retrieving data in databases.',
    eli5: {
      story: 'Imagine the biggest magical library in the universe, with 10 million storybooks! If you had to walk shelf by shelf looking for a book about dragons, you would be searching for 100 years. But in this library, there is a super-speedy robot librarian named SQL. You say: "Librarian! Give me all books about Dragons!" and in 0.001 seconds, the books land right in your hands!',
      analogy: '📚 The Super Librarian: You give SQL a question (a query), and it instantly pulls the exact cards from the filing cabinet.',
      rules: [
        'SELECT means "Pick these specific columns/cards".',
        'FROM means "Look inside this specific cabinet/table".',
        'WHERE means "Only take cards that match this rule (like color = blue)".'
      ]
    },
    body: `Our SQL tutorial will teach you how to use SQL in MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.

### What is SQL?
- SQL stands for Structured Query Language.
- SQL lets you access and manipulate databases.
- SQL became an ANSI standard in 1986.`,
    tryItCode: `SELECT * FROM Customers WHERE Country = 'Mexico';`,
    codeType: 'sql',
    notes: 'SQL keywords are NOT case sensitive: select is the same as SELECT. In this tutorial we write all SQL keywords in UPPERCASE.',
    exercise: {
      question: 'What does SQL stand for?',
      options: ['Structured Query Language', 'Strong Question Language', 'Structured Quick Language', 'Standard Query Logic'],
      correct: 0,
      hint: 'It is a structured language for querying relational data.'
    },
    referenceTable: [
      { item: 'SELECT', description: 'Extracts data from a database' },
      { item: 'UPDATE', description: 'Updates data in a database' },
      { item: 'DELETE', description: 'Deletes data from a database' },
      { item: 'INSERT INTO', description: 'Inserts new data into a database' }
    ]
  },
  {
    id: 'sql_select',
    category: 'SQL Tutorial',
    title: 'SQL SELECT Statement',
    summary: 'The SELECT statement is used to select data from a database. The data returned is stored in a result table, called the result-set.',
    eli5: {
      story: 'When you open your toy box, you don\'t always want to dump the entire box on the carpet. Maybe you only want to take out your shiny cars! "SELECT car_name FROM toy_box;" tells the computer: leave the teddy bears and crayons inside, just bring me the cars!',
      analogy: '🧺 Picking specific toys from the bin: SELECT lets you choose only the exact items you want to see.',
      rules: [
        'SELECT name, age fetches only name and age.',
        'SELECT * means "Fetch EVERYTHING in the table!" (the asterisk * is the magic all-picker).',
        'FROM table_name tells the database which container to inspect.'
      ]
    },
    body: `### Syntax:
\`\`\`sql
SELECT column1, column2, ...
FROM table_name;
\`\`\`

If you want to select ALL fields available in the table, use the \`*\` wildcard syntax:
\`\`\`sql
SELECT * FROM table_name;
\`\`\``,
    tryItCode: `SELECT CustomerName, City, Country FROM Customers;`,
    codeType: 'sql',
    tips: 'Selecting only the specific columns you need improves query speed and network performance.',
    exercise: {
      question: 'Which SQL statement is used to extract data from a database?',
      options: ['EXTRACT', 'GET', 'SELECT', 'FETCH'],
      correct: 2,
      hint: 'It is the most common SQL statement.'
    }
  },
  {
    id: 'sql_where',
    category: 'SQL Tutorial',
    title: 'SQL WHERE Clause',
    summary: 'The WHERE clause is used to filter records. It is used to extract only those records that fulfill a specified condition.',
    eli5: {
      story: 'Imagine you are playing detective at school. Someone ate the last chocolate chip cookie! You only want to interview suspects who were near the cafeteria at 12:00. The WHERE clause is your detective badge: "WHERE location = \'Cafeteria\' AND alibi_time = \'12:00\'".',
      analogy: '🕵️ Detective Filtering: WHERE acts as a magnifying glass, filtering out anyone who is innocent.',
      rules: [
        'WHERE score > 100 finds top scorers.',
        'WHERE country = "Canada" finds Canadian players.',
        'You can combine rules with AND or OR.'
      ]
    },
    body: `### Syntax:
\`\`\`sql
SELECT column1, column2, ...
FROM table_name
WHERE condition;
\`\`\``,
    tryItCode: `SELECT * FROM Customers WHERE Country = 'Germany';`,
    codeType: 'sql',
    notes: 'Text values in SQL must be enclosed in single quotes like \'Germany\'. Numbers do not use quotes.',
    exercise: {
      question: 'Select all records from Customers where City is "Berlin":',
      options: ['SELECT * FROM Customers WHERE City = \'Berlin\';', 'SELECT ALL Customers IN City \'Berlin\';', 'FIND Customers WHERE City = Berlin;', 'SELECT City = \'Berlin\' FROM Customers;'],
      correct: 0,
      hint: 'Use the standard WHERE clause.'
    }
  }
];
