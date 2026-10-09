export const CSS_W3_LESSONS = [
  {
    id: 'css_home',
    category: 'CSS Tutorial',
    title: 'CSS HOME',
    summary: 'CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.',
    eli5: {
      story: 'Imagine you bought a plain gray toy robot made of plastic. That plastic body is HTML. Now, you open your box of paints and stickers! You paint the robot shiny neon blue, give it glowing sunglasses, and make its rocket boots shine. That magic paint box is CSS!',
      analogy: '🎨 The Paint & Costume Box: HTML is the bare skeleton; CSS is the skin, hair, clothes, shoes, and shiny accessories!',
      rules: [
        'Color changes how words look (like red or blue paint).',
        'Font-size makes letters as tiny as ants or as giant as dinosaurs.',
        'Background-color paints the wall behind your text.'
      ]
    },
    body: `This tutorial will teach you CSS from basic to advanced.
Save a lot of work! External style sheets are stored in CSS files and control the layout of multiple Web pages all at once.`,
    tryItCode: `<!DOCTYPE html>
<html>
<head>
<style>
body {
  background-color: #0a0d14;
  font-family: sans-serif;
}
h1 {
  color: #00f2fe;
  text-align: center;
}
p {
  color: #94a3b8;
  text-align: center;
}
</style>
</head>
<body>

<h1>My Styled Robot!</h1>
<p>CSS painted this robot with neon colors.</p>

</body>
</html>`,
    codeType: 'html',
    notes: 'CSS stands for Cascading Style Sheets.',
    exercise: {
      question: 'What does CSS stand for?',
      options: ['Cascading Style Sheets', 'Creative Style System', 'Computer Style Spread', 'Colorful Style Sheets'],
      correct: 0,
      hint: 'Cascading describes how styles flow down and override.'
    },
    referenceTable: [
      { item: 'color', description: 'Sets the text color' },
      { item: 'background-color', description: 'Sets the background color of an element' },
      { item: 'font-size', description: 'Sets the size of the font' },
      { item: 'text-align', description: 'Aligns text (left, right, center, justify)' }
    ]
  },
  {
    id: 'css_intro',
    category: 'CSS Tutorial',
    title: 'CSS Introduction',
    summary: 'CSS is used to define styles for your web pages, including the design, layout, and variations in display for different devices and screen sizes.',
    eli5: {
      story: 'Long ago, people tried to put paint directly on the Lego bricks. It was super messy! Every time you wanted to change the castle from red to blue, you had to repaint every single brick one by one. CSS was invented like a magic wand: you wave it once, and all bricks turn blue instantly!',
      analogy: '🪄 The Magic Wardrobe: You pick the school uniform in one place, and every student wears it automatically.',
      rules: [
        'External CSS is written in a separate .css file.',
        'One single CSS file can style 1,000 different web pages at once.',
        'If you change the color in that one file, all 1,000 pages change together!'
      ]
    },
    body: `### Why Use CSS?
CSS solves a big problem: HTML was NEVER intended to contain tags for formatting a web page (like font tags and color attributes).
HTML was created to describe the content of a page.
W3C created CSS to remove style formatting from the HTML page!

### 3 Ways to Insert CSS:
1. **External CSS**: Linked via \`<link rel="stylesheet" href="mystyle.css">\`.
2. **Internal CSS**: Defined in the \`<head>\` within a \`<style>\` tag.
3. **Inline CSS**: Defined inside an element's \`style="..."\` attribute.`,
    tryItCode: `<div style="background:#111726; border:2px solid #00f2fe; padding:20px; border-radius:12px; text-align:center;">
  <h2 style="color:#00f2fe; margin-top:0;">Inline CSS Magic</h2>
  <p style="color:#94a3b8;">Styles applied directly to element attributes.</p>
</div>`,
    codeType: 'html',
    tips: 'External style sheets are the best practice because they keep content and presentation completely separate.',
    exercise: {
      question: 'Which HTML tag is used to define an internal style sheet?',
      options: ['<css>', '<script>', '<style>', '<design>'],
      correct: 2,
      hint: 'It goes inside the <head> element.'
    }
  },
  {
    id: 'css_boxmodel',
    category: 'CSS Box Model',
    title: 'CSS Box Model',
    summary: 'All HTML elements can be considered as boxes. In CSS, the term "box model" is used when talking about design and layout.',
    eli5: {
      story: 'Have you ever received a birthday present in a box? Inside the box is bubble wrap (padding) protecting the toy (content). The cardboard box has a thick tape edge (border). And your mom keeps other gift boxes far away on the table (margin). Every HTML element has these 4 layers!',
      analogy: '🎁 The Birthday Gift Box: Toy (Content) -> Bubble Wrap (Padding) -> Cardboard Box (Border) -> Empty Space to other gifts (Margin).',
      rules: [
        'Content: The text or picture inside.',
        'Padding: The soft cushion inside the border.',
        'Border: The picture frame or box edge.',
        'Margin: Personal space pushing neighbors away.'
      ]
    },
    body: `The CSS box model is essentially a box that wraps around every HTML element. It consists of:
1. **Content**: The content of the box, where text and images appear.
2. **Padding**: Clears an area around the content. The padding is transparent.
3. **Border**: A border that goes around the padding and content.
4. **Margin**: Clears an area outside the border. The margin is transparent.`,
    tryItCode: `<div style="background:#111726; border:3px solid #00f2fe; padding:24px; margin:16px; border-radius:12px; text-align:center; font-family:sans-serif;">
  <strong style="color:#00f2fe; font-size:16px;">The Toy (Content)</strong>
  <p style="color:#94a3b8; font-size:12px; margin-top:6px;">
    Padding is the bubble wrap inside. Margin is the space on the table.
  </p>
</div>`,
    codeType: 'html',
    tips: 'Use "box-sizing: border-box;" on all elements so padding and border do not increase the element\'s calculated width.',
    exercise: {
      question: 'Which box model layer sits directly outside the border?',
      options: ['Content', 'Padding', 'Margin', 'Outline'],
      correct: 2,
      hint: 'It pushes surrounding sibling elements away.'
    }
  },
  {
    id: 'css_flexbox',
    category: 'CSS Advanced',
    title: 'CSS Flexbox',
    summary: 'The Flexible Box Layout Module makes it easier to design flexible responsive layout structures without using float or positioning.',
    eli5: {
      story: 'Imagine 3 puppies sitting on a sofa. If they sit close together on the left, that is "flex-start". If they sit in the exact middle to cuddle, that is "center". If they spread out so each puppy gets equal space, that is "space-between"! Flexbox is like teaching puppies how to sit on the couch.',
      analogy: '🐶 Puppies on a Couch: Flexbox arranges elements in a neat row or column without pushing each other off the screen.',
      rules: [
        'display: flex turns on the magical couch.',
        'justify-content: center moves all items to the middle horizontally.',
        'align-items: center centers all items vertically.'
      ]
    },
    body: `### Flexbox Parent Properties:
- \`display: flex;\`
- \`justify-content: space-between;\`
- \`align-items: center;\`
- \`gap: 16px;\``,
    tryItCode: `<div style="display:flex; justify-content:space-between; align-items:center; gap:8px; background:#0f172a; padding:16px; border-radius:8px; border:1px solid #334155; font-family:sans-serif;">
  <div style="background:#00f2fe; color:#000; padding:10px 16px; border-radius:6px; font-weight:bold;">Puppy 1</div>
  <div style="background:#9d4edd; color:#fff; padding:10px 16px; border-radius:6px; font-weight:bold;">Puppy 2</div>
  <div style="background:#ec4899; color:#fff; padding:10px 16px; border-radius:6px; font-weight:bold;">Puppy 3</div>
</div>`,
    codeType: 'html',
    notes: 'justify-content aligns along the main horizontal axis, while align-items aligns along the cross vertical axis.',
    exercise: {
      question: 'Which Flexbox property distributes items evenly with equal space between them?',
      options: ['align-items: space-between', 'justify-content: space-between', 'flex-space: equal', 'flex-distribution: between'],
      correct: 1,
      hint: 'justify-content handles horizontal alignment in default row layout.'
    }
  }
];
