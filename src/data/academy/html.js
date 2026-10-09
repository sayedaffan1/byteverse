export const HTML_CURRICULUM = {
  title: 'HTML5: The Complete Encyclopedia (0% to 10,000,000%)',
  tagline: 'From your very first <h1> tag to Web Components, Canvas, SEO, and Shadow DOM.',
  overview: 'HTML5 is the universal markup language of the web. It defines the structure, semantic meaning, media, forms, accessibility tree, and browser integration for every web document on Earth.',
  modules: [
    {
      level: '0% Beginner',
      levelCode: 'beginner',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      topics: [
        {
          id: 'html-what-is',
          title: 'What is HTML & How the Web Works',
          summary: 'HTML (HyperText Markup Language) tells web browsers how to structure and display content. When you visit a URL, the server sends an HTML document that the browser parses into a Document Object Model (DOM) tree.',
          keyPoints: [
            'HTML is a markup language, not a programming language.',
            'Files must end with .html or .htm extension.',
            'Browsers (Chrome, Firefox, Safari) read tags from top to bottom and build the visual page.'
          ],
          code: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Web Page</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>Welcome to the journey from 0% to 10,000,000% mastery.</p>
</body>
</html>`,
          type: 'html',
          quiz: {
            question: 'What does HTML stand for?',
            options: ['HyperText Markup Language', 'HighTech Machine Language', 'HyperTransfer Mode Language', 'Home Tool Markup Language'],
            correct: 0,
            explanation: 'HTML stands for HyperText Markup Language.'
          }
        },
        {
          id: 'html-text-formatting',
          title: 'Headings, Paragraphs & Text Formatting',
          summary: 'Learn headings h1 through h6, paragraphs, line breaks, bold, italic, and semantic emphasis.',
          keyPoints: [
            'Use only ONE <h1> per page for optimal SEO and screen-reader hierarchy.',
            '<p> elements represent distinct blocks of text.',
            '<strong> indicates strong importance (bold), while <em> indicates stress emphasis (italics).',
            '<br> is an empty self-closing tag for line breaks, <hr> creates a thematic divider.'
          ],
          code: `<h1>Main Title (Level 1)</h1>
<h2>Secondary Section (Level 2)</h2>
<h3>Subsection (Level 3)</h3>
<p>This is a paragraph with <strong>bold text</strong>, <em>italic emphasis</em>, <mark style="background:#00f2fe;color:#000;">highlighted text</mark>, and <code>inline code</code>.</p>
<hr>
<p>Small print: <small>&copy; 2026 ByteVerse Academy</small></p>`,
          type: 'html',
          quiz: {
            question: 'How many <h1> tags should a standard page have for best SEO practices?',
            options: ['As many as you like', 'Exactly one', 'None, only use <h2>', 'At least five'],
            correct: 1,
            explanation: 'A page should contain exactly one <h1> representing the main topic for search engines and accessibility.'
          }
        },
        {
          id: 'html-links-media',
          title: 'Hyperlinks, Images & Media Elements',
          summary: 'The web is connected by hyperlinks (<a>) and enriched with images (<img>), audio (<audio>), and video (<video>).',
          keyPoints: [
            '<a> requires an href attribute: <a href="https://example.com" target="_blank" rel="noopener">.',
            '<img> is a void tag (no closing tag). Always include src and alt for accessibility.',
            '<video> and <audio> support native controls, autoplay, loop, and multiple <source> formats.'
          ],
          code: `<p>
  Visit <a href="https://developer.mozilla.org" target="_blank" rel="noopener" style="color:#00f2fe;">MDN Web Docs</a>
</p>
<img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=300" alt="Microchip circuit board" style="border-radius:8px; width:100%; max-width:300px; display:block; margin-top:8px;" />`,
          type: 'html',
          quiz: {
            question: 'Why is the "alt" attribute on <img> tags required for good practice?',
            options: ['It changes the image resolution', 'It provides text for screen-readers and when the image fails to load', 'It links the image to a database', 'It enables image rotation'],
            correct: 1,
            explanation: 'Alt text improves accessibility for visually impaired users and displays if the image file fails to load.'
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
          id: 'html-semantics',
          title: 'Semantic HTML5 Architecture',
          summary: 'Semantic elements convey meaning to both the browser and developer, improving accessibility, screen reader navigation, and search ranking.',
          keyPoints: [
            '<header>: Navigational headers, page branding.',
            '<nav>: Section with major navigation hyperlinks.',
            '<main>: Central unique content of the document.',
            '<article>: Self-contained syndicatable content (blog, card, forum post).',
            '<section>: Thematic grouping of content with a heading.',
            '<aside>: Complementary side content (sidebars, related links).',
            '<footer>: Author info, copyright, sitemap.'
          ],
          code: `<header style="border-bottom: 1px solid #334155; padding-bottom: 6px;">
  <strong style="color: #00f2fe;">ByteVerse News</strong>
</header>
<main style="padding: 10px 0;">
  <article style="background: #1e293b; padding: 12px; border-radius: 6px;">
    <h3 style="margin: 0; color: #fff;">Semantic Revolution</h3>
    <p style="font-size: 13px; color: #94a3b8;">Screen readers can now jump directly to &lt;main&gt; or &lt;nav&gt;.</p>
  </article>
</main>
<footer style="font-size: 11px; color: #64748b;">
  Published by ByteVerse &bull; All Rights Reserved
</footer>`,
          type: 'html',
          quiz: {
            question: 'Which tag should wrap the primary, unique content of a webpage?',
            options: ['<section>', '<main>', '<content>', '<div>'],
            correct: 1,
            explanation: '<main> represents the dominant content unique to the document.'
          }
        },
        {
          id: 'html-forms-deep',
          title: 'Forms, Validations & Input Types',
          summary: 'Modern HTML5 forms support built-in browser validations, regex patterns, input masks, and accessible labels.',
          keyPoints: [
            'Always connect <label for="userId"> with <input id="userId">.',
            'Specialized input types: email, number, tel, date, range, color, file.',
            'Attributes: required, minlength, maxlength, pattern (regex), min, max, step.',
            'Submission methods: GET (parameters in URL query) vs POST (payload in HTTP body).'
          ],
          code: `<form style="display:flex; flex-direction:column; gap:8px; max-width:320px;">
  <label style="font-size:12px; color:#94a3b8;">Email Address:</label>
  <input type="email" placeholder="developer@byteverse.dev" required style="padding:8px; border-radius:6px; background:#1e293b; color:#fff; border:1px solid #475569;" />

  <label style="font-size:12px; color:#94a3b8;">Skill Level (1-100):</label>
  <input type="range" min="1" max="100" value="85" style="accent-color:#00f2fe;" />

  <button type="button" style="background:#00f2fe; color:#000; font-weight:bold; padding:8px; border-radius:6px; margin-top:4px;">Submit Profile</button>
</form>`,
          type: 'html',
          quiz: {
            question: 'Which attribute binds a <label> to its corresponding <input>?',
            options: ['name', 'target', 'for', 'bind'],
            correct: 2,
            explanation: 'The label\'s "for" attribute must match the input\'s "id".'
          }
        },
        {
          id: 'html-tables-structure',
          title: 'Relational HTML Tables & Accessibility',
          summary: 'Create structured data tables with <table>, <thead>, <tbody>, <tfoot>, <tr>, <th>, and <td> with proper column scope.',
          keyPoints: [
            'Use <th> with scope="col" or scope="row" for screen-reader row/column tracking.',
            'Use <caption> to provide an accessible description of the table dataset.',
            'Use colspan and rowspan to span multiple cells across dimensions.'
          ],
          code: `<table style="width:100%; font-size:12px; border-collapse:collapse; text-align:left;">
  <caption style="font-size:11px; color:#94a3b8; margin-bottom:6px;">Top Developers Leaderboard</caption>
  <thead>
    <tr style="border-bottom:1px solid #334155; color:#00f2fe;">
      <th style="padding:6px;">Rank</th>
      <th style="padding:6px;">User</th>
      <th style="padding:6px;">XP</th>
    </tr>
  </thead>
  <tbody>
    <tr style="border-bottom:1px solid #1e293b;">
      <td style="padding:6px;">#1</td>
      <td style="padding:6px;">NeoByte</td>
      <td style="padding:6px;">9500</td>
    </tr>
    <tr>
      <td style="padding:6px;">#2</td>
      <td style="padding:6px;">CyberSamurai</td>
      <td style="padding:6px;">8200</td>
    </tr>
  </tbody>
</table>`,
          type: 'html',
          quiz: {
            question: 'Which tag designates a header cell in an HTML table?',
            options: ['<td>', '<th>', '<head>', '<tr>'],
            correct: 1,
            explanation: '<th> defines a table header cell.'
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
          id: 'html-meta-seo',
          title: 'Meta Tags, Open Graph & SEO Engineering',
          summary: 'Master the <head> document metadata: viewport, charset, Open Graph (og:title, og:image), Twitter cards, canonical links, and JSON-LD structured data.',
          keyPoints: [
            '<meta name="viewport" content="width=device-width, initial-scale=1.0"> is required for responsive mobile rendering.',
            'Open Graph meta tags power rich preview cards on Discord, WhatsApp, Twitter, and LinkedIn.',
            '<link rel="canonical" href="..."> prevents duplicate content penalties from Google.'
          ],
          code: `<!-- Essential SEO & Social Meta Configuration -->
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="description" content="ByteVerse - Master code from 0% to 10000000% through games.">
<!-- Open Graph -->
<meta property="og:title" content="ByteVerse Interactive Academy">
<meta property="og:image" content="https://byteverse.dev/og-cover.png">
<meta property="og:type" content="website">`,
          type: 'html',
          quiz: {
            question: 'What happens if you omit the meta viewport tag on a mobile website?',
            options: ['The page fails to load', 'Mobile browsers render a desktop-width page (typically 980px) and scale it down tiny', 'Images are hidden', 'CSS stops working'],
            correct: 1,
            explanation: 'Without the viewport tag, mobile devices assume a 980px desktop site and zoom out.'
          }
        },
        {
          id: 'html-web-components',
          title: 'Custom Elements & Shadow DOM (Web Components)',
          summary: 'Create reusable native HTML tags (<byte-badge>) with encapsulated styles and markup using native Custom Elements, <template>, <slot>, and Shadow DOM.',
          keyPoints: [
            'Custom tag names MUST contain a hyphen (e.g. <cyber-badge>).',
            'Shadow DOM scopes CSS styles so they do not leak out or get overridden by external styles.',
            '<slot> enables content projection into custom component templates.'
          ],
          code: `<template id="card-template">
  <style>
    .badge { background: #9d4edd; color: white; padding: 4px 8px; border-radius: 4px; font-family: monospace; font-size: 11px; }
  </style>
  <span class="badge"><slot>Default Badge</slot></span>
</template>

<p>Custom element blueprint ready for registration via customElements.define().</p>`,
          type: 'html',
          quiz: {
            question: 'What is a mandatory naming rule for custom HTML tags?',
            options: ['Must be uppercase', 'Must contain a hyphen (-)', 'Must end in .js', 'Must be under 4 characters'],
            correct: 1,
            explanation: 'Custom elements must contain a hyphen (e.g., <my-element>) to avoid collisions with future standard HTML tags.'
          }
        },
        {
          id: 'html-accessibility-aria',
          title: 'WCAG Accessibility & WAI-ARIA Roles',
          summary: 'Deliver accessible digital experiences with ARIA attributes (role, aria-label, aria-expanded, aria-live, aria-hidden) and keyboard focus management.',
          keyPoints: [
            'First rule of ARIA: Do not use ARIA if a native HTML tag already provides that functionality.',
            'aria-label supplies an accessible name when visual text is missing (e.g. icon-only buttons).',
            'aria-live="polite" announces dynamic screen updates to screen-reader users without interrupting them.'
          ],
          code: `<button aria-label="Close Dialog" style="background:#1e293b; color:#fff; border:1px solid #475569; padding:6px 12px; border-radius:6px; cursor:pointer;">
  &times;
</button>
<div role="status" aria-live="polite" style="margin-top:8px; font-size:12px; color:#10b981;">
  System Status: Online &bull; Latency: 12ms
</div>`,
          type: 'html',
          quiz: {
            question: 'What is the "First Rule of ARIA"?',
            options: ['Always put ARIA on every <div>', 'Don\'t use ARIA if a native HTML element or attribute already exists', 'Only use ARIA for blind users', 'ARIA is required by JavaScript'],
            correct: 1,
            explanation: 'Semantic native elements (<button>, <nav>) already have built-in accessibility; only use ARIA when native tags cannot suffice.'
          }
        }
      ]
    }
  ]
};
