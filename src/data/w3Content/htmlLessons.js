export const HTML_W3_LESSONS = [
  {
    "id": "html_home",
    "category": "HTML Tutorial",
    "title": "HTML HOME",
    "summary": "HTML is the standard markup language for Web pages. With HTML you can create your own Website.",
    "eli5": {
      "story": "Imagine you want to build a Lego castle or draw your dream house! HTML is like the plastic Lego bricks. You need bricks for the walls, a big sign for the front door, and a frame for the windows. Without HTML, there is nothing on the screen at all!",
      "analogy": "🧱 Lego Bricks: HTML gives you the physical blocks to snap together before you paint them or add moving motors.",
      "rules": [
        "Every web page begins with a blueprint called <!DOCTYPE html>.",
        "Tags look like little alligator mouths < > holding words inside.",
        "Most tags give a hug to your words with an opening tag <p> and a closing tag </p>."
      ]
    },
    "body": "HTML is easy to learn - You will enjoy it!\nStudy our complete step-by-step tutorials starting from basic elements to advanced Web Components and HTML5 APIs.",
    "tryItCode": "<!DOCTYPE html>\n<html>\n<head>\n<title>My First Website</title>\n</head>\n<body>\n\n<h1>My Awesome Castle!</h1>\n<p>I built this web page using HTML Lego blocks.</p>\n\n</body>\n</html>",
    "codeType": "html",
    "notes": "HTML is not case sensitive: <P> means the same as <p>. However, W3C recommends lowercase in HTML5.",
    "exercise": {
      "question": "Which HTML element defines the document type and tells the browser this is HTML5?",
      "options": [
        "<!DOCTYPE html>",
        "<html5>",
        "<doctype web>",
        "<?xml version=\"1.0\"?>"
      ],
      "correct": 0,
      "hint": "It is always placed at the very top of an HTML document before the <html> tag."
    },
    "referenceTable": [
      {
        "item": "<!DOCTYPE html>",
        "description": "Defines that this document is an HTML5 document"
      },
      {
        "item": "<html>",
        "description": "The root element of an HTML page"
      },
      {
        "item": "<head>",
        "description": "Contains meta information about the HTML page"
      },
      {
        "item": "<title>",
        "description": "Specifies a title for the HTML page"
      },
      {
        "item": "<body>",
        "description": "Defines the document body (all visible content)"
      }
    ]
  },
  {
    "id": "html_intro",
    "category": "HTML Tutorial",
    "title": "HTML Introduction",
    "summary": "What is HTML? HTML stands for Hyper Text Markup Language. It describes the structure of a Web page using markup.",
    "eli5": {
      "story": "When you open a picture book, your eyes see a giant title at the top, a nice story in the middle, and funny drawings on the side. The computer needs instructions to know which word is the title and which is the story. HTML is the secret code that labels them!",
      "analogy": "🏷️ Sticky Labels: You put a \"COOKIE JAR\" sticker on a jar so nobody eats salt by mistake. HTML puts <h1> on titles so the computer knows it is huge!",
      "rules": [
        "<h1> means: \"Make this super huge like a billboard!\"",
        "<p> means: \"This is a regular story paragraph.\"",
        "<button> means: \"Make this clickable like an elevator button!\""
      ]
    },
    "body": "HTML elements tell the browser how to display the content.\nHTML elements label pieces of content such as \"this is a heading\", \"this is a paragraph\", \"this is a link\", etc.\n\n### A Simple HTML Document:\n- The `<!DOCTYPE html>` declaration defines this document as HTML5.\n- The `<html>` element is the root element.\n- The `<head>` element contains meta info (charset, title, viewport, stylesheets).\n- The `<title>` element specifies the page title in browser tabs.\n- The `<body>` element contains visible page contents (headings, paragraphs, images, tables).",
    "tryItCode": "<!DOCTYPE html>\n<html>\n<body>\n\n<h1>Welcome to W3-Style ByteVerse!</h1>\n<p>HTML is the foundation of all modern websites.</p>\n<button onclick=\"alert('You clicked the magic button!')\">Click Me!</button>\n\n</body>\n</html>",
    "codeType": "html",
    "tips": "HTML tags normally come in pairs like <p> and </p>. The first tag is the start tag, and the second is the end tag.",
    "exercise": {
      "question": "Which tag wraps all visible contents of an HTML document?",
      "options": [
        "<head>",
        "<body>",
        "<visible>",
        "<main-frame>"
      ],
      "correct": 1,
      "hint": "Everything displayed on the screen goes inside this element."
    }
  },
  {
    "id": "html_elements",
    "category": "HTML Tutorial",
    "title": "HTML Elements & Tags",
    "summary": "An HTML element is defined by a start tag, some content, and an end tag.",
    "eli5": {
      "story": "Think of an HTML element like a sandwich! The top slice of bread is the opening tag <p>. The peanut butter and jelly in the middle is your text. The bottom slice of bread is the closing tag </p> with a little backward slash. If you drop the bottom slice, your sandwich spills!",
      "analogy": "🥪 The Bread Sandwich: <p> (Top bread) + \"Hello\" (Filling) + </p> (Bottom bread with /).",
      "rules": [
        "Start Tag: <tagname>",
        "Content: The text, picture, or button you want to show.",
        "End Tag: </tagname> (Always has the / slash!)"
      ]
    },
    "body": "`<tagname> Content goes here... </tagname>`\n\n### Nested HTML Elements\nHTML elements can be nested (elements can contain other elements).\nAll HTML documents consist of nested HTML elements.\n\n### Empty HTML Elements\nHTML elements with no content are called empty elements.\nExample: `<br>` defines a line break without an end tag.",
    "tryItCode": "<div style=\"background:#1e293b; padding:16px; border-radius:8px; border:1px solid #334155;\">\n  <h3 style=\"color:#00f2fe; margin-top:0;\">Nested Elements</h3>\n  <p style=\"color:#94a3b8;\">\n    This &lt;p&gt; is nested inside a &lt;div&gt;.<br>\n    The &lt;br&gt; tag above created a line break!\n  </p>\n</div>",
    "codeType": "html",
    "notes": "Never skip the end tag! Some elements might display correctly without it, but unexpected errors can occur.",
    "exercise": {
      "question": "What is an HTML element without content or closing tag called?",
      "options": [
        "Void / Empty element",
        "Broken element",
        "Ghost element",
        "Blank tag"
      ],
      "correct": 0,
      "hint": "Examples include <br>, <hr>, and <img>."
    }
  },
  {
    "id": "html_attributes",
    "category": "HTML Tutorial",
    "title": "HTML Attributes",
    "summary": "HTML attributes provide additional information about HTML elements.",
    "eli5": {
      "story": "Imagine you have a toy car. The tag is <car>. But what color is the car? How fast does it go? Attributes are the superpowers you give the car! You write <car color=\"blue\" speed=\"superfast\">.",
      "analogy": "🦸 Superhero Badges: Attributes tell the computer extra secrets, like where a link should jump or which picture to load.",
      "rules": [
        "href=\"https://...\" tells a link where to fly when clicked.",
        "src=\"cat.png\" tells an image which photo to display.",
        "alt=\"cute cat\" describes the photo if the image is lost."
      ]
    },
    "body": "All HTML elements can have attributes.\nAttributes provide additional information about elements.\nAttributes are always specified in the start tag.\nAttributes usually come in name/value pairs like: `name=\"value\"`.\n\n### Key Attributes:\n- `href`: Specifies the URL of the page the link goes to.\n- `src`: Specifies the path to the image/media to be displayed.\n- `width` and `height`: Dimensions in pixels.\n- `alt`: Alternative text for screen readers or when an image fails to load.\n- `style`: Inline CSS styling.\n- `title`: Tooltip displayed on mouse hover.",
    "tryItCode": "<a href=\"https://byteverse-chi.vercel.app\" title=\"Visit ByteVerse\" style=\"color:#00f2fe; font-weight:bold;\">\n  Hover over me to see the secret title tooltip!\n</a>\n<br><br>\n<img src=\"https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300\" alt=\"Laptop on desk\" width=\"260\" style=\"border-radius:8px;\">",
    "codeType": "html",
    "tips": "Always use lowercase attribute names and enclose attribute values in double quotes.",
    "exercise": {
      "question": "Which attribute specifies an alternate text for an image if the image cannot be displayed?",
      "options": [
        "title",
        "src",
        "alt",
        "description"
      ],
      "correct": 2,
      "hint": "Short for alternate."
    }
  },
  {
    "id": "html_headings",
    "category": "HTML Basic Elements",
    "title": "HTML Headings & Paragraphs",
    "summary": "HTML headings are titles or subtitles that you want to display on a webpage.",
    "eli5": {
      "story": "Imagine a family of bears! Papa Bear is <h1> (giant and loud), Mama Bear is <h2>, Sister Bear is <h3>, and Baby Bear is <h6> (tiny like a mouse whispering). Use big bear headings for main titles, and baby bear headings for tiny sub-headings!",
      "analogy": "🐻 The Bear Family: <h1> is the giant Papa Bear (biggest headline), and <h6> is the tiny Baby Bear (smallest).",
      "rules": [
        "<h1> is the king title! Only use one <h1> per webpage.",
        "Headings go from <h1> (biggest) down to <h6> (smallest).",
        "<p> is for normal paragraph reading sentences."
      ]
    },
    "body": "HTML headings are defined with the `<h1>` to `<h6>` tags:\n- `<h1>` defines the most important heading.\n- `<h6>` defines the least important heading.\n\nSearch engines like Google use headings to index the structure and content of your web pages. Users often skim a page by its headings.\n\n### The Paragraph Element\nThe HTML `<p>` element defines a paragraph. Browsers automatically add a single blank line before and after each paragraph.\nThe `<hr>` tag creates a horizontal thematic break line.\nThe `<br>` tag inserts a single line break without starting a new paragraph.",
    "tryItCode": "<h1>Heading 1 (Giant King)</h1>\n<h2>Heading 2 (Prince)</h2>\n<h3>Heading 3 (Knight)</h3>\n<h4>Heading 4 (Soldier)</h4>\n<h5>Heading 5 (Scout)</h5>\n<h6>Heading 6 (Tiny Ant)</h6>\n<hr>\n<p>This is a paragraph of story text.<br>And this is on a fresh new line using &lt;br&gt;!</p>",
    "codeType": "html",
    "tips": "Never use headings just to make text BIG or bold. Use CSS for font sizing; reserve headings for document structure!",
    "exercise": {
      "question": "Which heading tag represents the largest and most important heading?",
      "options": [
        "<h6>",
        "<head>",
        "<h1>",
        "<heading>"
      ],
      "correct": 2,
      "hint": "1 is the top rank."
    }
  },
  {
    "id": "html_formatting",
    "category": "HTML Basic Elements",
    "title": "HTML Text Formatting",
    "summary": "HTML contains several elements for defining text with special meaning and visual styling.",
    "eli5": {
      "story": "Have you ever highlighted words in your school notebook with a bright yellow neon marker, or made important words bold with a thick black marker? HTML has magic tags that dress up your words in funny costumes: bold armor, leaning italics, or glowing yellow highlighter!",
      "analogy": "🖍️ The Pencil Case Markers: <strong> makes words bold like a superhero, <em> makes words lean in italic whisper, and <mark> paints them with yellow neon!",
      "rules": [
        "<b> or <strong>: Makes text thick and bold.",
        "<i> or <em>: Tilts text into stylish italics.",
        "<mark>: Paints words with a neon highlighter background."
      ]
    },
    "body": "HTML Formatting Elements:\n- `<b>` - Bold text\n- `<strong>` - Important text (spoken with emphasis by screen readers)\n- `<i>` - Italic text\n- `<em>` - Emphasized text\n- `<mark>` - Marked / highlighted text\n- `<small>` - Smaller text\n- `<del>` - Deleted text with a strikethrough line\n- `<ins>` - Inserted text with an underline\n- `<sub>` - Subscript text (like H₂O)\n- `<sup>` - Superscript text (like E=mc²)",
    "tryItCode": "<div style=\"line-height:1.8; color:#f8fafc;\">\n  <p>This text is <strong>super strong & bold</strong>!</p>\n  <p>This text is <em>emphasized in stylish italics</em>.</p>\n  <p>Don't forget to eat your <mark style=\"background:#fef08a; color:#000; padding:2px 6px; border-radius:4px;\">vegetables</mark> today!</p>\n  <p>Water formula is H<sub>2</sub>O and Einstein says E = mc<sup>2</sup>.</p>\n  <p>Price: <del style=\"color:#f87171;\">$100</del> <ins style=\"color:#4ade80;\">$49 (SALE!)</ins></p>\n</div>",
    "codeType": "html",
    "notes": "Use <strong> and <em> over <b> and <i> whenever possible, because search engines and screen readers recognize their semantic importance.",
    "exercise": {
      "question": "Which tag highlights text with a yellow background like a marker?",
      "options": [
        "<highlight>",
        "<mark>",
        "<yellow>",
        "<neon>"
      ],
      "correct": 1,
      "hint": "Think of \"marking\" an answer on a paper."
    }
  },
  {
    "id": "html_links",
    "category": "HTML Navigation",
    "title": "HTML Links & Hyperlinks",
    "summary": "HTML links are hyperlinks. You can click on a link and jump to another document or website.",
    "eli5": {
      "story": "Have you ever watched a superhero step through a glowing portal that instantly teleports them across the galaxy? An HTML link is that exact magic portal! You click on a blue word, and WHOOSH! You are suddenly on another website in a fraction of a second!",
      "analogy": "🌀 Magic Teleport Portal: <a href=\"...\"> grabs your hand and teleports you to any webpage on Earth!",
      "rules": [
        "The tag is <a>, which stands for \"Anchor\".",
        "href=\"url\" is the secret destination coordinates.",
        "target=\"_blank\" tells the browser to open the portal in a brand new tab!"
      ]
    },
    "body": "The HTML `<a>` tag defines a hyperlink.\nSyntax:\n`<a href=\"url\">link text</a>`\n\nThe most important attribute of the `<a>` element is the `href` attribute, which indicates the link's destination.\n\n### Target Attribute:\nBy default, the linked page displays in the current browser window. To change this, specify another target:\n- `_self` - Default. Opens the document in the same window/tab.\n- `_blank` - Opens the document in a new window or tab.\n- `_parent` - Opens the document in the parent frame.\n- `_top` - Opens the document in the full body of the window.\n\n### Linking to an Email:\nUse `mailto:` inside `href` to open the user's email client!",
    "tryItCode": "<div style=\"display:flex; flex-direction:column; gap:12px;\">\n  <a href=\"https://byteverse-chi.vercel.app\" target=\"_blank\" style=\"color:#00f2fe; font-weight:bold; text-decoration:underline;\">\n    🚀 Teleport to ByteVerse (Opens in new tab)\n  </a>\n  <a href=\"https://affansayed.vercel.app/\" target=\"_blank\" style=\"color:#a855f7; font-weight:bold; text-decoration:underline;\">\n    💼 Visit Affan Sayed's Portfolio Website\n  </a>\n  <a href=\"mailto:sayedaffan@example.com\" style=\"color:#4ade80;\">\n    📧 Send Secret Message (Email Link)\n  </a>\n</div>",
    "codeType": "html",
    "tips": "When using target=\"_blank\", always add rel=\"noopener noreferrer\" for web security and performance.",
    "exercise": {
      "question": "Which attribute opens a link in a brand-new browser tab?",
      "options": [
        "target=\"_new\"",
        "target=\"_blank\"",
        "window=\"open\"",
        "href=\"new\""
      ],
      "correct": 1,
      "hint": "It starts with an underscore: _blank."
    }
  },
  {
    "id": "html_images",
    "category": "HTML Media",
    "title": "HTML Images",
    "summary": "Images can improve the design and appearance of a web page.",
    "eli5": {
      "story": "Imagine an empty picture frame hanging on your wall! The picture frame has no photo inside until you slip a snapshot into it. The <img> tag is that picture frame! You whisper src=\"puppy.jpg\", and the photo appears inside the frame instantly!",
      "analogy": "🖼️ The Photo Frame: <img> holds the picture, src points to where the photo is stored, and alt describes it if your Wi-Fi drops!",
      "rules": [
        "<img> is a self-closing tag (no </img> needed).",
        "src=\"...\" is the image location URL.",
        "Always include alt=\"...\" so blind students using screen readers know what is in the picture!"
      ]
    },
    "body": "The HTML `<img>` tag is used to embed an image in a web page.\nImages are not technically inserted into a web page; images are linked to web pages. The `<img>` tag creates a holding space for the referenced image.\n\nThe `<img>` tag is empty, it contains attributes only, and does not have a closing tag.\n\n### The Two Required Attributes:\n1. `src` - Specifies the path to the image.\n2. `alt` - Specifies an alternate text for the image if the image cannot be displayed.\n\n### Image Sizing:\nYou can use the `style` attribute or the `width` and `height` attributes to specify the width and height of an image.",
    "tryItCode": "<div style=\"text-align:center; background:#0f172a; padding:16px; border-radius:12px; border:1px solid #334155;\">\n  <h4 style=\"color:#38bdf8; margin:0 0 10px 0;\">Cyber Coding Workspace</h4>\n  <img \n    src=\"https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=400\" \n    alt=\"High-tech computer coding screen\" \n    width=\"320\" \n    style=\"border-radius:10px; box-shadow:0 0 20px rgba(56,189,248,0.3); max-width:100%; height:auto;\"\n  >\n  <p style=\"color:#94a3b8; font-size:12px; margin-top:8px;\">Photo loaded dynamically with &lt;img src=\"...\"&gt;</p>\n</div>",
    "codeType": "html",
    "notes": "Always specify the width and height of an image. If width and height are not specified, the web page might flicker while the image loads.",
    "exercise": {
      "question": "Which tag is used to display an image on a webpage?",
      "options": [
        "<picture>",
        "<image>",
        "<img>",
        "<photo>"
      ],
      "correct": 2,
      "hint": "It is a 3-letter abbreviation: <img>."
    }
  },
  {
    "id": "html_lists",
    "category": "HTML Lists & Tables",
    "title": "HTML Lists (Ordered & Unordered)",
    "summary": "HTML lists allow web developers to group a set of related items in lists.",
    "eli5": {
      "story": "When your mom gives you a grocery list, does it have bullet dots like cookies, milk, and apples? Or does it have numbers like step 1: wash hands, step 2: bake cake? In HTML, bullet lists are Unordered (<ul>), and 1-2-3 lists are Ordered (<ol>)!",
      "analogy": "📝 Grocery List vs Recipe Steps: <ul> gives you round bullet dots, and <ol> gives you 1, 2, 3 numbered steps!",
      "rules": [
        "<ul> creates an Unordered List (bullets).",
        "<ol> creates an Ordered List (1, 2, 3 numbers).",
        "<li> creates each individual List Item inside!"
      ]
    },
    "body": "### Unordered HTML List:\nAn unordered list starts with the `<ul>` tag. Each list item starts with the `<li>` tag.\nThe list items will be marked with bullets (small black circles) by default.\n\n### Ordered HTML List:\nAn ordered list starts with the `<ol>` tag. Each list item starts with the `<li>` tag.\nThe list items will be marked with numbers by default.\n\n### Description Lists:\nHTML also supports description lists:\n- `<dl>` defines the description list.\n- `<dt>` defines the term (name).\n- `<dd>` describes each term.",
    "tryItCode": "<div style=\"display:grid; grid-template-columns:1fr 1fr; gap:20px; color:#f1f5f9;\">\n  <div style=\"background:#1e293b; padding:12px; border-radius:8px;\">\n    <strong style=\"color:#38bdf8;\">🎮 Arcade Games (ul)</strong>\n    <ul style=\"padding-left:20px;\">\n      <li>Tag Fortress (HTML)</li>\n      <li>Style Forge (CSS)</li>\n      <li>Bug Hunter (JS)</li>\n    </ul>\n  </div>\n\n  <div style=\"background:#1e293b; padding:12px; border-radius:8px;\">\n    <strong style=\"color:#4ade80;\">🏆 3 Steps to Master (ol)</strong>\n    <ol style=\"padding-left:20px;\">\n      <li>Read ELI5 Story</li>\n      <li>Click Try it Yourself</li>\n      <li>Score 100 XP in Arcade</li>\n    </ol>\n  </div>\n</div>",
    "codeType": "html",
    "tips": "You can nest lists inside other lists to create multi-level navigation trees or sub-menus!",
    "exercise": {
      "question": "Which tag defines an ordered numbered list?",
      "options": [
        "<ul>",
        "<ol>",
        "<li>",
        "<list>"
      ],
      "correct": 1,
      "hint": "Ordered List = <ol>."
    }
  },
  {
    "id": "html_tables",
    "category": "HTML Lists & Tables",
    "title": "HTML Tables",
    "summary": "HTML tables allow web developers to arrange data into rows and columns.",
    "eli5": {
      "story": "Have you ever played Tic-Tac-Toe on a grid of squares, or looked at a school class schedule showing Monday, Tuesday, and Wednesday? A table is a grid of little boxes called cells where you put numbers, names, or scores!",
      "analogy": "📊 Tic-Tac-Toe Grid: <table> is the board, <tr> is a horizontal row, <th> is a bold header, and <td> is a regular data cell.",
      "rules": [
        "<table> is the big outer box.",
        "<tr> creates a row from left to right.",
        "<th> is for column titles (bold and centered), and <td> holds regular data."
      ]
    },
    "body": "A table in HTML consists of table cells inside rows and columns:\n- `<table>`: The container element.\n- `<tr>`: Table Row.\n- `<th>`: Table Header cell (bold and centered by default).\n- `<td>`: Table Data cell (regular content).\n- `<thead>`, `<tbody>`, `<tfoot>`: Semantic sections of a table.\n\n### Merging Cells:\n- `colspan=\"2\"`: Merges two or more columns horizontally.\n- `rowspan=\"2\"`: Merges two or more rows vertically.",
    "tryItCode": "<table style=\"width:100%; border-collapse:collapse; color:#f8fafc; font-size:13px;\">\n  <thead>\n    <tr style=\"background:#0f766e; text-align:left;\">\n      <th style=\"padding:10px; border:1px solid #14b8a6;\">Hero Name</th>\n      <th style=\"padding:10px; border:1px solid #14b8a6;\">Track</th>\n      <th style=\"padding:10px; border:1px solid #14b8a6;\">Score</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr style=\"background:#1e293b;\">\n      <td style=\"padding:8px; border:1px solid #334155;\">Affan Sayed</td>\n      <td style=\"padding:8px; border:1px solid #334155;\">Master Architect</td>\n      <td style=\"padding:8px; border:1px solid #334155; color:#4ade80; font-weight:bold;\">9,999 XP</td>\n    </tr>\n    <tr style=\"background:#0f172a;\">\n      <td style=\"padding:8px; border:1px solid #334155;\">Cyber Cadet</td>\n      <td style=\"padding:8px; border:1px solid #334155;\">HTML Explorer</td>\n      <td style=\"padding:8px; border:1px solid #334155; color:#38bdf8;\">500 XP</td>\n    </tr>\n  </tbody>\n</table>",
    "codeType": "html",
    "notes": "Always use border-collapse: collapse; in CSS to avoid ugly double borders around cells.",
    "exercise": {
      "question": "Which tag defines a single data cell inside a table row?",
      "options": [
        "<tr>",
        "<td>",
        "<th>",
        "<tc>"
      ],
      "correct": 1,
      "hint": "Table Data = <td>."
    }
  },
  {
    "id": "html_block_inline",
    "category": "HTML Layout & Semantics",
    "title": "HTML Block vs Inline (Div & Span)",
    "summary": "Every HTML element has a default display value, depending on what type of element it is: block or inline.",
    "eli5": {
      "story": "Imagine two types of kids on a playground bench! A Block kid lies down flat across the entire bench so nobody else can sit next to them. An Inline kid sits politely in a small corner so all their friends can sit on the same bench right beside them!",
      "analogy": "🪑 The Playground Bench: <div> is a greedy block taking the whole row; <span> is polite inline sharing the row with other words.",
      "rules": [
        "Block elements (<div>, <p>, <h1>) always start on a brand new line and take 100% width.",
        "Inline elements (<span>, <a>, <b>) stay in the same line without breaking.",
        "<div> is the king container for building website sections."
      ]
    },
    "body": "### Block-level Elements:\nA block-level element always starts on a new line, and the browsers automatically add some space (a margin) before and after the element.\nA block-level element always takes up the full width available.\nCommon block elements: `<div>`, `<p>`, `<h1>`-`<h6>`, `<ul>`, `<ol>`, `<table>`, `<form>`, `<header>`, `<footer>`.\n\n### Inline Elements:\nAn inline element does not start on a new line. An inline element only takes up as much width as necessary.\nCommon inline elements: `<span>`, `<a>`, `<img>`, `<b>`, `<strong>`, `<i>`, `<input>`, `<button>`.",
    "tryItCode": "<!-- Block Element takes the full row -->\n<div style=\"background:#3b82f6; color:#fff; padding:10px; margin-bottom:10px; border-radius:6px;\">\n  I am a &lt;div&gt; (Block Element). I take the whole row!\n</div>\n\n<!-- Inline Elements sit side-by-side -->\n<p style=\"color:#f8fafc;\">\n  Here is regular text with a \n  <span style=\"background:#ec4899; color:#fff; padding:2px 8px; border-radius:4px;\">pink &lt;span&gt;</span> \n  and a \n  <span style=\"background:#10b981; color:#fff; padding:2px 8px; border-radius:4px;\">green &lt;span&gt;</span> \n  sitting side-by-side in the same sentence!\n</p>",
    "codeType": "html",
    "tips": "Use <div> to group elements for styling and layout; use <span> to style specific words inside a sentence.",
    "exercise": {
      "question": "Which of the following is an inline element by default?",
      "options": [
        "<div>",
        "<p>",
        "<span>",
        "<h1>"
      ],
      "correct": 2,
      "hint": "It does not start on a new line."
    }
  },
  {
    "id": "html_semantic",
    "category": "HTML Layout & Semantics",
    "title": "HTML5 Semantic Layout Elements",
    "summary": "A semantic element clearly describes its meaning to both the browser and the developer.",
    "eli5": {
      "story": "Have you ever walked through a supermarket where every aisle has a big sign: \"FRESH FRUIT\", \"BAKERY\", \"FROZEN FOOD\"? Before HTML5, developers called everything <div>. Now, HTML5 gives us proper signs: <header> is the roof, <nav> is the hallway, and <footer> is the floor!",
      "analogy": "🏷️ Aisle Signs in the Store: <header>, <nav>, <main>, <section>, <article>, and <footer> explain exactly what is inside each room of your website.",
      "rules": [
        "<header> holds the logo and page headline.",
        "<nav> holds your menu links.",
        "<main> holds the primary story of the page.",
        "<footer> holds copyright and creator info at the bottom."
      ]
    },
    "body": "### What are Semantic Elements?\nSemantic HTML tags provide meaningful information about the role of the content they contain:\n- `<header>`: Introductory content or navigational links.\n- `<nav>`: Section of navigation links.\n- `<main>`: Dominant content of the `<body>`.\n- `<section>`: Thematic grouping of content, typically with a heading.\n- `<article>`: Independent, self-contained content (like a blog post or news story).\n- `<aside>`: Content aside from the page content (like a sidebar).\n- `<footer>`: Author, copyright, contact info, or sitemap.",
    "tryItCode": "<div style=\"border:1px solid #475569; border-radius:10px; overflow:hidden; font-family:sans-serif;\">\n  <header style=\"background:#0f172a; padding:12px; border-bottom:1px solid #334155; color:#38bdf8; font-weight:bold;\">\n    &lt;header&gt; ByteVerse Navbar\n  </header>\n  \n  <div style=\"display:flex; min-height:100px;\">\n    <aside style=\"width:30%; background:#1e293b; padding:10px; font-size:12px; color:#94a3b8; border-right:1px solid #334155;\">\n      &lt;aside&gt; Sidebar Navigation\n    </aside>\n    <main style=\"flex:1; background:#0f172a; padding:12px; font-size:12px; color:#f8fafc;\">\n      &lt;main&gt; Primary Web Page Content Area\n    </main>\n  </div>\n\n  <footer style=\"background:#020617; padding:10px; text-align:center; font-size:11px; color:#64748b; border-top:1px solid #334155;\">\n    &lt;footer&gt; © 2026 Affan Sayed • All Rights Reserved\n  </footer>\n</div>",
    "codeType": "html",
    "notes": "Using semantic HTML makes your website rank much higher on Google (SEO) and makes it 100% accessible to screen readers for visually impaired people.",
    "exercise": {
      "question": "Which semantic element contains the main unique content of a webpage?",
      "options": [
        "<section>",
        "<main>",
        "<content>",
        "<primary>"
      ],
      "correct": 1,
      "hint": "There should only be one <main> per page."
    }
  },
  {
    "id": "html_forms",
    "category": "HTML Forms & Inputs",
    "title": "HTML Forms & Basic Inputs",
    "summary": "An HTML form is used to collect user input. The user input is most often sent to a server for processing.",
    "eli5": {
      "story": "Have you ever written a letter to Santa Claus with your Christmas wish list? You write your name, check boxes for the toys you want, and drop it in the mailbox. A form is that letter, and clicking \"Submit\" puts it in the digital mailbox!",
      "analogy": "📬 The Letter to Santa: An HTML form collects your answers and mails them to the computer server.",
      "rules": [
        "<input type=\"text\"> is a blank line where you type your name.",
        "<input type=\"password\"> hides your secret letters with dots so nobody peeks.",
        "<button type=\"submit\"> drops the letter into the mailbox!"
      ]
    },
    "body": "The `<form>` element is a container for different types of input elements:\n- Text fields (`<input type=\"text\">`)\n- Passwords (`<input type=\"password\">`)\n- Checkboxes (`<input type=\"checkbox\">`)\n- Radio buttons (`<input type=\"radio\">`)\n- Submit buttons (`<button type=\"submit\">`)\n\n### Form Attributes:\n- `action=\"/submit\"`: Defines where to send form data.\n- `method=\"POST\"` or `method=\"GET\"`: Specifies the HTTP method.",
    "tryItCode": "<form style=\"display:flex; flex-direction:column; gap:10px; max-width:300px; font-family:sans-serif;\">\n  <label style=\"font-size:12px; color:#94a3b8;\">Hero Codename:</label>\n  <input type=\"text\" placeholder=\"e.g. CyberNinja\" style=\"padding:8px; border-radius:6px; background:#1e293b; color:#fff; border:1px solid #475569;\">\n\n  <label style=\"font-size:12px; color:#94a3b8;\">Choose Track:</label>\n  <select style=\"padding:8px; border-radius:6px; background:#1e293b; color:#fff; border:1px solid #475569;\">\n    <option>HTML & CSS</option>\n    <option>JavaScript</option>\n    <option>Python & Django</option>\n    <option>MySQL Database</option>\n  </select>\n\n  <button type=\"button\" style=\"background:#00f2fe; color:#000; font-weight:bold; padding:10px; border-radius:6px; border:none; cursor:pointer;\">\n    Submit Form\n  </button>\n</form>",
    "codeType": "html",
    "notes": "The <label> element is useful for screen-reader users and expands the clickable area for small radio/checkboxes.",
    "exercise": {
      "question": "Which HTTP method should be used when submitting sensitive data like passwords?",
      "options": [
        "GET",
        "POST",
        "FETCH",
        "PUT"
      ],
      "correct": 1,
      "hint": "POST includes data in the HTTP request body instead of the URL string."
    }
  },
  {
    "id": "html_multimedia",
    "category": "HTML Media",
    "title": "HTML Audio & Video Players",
    "summary": "The HTML5 <video> and <audio> elements allow you to embed multimedia directly into web pages without third-party plugins.",
    "eli5": {
      "story": "Have you ever pressed PLAY on a movie on Netflix or listened to music through headphones? In the old days, websites needed clunky flash players to show videos. Now, HTML5 has native <video> and <audio> tags with play, pause, volume, and fullscreen buttons built right in!",
      "analogy": "🎬 The Built-in Movie Theater: <video controls> and <audio controls> turn any webpage into a cinema screen!",
      "rules": [
        "<video controls> puts a video on the screen with play/pause buttons.",
        "<audio controls> plays sound files and songs.",
        "Always include controls attribute so users can press play and pause!"
      ]
    },
    "body": "### The HTML <video> Element:\nTo show a video in HTML, use the `<video>` element:\n```html\n<video width=\"320\" height=\"240\" controls>\n  <source src=\"movie.mp4\" type=\"video/mp4\">\n  Your browser does not support the video tag.\n</video>\n```\n\n### Video Attributes:\n- `controls`: Displays play, pause, and volume controls.\n- `autoplay`: Starts playing video automatically (must be `muted` in modern browsers).\n- `loop`: Restarts the video each time it finishes.\n- `poster=\"cover.jpg\"`: Displays a thumbnail before the video starts.\n\n### The HTML <audio> Element:\nSimilar syntax for sound effects, podcasts, and music using `<audio controls>`.",
    "tryItCode": "<div style=\"background:#0f172a; padding:16px; border-radius:12px; border:1px solid #334155; text-align:center;\">\n  <h4 style=\"color:#38bdf8; margin-top:0;\">HTML5 Video Player Example</h4>\n  <video width=\"320\" controls poster=\"https://images.unsplash.com/photo-1518770660439-4636190af475?w=400\" style=\"border-radius:8px; max-width:100%;\">\n    <source src=\"https://www.w3schools.com/html/mov_bbb.mp4\" type=\"video/mp4\">\n    Your browser does not support the video tag.\n  </video>\n  <p style=\"color:#94a3b8; font-size:12px; margin-top:8px;\">Click play to watch Big Buck Bunny stream live!</p>\n</div>",
    "codeType": "html",
    "tips": "Modern browsers block videos from autoplaying with sound. Always add muted along with autoplay!",
    "exercise": {
      "question": "Which attribute provides play, pause, and volume buttons on a <video> element?",
      "options": [
        "buttons",
        "player",
        "controls",
        "media"
      ],
      "correct": 2,
      "hint": "It is called \"controls\"."
    }
  }
];
