export const HTML_W3_LESSONS = [
  {
    id: 'html_home',
    category: 'HTML Tutorial',
    title: 'HTML HOME',
    summary: 'HTML is the standard markup language for Web pages. With HTML you can create your own Website.',
    eli5: {
      story: 'Imagine you want to build a Lego castle or draw your dream house! HTML is like the plastic Lego bricks. You need bricks for the walls, a big sign for the front door, and a frame for the windows. Without HTML, there is nothing on the screen at all!',
      analogy: '🧱 Lego Bricks: HTML gives you the physical blocks to snap together before you paint them or add moving motors.',
      rules: [
        'Every web page begins with a blueprint called <!DOCTYPE html>.',
        'Tags look like little alligator mouths < > holding words inside.',
        'Most tags give a hug to your words with an opening tag <p> and a closing tag </p>.'
      ]
    },
    body: `HTML is easy to learn - You will enjoy it!
Study our complete step-by-step tutorials starting from basic elements to advanced Web Components and HTML5 APIs.`,
    tryItCode: `<!DOCTYPE html>
<html>
<head>
<title>My First Website</title>
</head>
<body>

<h1>My Awesome Castle!</h1>
<p>I built this web page using HTML Lego blocks.</p>

</body>
</html>`,
    codeType: 'html',
    notes: 'HTML is not case sensitive: <P> means the same as <p>. However, W3C recommends lowercase in HTML5.',
    exercise: {
      question: 'Which HTML element defines the document type and tells the browser this is HTML5?',
      options: ['<!DOCTYPE html>', '<html5>', '<doctype web>', '<?xml version="1.0"?>'],
      correct: 0,
      hint: 'It is always placed at the very top of an HTML document before the <html> tag.'
    },
    referenceTable: [
      { item: '<!DOCTYPE html>', description: 'Defines that this document is an HTML5 document' },
      { item: '<html>', description: 'The root element of an HTML page' },
      { item: '<head>', description: 'Contains meta information about the HTML page' },
      { item: '<title>', description: 'Specifies a title for the HTML page' },
      { item: '<body>', description: 'Defines the document body (all visible content)' }
    ]
  },
  {
    id: 'html_intro',
    category: 'HTML Tutorial',
    title: 'HTML Introduction',
    summary: 'What is HTML? HTML stands for Hyper Text Markup Language. It describes the structure of a Web page using markup.',
    eli5: {
      story: 'When you open a picture book, your eyes see a giant title at the top, a nice story in the middle, and funny drawings on the side. The computer needs instructions to know which word is the title and which is the story. HTML is the secret code that labels them!',
      analogy: '🏷️ Sticky Labels: You put a "COOKIE JAR" sticker on a jar so nobody eats salt by mistake. HTML puts <h1> on titles so the computer knows it is huge!',
      rules: [
        '<h1> means: "Make this super huge like a billboard!"',
        '<p> means: "This is a regular story paragraph."',
        '<button> means: "Make this clickable like an elevator button!"'
      ]
    },
    body: `HTML elements tell the browser how to display the content.
HTML elements label pieces of content such as "this is a heading", "this is a paragraph", "this is a link", etc.

### A Simple HTML Document:
- The \`<!DOCTYPE html>\` declaration defines this document as HTML5.
- The \`<html>\` element is the root element.
- The \`<head>\` element contains meta info (charset, title, viewport, stylesheets).
- The \`<title>\` element specifies the page title in browser tabs.
- The \`<body>\` element contains visible page contents (headings, paragraphs, images, tables).`,
    tryItCode: `<!DOCTYPE html>
<html>
<body>

<h1>Welcome to W3-Style ByteVerse!</h1>
<p>HTML is the foundation of all modern websites.</p>
<button onclick="alert('You clicked the magic button!')">Click Me!</button>

</body>
</html>`,
    codeType: 'html',
    tips: 'HTML tags normally come in pairs like <p> and </p>. The first tag is the start tag, and the second is the end tag.',
    exercise: {
      question: 'Which tag wraps all visible contents of an HTML document?',
      options: ['<head>', '<body>', '<visible>', '<main-frame>'],
      correct: 1,
      hint: 'Everything displayed on the screen goes inside this element.'
    }
  },
  {
    id: 'html_elements',
    category: 'HTML Tutorial',
    title: 'HTML Elements & Tags',
    summary: 'An HTML element is defined by a start tag, some content, and an end tag.',
    eli5: {
      story: 'Think of an HTML element like a sandwich! The top slice of bread is the opening tag <p>. The peanut butter and jelly in the middle is your text. The bottom slice of bread is the closing tag </p> with a little backward slash. If you drop the bottom slice, your sandwich spills!',
      analogy: '🥪 The Bread Sandwich: <p> (Top bread) + "Hello" (Filling) + </p> (Bottom bread with /).',
      rules: [
        'Start Tag: <tagname>',
        'Content: The text, picture, or button you want to show.',
        'End Tag: </tagname> (Always has the / slash!)'
      ]
    },
    body: `\`<tagname> Content goes here... </tagname>\`

### Nested HTML Elements
HTML elements can be nested (elements can contain other elements).
All HTML documents consist of nested HTML elements.

### Empty HTML Elements
HTML elements with no content are called empty elements.
Example: \`<br>\` defines a line break without an end tag.`,
    tryItCode: `<div style="background:#1e293b; padding:16px; border-radius:8px; border:1px solid #334155;">
  <h3 style="color:#00f2fe; margin-top:0;">Nested Elements</h3>
  <p style="color:#94a3b8;">
    This &lt;p&gt; is nested inside a &lt;div&gt;.<br>
    The &lt;br&gt; tag above created a line break!
  </p>
</div>`,
    codeType: 'html',
    notes: 'Never skip the end tag! Some elements might display correctly without it, but unexpected errors can occur.',
    exercise: {
      question: 'What is an HTML element without content or closing tag called?',
      options: ['Void / Empty element', 'Broken element', 'Ghost element', 'Blank tag'],
      correct: 0,
      hint: 'Examples include <br>, <hr>, and <img>.'
    }
  },
  {
    id: 'html_attributes',
    category: 'HTML Tutorial',
    title: 'HTML Attributes',
    summary: 'HTML attributes provide additional information about HTML elements.',
    eli5: {
      story: 'Imagine you have a toy car. The tag is <car>. But what color is the car? How fast does it go? Attributes are the superpowers you give the car! You write <car color="blue" speed="superfast">.',
      analogy: '🦸 Superhero Badges: Attributes tell the computer extra secrets, like where a link should jump or which picture to load.',
      rules: [
        'href="https://..." tells a link where to fly when clicked.',
        'src="cat.png" tells an image which photo to display.',
        'alt="cute cat" describes the photo if the image is lost.'
      ]
    },
    body: `All HTML elements can have attributes.
Attributes provide additional information about elements.
Attributes are always specified in the start tag.
Attributes usually come in name/value pairs like: \`name="value"\`.

### Key Attributes:
- \`href\`: Specifies the URL of the page the link goes to.
- \`src\`: Specifies the path to the image/media to be displayed.
- \`width\` and \`height\`: Dimensions in pixels.
- \`alt\`: Alternative text for screen readers or when an image fails to load.
- \`style\`: Inline CSS styling.
- \`title\`: Tooltip displayed on mouse hover.`,
    tryItCode: `<a href="https://byteverse.dev" title="Click to visit ByteVerse" style="color:#00f2fe; font-weight:bold;">
  Hover over me to see the secret title tooltip!
</a>
<br><br>
<img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=300" alt="Laptop on desk" width="260" style="border-radius:8px;">`,
    codeType: 'html',
    tips: 'Always use lowercase attribute names and enclose attribute values in double quotes.',
    exercise: {
      question: 'Which attribute specifies an alternate text for an image if the image cannot be displayed?',
      options: ['title', 'src', 'alt', 'description'],
      correct: 2,
      hint: 'Short for alternate.'
    }
  },
  {
    id: 'html_forms',
    category: 'HTML Forms',
    title: 'HTML Forms & User Inputs',
    summary: 'An HTML form is used to collect user input. The user input is most often sent to a server for processing.',
    eli5: {
      story: 'Have you ever written a letter to Santa Claus with your Christmas wish list? You write your name, check boxes for the toys you want, and drop it in the mailbox. A form is that letter, and clicking "Submit" puts it in the digital mailbox!',
      analogy: '📬 The Letter to Santa: An HTML form collects your answers and mails them to the computer server.',
      rules: [
        '<input type="text"> is a blank line where you type your name.',
        '<input type="password"> hides your secret letters with dots so nobody peeks.',
        '<button type="submit"> drops the letter into the mailbox!'
      ]
    },
    body: `The \`<form>\` element is a container for different types of input elements:
- Text fields (\`<input type="text">\`)
- Passwords (\`<input type="password">\`)
- Checkboxes (\`<input type="checkbox">\`)
- Radio buttons (\`<input type="radio">\`)
- Submit buttons (\`<button type="submit">\`)

### Form Attributes:
- \`action="/submit"\`: Defines where to send form data.
- \`method="POST"\` or \`method="GET"\`: Specifies the HTTP method.`,
    tryItCode: `<form style="display:flex; flex-direction:column; gap:10px; max-width:300px; font-family:sans-serif;">
  <label style="font-size:12px; color:#94a3b8;">Hero Codename:</label>
  <input type="text" placeholder="e.g. CyberNinja" style="padding:8px; border-radius:6px; background:#1e293b; color:#fff; border:1px solid #475569;">

  <label style="font-size:12px; color:#94a3b8;">Choose Track:</label>
  <select style="padding:8px; border-radius:6px; background:#1e293b; color:#fff; border:1px solid #475569;">
    <option>HTML & CSS</option>
    <option>JavaScript</option>
    <option>Python & Django</option>
    <option>MySQL Database</option>
  </select>

  <button type="button" style="background:#00f2fe; color:#000; font-weight:bold; padding:10px; border-radius:6px; border:none; cursor:pointer;">
    Submit Form
  </button>
</form>`,
    codeType: 'html',
    notes: 'The <label> element is useful for screen-reader users and expands the clickable area for small radio/checkboxes.',
    exercise: {
      question: 'Which HTTP method should be used when submitting sensitive data like passwords?',
      options: ['GET', 'POST', 'FETCH', 'PUT'],
      correct: 1,
      hint: 'POST includes data in the HTTP request body instead of the URL string.'
    }
  }
];
