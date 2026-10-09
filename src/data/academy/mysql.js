export const MYSQL_CURRICULUM = {
  title: 'MySQL: Relational Database Engineering (0% to 10,000,000%)',
  tagline: 'From basic queries to indexing performance, ACID transactions, complex JOINs, and CTEs.',
  overview: 'MySQL is the world\'s most popular open-source relational database management system (RDBMS). Learn table design, normalization, complex filtering, multi-table joins, indexing optimization, and transaction safety.',
  modules: [
    {
      level: '0% Beginner',
      levelCode: 'beginner',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      topics: [
        {
          id: 'mysql-select-filtering',
          title: 'SELECT, WHERE & Filtering Operators',
          summary: 'Retrieve columns and filter matching rows using conditional operators (=, !=, <, >, <=, >=, BETWEEN, IN, LIKE).',
          keyPoints: [
            'SELECT column1, column2 FROM table_name; specifies what fields to return.',
            'WHERE clause filters rows based on logical conditions (AND, OR, NOT).',
            'LIKE "%pattern%" enables wildcard substring searching (% matches any characters, _ matches one).'
          ],
          code: `SELECT id, username, email, level 
FROM players 
WHERE level >= 10 AND status = 'active'
ORDER BY level DESC 
LIMIT 5;`,
          type: 'sql',
          quiz: {
            question: 'Which SQL operator finds rows matching any value in a specified list (e.g. status in ("active", "pending"))?',
            options: ['BETWEEN', 'IN', 'LIKE', 'CONTAIN'],
            correct: 1,
            explanation: 'The IN operator allows you to specify multiple values in a WHERE clause.'
          }
        },
        {
          id: 'mysql-crud-operations',
          title: 'Data Modification: INSERT, UPDATE & DELETE',
          summary: 'Master inserting new records, modifying existing columns with UPDATE, and removing records with DELETE.',
          keyPoints: [
            'INSERT INTO table (col1, col2) VALUES ("val1", "val2");',
            'CRITICAL: Always provide a WHERE clause with UPDATE and DELETE to avoid altering the entire table!',
            'TRUNCATE TABLE empties a table much faster than DELETE without logging individual row deletions.'
          ],
          code: `-- 1. Insert new player
INSERT INTO players (username, xp, level) 
VALUES ('CyberSamurai', 1200, 12);

-- 2. Update player's XP
UPDATE players 
SET xp = xp + 100 
WHERE username = 'CyberSamurai';`,
          type: 'sql',
          quiz: {
            question: 'What dangerous consequence happens if you run "UPDATE users SET active = 0;" without a WHERE clause?',
            options: ['MySQL throws a syntax error', 'Every single row in the users table is updated', 'Only the first row is updated', 'Nothing changes'],
            correct: 1,
            explanation: 'Without a WHERE clause, SQL modifies every record in the table.'
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
          id: 'mysql-joins-deep',
          title: 'Table Joins: INNER, LEFT, RIGHT & FULL',
          summary: 'Relational data is normalized into separate tables. Use JOIN clauses to assemble unified query result sets using foreign keys.',
          keyPoints: [
            'INNER JOIN: Returns records that have matching values in both tables.',
            'LEFT JOIN: Returns ALL rows from the left table, plus matched records from the right table (NULL if no match).',
            'RIGHT JOIN: Returns ALL rows from the right table, plus matched records from the left.',
            'Always specify the linking condition with ON table1.id = table2.foreign_id.'
          ],
          code: `SELECT 
  users.id AS user_id,
  users.username,
  orders.order_code,
  orders.total_amount
FROM users
INNER JOIN orders ON users.id = orders.user_id
WHERE orders.status = 'completed';`,
          type: 'sql',
          quiz: {
            question: 'Which JOIN returns all records from the left table even if there are no matches in the right table?',
            options: ['INNER JOIN', 'LEFT JOIN', 'CROSS JOIN', 'SELF JOIN'],
            correct: 1,
            explanation: 'LEFT JOIN keeps all rows from the primary left table and populates unmatched right columns with NULL.'
          }
        },
        {
          id: 'mysql-aggregation-grouping',
          title: 'Aggregation & GROUP BY / HAVING',
          summary: 'Summarize large datasets into metrics with COUNT(), SUM(), AVG(), MIN(), MAX(), and filter groups with HAVING.',
          keyPoints: [
            'GROUP BY collapses rows that have identical values into summary rows.',
            'HAVING filters groups AFTER aggregation (WHERE filters rows BEFORE grouping).',
            'COUNT(column) counts non-null values; COUNT(*) counts all rows.'
          ],
          code: `SELECT 
  category,
  COUNT(*) AS total_items,
  AVG(price) AS average_price,
  MAX(price) AS highest_price
FROM products
GROUP BY category
HAVING AVG(price) > 50.00;`,
          type: 'sql',
          quiz: {
            question: 'Why can\'t you use WHERE to filter aggregated values like "WHERE COUNT(*) > 5"?',
            options: ['WHERE operates before aggregation occurs; use HAVING instead', 'COUNT is invalid in SQL', 'WHERE only works on strings', 'MySQL requires double quotes'],
            correct: 0,
            explanation: 'WHERE filters rows before rows are grouped; HAVING filters the aggregated summary results.'
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
          id: 'mysql-indexing-explain',
          title: 'Indexing & EXPLAIN Query Optimization',
          summary: 'Indexes turn slow O(N) full table scans into lightning-fast O(log N) B-Tree lookups on multi-million row databases.',
          keyPoints: [
            'CREATE INDEX idx_user_email ON users(email); creates a B-Tree index structure.',
            'Composite indexes (colA, colB) must be queried following the "Leftmost Prefix" rule.',
            'Run EXPLAIN before your query to inspect whether MySQL uses an index or does a costly full table scan (type: ALL).'
          ],
          code: `-- Analyze query execution plan
EXPLAIN SELECT id, username FROM users 
WHERE email = 'alex@byteverse.dev';

-- Create compound index for fast sorting & filtering
CREATE INDEX idx_status_xp ON players(status, xp DESC);`,
          type: 'sql',
          quiz: {
            question: 'What command displays the execution plan of a SQL query in MySQL?',
            options: ['INSPECT', 'ANALYZE TABLE ONLY', 'EXPLAIN', 'TRACE'],
            correct: 2,
            explanation: 'EXPLAIN outputs details on table access types, keys used, and row estimates.'
          }
        },
        {
          id: 'mysql-transactions-acid',
          title: 'Transactions & ACID Guarantees',
          summary: 'Ensure data integrity across multiple operations using Transactions (Atomicity, Consistency, Isolation, Durability) with COMMIT and ROLLBACK.',
          keyPoints: [
            'Atomicity: All operations succeed, or all are rolled back ("All-or-Nothing").',
            'START TRANSACTION begins an atomic block.',
            'COMMIT permanently writes changes to disk; ROLLBACK reverts all changes if an error occurs.',
            'InnoDB is MySQL\'s default transaction-safe ACID storage engine.'
          ],
          code: `START TRANSACTION;

-- Transfer $100 from Account 1 to Account 2
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;

-- If both updates succeeded without constraint violations:
COMMIT;
-- If any error occurred:
-- ROLLBACK;`,
          type: 'sql',
          quiz: {
            question: 'What does "Atomicity" mean in the ACID database model?',
            options: ['Data is compressed to atomic sizes', 'All modifications in a transaction succeed together or none of them apply', 'Queries run at nuclear speed', 'Tables cannot have foreign keys'],
            correct: 1,
            explanation: 'Atomicity guarantees that all steps in a transaction execute as a single indivisible unit.'
          }
        }
      ]
    }
  ]
};
