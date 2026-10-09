export const GAME_LEVELS = {
  html: [
    {
      id: 1,
      title: 'Level 1: Tag Matcher',
      prompt: 'Assemble a hero header by picking the correct HTML tags in order!',
      targetResult: '<h1>Welcome to ByteVerse</h1>\n<p>Learn code through interactive quests.</p>',
      starterSnippet: '<h1>Welcome to ByteVerse</h1>\n<!-- Add the paragraph tag below -->\n',
      solutionKeyword: '<p>',
      hint: 'Use <p>your text</p> to define a paragraph.',
      options: [
        '<p>Learn code through interactive quests.</p>',
        '<span>Learn code through interactive quests.</span>',
        '<bold>Learn code through interactive quests.</bold>',
        '<text>Learn code through interactive quests.</text>'
      ],
      correctOptionIndex: 0,
      xp: 40
    },
    {
      id: 2,
      title: 'Level 2: Navigation Links',
      prompt: 'Every website needs hyperlinks! Choose the proper tag to link to our Academy page.',
      targetResult: '<nav>\n  <a href="/academy">Study Academy</a>\n</nav>',
      starterSnippet: '<nav>\n  <!-- Insert hyperlink here -->\n</nav>',
      solutionKeyword: '<a href=',
      hint: 'The <a> tag creates links with the "href" attribute.',
      options: [
        '<link url="/academy">Study Academy</link>',
        '<a href="/academy">Study Academy</a>',
        '<nav-item to="/academy">Study Academy</nav-item>',
        '<button link="/academy">Study Academy</button>'
      ],
      correctOptionIndex: 1,
      xp: 50
    },
    {
      id: 3,
      title: 'Level 3: Button & Form Action',
      prompt: 'Make an interactive button that submits a form to start the game.',
      targetResult: '<button type="submit">Start Quest</button>',
      starterSnippet: '<!-- Choose button element -->',
      solutionKeyword: '<button',
      hint: 'HTML provides the <button> element with type="submit".',
      options: [
        '<button type="submit">Start Quest</button>',
        '<input type="button" text="Start Quest" />',
        '<clickable action="submit">Start Quest</clickable>',
        '<btn>Start Quest</btn>'
      ],
      correctOptionIndex: 0,
      xp: 60
    },
    {
      id: 4,
      title: 'Level 4: Missing Tag Smasher',
      prompt: 'Identify the syntax bug in this broken HTML snippet!',
      brokenCode: '<div class="card">\n  <h2>Arcade Tower\n  <p>Defeat the bugs!</p>\n</div>',
      bugDescription: 'Which tag was left unclosed?',
      options: [
        'The <h2> tag is missing its closing </h2>',
        'The <div> tag is missing its closing </div>',
        'The <p> tag is missing quotes',
        'The class attribute needs single quotes'
      ],
      correctOptionIndex: 0,
      xp: 75
    }
  ],

  css: [
    {
      id: 1,
      title: 'Level 1: Center the Spaceship',
      prompt: 'Use Flexbox to center the spaceship horizontally along the main axis.',
      cssTargetProperty: 'justify-content',
      starterValue: 'flex-start',
      options: ['center', 'flex-end', 'space-between', 'space-around'],
      correctValue: 'center',
      previewType: 'spaceship',
      hint: 'justify-content: center aligns flex children right in the horizontal center.',
      xp: 40
    },
    {
      id: 2,
      title: 'Level 2: Vertical Alignment',
      prompt: 'Align the spaceship vertically in the middle of the cosmic landing pad.',
      cssTargetProperty: 'align-items',
      starterValue: 'flex-start',
      options: ['center', 'flex-end', 'stretch', 'baseline'],
      correctValue: 'center',
      previewType: 'spaceship',
      hint: 'align-items: center controls alignment on the cross axis (vertical).',
      xp: 50
    },
    {
      id: 3,
      title: 'Level 3: Reverse the Squadron',
      prompt: 'Reverse the order of your ships so the flagship takes the lead.',
      cssTargetProperty: 'flex-direction',
      starterValue: 'row',
      options: ['row-reverse', 'column', 'column-reverse', 'row'],
      correctValue: 'row-reverse',
      previewType: 'squadron',
      hint: 'flex-direction: row-reverse swaps the order from right-to-left.',
      xp: 60
    },
    {
      id: 4,
      title: 'Level 4: CSS Grid Pillars',
      prompt: 'Split the inventory pad into 3 equal columns using CSS Grid.',
      cssTargetProperty: 'grid-template-columns',
      starterValue: '1fr',
      options: ['repeat(3, 1fr)', '100px', 'repeat(2, 1fr)', 'auto auto'],
      correctValue: 'repeat(3, 1fr)',
      previewType: 'grid',
      hint: 'repeat(3, 1fr) creates three equal columns that flex to fill the space.',
      xp: 75
    }
  ],

  js: [
    {
      id: 1,
      title: 'Level 1: The Const Bug',
      prompt: 'Fix the runtime TypeError! Someone used const for a score that needs to increase.',
      brokenSnippet: `const score = 10;\nscore = score + 5;\nconsole.log(score);`,
      options: [
        'Change `const score = 10;` to `let score = 10;`',
        'Change `score = score + 5` to `score == score + 5`',
        'Use `const score += 5;`',
        'Remove the console.log line'
      ],
      correctOptionIndex: 0,
      explanation: 'Variables declared with "const" cannot be reassigned. Use "let" for variables that change.',
      xp: 40
    },
    {
      id: 2,
      title: 'Level 2: Filter Power Items',
      prompt: 'Which JavaScript array method filters out all items below power level 50?',
      snippet: `const items = [{power: 30}, {power: 80}, {power: 95}];\nconst strongItems = items.____(item => item.power >= 50);`,
      options: ['filter', 'map', 'forEach', 'reduce'],
      correctOptionIndex: 0,
      explanation: 'Array.prototype.filter() returns a new array with all elements that pass the test.',
      xp: 50
    },
    {
      id: 3,
      title: 'Level 3: Template Literal Fix',
      prompt: 'Which syntax correctly interpolates the player\'s name in modern JavaScript?',
      options: [
        '`Hello, ${playerName}!`',
        '"Hello, ${playerName}!"',
        '\'Hello, $(playerName)\'',
        '`Hello, #playerName#`'
      ],
      correctOptionIndex: 0,
      explanation: 'Template literals use backticks (``) and ${expression} for clean string interpolation.',
      xp: 60
    },
    {
      id: 4,
      title: 'Level 4: DOM Event Listener',
      prompt: 'Which line of code correctly registers a click handler on a button?',
      options: [
        'btn.addEventListener("click", () => playSound());',
        'btn.onClick("click", playSound);',
        'btn.listen("mouse-down", playSound);',
        'btn.attachEvent("press", playSound);'
      ],
      correctOptionIndex: 0,
      explanation: 'The standard W3C method is target.addEventListener("event", handlerFunction).',
      xp: 75
    }
  ],

  mysql: [
    {
      id: 1,
      title: 'Case 1: The Midnight Alibi',
      scenario: 'A rare cyber-gem was stolen at 22:00. Find suspects who were seen near the Vault.',
      tablePreview: 'Table: suspects (id, name, location, alibi_time)',
      options: [
        "SELECT name FROM suspects WHERE location = 'Vault';",
        "FIND name IN suspects WHERE location == 'Vault';",
        "FILTER suspects BY location = 'Vault';",
        "SELECT * WHERE location = 'Vault' FROM suspects;"
      ],
      correctOptionIndex: 0,
      queryOutput: [
        { id: 3, name: 'Viper Vance', location: 'Vault', alibi_time: '22:05' },
        { id: 7, name: 'Hex Miller', location: 'Vault', alibi_time: '21:58' }
      ],
      hint: 'SQL uses: SELECT column FROM table WHERE condition;',
      xp: 40
    },
    {
      id: 2,
      title: 'Case 2: Order of Suspicion',
      scenario: 'Order the evidence records by confidence score from highest to lowest.',
      tablePreview: 'Table: evidence (item, suspect_id, confidence)',
      options: [
        "SELECT item, confidence FROM evidence ORDER BY confidence DESC;",
        "SELECT item, confidence FROM evidence SORT BY confidence DOWN;",
        "ORDER evidence BY confidence HIGHEST;",
        "SELECT item, confidence FROM evidence ORDER ASC confidence;"
      ],
      correctOptionIndex: 0,
      queryOutput: [
        { item: 'Laser Cutter Fingerprint', suspect_id: 3, confidence: 98 },
        { item: 'Encrypted USB Key', suspect_id: 7, confidence: 75 },
        { item: 'Dropped Keycard', suspect_id: 2, confidence: 42 }
      ],
      hint: 'Use ORDER BY column DESC to sort in descending order.',
      xp: 50
    },
    {
      id: 3,
      title: 'Case 3: Linking the Weapon (JOIN)',
      scenario: 'Join suspects and evidence on suspect_id to reveal the culprit holding the Laser Cutter!',
      tablePreview: 'suspects.id = evidence.suspect_id',
      options: [
        "SELECT suspects.name, evidence.item FROM suspects JOIN evidence ON suspects.id = evidence.suspect_id WHERE evidence.item = 'Laser Cutter Fingerprint';",
        "SELECT suspects.name COMBINE evidence WHERE id = suspect_id;",
        "MERGE suspects WITH evidence MATCHING id;",
        "SELECT * FROM suspects, evidence WITHOUT JOIN;"
      ],
      correctOptionIndex: 0,
      queryOutput: [
        { name: 'Viper Vance', item: 'Laser Cutter Fingerprint' }
      ],
      hint: 'Use JOIN ... ON ... to combine records from related tables.',
      xp: 60
    },
    {
      id: 4,
      title: 'Case 4: Calculate Total Stolen Loot',
      scenario: 'Calculate the total stolen value from all heist events.',
      tablePreview: 'Table: heists (id, loot_value)',
      options: [
        "SELECT SUM(loot_value) AS total_stolen FROM heists;",
        "SELECT COUNT(loot_value) AS total_stolen FROM heists;",
        "SELECT TOTAL(loot_value) FROM heists;",
        "SELECT ALL loot_value + loot_value FROM heists;"
      ],
      correctOptionIndex: 0,
      queryOutput: [
        { total_stolen: '$1,250,000' }
      ],
      hint: 'SUM() adds up all numeric values in a column.',
      xp: 75
    }
  ],

  python: [
    {
      id: 1,
      title: 'Maze 1: Initialize the Hero',
      prompt: 'Store the hero\'s name and power in Python variables and print a greeting.',
      targetCode: `hero = "ByteKnight"\npower = 9000\nprint(f"{hero} power is {power}!")`,
      options: [
        'hero = "ByteKnight"\npower = 9000\nprint(f"{hero} power is {power}!")',
        'var hero = "ByteKnight";\nlet power = 9000;\nprint(hero);',
        'string hero = "ByteKnight";\nint power = 9000;',
        '$hero = "ByteKnight";\necho $hero;'
      ],
      correctOptionIndex: 0,
      explanation: 'Python variables are declared without keywords (no let, const, or var). Use f-strings for formatting.',
      xp: 40
    },
    {
      id: 2,
      title: 'Maze 2: The Range Loop',
      prompt: 'Make the hero take 4 steps forward through the maze using a for loop.',
      targetCode: `for step in range(4):\n    move_forward()`,
      options: [
        'for step in range(4):\n    move_forward()',
        'for (int i=0; i<4; i++) { move_forward(); }',
        'loop 4 times:\n    move_forward()',
        'foreach step in 4: move_forward()'
      ],
      correctOptionIndex: 0,
      explanation: 'range(4) produces numbers 0, 1, 2, 3 cleanly iterating 4 times.',
      xp: 50
    },
    {
      id: 3,
      title: 'Maze 3: List Slicing & Gems',
      prompt: 'Given `gems = ["Ruby", "Sapphire", "Emerald", "Diamond"]`, get the first two gems.',
      options: [
        'gems[0:2]',
        'gems[1:2]',
        'gems.slice(0, 2)',
        'gems[0, 1]'
      ],
      correctOptionIndex: 0,
      explanation: 'Python slice syntax list[start:end] includes start index and stops before end index.',
      xp: 60
    },
    {
      id: 4,
      title: 'Maze 4: Function Foundry',
      prompt: 'Define a function in Python that returns the damage multiplied by critical strike.',
      options: [
        'def calc_damage(dmg, crit=1.5):\n    return dmg * crit',
        'function calc_damage(dmg, crit) { return dmg * crit; }',
        'def calc_damage(dmg, crit): print(dmg * crit)',
        'create func calc_damage(dmg, crit) -> dmg * crit'
      ],
      correctOptionIndex: 0,
      explanation: 'Python functions start with `def name(args):` and use `return` to output results.',
      xp: 75
    }
  ],

  php: [
    {
      id: 1,
      title: 'Chef 1: The Echo Order',
      prompt: 'Print the customer\'s greeting using correct PHP syntax.',
      options: [
        '<?php echo "Welcome to Server Bistro!"; ?>',
        '<?php print_screen("Welcome to Server Bistro!"); ?>',
        '<% echo "Welcome to Server Bistro!"; %>',
        '<?php console.log("Welcome to Server Bistro!"); ?>'
      ],
      correctOptionIndex: 0,
      explanation: 'PHP code starts with <?php and uses the `echo` construct to output text.',
      xp: 40
    },
    {
      id: 2,
      title: 'Chef 2: Reading the $_POST Form',
      prompt: 'A customer ordered a "Cyber Burger" via POST. How do you safely read their input?',
      options: [
        '$order = htmlspecialchars($_POST[\'item\']);',
        '$order = $_GET[\'item\'];',
        '$order = request.POST.get(\'item\');',
        '$order = $_FORM[\'item\'];'
      ],
      correctOptionIndex: 0,
      explanation: '$_POST[\'key\'] reads form data, and htmlspecialchars() protects against XSS attacks.',
      xp: 50
    },
    {
      id: 3,
      title: 'Chef 3: The Cart Session',
      prompt: 'How do you initialize user session tracking in PHP before accessing $_SESSION?',
      options: [
        'session_start();',
        'init_session();',
        'start_session();',
        '$_SESSION->open();'
      ],
      correctOptionIndex: 0,
      explanation: 'session_start() must be called at the very top of your script to initialize session data.',
      xp: 60
    },
    {
      id: 4,
      title: 'Chef 4: Dynamic Template Loop',
      prompt: 'Loop over a menu array and echo each dish inside an <li> tag.',
      options: [
        '<?php foreach ($menu as $dish): ?>\n  <li><?= $dish ?></li>\n<?php endforeach; ?>',
        '<?php for $dish in $menu: ?>\n  <li><?= $dish ?></li>\n<?php endfor; ?>',
        '<?php while ($menu): ?>\n  <li>$dish</li>\n<?php endwhile; ?>',
        '<?= $menu.map(dish => <li>dish</li>) ?>'
      ],
      correctOptionIndex: 0,
      explanation: 'The alternative foreach syntax (foreach ... endforeach) is best practice for clean PHP templates.',
      xp: 75
    }
  ],

  django: [
    {
      id: 1,
      title: 'Dispatcher 1: The URL Router',
      prompt: 'Route the URL `quest/<int:pk>/` to the `quest_detail` view in urls.py.',
      options: [
        "path('quest/<int:pk>/', views.quest_detail, name='quest_detail')",
        "route('quest/:pk', views.quest_detail)",
        "get('quest/<pk>/', views.quest_detail)",
        "url_match('quest/<int:pk>/', views.quest_detail)"
      ],
      correctOptionIndex: 0,
      explanation: 'Django 2.0+ uses path() with typed path converters like <int:pk>.',
      xp: 40
    },
    {
      id: 2,
      title: 'Dispatcher 2: The View Controller',
      prompt: 'Write the view function to retrieve the quest by primary key and render the template.',
      options: [
        "def quest_detail(request, pk):\n    quest = get_object_or_404(Quest, pk=pk)\n    return render(request, 'quest_detail.html', {'quest': quest})",
        "def quest_detail(request, pk):\n    return 'quest_detail.html'",
        "def quest_detail(pk):\n    return Quest.objects.all()",
        "def quest_detail(request):\n    send_response('quest_detail.html')"
      ],
      correctOptionIndex: 0,
      explanation: 'Django views accept request as first parameter and return an HttpResponse (commonly via render()).',
      xp: 50
    },
    {
      id: 3,
      title: 'Dispatcher 3: ORM Filter Query',
      prompt: 'Fetch all quests with difficulty="legendary" ordered by highest xp reward.',
      options: [
        "Quest.objects.filter(difficulty='legendary').order_by('-xp_reward')",
        "SELECT * FROM quest WHERE difficulty = 'legendary'",
        "Quest.find({ difficulty: 'legendary' }).sort('xp_reward')",
        "Quest.all().where(difficulty='legendary').desc('xp_reward')"
      ],
      correctOptionIndex: 0,
      explanation: 'Django ORM uses .filter() and .order_by("-field") for descending order.',
      xp: 60
    },
    {
      id: 4,
      title: 'Dispatcher 4: Template Context Binding',
      prompt: 'In Django HTML templates, which tag safely loops through a list of rewards?',
      options: [
        "{% for reward in quest.rewards.all %}\n  <span>{{ reward.title }}</span>\n{% endfor %}",
        "{{ for reward in quest.rewards }}\n  <span>{reward.title}</span>\n{{ endfor }}",
        "<for reward in quest.rewards>\n  <span>{{ reward.title }}</span>\n</for>",
        "<?php foreach ($rewards as $reward) { echo $reward; } ?>"
      ],
      correctOptionIndex: 0,
      explanation: 'Django templates use {% ... %} for control tags (like for, if) and {{ ... }} for variable outputs.',
      xp: 75
    }
  ]
};
