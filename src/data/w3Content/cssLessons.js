export const CSS_W3_LESSONS = [
  {
    "id": "css_home",
    "category": "CSS Tutorial",
    "title": "CSS HOME",
    "summary": "CSS is the language we use to style an HTML document. CSS describes how HTML elements should be displayed.",
    "eli5": {
      "story": "Imagine you bought a plain gray toy robot made of plastic. That plastic body is HTML. Now, you open your box of paints and stickers! You paint the robot shiny neon blue, give it glowing sunglasses, and make its rocket boots shine. That magic paint box is CSS!",
      "analogy": "🎨 The Paint & Costume Box: HTML is the bare skeleton; CSS is the skin, hair, clothes, shoes, and shiny accessories!",
      "rules": [
        "Color changes how words look (like red or blue paint).",
        "Font-size makes letters as tiny as ants or as giant as dinosaurs.",
        "Background-color paints the wall behind your text."
      ]
    },
    "body": "This tutorial will teach you CSS from basic to advanced.\nSave a lot of work! External style sheets are stored in CSS files and control the layout of multiple Web pages all at once.",
    "tryItCode": "<!DOCTYPE html>\n<html>\n<head>\n<style>\nbody {\n  background-color: #0a0d14;\n  font-family: sans-serif;\n}\nh1 {\n  color: #00f2fe;\n  text-align: center;\n}\np {\n  color: #94a3b8;\n  text-align: center;\n}\n</style>\n</head>\n<body>\n\n<h1>My Styled Robot!</h1>\n<p>CSS painted this robot with neon colors.</p>\n\n</body>\n</html>",
    "codeType": "html",
    "notes": "CSS stands for Cascading Style Sheets.",
    "exercise": {
      "question": "What does CSS stand for?",
      "options": [
        "Cascading Style Sheets",
        "Creative Style System",
        "Computer Style Spread",
        "Colorful Style Sheets"
      ],
      "correct": 0,
      "hint": "Cascading describes how styles flow down and override."
    },
    "referenceTable": [
      {
        "item": "color",
        "description": "Sets the text color"
      },
      {
        "item": "background-color",
        "description": "Sets the background color of an element"
      },
      {
        "item": "font-size",
        "description": "Sets the size of the font"
      },
      {
        "item": "text-align",
        "description": "Aligns text (left, right, center, justify)"
      }
    ]
  },
  {
    "id": "css_intro",
    "category": "CSS Tutorial",
    "title": "CSS Introduction & Syntax",
    "summary": "A CSS rule consists of a selector and a declaration block with property-value pairs.",
    "eli5": {
      "story": "Imagine you are a teacher giving orders to your classroom! You point at Timmy and say: \"Timmy, put on a blue hat!\" In CSS, \"Timmy\" is the selector, \"hat\" is the property, and \"blue\" is the value. You write: timmy { hat: blue; }!",
      "analogy": "🎯 The Target & Paint Order: Selector points to who gets styled; Declaration says what color to paint it.",
      "rules": [
        "Selector: The element or class you want to style.",
        "Property: The feature you want to change (like color or size).",
        "Always end each style line with a semicolon ; !"
      ]
    },
    "body": "### The CSS Syntax:\nA CSS rule-set consists of a selector and a declaration block:\n```css\nselector {\n  property: value;\n  property: value;\n}\n```\n\n- **Selector**: Points to the HTML element you want to style (e.g., `h1`, `.btn`, `#hero`).\n- **Declaration block**: Contains one or more declarations separated by semicolons.\n- **Property**: A style attribute like `color`, `font-size`, or `margin`.\n- **Value**: The setting applied like `red`, `24px`, or `center`.",
    "tryItCode": "<div style=\"text-align:center; padding:20px; font-family:sans-serif;\">\n  <h2 style=\"color:#a855f7; font-size:28px; text-shadow:0 0 10px rgba(168,85,247,0.5); margin-bottom:8px;\">\n    Target: &lt;h2&gt; Styled!\n  </h2>\n  <p style=\"color:#38bdf8; font-size:14px; letter-spacing:1px;\">\n    Property: color | Value: cyan\n  </p>\n</div>",
    "codeType": "html",
    "tips": "Always close each declaration with a semicolon (;), and group declarations inside curly brackets ({ }).",
    "exercise": {
      "question": "In CSS syntax, what character separates a property from its value?",
      "options": [
        "Colon (:)",
        "Equal sign (=)",
        "Semicolon (;)",
        "Hyphen (-)"
      ],
      "correct": 0,
      "hint": "Example: color: blue;"
    }
  },
  {
    "id": "css_selectors",
    "category": "CSS Selectors",
    "title": "CSS Selectors: Class, ID & Pseudo-Classes",
    "summary": "CSS selectors are used to \"find\" (or select) the HTML elements you want to style.",
    "eli5": {
      "story": "In school, the teacher can call: \"Everyone wearing yellow shirts, line up!\" That is a Class (.yellow-shirt). Or the teacher calls: \"Student ID #42, please step forward!\" That is a unique ID (#student-42). And when you hover your hand over a puppy, its tail wags! That wagging is :hover!",
      "analogy": "🏷️ Class vs ID: .class is a team jersey shared by many players; #id is a player's unique passport number!",
      "rules": [
        ".class (starts with dot .) styles multiple elements together.",
        "#id (starts with hash #) styles one unique element on the whole page.",
        ":hover styles an element only when the mouse touches it!"
      ]
    },
    "body": "### Primary CSS Selectors:\n1. **Element Selector**: Selects elements based on tag name (`p { color: red; }`).\n2. **ID Selector**: Uses the `id` attribute of an HTML element to select one specific element (`#header { background: black; }`).\n3. **Class Selector**: Selects elements with a specific class attribute (`.btn { padding: 10px; }`).\n4. **Pseudo-Class Selector**: Defines a special state of an element:\n   - `:hover` - When the mouse is over an element.\n   - `:focus` - When an input receives cursor focus.\n   - `:active` - When a button is being pressed down.",
    "tryItCode": "<style>\n.badge-neon {\n  background: #0f172a;\n  color: #00f2fe;\n  border: 1px solid #00f2fe;\n  padding: 8px 16px;\n  border-radius: 8px;\n  display: inline-block;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n.badge-neon:hover {\n  background: #00f2fe;\n  color: #000;\n  box-shadow: 0 0 20px #00f2fe;\n  transform: translateY(-2px);\n}\n</style>\n\n<div style=\"text-align:center; padding:20px;\">\n  <span class=\"badge-neon\">Hover over me! (:hover pseudo-class)</span>\n</div>",
    "codeType": "html",
    "tips": "A class name cannot start with a number. Use hyphens like .cyber-btn or .hero-card.",
    "exercise": {
      "question": "Which character is used to select elements by class name in CSS?",
      "options": [
        "Period (.)",
        "Hash (#)",
        "Dollar ($)",
        "At (@)"
      ],
      "correct": 0,
      "hint": ".my-class"
    }
  },
  {
    "id": "css_colors",
    "category": "CSS Colors & Backgrounds",
    "title": "CSS Colors, Gradients & Backgrounds",
    "summary": "Colors in CSS can be specified using color names, HEX codes, RGB, or HSL values.",
    "eli5": {
      "story": "Have you ever mixed blue and yellow paint to create neon green? Computers mix Red, Green, and Blue light! A HEX code like #ff00ff is like a secret recipe: 100% Red + 0% Green + 100% Blue = bright magenta pink! And Gradients blend two colors together like a sunset.",
      "analogy": "🌅 The Sunset Blend: Gradients smoothly melt colors together like purple fading into orange at dusk.",
      "rules": [
        "HEX codes start with # and use 6 letters/numbers (#00f2fe).",
        "rgb(red, green, blue) mixes values from 0 to 255.",
        "linear-gradient() creates smooth multi-color transitions."
      ]
    },
    "body": "### Color Formats in CSS:\n- **Color Names**: 140 standard color names (`red`, `cyan`, `midnightblue`).\n- **HEX Values**: `#RRGGBB` or `#RRGGBBAA` with alpha transparency.\n- **RGB / RGBA**: `rgba(0, 242, 254, 0.8)`.\n- **Linear Gradients**: `background: linear-gradient(direction, color1, color2);`.",
    "tryItCode": "<div style=\"background: linear-gradient(135deg, #06b6d4, #8b5cf6, #ec4899); padding:24px; border-radius:16px; text-align:center; color:#fff; font-family:sans-serif; box-shadow:0 10px 30px rgba(139,92,246,0.4);\">\n  <h3 style=\"margin:0; font-size:20px;\">CSS Linear Gradient</h3>\n  <p style=\"margin:6px 0 0 0; font-size:13px; opacity:0.9;\">\n    Melting Cyan, Purple, and Pink together seamlessly!\n  </p>\n</div>",
    "codeType": "html",
    "notes": "Use rgba() when you want a transparent background color without making the text inside transparent.",
    "exercise": {
      "question": "Which CSS function creates a smooth background color gradient transition?",
      "options": [
        "color-blend()",
        "linear-gradient()",
        "multi-color()",
        "gradient-fill()"
      ],
      "correct": 1,
      "hint": "linear-gradient(direction, color1, color2)"
    }
  },
  {
    "id": "css_boxmodel",
    "category": "CSS Box Model",
    "title": "CSS Box Model",
    "summary": "All HTML elements can be considered as boxes. In CSS, the term \"box model\" is used when talking about design and layout.",
    "eli5": {
      "story": "Have you ever received a birthday present in a box? Inside the box is bubble wrap (padding) protecting the toy (content). The cardboard box has a thick tape edge (border). And your mom keeps other gift boxes far away on the table (margin). Every HTML element has these 4 layers!",
      "analogy": "🎁 The Birthday Gift Box: Toy (Content) -> Bubble Wrap (Padding) -> Cardboard Box (Border) -> Empty Space to other gifts (Margin).",
      "rules": [
        "Content: The text or picture inside.",
        "Padding: The soft cushion inside the border.",
        "Border: The picture frame or box edge.",
        "Margin: Personal space pushing neighbors away."
      ]
    },
    "body": "The CSS box model is essentially a box that wraps around every HTML element. It consists of:\n1. **Content**: The content of the box, where text and images appear.\n2. **Padding**: Clears an area around the content. The padding is transparent.\n3. **Border**: A border that goes around the padding and content.\n4. **Margin**: Clears an area outside the border. The margin is transparent.",
    "tryItCode": "<div style=\"background:#111726; border:3px solid #00f2fe; padding:24px; margin:16px; border-radius:12px; text-align:center; font-family:sans-serif;\">\n  <strong style=\"color:#00f2fe; font-size:16px;\">The Toy (Content)</strong>\n  <p style=\"color:#94a3b8; font-size:12px; margin-top:6px;\">\n    Padding is the bubble wrap inside. Margin is the space on the table.\n  </p>\n</div>",
    "codeType": "html",
    "tips": "Use \"box-sizing: border-box;\" on all elements so padding and border do not increase the element's calculated width.",
    "exercise": {
      "question": "Which box model layer sits directly outside the border?",
      "options": [
        "Content",
        "Padding",
        "Margin",
        "Outline"
      ],
      "correct": 2,
      "hint": "It pushes surrounding sibling elements away."
    }
  },
  {
    "id": "css_text_fonts",
    "category": "CSS Typography",
    "title": "CSS Typography & Google Fonts",
    "summary": "CSS typography properties control the appearance of text on the screen, including fonts, sizing, letter-spacing, and line height.",
    "eli5": {
      "story": "Imagine writing a spooky Halloween letter with drippy ghost handwriting, or a comic book with bold superhero bubble letters! Fonts are the handwriting of your computer. CSS lets you change fonts, spread letters apart, and add cool shadows behind your words!",
      "analogy": "✍️ Handwriting Styles: You can switch from clean school print to comic book bubbles or futuristic sci-fi fonts.",
      "rules": [
        "font-family chooses the handwriting style (sans-serif, serif, monospace).",
        "line-height gives sentences room to breathe so they don't crash.",
        "text-shadow makes your letters glow like neon signs!"
      ]
    },
    "body": "### Core Typography Properties:\n- `font-family`: The font face (e.g. `'Inter', sans-serif`).\n- `font-size`: Size of the text in `px`, `rem`, or `em`.\n- `font-weight`: Thickness (`400` regular, `700` bold, `900` black).\n- `line-height`: Space between lines of text.\n- `letter-spacing`: Space between individual characters.\n- `text-transform`: `uppercase`, `lowercase`, or `capitalize`.",
    "tryItCode": "<div style=\"font-family:'Courier New', monospace; text-align:center; padding:16px;\">\n  <h3 style=\"letter-spacing:4px; text-transform:uppercase; color:#10b981; text-shadow:0 0 10px #10b981; margin:0;\">\n    // CYBER TERMINAL FONTS\n  </h3>\n  <p style=\"color:#6ee7b7; font-size:12px; line-height:2; margin-top:8px;\">\n    Monospace fonts give every single character the exact same width,<br>\n    making your code line up like a neat soldier formation!\n  </p>\n</div>",
    "codeType": "html",
    "tips": "Always provide a fallback font family (like sans-serif or serif) in case the user does not have your custom font installed.",
    "exercise": {
      "question": "Which property sets the space between individual letters in a word?",
      "options": [
        "word-spacing",
        "letter-spacing",
        "character-gap",
        "font-spacing"
      ],
      "correct": 1,
      "hint": "letter-spacing: 2px;"
    }
  },
  {
    "id": "css_display_position",
    "category": "CSS Layout",
    "title": "CSS Display & Positioning",
    "summary": "The position property specifies the type of positioning method used for an element (static, relative, fixed, absolute, sticky).",
    "eli5": {
      "story": "Imagine sticking a refrigerator magnet on your fridge: it stays stuck right there even when you open the door! That is \"fixed\" position. Or a sticky note that scrolls with you until it hits the top of your desk: that is \"sticky\"! CSS positioning places stickers anywhere on the screen.",
      "analogy": "🧲 Fridge Magnets & Sticky Notes: position: fixed pins an element to the screen so it never moves when scrolling.",
      "rules": [
        "position: relative is the home base anchor.",
        "position: absolute flies anywhere inside its relative parent using top, left, right, bottom.",
        "position: fixed stays glued to the screen during scrolling (like sticky navbars)."
      ]
    },
    "body": "### The 5 Position Values:\n1. **static**: Default. Elements flow naturally in the document order.\n2. **relative**: Positioned relative to its normal position.\n3. **absolute**: Positioned relative to the nearest positioned ancestor.\n4. **fixed**: Positioned relative to the viewport; stays in the same place even when scrolled.\n5. **sticky**: Toggles between relative and fixed depending on scroll position.",
    "tryItCode": "<div style=\"position:relative; width:100%; height:120px; background:#0f172a; border:1px solid #334155; border-radius:12px; overflow:hidden;\">\n  <p style=\"padding:12px; color:#94a3b8; font-size:12px;\">Parent container (position: relative)</p>\n  \n  <div style=\"position:absolute; top:12px; right:12px; background:#ec4899; color:#fff; font-size:11px; font-weight:bold; padding:4px 10px; border-radius:20px;\">\n    🚀 Absolute Badge (Top: 12px, Right: 12px)\n  </div>\n</div>",
    "codeType": "html",
    "notes": "An absolute element requires a parent with position: relative; otherwise, it positions itself relative to the entire <html> page!",
    "exercise": {
      "question": "Which position value keeps an element glued to the screen even when the user scrolls?",
      "options": [
        "static",
        "relative",
        "fixed",
        "float"
      ],
      "correct": 2,
      "hint": "It remains \"fixed\" to the viewport."
    }
  },
  {
    "id": "css_flexbox",
    "category": "CSS Layout",
    "title": "CSS Flexbox Layout",
    "summary": "The Flexible Box Layout Module makes it easy to design responsive layout structures without using float or positioning.",
    "eli5": {
      "story": "Imagine 3 puppies sitting on a sofa. If they sit close together on the left, that is \"flex-start\". If they sit in the exact middle to cuddle, that is \"center\". If they spread out so each puppy gets equal space, that is \"space-between\"! Flexbox is like teaching puppies how to sit on the couch.",
      "analogy": "🐶 Puppies on a Couch: Flexbox arranges elements in a neat row or column without pushing each other off the screen.",
      "rules": [
        "display: flex turns on the magical couch.",
        "justify-content: center moves all items to the middle horizontally.",
        "align-items: center centers all items vertically."
      ]
    },
    "body": "### Flexbox Container Properties:\n- `display: flex;`: Activates flex formatting context.\n- `flex-direction: row | column;`: Direction of the main axis.\n- `justify-content: center | space-between | space-around;`: Alignment along main axis.\n- `align-items: center | flex-start | flex-end;`: Alignment along cross axis.\n- `gap: 16px;`: Sets space between items without margins.",
    "tryItCode": "<div style=\"display:flex; justify-content:space-between; align-items:center; gap:8px; background:#0f172a; padding:16px; border-radius:10px; border:1px solid #334155; font-family:sans-serif;\">\n  <div style=\"background:#00f2fe; color:#000; padding:10px 16px; border-radius:6px; font-weight:bold; font-size:12px;\">Puppy 1</div>\n  <div style=\"background:#a855f7; color:#fff; padding:10px 16px; border-radius:6px; font-weight:bold; font-size:12px;\">Puppy 2</div>\n  <div style=\"background:#ec4899; color:#fff; padding:10px 16px; border-radius:6px; font-weight:bold; font-size:12px;\">Puppy 3</div>\n</div>",
    "codeType": "html",
    "tips": "Use gap: 12px; instead of margin on children. It makes flex layouts 10x cleaner!",
    "exercise": {
      "question": "Which flexbox property distributes items with equal space between them across the row?",
      "options": [
        "align-items: center",
        "justify-content: space-between",
        "flex-wrap: wrap",
        "direction: space"
      ],
      "correct": 1,
      "hint": "space-between spreads items from edge to edge."
    }
  },
  {
    "id": "css_grid",
    "category": "CSS Layout",
    "title": "CSS Grid Layout",
    "summary": "CSS Grid Layout offers a grid-based layout system, with rows and columns, making it easier to design web pages without having to use floats and positioning.",
    "eli5": {
      "story": "Have you ever eaten waffles or put ice cubes into an ice cube tray? An ice cube tray has rows and columns with perfect squares. CSS Grid is that tray! You can say: \"Make 3 equal columns, and place the photo in column 1, and the story in columns 2 and 3!\"",
      "analogy": "🧊 The Ice Cube Tray: CSS Grid builds 2D rows and columns simultaneously for complete layout control.",
      "rules": [
        "display: grid turns on the grid tray.",
        "grid-template-columns: repeat(3, 1fr) creates 3 equal columns.",
        "gap: 16px sets clean space between grid cells."
      ]
    },
    "body": "### Flexbox vs Grid:\n- **Flexbox**: 1-Dimensional (works on either a row OR a column).\n- **CSS Grid**: 2-Dimensional (works on rows AND columns simultaneously).\n\n### Key Grid Properties:\n- `display: grid;`\n- `grid-template-columns: 1fr 1fr 1fr;` (or `repeat(3, 1fr)`)\n- `grid-template-rows: auto 1fr;`\n- `grid-column: span 2;` (expands cell across 2 columns)",
    "tryItCode": "<div style=\"display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; font-family:sans-serif;\">\n  <div style=\"background:#3b82f6; color:#fff; padding:16px; border-radius:8px; text-align:center; font-weight:bold; font-size:12px;\">Card 1</div>\n  <div style=\"background:#10b981; color:#fff; padding:16px; border-radius:8px; text-align:center; font-weight:bold; font-size:12px;\">Card 2</div>\n  <div style=\"background:#f59e0b; color:#fff; padding:16px; border-radius:8px; text-align:center; font-weight:bold; font-size:12px;\">Card 3</div>\n  <div style=\"grid-column:span 3; background:#8b5cf6; color:#fff; padding:12px; border-radius:8px; text-align:center; font-weight:bold; font-size:12px;\">\n    Spans all 3 columns! (grid-column: span 3)\n  </div>\n</div>",
    "codeType": "html",
    "tips": "The \"fr\" unit stands for fractional unit. \"1fr 2fr\" gives the second column twice as much space as the first!",
    "exercise": {
      "question": "What does the \"fr\" unit represent in CSS Grid?",
      "options": [
        "Fraction of available space",
        "Frame rate",
        "Font resolution",
        "Free row"
      ],
      "correct": 0,
      "hint": "Short for Fraction."
    }
  },
  {
    "id": "css_responsive",
    "category": "CSS Responsive",
    "title": "CSS Media Queries & Responsive Design",
    "summary": "Media queries are a popular technique for delivering a tailored style sheet to different devices (desktops, laptops, tablets, and mobile phones).",
    "eli5": {
      "story": "Imagine you have an elastic rubber band or an accordion! When you hold it in a small hand, it shrinks so it fits in your pocket. When you stretch it out with two hands, it expands into a giant poster! A responsive website stretches and shrinks smoothly on mobile phones, iPads, and giant TV screens.",
      "analogy": "📱 The Accordion: @media queries detect screen width and rearrange 3 columns into 1 neat single column on phones.",
      "rules": [
        "Always include <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\"> in HTML.",
        "@media (max-width: 768px) triggers styles only on phones and small tablets.",
        "Use percentages (%) or rem instead of fixed pixel widths."
      ]
    },
    "body": "### What is a Media Query?\nA media query consists of a media type and can contain one or more expressions that resolve to true or false:\n```css\n@media only screen and (max-width: 768px) {\n  body {\n    background-color: lightblue;\n  }\n}\n```\n\n### Common Breakpoints:\n- **Mobile phones**: `max-width: 600px`\n- **Tablets / iPads**: `max-width: 768px`\n- **Laptops**: `max-width: 1024px`\n- **Desktops**: `min-width: 1200px`",
    "tryItCode": "<div style=\"background:#0f172a; padding:16px; border-radius:12px; border:1px solid #334155; text-align:center; font-family:sans-serif;\">\n  <p style=\"color:#38bdf8; font-weight:bold; font-size:14px; margin:0;\">\n    Resize your browser window!\n  </p>\n  <p style=\"color:#94a3b8; font-size:12px; margin-top:6px;\">\n    ByteVerse uses flexible flexbox, grid, and Tailwind breakpoints (sm, md, lg) to fit iPhone, iPad, and 4K monitors seamlessly.\n  </p>\n</div>",
    "codeType": "html",
    "notes": "Mobile-first design means writing mobile styles as default, then using min-width media queries for larger tablet and desktop screens.",
    "exercise": {
      "question": "Which CSS rule allows you to apply styles based on the device screen width?",
      "options": [
        "@screen",
        "@media",
        "@responsive",
        "@device"
      ],
      "correct": 1,
      "hint": "@media (max-width: ...)"
    }
  },
  {
    "id": "css_animations",
    "category": "CSS Advanced",
    "title": "CSS Transitions & Keyframe Animations",
    "summary": "CSS animations make it possible to animate transitions from one CSS style configuration to another without using JavaScript.",
    "eli5": {
      "story": "Have you ever watched a cartoon flipbook where drawing stick figures on each page makes them dance and jump? In CSS, @keyframes is that flipbook! You say: at 0% be on the left, at 50% jump high in the air, at 100% land on the right with fireworks!",
      "analogy": "🎬 The Cartoon Flipbook: @keyframes animates elements frame-by-frame with smooth 60fps hardware acceleration.",
      "rules": [
        "transition: all 0.3s ease creates butter-smooth hover animations.",
        "@keyframes defines what happens at 0%, 50%, and 100%.",
        "animation: pulse 2s infinite keeps a button glowing forever!"
      ]
    },
    "body": "### The Transition Property:\nEnables smooth value changes over a given duration:\n```css\n.button {\n  transition: transform 0.2s ease, background-color 0.2s;\n}\n.button:hover {\n  transform: scale(1.05);\n}\n```\n\n### Keyframe Animations:\n```css\n@keyframes float {\n  0% { transform: translateY(0px); }\n  50% { transform: translateY(-10px); }\n  100% { transform: translateY(0px); }\n}\n.floating-card {\n  animation: float 3s ease-in-out infinite;\n}\n```",
    "tryItCode": "<style>\n@keyframes pulseGlow {\n  0% { box-shadow: 0 0 5px #00f2fe; transform: scale(1); }\n  50% { box-shadow: 0 0 25px #00f2fe; transform: scale(1.04); }\n  100% { box-shadow: 0 0 5px #00f2fe; transform: scale(1); }\n}\n.pulse-btn {\n  background: #00f2fe;\n  color: #000;\n  font-weight: bold;\n  padding: 12px 24px;\n  border-radius: 10px;\n  border: none;\n  cursor: pointer;\n  animation: pulseGlow 2s infinite ease-in-out;\n}\n</style>\n\n<div style=\"text-align:center; padding:24px;\">\n  <button class=\"pulse-btn\">⚡ Pulsing 60FPS CSS Animation</button>\n</div>",
    "codeType": "html",
    "tips": "Use \"transform\" and \"opacity\" for animations. Browsers animate them on the GPU without lagging the CPU!",
    "exercise": {
      "question": "Which at-rule is used to create custom CSS animations?",
      "options": [
        "@animate",
        "@keyframes",
        "@motion",
        "@transition"
      ],
      "correct": 1,
      "hint": "@keyframes animationName { ... }"
    }
  },
  {
    "id": "css_variables",
    "category": "CSS Advanced",
    "title": "CSS Custom Properties (Variables)",
    "summary": "CSS variables (custom properties) allow you to store specific values to be reused throughout a document.",
    "eli5": {
      "story": "Imagine you are building a giant Lego skyscraper. You decide the superhero color is neon blue. If you paint 500 windows with neon blue and later change your mind to gold, you have to repaint 500 times! But with a CSS variable, you save --main-color: blue in one place, and changing that one word updates all 500 windows at once!",
      "analogy": "🏷️ The Universal Master Knob: Turn the dial once, and the whole theme (dark mode, light mode) changes across the website.",
      "rules": [
        "Variable names always start with two hyphens (--my-color).",
        "Use var(--my-color) to use the saved color.",
        "Define variables in :root so every element on the website can see them!"
      ]
    },
    "body": "### Declaring CSS Variables:\nVariables should be declared inside the `:root` pseudo-class so they have global scope:\n```css\n:root {\n  --primary-color: #00f2fe;\n  --secondary-color: #8b5cf6;\n  --card-padding: 16px;\n  --border-radius: 12px;\n}\n```\n\n### Using CSS Variables:\n```css\n.button {\n  background-color: var(--primary-color);\n  padding: var(--card-padding);\n  border-radius: var(--border-radius);\n}\n```",
    "tryItCode": "<div style=\"--brand-cyan:#00f2fe; --brand-purple:#a855f7; background:#0f172a; padding:20px; border-radius:12px; border:2px solid var(--brand-cyan); text-align:center; font-family:sans-serif;\">\n  <h4 style=\"color:var(--brand-cyan); margin:0;\">Using CSS Variables</h4>\n  <p style=\"color:var(--brand-purple); font-weight:bold; margin-top:6px;\">\n    var(--brand-cyan) &amp; var(--brand-purple)\n  </p>\n</div>",
    "codeType": "html",
    "notes": "CSS variables are fully dynamic: you can change them with JavaScript at runtime to toggle Dark Mode in 1 line of code!",
    "exercise": {
      "question": "What prefix must every CSS variable name start with?",
      "options": [
        "Two hyphens (--)",
        "Dollar sign ($)",
        "At symbol (@)",
        "Hash (#)"
      ],
      "correct": 0,
      "hint": "--variable-name"
    }
  }
];
