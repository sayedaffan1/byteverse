export const SQL_W3_LESSONS = [
  {
    "id": "sql_home",
    "category": "SQL Tutorial",
    "title": "SQL HOME",
    "summary": "SQL is a standard language for storing, manipulating and retrieving data in databases.",
    "eli5": {
      "story": "Imagine the biggest magical library in the universe, with 10 million storybooks! If you had to walk shelf by shelf looking for a book about dragons, you would be searching for 100 years. But in this library, there is a super-speedy robot librarian named SQL. You say: \"Librarian! Give me all books about Dragons!\" and in 0.001 seconds, the books land right in your hands!",
      "analogy": "📚 The Super Librarian: You give SQL a question (a query), and it instantly pulls the exact cards from the filing cabinet.",
      "rules": [
        "SELECT means \"Pick these specific columns/cards\".",
        "FROM means \"Look inside this specific cabinet/table\".",
        "WHERE means \"Only take cards that match this rule (like color = blue)\"."
      ]
    },
    "body": "Our SQL tutorial will teach you how to use SQL in MySQL, SQL Server, MS Access, Oracle, Sybase, Informix, Postgres, and other database systems.\n\n### What is SQL?\n- SQL stands for Structured Query Language.\n- SQL lets you access and manipulate databases.\n- SQL became an ANSI standard in 1986.",
    "tryItCode": "SELECT * FROM Customers WHERE Country = 'Mexico';",
    "codeType": "sql",
    "notes": "SQL keywords are NOT case sensitive: select is the same as SELECT. In this tutorial we write all SQL keywords in UPPERCASE.",
    "exercise": {
      "question": "What does SQL stand for?",
      "options": [
        "Structured Query Language",
        "Strong Question Language",
        "Structured Quick Language",
        "Standard Query Logic"
      ],
      "correct": 0,
      "hint": "It is a structured language for querying relational data."
    },
    "referenceTable": [
      {
        "item": "SELECT",
        "description": "Extracts data from a database"
      },
      {
        "item": "UPDATE",
        "description": "Updates data in a database"
      },
      {
        "item": "DELETE",
        "description": "Deletes data from a database"
      },
      {
        "item": "INSERT INTO",
        "description": "Inserts new data into a database"
      }
    ]
  },
  {
    "id": "sql_select",
    "category": "SQL Tutorial",
    "title": "SQL SELECT Statement",
    "summary": "The SELECT statement is used to select data from a database. The data returned is stored in a result table, called the result-set.",
    "eli5": {
      "story": "When you open your toy box, you don't always want to dump the entire box on the carpet. Maybe you only want to take out your shiny cars! \"SELECT car_name FROM toy_box;\" tells the computer: leave the teddy bears and crayons inside, just bring me the cars!",
      "analogy": "🧺 Picking specific toys from the bin: SELECT lets you choose only the exact items you want to see.",
      "rules": [
        "SELECT name, age fetches only name and age.",
        "SELECT * means \"Fetch EVERYTHING in the table!\" (the asterisk * is the magic all-picker).",
        "FROM table_name tells the database which container to inspect."
      ]
    },
    "body": "### Syntax:\n```sql\nSELECT column1, column2, ...\nFROM table_name;\n```\n\nIf you want to select ALL fields available in the table, use the `*` wildcard syntax:\n```sql\nSELECT * FROM table_name;\n```",
    "tryItCode": "SELECT CustomerName, City, Country FROM Customers;",
    "codeType": "sql",
    "tips": "Selecting only the specific columns you need improves query speed and network performance.",
    "exercise": {
      "question": "Which SQL statement is used to extract data from a database?",
      "options": [
        "EXTRACT",
        "GET",
        "SELECT",
        "FETCH"
      ],
      "correct": 2,
      "hint": "It is the most common SQL statement."
    }
  },
  {
    "id": "sql_where",
    "category": "SQL Tutorial",
    "title": "SQL WHERE Clause",
    "summary": "The WHERE clause is used to filter records. It is used to extract only those records that fulfill a specified condition.",
    "eli5": {
      "story": "Imagine you are playing detective at school. Someone ate the last chocolate chip cookie! You only want to interview suspects who were near the cafeteria at 12:00. The WHERE clause is your detective badge: \"WHERE location = 'Cafeteria' AND alibi_time = '12:00'\".",
      "analogy": "🕵️ Detective Filtering: WHERE acts as a magnifying glass, filtering out anyone who is innocent.",
      "rules": [
        "WHERE score > 100 finds top scorers.",
        "WHERE country = \"Canada\" finds Canadian players.",
        "You can combine rules with AND or OR."
      ]
    },
    "body": "### Syntax:\n```sql\nSELECT column1, column2, ...\nFROM table_name\nWHERE condition;\n```",
    "tryItCode": "SELECT * FROM Customers WHERE Country = 'Germany';",
    "codeType": "sql",
    "notes": "Text values in SQL must be enclosed in single quotes like 'Germany'. Numbers do not use quotes.",
    "exercise": {
      "question": "Select all records from Customers where City is \"Berlin\":",
      "options": [
        "SELECT * FROM Customers WHERE City = 'Berlin';",
        "SELECT ALL Customers IN City 'Berlin';",
        "FIND Customers WHERE City = Berlin;",
        "SELECT City = 'Berlin' FROM Customers;"
      ],
      "correct": 0,
      "hint": "Use the standard WHERE clause."
    }
  },
  {
    "id": "sql_orderby",
    "category": "SQL Tutorial",
    "title": "SQL ORDER BY (Sorting)",
    "summary": "The ORDER BY keyword is used to sort the result-set in ascending (ASC) or descending (DESC) order.",
    "eli5": {
      "story": "Imagine lining up for class photo day! The photographer tells everyone: \"Shortest kids in the front row, tallest kids in the back row!\" In SQL, that is ORDER BY height ASC (ascending). If you line up highest video game scores at the top, that is ORDER BY score DESC (descending)!",
      "analogy": "📏 The Photo Day Lineup: ASC sorts from smallest to biggest (A to Z); DESC sorts from biggest to smallest (Z to A).",
      "rules": [
        "ORDER BY column_name sorts the output.",
        "ASC is default (smallest to largest / A-Z).",
        "DESC sorts from largest to smallest (highest scores first)."
      ]
    },
    "body": "### Syntax:\n```sql\nSELECT column1, column2, ...\nFROM table_name\nORDER BY column1 [ASC|DESC], column2 [ASC|DESC];\n```",
    "tryItCode": "SELECT PlayerName, HighScore FROM Leaderboard ORDER BY HighScore DESC;",
    "codeType": "sql",
    "tips": "You can sort by multiple columns, e.g. ORDER BY Country ASC, CustomerName DESC.",
    "exercise": {
      "question": "Which keyword sorts SQL results from highest to lowest?",
      "options": [
        "TOP",
        "HIGH",
        "DESC",
        "DOWN"
      ],
      "correct": 2,
      "hint": "Short for Descending."
    }
  },
  {
    "id": "sql_insert",
    "category": "SQL Manipulation",
    "title": "SQL INSERT INTO Statement",
    "summary": "The INSERT INTO statement is used to insert new records in a table.",
    "eli5": {
      "story": "Have you ever collected Pokémon or baseball trading cards? When you buy a brand-new card pack, you open it up and slide the shiny new card into your binder sleeve. INSERT INTO is that binder sleeve: it slides a brand-new player into the database table!",
      "analogy": "🎴 The Trading Card Binder: INSERT INTO adds a fresh new card row to your collection.",
      "rules": [
        "INSERT INTO table_name (columns) VALUES (data).",
        "Make sure data types match (numbers with numbers, text with quotes).",
        "Auto-increment IDs are created automatically by the database!"
      ]
    },
    "body": "### Syntax:\n```sql\nINSERT INTO table_name (column1, column2, column3)\nVALUES (value1, value2, value3);\n```",
    "tryItCode": "INSERT INTO Players (Username, Track, XP)\nVALUES ('Affan Sayed', 'Full-Stack', 9999);",
    "codeType": "sql",
    "notes": "If you are inserting values for all columns of the table, you do not need to specify column names in the SQL query.",
    "exercise": {
      "question": "Which SQL statement adds new rows to a database table?",
      "options": [
        "ADD ROW",
        "INSERT INTO",
        "NEW RECORD",
        "CREATE ITEM"
      ],
      "correct": 1,
      "hint": "INSERT INTO table_name ..."
    }
  },
  {
    "id": "sql_update",
    "category": "SQL Manipulation",
    "title": "SQL UPDATE Statement",
    "summary": "The UPDATE statement is used to modify the existing records in a table.",
    "eli5": {
      "story": "Imagine you just won a match in your favorite game and earned 100 extra gold coins! The game doesn't delete your character; it just updates your coin pouch: \"UPDATE character SET coins = 250 WHERE name = 'Hero'\". If you forget the WHERE clause, EVERYONE in the whole game gets 250 coins by mistake!",
      "analogy": "⚠️ The Golden Rule: ALWAYS include WHERE in UPDATE, or else every single player's data gets overwritten!",
      "rules": [
        "UPDATE table_name SET column1 = value1 WHERE condition.",
        "Never forget the WHERE clause unless you want to update all rows.",
        "You can update multiple columns separated by commas."
      ]
    },
    "body": "### Syntax:\n```sql\nUPDATE table_name\nSET column1 = value1, column2 = value2, ...\nWHERE condition;\n```\n\n> **WARNING**: Be careful when updating records! If you omit the WHERE clause, ALL records will be updated!",
    "tryItCode": "UPDATE Customers\nSET ContactName = 'Affan Sayed', City = 'Mumbai'\nWHERE CustomerID = 1;",
    "codeType": "sql",
    "tips": "Run a SELECT query with the same WHERE clause first to double-check which rows will be affected before updating!",
    "exercise": {
      "question": "What happens if you run an UPDATE statement without a WHERE clause?",
      "options": [
        "Only the first row updates",
        "An error occurs and nothing updates",
        "ALL rows in the table are updated",
        "The table is deleted"
      ],
      "correct": 2,
      "hint": "It affects every single row."
    }
  },
  {
    "id": "sql_delete",
    "category": "SQL Manipulation",
    "title": "SQL DELETE Statement",
    "summary": "The DELETE statement is used to delete existing records in a table.",
    "eli5": {
      "story": "Have you ever had an old broken toy that you decided to throw into the recycling bin? DELETE is that trash can! But be very careful: if you say \"DELETE FROM toys;\" without specifying WHERE toy_name = 'Broken Robot', the trash can eats all your favorite toys too!",
      "analogy": "🗑️ The Paper Shredder: Safely shreds outdated records that match your specific WHERE rule.",
      "rules": [
        "DELETE FROM table_name WHERE condition.",
        "Always check the WHERE clause before pressing Enter.",
        "To delete all data while keeping the table structure, use TRUNCATE TABLE."
      ]
    },
    "body": "### Syntax:\n```sql\nDELETE FROM table_name WHERE condition;\n```\n\n> **CRITICAL**: The WHERE clause specifies which record(s) should be deleted. If you omit the WHERE clause, all records in the table will be deleted!",
    "tryItCode": "DELETE FROM Customers WHERE CustomerName = 'Alfreds Futterkiste';",
    "codeType": "sql",
    "notes": "You cannot undo a DELETE statement if transactions are autocommitted. Always have database backups!",
    "exercise": {
      "question": "Which SQL statement removes specific rows from a database table?",
      "options": [
        "DROP ROW",
        "REMOVE",
        "DELETE FROM",
        "ERASE"
      ],
      "correct": 2,
      "hint": "DELETE FROM table WHERE ..."
    }
  },
  {
    "id": "sql_aggregate",
    "category": "SQL Functions",
    "title": "SQL Aggregate Functions (COUNT, SUM, AVG)",
    "summary": "An aggregate function performs a calculation on a set of values, and returns a single value.",
    "eli5": {
      "story": "Imagine counting how many coins are in your piggy bank! You could count each coin one by one, or you could drop them into a magical coin counter machine. In SQL, COUNT() tells you how many coins there are, SUM() tells you total dollars, and AVG() tells you the average coin size!",
      "analogy": "🪙 The Piggy Bank Counter: Aggregate functions calculate totals, averages, minimums, and maximums instantly.",
      "rules": [
        "COUNT(column) counts how many rows exist.",
        "SUM(column) adds all numbers together.",
        "AVG(column) computes the mathematical average; MIN() and MAX() find extremes."
      ]
    },
    "body": "### Most Commonly Used Aggregate Functions:\n- `MIN()`: Returns the smallest value of the selected column.\n- `MAX()`: Returns the largest value of the selected column.\n- `COUNT()`: Returns the number of rows that match specified criteria.\n- `AVG()`: Returns the average value of a numeric column.\n- `SUM()`: Returns the total sum of a numeric column.",
    "tryItCode": "SELECT COUNT(*) AS TotalPlayers, AVG(XP) AS AverageXP, MAX(XP) AS HighScore FROM Leaderboard;",
    "codeType": "sql",
    "tips": "Use \"AS alias_name\" to give the calculated aggregate column a readable label in your result set.",
    "exercise": {
      "question": "Which SQL function calculates the total sum of a numeric column?",
      "options": [
        "TOTAL()",
        "SUM()",
        "ADD()",
        "COUNT()"
      ],
      "correct": 1,
      "hint": "SUM()"
    }
  },
  {
    "id": "sql_joins",
    "category": "SQL Joins",
    "title": "SQL INNER JOIN (Connecting Tables)",
    "summary": "A JOIN clause is used to combine rows from two or more tables, based on a related column between them.",
    "eli5": {
      "story": "Imagine you have two puzzle pieces that snap together! Piece #1 has the customer's name: \"Affan Sayed\". Piece #2 has the order: \"Laptop Computer\". Both pieces have the exact same secret matching puzzle peg: CustomerID = 101. An INNER JOIN snaps both pieces together into one single complete picture!",
      "analogy": "🧩 Interlocking Puzzle Pieces: JOIN uses matching foreign keys to connect Customers with their Orders.",
      "rules": [
        "INNER JOIN selects records that have matching values in both tables.",
        "ON table1.id = table2.customer_id defines the matching puzzle peg.",
        "LEFT JOIN keeps all records from the left table even if no match exists."
      ]
    },
    "body": "### Different Types of SQL JOINs:\n- **(INNER) JOIN**: Returns records that have matching values in both tables.\n- **LEFT (OUTER) JOIN**: Returns all records from the left table, and the matched records from the right table.\n- **RIGHT (OUTER) JOIN**: Returns all records from the right table, and the matched records from the left table.\n- **FULL (OUTER) JOIN**: Returns all records when there is a match in either left or right table.",
    "tryItCode": "SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate\nFROM Orders\nINNER JOIN Customers ON Orders.CustomerID = Customers.CustomerID;",
    "codeType": "sql",
    "notes": "INNER JOIN is the most common type of join and is the default when you simply write JOIN.",
    "exercise": {
      "question": "Which join returns records only when there is a match in BOTH tables?",
      "options": [
        "INNER JOIN",
        "LEFT JOIN",
        "FULL JOIN",
        "CROSS JOIN"
      ],
      "correct": 0,
      "hint": "INNER JOIN"
    }
  },
  {
    "id": "sql_groupby",
    "category": "SQL Advanced",
    "title": "SQL GROUP BY & HAVING Clause",
    "summary": "The GROUP BY statement groups rows that have the same values into summary rows. The HAVING clause was added because WHERE cannot be used with aggregate functions.",
    "eli5": {
      "story": "Imagine you have a giant bag of Halloween candy! You sort them into piles on your table: chocolate bars in one pile, lollipops in another pile, gummy bears in a third pile. Then, you only keep piles that have more than 5 pieces (HAVING count > 5). GROUP BY is that candy sorting pile!",
      "analogy": "🍬 Sorting Candy by Flavor: GROUP BY groups items into buckets; HAVING filters the buckets based on totals.",
      "rules": [
        "GROUP BY column_name bundles matching rows into groups.",
        "Used with aggregate functions (COUNT, MAX, MIN, SUM, AVG).",
        "HAVING is the WHERE clause for aggregate totals (e.g. HAVING COUNT(*) > 5)."
      ]
    },
    "body": "### Syntax:\n```sql\nSELECT column_name(s), COUNT(*)\nFROM table_name\nWHERE condition\nGROUP BY column_name(s)\nHAVING COUNT(*) > value\nORDER BY COUNT(*) DESC;\n```",
    "tryItCode": "SELECT Country, COUNT(CustomerID) AS NumberOfCustomers\nFROM Customers\nGROUP BY Country\nHAVING COUNT(CustomerID) > 5\nORDER BY NumberOfCustomers DESC;",
    "codeType": "sql",
    "tips": "Remember the SQL execution order: FROM -> WHERE -> GROUP BY -> HAVING -> SELECT -> ORDER BY!",
    "exercise": {
      "question": "Why does SQL have a HAVING clause instead of just using WHERE?",
      "options": [
        "HAVING is faster",
        "WHERE cannot be used with aggregate functions",
        "HAVING works with strings only",
        "WHERE is deprecated"
      ],
      "correct": 1,
      "hint": "WHERE filters individual rows; HAVING filters grouped aggregate results."
    }
  }
];
