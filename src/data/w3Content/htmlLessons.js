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
  },
  {
    "id": "html_styles",
    "category": "HTML Styles & Colors",
    "title": "HTML Styles (Inline CSS)",
    "summary": "The HTML style attribute is used to add styles to an element, such as color, font, size, and background.",
    "eli5": {
      "story": "Imagine you have a plain wooden toy car. It works fine, but it is just plain wood! The style attribute is your magic paintbrush that paints it neon blue, turns the wheels shiny silver, and gives it a giant racing stripe!",
      "analogy": "🎨 Magic Paintbrush: style='color:red' paints any word or box in your favorite shade instantly.",
      "rules": [
        "Write style=\"property:value;\" inside the opening tag.",
        "Use color: to paint the text.",
        "Use background-color: to paint behind the text."
      ]
    },
    "body": "### The HTML Style Attribute:\nTo style an HTML element directly, use the `style` attribute:\n```html\n<p style=\"color:red;\">I am a red paragraph.</p>\n<p style=\"color:blue; font-size:20px;\">I am big and blue.</p>\n```\n\n### Core Properties:\n- `background-color`: Sets the background color of an element.\n- `color`: Sets the text color.\n- `font-family`: Defines the font to be used (e.g. Arial, 'Courier New', sans-serif).\n- `font-size`: Defines the text size (e.g. 18px, 1.5rem, 150%).\n- `text-align`: Defines the horizontal alignment (`left`, `center`, `right`, `justify`).",
    "tryItCode": "<div style=\"background:#0f172a; padding:24px; border-radius:12px; border:1px solid #334155; text-align:center;\">\n  <h1 style=\"color:#00f2fe; font-family:'Courier New', monospace; font-size:26px; margin:0;\">Neon Terminal</h1>\n  <p style=\"color:#e2e8f0; font-size:15px; margin-top:8px;\">Styled with pure HTML inline style attributes!</p>\n  <button style=\"background:#10b981; color:#0f172a; font-weight:bold; padding:10px 20px; border-radius:8px; border:none; cursor:pointer;\">Launch Mission</button>\n</div>",
    "codeType": "html",
    "tips": "Always separate multiple CSS rules with semicolons (;) inside the style quotation marks.",
    "exercise": {
      "question": "Which CSS property inside a style attribute sets the background color of an element?",
      "options": [
        "bgcolor",
        "background-color",
        "color-background",
        "canvas-color"
      ],
      "correct": 1,
      "hint": "It is written with a hyphen: background-color."
    }
  },
  {
    "id": "html_quotations",
    "category": "HTML Text Formatting",
    "title": "HTML Quotations & Citations",
    "summary": "HTML contains special quotation and citation elements to mark quotes, abbreviations, addresses, and citations.",
    "eli5": {
      "story": "When you repeat what your teacher or superhero said in a story, you put quotation marks around their words so everyone knows who said it. HTML has elements like <blockquote> and <abbr> that tell computers 'Hey, this is an official quote from someone else!'",
      "analogy": "📜 The Speech Scroll: <blockquote> indents and showcases an important speech from someone famous.",
      "rules": [
        "<blockquote> is for long quotes from other sources.",
        "<q> adds small inline quotation marks around words.",
        "<abbr title='...'> shows what letters stand for when you hover over them."
      ]
    },
    "body": "### Quotation Elements in HTML:\n- `<blockquote>`: Defines a section that is quoted from another source. Browsers usually indent `<blockquote>` elements.\n- `<q>`: Defines a short inline quotation. Browsers normally insert quotation marks around the quotation.\n- `<abbr title=\"...\">`: Defines an abbreviation or an acronym (hovering reveals full text).\n- `<address>`: Defines contact information for the author/owner of a document.\n- `<cite>`: Defines the title of a work (e.g. a book, poem, song, movie).\n- `<bdo dir=\"rtl\">`: Bi-Directional Override (inverts reading direction, right-to-left).",
    "tryItCode": "<div style=\"background:#0f172a; padding:20px; border-radius:12px; color:#e2e8f0; font-family:sans-serif;\">\n  <p>Affan says: <q style=\"color:#38bdf8;\">Code is pure digital wizardry.</q></p>\n  <blockquote cite=\"https://affansayed.vercel.app\" style=\"border-left:4px solid #10b981; margin:16px 0; padding-left:16px; color:#94a3b8; font-style:italic;\">\n    \"Anyone can learn to program if you explain it simply from the ground up.\"\n  </blockquote>\n  <p>Learn more about <abbr title=\"HyperText Markup Language\" style=\"color:#f59e0b; text-decoration:underline;\">HTML</abbr> today!</p>\n</div>",
    "codeType": "html",
    "exercise": {
      "question": "Which HTML element specifies an abbreviation or acronym with an explanatory tooltip?",
      "options": [
        "<acronym>",
        "<abbr>",
        "<tooltip>",
        "<short>"
      ],
      "correct": 1,
      "hint": "It is short for abbreviation: <abbr>."
    }
  },
  {
    "id": "html_comments",
    "category": "HTML Basics",
    "title": "HTML Comments",
    "summary": "HTML comments are not displayed in the browser, but they help document your HTML source code and debug errors.",
    "eli5": {
      "story": "Imagine you are building a secret fort with your best friend, and you write secret notes on the back of the cardboard boxes that only you can read. In HTML, comments are secret notes for programmers that the website visitor never sees on the screen!",
      "analogy": "🤫 Secret Whispers: Computers ignore comments, but other human coders love reading them!",
      "rules": [
        "Comments start with <!-- and end with -->.",
        "Anything inside the comment is completely invisible on the webpage.",
        "Great for turning off broken code temporarily while testing."
      ]
    },
    "body": "### Syntax of HTML Comments:\n```html\n<!-- This is a single line comment -->\n\n<p>This paragraph is visible on screen.</p>\n\n<!--\n  This is a multi-line comment.\n  You can hide large chunks of code for debugging!\n  <button>Disabled Button</button>\n-->\n```\n\n### Why Use Comments?\n1. **Documentation**: Explain what a section of code does for your team or your future self.\n2. **Debugging**: Quickly disable broken elements without deleting your hard work.\n3. **Section Dividers**: Organize long web pages into logical chapters (e.g. `<!-- START NAVIGATION -->`).",
    "tryItCode": "<div style=\"font-family:sans-serif; background:#0f172a; padding:20px; border-radius:12px; color:#e2e8f0;\">\n  <!-- This title shows up: -->\n  <h2 style=\"color:#10b981;\">Visible Content</h2>\n  <p>The comment below is hidden from the rendered page:</p>\n  <!-- <p style=\"color:red;\">YOU CANNOT SEE THIS SECRET MESSAGE!</p> -->\n  <p style=\"font-size:12px; color:#94a3b8;\">Inspect page source to see the hidden message!</p>\n</div>",
    "codeType": "html",
    "exercise": {
      "question": "Which of the following is the correct syntax for an HTML comment?",
      "options": [
        "// This is a comment",
        "/* This is a comment */",
        "<!-- This is a comment -->",
        "# This is a comment"
      ],
      "correct": 2,
      "hint": "It begins with <!-- and ends with -->."
    }
  },
  {
    "id": "html_colors",
    "category": "HTML Styles & Colors",
    "title": "HTML Colors (HEX, RGB, HSL)",
    "summary": "HTML colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, and HSLA values.",
    "eli5": {
      "story": "When you mix red, green, and blue paint from your art box, you can create every color in the whole universe! On your computer screen, tiny red, green, and blue light bulbs shine together. When all three shine at full power (255), you get bright pure white light!",
      "analogy": "🌈 The 3-Color Spotlight: Mixing Red, Green, and Blue light creates millions of stunning colors.",
      "rules": [
        "RGB values range from 0 (off) to 255 (maximum brightness).",
        "HEX colors start with a hashtag # followed by 6 hex letters/numbers like #00f2fe.",
        "RGBA adds an 'A' for Alpha transparency: rgba(0, 0, 0, 0.5) is half see-through glass!"
      ]
    },
    "body": "### Color Representation in HTML:\n1. **Color Names**: 140 standard color names are supported (`Red`, `MediumSeaGreen`, `Cyan`, `DarkSlateBlue`).\n2. **RGB**: `rgb(red, green, blue)` where each value is between 0 and 255.\n3. **HEX**: `#RRGGBB` where RR, GG, and BB are hexadecimal values between 00 and FF (e.g. `#ff0000` is pure red).\n4. **RGBA**: `rgba(red, green, blue, alpha)` where alpha is between 0.0 (fully transparent) and 1.0 (fully opaque).\n5. **HSL**: `hsl(hue, saturation, lightness)` where hue is 0-360 degrees on the color wheel.",
    "tryItCode": "<div style=\"display:flex; flex-direction:column; gap:10px; font-family:sans-serif;\">\n  <div style=\"background:rgb(255, 99, 71); color:white; padding:12px; border-radius:8px; font-weight:bold;\">\n    rgb(255, 99, 71) - Tomato Red\n  </div>\n  <div style=\"background:#00f2fe; color:#0f172a; padding:12px; border-radius:8px; font-weight:bold;\">\n    #00f2fe - Cyber Neon Cyan (HEX)\n  </div>\n  <div style=\"background:rgba(16, 185, 129, 0.3); border:1px solid #10b981; color:#10b981; padding:12px; border-radius:8px; font-weight:bold;\">\n    rgba(16, 185, 129, 0.3) - Glassmorphism Green with 30% Alpha\n  </div>\n</div>",
    "codeType": "html",
    "exercise": {
      "question": "What does the 'A' represent in RGBA color syntax?",
      "options": [
        "Algorithm",
        "Alpha (Opacity / Transparency)",
        "Ambient Light",
        "Automatic brightness"
      ],
      "correct": 1,
      "hint": "Alpha defines how transparent or see-through the color is."
    }
  },
  {
    "id": "html_favicon",
    "category": "HTML Head & Metadata",
    "title": "HTML Favicon",
    "summary": "A favicon is a small image displayed next to the page title in the browser tab, in bookmarks, and in search shortcuts.",
    "eli5": {
      "story": "Look at the tabs at the top of your web browser right now! Each tab has a tiny picture logo next to the title — YouTube has a red play button, Google has a multi-colored G. That tiny picture is called a Favicon (Favorite Icon)!",
      "analogy": "🏷️ The Tab Flag: A favicon is like the tiny mascot flag hoisted on your browser tab.",
      "rules": [
        "Favicons are placed inside the <head> element.",
        "Use <link rel='icon' type='image/x-icon' href='favicon.ico'>.",
        "Square images (32x32 or 64x64 pixels) work best."
      ]
    },
    "body": "### Adding a Favicon to HTML:\nTo add a favicon to your website, save your favicon image to your web root and add a `<link>` tag inside `<head>`:\n```html\n<!DOCTYPE html>\n<html>\n<head>\n  <title>ByteVerse Academy</title>\n  <link rel=\"icon\" type=\"image/x-icon\" href=\"/favicon.ico\">\n</head>\n<body>\n  <h1>Welcome!</h1>\n</body>\n</html>\n```\n\n### Modern Formats Supported:\n- `.ico`: Supported by all historical browsers.\n- `.png`: Excellent for high-resolution retina screens.\n- `.svg`: Vector favicons that adapt automatically to dark mode / light mode!",
    "tryItCode": "<div style=\"background:#0f172a; padding:20px; border-radius:12px; border:1px solid #334155; font-family:sans-serif;\">\n  <div style=\"background:#1e293b; padding:10px 16px; border-radius:8px; display:inline-flex; items-center; gap:8px; align-items:center;\">\n    <span style=\"font-size:18px;\">🚀</span>\n    <span style=\"color:#fff; font-size:13px; font-weight:bold;\">ByteVerse - Coding Academy</span>\n    <span style=\"color:#64748b; font-size:12px; margin-left:12px;\">&times;</span>\n  </div>\n  <p style=\"color:#94a3b8; font-size:12px; margin-top:12px;\">The rocket emoji above represents how your favicon appears on the browser tab!</p>\n</div>",
    "codeType": "html",
    "exercise": {
      "question": "Which HTML tag and rel attribute is used to link a favicon to a web page?",
      "options": [
        "<meta rel=\"favicon\">",
        "<link rel=\"icon\">",
        "<img rel=\"tabicon\">",
        "<icon src=\"...\">"
      ],
      "correct": 1,
      "hint": "It is <link rel=\"icon\" ...>."
    }
  },
  {
    "id": "html_iframes",
    "category": "HTML Advanced Layout",
    "title": "HTML Iframes",
    "summary": "An HTML iframe is used to display a web page within a web page (inline frame).",
    "eli5": {
      "story": "Imagine your bedroom has a magical picture frame on the wall that shows a live video of Disneyland or your favorite video game in real-time. An <iframe> is a magical window cut into your website that peeks into another website completely!",
      "analogy": "🪟 The Magic Window: <iframe> embeds maps, YouTube videos, or sandboxes directly onto your page.",
      "rules": [
        "<iframe src='URL'> defines the page to show inside the frame.",
        "Always specify width and height in pixels or percentages.",
        "Use title='...' for accessibility and screen readers."
      ]
    },
    "body": "### Syntax of HTML Iframes:\n```html\n<iframe src=\"https://example.com\" width=\"600\" height=\"400\" title=\"Example Frame\">\n</iframe>\n```\n\n### Key Attributes:\n- `src`: The address of the document to embed in the iframe.\n- `title`: Essential for accessibility (describes iframe content).\n- `loading=\"lazy\"`: Defers loading until the iframe is near the viewport (speeds up page load).\n- `allowfullscreen`: Allows the iframe to open in fullscreen mode (essential for videos).\n- `sandbox`: Restricts scripts and forms inside the frame for security.",
    "tryItCode": "<div style=\"background:#0f172a; padding:16px; border-radius:12px; border:1px solid #334155; text-align:center;\">\n  <h4 style=\"color:#38bdf8; margin:0 0 12px 0;\">Embedded Wikipedia Iframe</h4>\n  <iframe \n    src=\"https://en.wikipedia.org/wiki/HTML\" \n    width=\"100%\" \n    height=\"220\" \n    style=\"border:1px solid #475569; border-radius:8px; background:#fff;\"\n    title=\"Wikipedia HTML Article\"\n  ></iframe>\n</div>",
    "codeType": "html",
    "exercise": {
      "question": "Which attribute on an <iframe> defines the web address of the embedded document?",
      "options": [
        "href",
        "src",
        "link",
        "target"
      ],
      "correct": 1,
      "hint": "Just like an <img> tag, it uses src."
    }
  },
  {
    "id": "html_filepaths",
    "category": "HTML Basics",
    "title": "HTML File Paths",
    "summary": "A file path describes the location of a file in a website's folder structure.",
    "eli5": {
      "story": "If you want to tell a friend where your favorite toy is, you might say 'Look in my closet, top shelf, inside the red box!' A file path gives the browser step-by-step directions through computer folders to find pictures, stylesheets, and sounds.",
      "analogy": "🗺️ The Treasure Map: A file path guides the browser to the exact folder where the treasure is kept.",
      "rules": [
        "picture.jpg means the file is in the exact same folder.",
        "images/picture.jpg means look inside the images folder.",
        "../picture.jpg means go UP one folder level first."
      ]
    },
    "body": "### Types of File Paths:\n1. **Absolute File Paths**: A full URL to an internet resource:\n   `<img src=\"https://www.w3schools.com/images/picture.jpg\">`\n2. **Relative File Paths**: Points to a file relative to the current page:\n   - `<img src=\"picture.jpg\">`: File is in the same folder as current page.\n   - `<img src=\"images/picture.jpg\">`: File is in the `images` folder inside current folder.\n   - `<img src=\"/images/picture.jpg\">`: File is in the `images` folder at the root of the domain.\n   - `<img src=\"../picture.jpg\">`: File is in the folder one level up from current folder.",
    "tryItCode": "<div style=\"background:#0f172a; padding:20px; border-radius:12px; font-family:sans-serif; color:#e2e8f0;\">\n  <h4 style=\"color:#10b981; margin-top:0;\">File Path Simulator:</h4>\n  <ul style=\"line-height:1.8; font-family:monospace; font-size:13px;\">\n    <li><span style=\"color:#38bdf8;\">./index.html</span> - Current directory</li>\n    <li><span style=\"color:#f59e0b;\">./assets/logo.png</span> - Subfolder path</li>\n    <li><span style=\"color:#ec4899;\">../database/schema.sql</span> - One folder up (parent)</li>\n  </ul>\n</div>",
    "codeType": "html",
    "exercise": {
      "question": "What does \"../\" indicate at the start of a relative file path in HTML?",
      "options": [
        "Search Google for the file",
        "Move up one folder level from current location",
        "Move down into a hidden folder",
        "Restart the web browser"
      ],
      "correct": 1,
      "hint": "Two dots and a slash (../) navigates up to the parent directory."
    }
  },
  {
    "id": "html_head",
    "category": "HTML Head & Metadata",
    "title": "HTML Head & Metadata",
    "summary": "The HTML <head> element is a container for metadata (data about data) and is placed between the <html> tag and the <body> tag.",
    "eli5": {
      "story": "Before an astronaut launches into space, the mission control computers need to know the flight coordinates, the language to speak, and the screen size of the spacecraft. The <head> tag is the mission control center of your website!",
      "analogy": "🧠 The Website Brain: <head> holds secret instructions, fonts, and stylesheets that tell the body how to look.",
      "rules": [
        "<head> comes before <body> and is never drawn on the visible page.",
        "<meta charset='utf-8'> lets you write in every language and emoji on Earth.",
        "<meta name='viewport' ...> makes the page look gorgeous on mobile phones."
      ]
    },
    "body": "### Key Elements Inside `<head>`:\n- `<title>`: Defines the document title shown in browser tab and search results.\n- `<style>`: Used to define internal CSS styling rules for a single document.\n- `<link>`: Links external resources like CSS stylesheets or favicons.\n- `<meta>`: Used to specify character set, page description, keywords, author, and viewport settings.\n- `<script>`: Embeds or links client-side JavaScript.\n- `<base>`: Specifies the base URL/target for all relative URLs in a page.\n\n### The Critical Mobile Viewport Tag:\n```html\n<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n```\nThis gives the browser instructions on how to control the page's dimensions and scaling on smartphones.",
    "tryItCode": "<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"description\" content=\"ByteVerse Cyber Academy\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>Mission Control</title>\n</head>\n<body style=\"font-family:sans-serif; background:#0f172a; color:#fff; padding:20px;\">\n  <h3>Metadata successfully configured!</h3>\n  <p>The viewport and character encoding are active.</p>\n</body>\n</html>",
    "codeType": "html",
    "exercise": {
      "question": "Which meta tag ensures that a web page scales properly across mobile smartphones and tablets?",
      "options": [
        "<meta name=\"screen-fix\">",
        "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">",
        "<meta name=\"mobile-friendly\" content=\"true\">",
        "<meta name=\"resolution\" content=\"1080p\">"
      ],
      "correct": 1,
      "hint": "It configures the viewport width to match device-width."
    }
  },
  {
    "id": "html_computercode",
    "category": "HTML Text Formatting",
    "title": "HTML Computer Code Elements",
    "summary": "HTML contains several elements for defining user input and computer code.",
    "eli5": {
      "story": "When you read a computer manual, you notice that code snippets look different than regular storybooks. They use a special monospaced font where every letter is the exact same width! HTML has tags like <code> and <kbd> to show code on the screen.",
      "analogy": "💻 Typewriter Letters: <code> gives words that vintage programmer monospace aesthetic.",
      "rules": [
        "<code> marks computer code or variables.",
        "<kbd> marks keyboard keys to press like Ctrl+C.",
        "<pre> preserves all spaces, tabs, and line breaks exactly as typed."
      ]
    },
    "body": "### Code Elements:\n- `<code>`: Defines a piece of computer code. (Does not preserve whitespace; pair with `<pre>`).\n- `<kbd>`: Defines keyboard input (e.g. `<kbd>Ctrl</kbd> + <kbd>S</kbd>`).\n- `<samp>`: Defines sample output from a computer program.\n- `<var>`: Defines a variable in programming or in a mathematical expression.\n- `<pre>`: Defines preformatted text, preserving indents and line breaks.",
    "tryItCode": "<div style=\"background:#0f172a; padding:20px; border-radius:12px; color:#e2e8f0; font-family:sans-serif;\">\n  <p>Press <kbd style=\"background:#1e293b; padding:2px 6px; border-radius:4px; border:1px solid #475569;\">Ctrl</kbd> + <kbd style=\"background:#1e293b; padding:2px 6px; border-radius:4px; border:1px solid #475569;\">C</kbd> to copy.</p>\n  <pre style=\"background:#020617; padding:12px; border-radius:8px; border:1px solid #1e293b; color:#38bdf8; font-family:monospace;\">\nfunction helloWorld() {\n    console.log(\"ByteVerse Online\");\n}\n  </pre>\n</div>",
    "codeType": "html",
    "exercise": {
      "question": "Which HTML element preserves spaces and line breaks exactly as they are written in the source code?",
      "options": [
        "<code>",
        "<pre>",
        "<samp>",
        "<var>"
      ],
      "correct": 1,
      "hint": "It stands for pre-formatted text: <pre>."
    }
  },
  {
    "id": "html_entities",
    "category": "HTML Text Formatting",
    "title": "HTML Entities & Symbols",
    "summary": "Reserved characters in HTML must be replaced with character entities so the browser does not confuse them with tags.",
    "eli5": {
      "story": "If you type a less-than sign < on your webpage, the browser thinks 'Oh boy, they are starting a new HTML tag!' To show a real < sign without confusing the computer, you use a special secret code word: &lt; (which stands for Less Than)!",
      "analogy": "🔑 The Secret Passcode: Entities turn reserved keyboard symbols into harmless text.",
      "rules": [
        "&lt; displays a < less than sign.",
        "&gt; displays a > greater than sign.",
        "&copy; displays the official copyright © symbol."
      ]
    },
    "body": "### Common HTML Entities:\n| Result | Description | Entity Name | Entity Number |\n| :--- | :--- | :--- | :--- |\n| | non-breaking space | `&nbsp;` | `&#160;` |\n| < | less than | `&lt;` | `&#60;` |\n| > | greater than | `&gt;` | `&#62;` |\n| & | ampersand | `&amp;` | `&#38;` |\n| \" | double quotation mark | `&quot;` | `&#34;` |\n| © | copyright | `&copy;` | `&#169;` |\n| € | euro | `&euro;` | `&#8364;` |\n| ♥ | black heart suit | `&hearts;` | `&#9829;` |",
    "tryItCode": "<div style=\"background:#0f172a; padding:20px; border-radius:12px; color:#e2e8f0; font-family:sans-serif;\">\n  <h4 style=\"color:#38bdf8; margin-top:0;\">HTML Entities in Action:</h4>\n  <p>To print &lt;div&gt; in HTML, write: <code>&amp;lt;div&amp;gt;</code></p>\n  <p>Price: 99 &euro; &bull; Made with &hearts; by Affan Sayed &copy; 2026</p>\n</div>",
    "codeType": "html",
    "exercise": {
      "question": "Which entity name is used to display the copyright symbol (©) in HTML?",
      "options": [
        "&copy;",
        "&copyright;",
        "&cr;",
        "&c;"
      ],
      "correct": 0,
      "hint": "It is written as &copy;."
    }
  },
  {
    "id": "html_canvas",
    "category": "HTML5 Graphics & APIs",
    "title": "HTML5 Canvas Graphics",
    "summary": "The HTML <canvas> element is used to draw graphics on the fly via JavaScript.",
    "eli5": {
      "story": "Imagine a blank canvas on an easel waiting for an artist. The <canvas> tag gives the web browser a blank white rectangle. Then, your JavaScript code acts like an ultra-fast robot paintbrush that paints rectangles, circles, stars, and video game spaceships at 60 frames per second!",
      "analogy": "🎨 The Digital Sketchpad: Canvas allows live animations, charts, and arcade mini-games.",
      "rules": [
        "<canvas id='myCanvas' width='400' height='200'> creates the drawing board.",
        "JavaScript uses getContext('2d') to grab the paintbrush.",
        "ctx.fillRect(x, y, w, h) draws colored rectangles."
      ]
    },
    "body": "### Basic Canvas Drawing with JavaScript:\n```html\n<canvas id=\"myCanvas\" width=\"200\" height=\"100\" style=\"border:1px solid #d3d3d3;\"></canvas>\n\n<script>\n  const canvas = document.getElementById(\"myCanvas\");\n  const ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"#00f2fe\";\n  ctx.fillRect(10, 10, 150, 80);\n</script>\n```\n\n### Common Canvas 2D Methods:\n- `ctx.fillRect(x, y, width, height)`: Draws a filled rectangle.\n- `ctx.arc(x, y, radius, startAngle, endAngle)`: Creates a circular arc or full circle.\n- `ctx.beginPath()` / `ctx.stroke()`: Draws custom multi-point lines.\n- `ctx.drawImage(img, x, y)`: Draws sprites and pictures onto the canvas.",
    "tryItCode": "<div style=\"text-align:center; background:#0f172a; padding:16px; border-radius:12px;\">\n  <canvas id=\"demoCanvas\" width=\"300\" height=\"150\" style=\"background:#020617; border-radius:8px; border:1px solid #334155;\"></canvas>\n  <script>\n    const c = document.getElementById('demoCanvas');\n    if (c) {\n      const ctx = c.getContext('2d');\n      ctx.fillStyle = '#10b981';\n      ctx.fillRect(20, 20, 80, 80);\n      ctx.fillStyle = '#00f2fe';\n      ctx.beginPath();\n      ctx.arc(190, 60, 40, 0, 2 * Math.PI);\n      ctx.fill();\n    }\n  </script>\n  <p style=\"color:#94a3b8; font-size:12px; margin-top:8px;\">Green square and blue circle drawn directly with Canvas 2D API!</p>\n</div>",
    "codeType": "html",
    "exercise": {
      "question": "Which JavaScript method is called on a canvas element to obtain the 2D drawing rendering context?",
      "options": [
        "canvas.get2D()",
        "canvas.getContext('2d')",
        "canvas.paint()",
        "canvas.createBrush()"
      ],
      "correct": 1,
      "hint": "It is canvas.getContext('2d')."
    }
  },
  {
    "id": "html_webstorage",
    "category": "HTML5 Graphics & APIs",
    "title": "HTML5 Web Storage (localStorage)",
    "summary": "With HTML5 Web Storage, web applications can store data locally within the user's browser without expiring.",
    "eli5": {
      "story": "When you turn off your video game console, you want your high score and saved games to still be there when you turn it back on tomorrow. Before HTML5, websites had to use tiny cookies. With HTML5 Web Storage, your browser has a personal safe that holds scores and settings forever!",
      "analogy": "💾 The Browser Memory Card: localStorage remembers your game progress even after you restart your device.",
      "rules": [
        "localStorage stores data with no expiration date.",
        "sessionStorage only stores data until the browser tab is closed.",
        "localStorage.setItem('key', 'value') saves data, and getItem('key') loads it back."
      ]
    },
    "body": "### LocalStorage vs SessionStorage:\n- `window.localStorage`: Stores data with no expiration date. The data persists even when the browser is closed and reopened.\n- `window.sessionStorage`: Stores data for one session (data is lost when the browser tab is closed).\n\n### Methods:\n```javascript\n// Save Data\nlocalStorage.setItem(\"player_name\", \"Affan\");\n\n// Read Data\nconst name = localStorage.getItem(\"player_name\");\n\n// Remove Specific Item\nlocalStorage.removeItem(\"player_name\");\n\n// Clear All Saved Data\nlocalStorage.clear();\n```",
    "tryItCode": "<div style=\"background:#0f172a; padding:20px; border-radius:12px; font-family:sans-serif; color:#e2e8f0; text-align:center;\">\n  <h4 style=\"color:#00f2fe; margin-top:0;\">HTML5 Web Storage Tester</h4>\n  <button onclick=\"localStorage.setItem('bv_test', 'Player 1 Ready'); alert('Saved to localStorage: ' + localStorage.getItem('bv_test'));\" style=\"background:#10b981; color:#0f172a; font-weight:bold; padding:8px 16px; border-radius:8px; border:none; cursor:pointer;\">\n    Save &amp; Read from localStorage\n  </button>\n</div>",
    "codeType": "html",
    "exercise": {
      "question": "Which Web Storage object keeps stored data indefinitely even after closing and reopening the browser?",
      "options": [
        "sessionStorage",
        "localStorage",
        "tempStorage",
        "cacheStorage"
      ],
      "correct": 1,
      "hint": "It stores data locally forever: localStorage."
    }
  }
];
