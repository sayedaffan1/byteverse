export const CSS_CURRICULUM = {
  title: 'CSS3: Master of Layout, Color & Motion (0% to 10,000,000%)',
  tagline: 'From basic margins and colors to Flexbox, Grid, :has() parent selectors, and 3D transforms.',
  overview: 'CSS (Cascading Style Sheets) turns raw HTML into responsive, fluid, and delightful visual interfaces. Learn the complete cascade, specificity hierarchy, modern layout engines, and hardware-accelerated animations.',
  modules: [
    {
      level: '0% Beginner',
      levelCode: 'beginner',
      badgeColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/30',
      topics: [
        {
          id: 'css-selectors-cascade',
          title: 'Selectors, Specificity & The Cascade',
          summary: 'CSS rules target HTML elements through selectors. When multiple rules target the same element, the cascade calculates specificity to decide who wins.',
          keyPoints: [
            'Element selector (div) has specificity 0,0,1.',
            'Class (.btn) and pseudo-class (:hover) have specificity 0,1,0.',
            'ID selector (#hero) has specificity 1,0,0.',
            'Inline styles (style="...") have specificity 1,0,0,0.',
            '!important overrides normal specificity (use sparingly!).'
          ],
          code: `/* Specificity calculation demonstration */
p { color: #94a3b8; }              /* 0,0,1 */
.highlight { color: #00f2fe; }      /* 0,1,0 (Wins over p) */
#special { color: #ec4899; }        /* 1,0,0 (Wins over .highlight) */`,
          type: 'html',
          quiz: {
            question: 'Which selector has the highest CSS specificity weight?',
            options: ['div', '.button', '#header', 'p.intro'],
            correct: 2,
            explanation: 'An ID selector (#header) has a specificity weight of (1,0,0), beating classes and tags.'
          }
        },
        {
          id: 'css-box-model-deep',
          title: 'The CSS Box Model & box-sizing',
          summary: 'Every element is a rectangular box: Content -> Padding -> Border -> Margin. Master box-sizing: border-box to prevent sizing headaches.',
          keyPoints: [
            'Content: The dimensions of text or image inside.',
            'Padding: Inner breathing room between content and border.',
            'Border: The visual line bounding the padding.',
            'Margin: Outer space pushing neighboring elements away.',
            'Crucial rule: Set * { box-sizing: border-box; } so padding does NOT inflate element width!'
          ],
          code: `<div style="box-sizing: border-box; width: 100%; max-width: 280px; padding: 16px; border: 2px solid #00f2fe; margin: 8px 0; background: #111726; border-radius: 8px; text-align: center;">
  <strong style="color: #00f2fe;">border-box element</strong>
  <p style="font-size: 12px; color: #94a3b8; margin: 6px 0 0 0;">Padding is included inside the declared width.</p>
</div>`,
          type: 'html',
          quiz: {
            question: 'What does "box-sizing: border-box" do?',
            options: ['Adds a drop shadow', 'Includes padding and border within the element\'s declared width/height', 'Removes all margins', 'Rounds all corners'],
            correct: 1,
            explanation: 'With border-box, an element set to width: 200px with 20px padding remains exactly 200px wide.'
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
          id: 'css-flexbox-mastery',
          title: 'Flexbox: 1-Dimensional Alignment Engine',
          summary: 'Flexbox aligns and distributes space along a single axis (either row or column) with automatic wrapping and dynamic sizing.',
          keyPoints: [
            'Main Axis (justify-content): flex-start, center, flex-end, space-between, space-around, space-evenly.',
            'Cross Axis (align-items): stretch, center, flex-start, flex-end, baseline.',
            'flex-direction: row, row-reverse, column, column-reverse.',
            'gap: effortlessly sets spacing between flex children without margin hacks.',
            'Child props: flex-grow (expand), flex-shrink (compress), flex-basis (initial size).'
          ],
          code: `<div style="display: flex; justify-content: space-between; align-items: center; gap: 8px; background: #0f172a; padding: 12px; border-radius: 8px; border: 1px dashed #00f2fe;">
  <div style="background: #9d4edd; color: #fff; padding: 8px 12px; border-radius: 6px; font-weight: bold; font-size: 12px;">Flex 1</div>
  <div style="background: #00f2fe; color: #000; padding: 8px 12px; border-radius: 6px; font-weight: bold; font-size: 12px;">Flex 2 (Center)</div>
  <div style="background: #ec4899; color: #fff; padding: 8px 12px; border-radius: 6px; font-weight: bold; font-size: 12px;">Flex 3</div>
</div>`,
          type: 'html',
          quiz: {
            question: 'Which property aligns children along the primary direction axis in Flexbox?',
            options: ['align-items', 'justify-content', 'align-content', 'flex-align'],
            correct: 1,
            explanation: 'justify-content controls alignment along the main axis.'
          }
        },
        {
          id: 'css-grid-mastery',
          title: 'CSS Grid: 2-Dimensional Layout Architecture',
          summary: 'CSS Grid handles both rows and columns simultaneously. It provides repeat(), minmax(), fr units, and named grid areas.',
          keyPoints: [
            'display: grid activates grid formatting context.',
            'grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)) creates automatic responsive layouts with zero media queries!',
            'fr unit represents a fraction of the remaining free space in the grid container.',
            'grid-template-areas enables sketching layout templates like "header header" "sidebar main".'
          ],
          code: `<div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;">
  <div style="background: #1e293b; padding: 14px; text-align: center; border-radius: 6px; border: 1px solid #334155; font-size: 12px; color: #00f2fe;">Col 1 (1fr)</div>
  <div style="background: #1e293b; padding: 14px; text-align: center; border-radius: 6px; border: 1px solid #334155; font-size: 12px; color: #00f2fe;">Col 2 (1fr)</div>
  <div style="background: #1e293b; padding: 14px; text-align: center; border-radius: 6px; border: 1px solid #334155; font-size: 12px; color: #00f2fe;">Col 3 (1fr)</div>
</div>`,
          type: 'html',
          quiz: {
            question: 'What does the "1fr" unit represent in CSS Grid?',
            options: ['One frame rate', 'One fraction of the free available space', 'One fixed radius', 'One font resolution'],
            correct: 1,
            explanation: '1fr stands for one fraction of available space in the container.'
          }
        },
        {
          id: 'css-positioning-contexts',
          title: 'Positioning: static, relative, absolute, fixed, sticky',
          summary: 'Control exact coordinate placements, layering with z-index, and scroll-pinned headers.',
          keyPoints: [
            'static: Normal document flow (default).',
            'relative: Offset relative to original position without affecting surrounding flow.',
            'absolute: Positioned relative to the nearest positioned ancestor (non-static).',
            'fixed: Locked to the browser viewport even during scrolling.',
            'sticky: Hybrid that scrolls normally until reaching an offset threshold (e.g. top: 0).'
          ],
          code: `<div style="position: relative; height: 100px; background: #0f172a; border-radius: 8px; border: 1px solid #334155; padding: 10px;">
  <span style="font-size: 11px; color: #64748b;">Relative Container</span>
  <div style="position: absolute; bottom: 8px; right: 8px; background: #10b981; color: #000; font-weight: bold; font-size: 11px; padding: 4px 8px; border-radius: 4px;">
    absolute pin (bottom: 8px, right: 8px)
  </div>
</div>`,
          type: 'html',
          quiz: {
            question: 'An "absolute" positioned element anchors itself relative to what?',
            options: ['Always the <body> element', 'The nearest ancestor with position other than static', 'Its sibling element', 'The mouse cursor'],
            correct: 1,
            explanation: 'An absolute element looks up the DOM tree for the nearest ancestor with position relative, absolute, or fixed.'
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
          id: 'css-modern-has-selector',
          title: 'Modern CSS: The :has() Parent Selector',
          summary: ':has() is the legendary "parent selector" that allows styling an element based on its children or subsequent state.',
          keyPoints: [
            'article:has(img) styles only articles that contain an image.',
            'form:has(:invalid) button[type="submit"] disables button if form has invalid inputs without JS!',
            ':is() and :where() group selectors; :where() has 0 specificity.'
          ],
          code: `/* Style card header if card has a warning tag inside */
.card:has(.alert) {
  border-color: #f43f5e;
}
/* Style label when child checkbox is checked */
label:has(input:checked) {
  color: #10b981;
  font-weight: bold;
}`,
          type: 'html',
          quiz: {
            question: 'What makes the :has() pseudo-class revolutionary in modern CSS?',
            options: ['It replaces JavaScript completely', 'It allows styling parent elements based on what children they contain', 'It makes pages load 10x faster', 'It generates CSS automatically'],
            correct: 1,
            explanation: ':has() acts as a parent/relational selector, styling elements based on their descendants.'
          }
        },
        {
          id: 'css-custom-properties',
          title: 'CSS Variables (Custom Properties) & Theming',
          summary: 'Declare reusable, cascading tokens with --variable-name and consume them with var(--name, fallback).',
          keyPoints: [
            ':root defines globally accessible variables across the whole document.',
            'Can be updated dynamically at runtime via JavaScript: element.style.setProperty("--accent", "#00f2fe").',
            'Enables instant dark/light mode toggles and component design tokens.'
          ],
          code: `<div style="--neon: #00f2fe; --glow: rgba(0, 242, 254, 0.4); background: #111726; border: 1px solid var(--neon); padding: 16px; border-radius: 8px; box-shadow: 0 0 15px var(--glow); text-align: center;">
  <span style="color: var(--neon); font-weight: bold; font-family: monospace;">CSS Variables in Action</span>
</div>`,
          type: 'html',
          quiz: {
            question: 'How do you define a CSS custom property (variable)?',
            options: ['$variable: value;', '@variable: value;', '--variable-name: value;', 'var variable = value;'],
            correct: 2,
            explanation: 'Standard CSS variables begin with two dashes (e.g., --theme-color).'
          }
        },
        {
          id: 'css-animations-transforms',
          title: 'Hardware-Accelerated Keyframes & 3D Transforms',
          summary: 'Create 60fps buttery-smooth motion using transform (translate, rotate, scale) and opacity without triggering browser layout recalculations (reflows).',
          keyPoints: [
            'Animate transform and opacity to stay on the GPU compositor thread for optimal performance.',
            '@keyframes rule defines the stages of an animation (from/to or 0% to 100%).',
            'transition: property duration timing-function delay controls state changes smoothly.'
          ],
          code: `<div style="display: flex; gap: 16px; align-items: center; justify-content: center; padding: 20px;">
  <div style="width: 50px; height: 50px; background: linear-gradient(135deg, #00f2fe, #9d4edd); border-radius: 12px; animation: float 3s ease-in-out infinite; box-shadow: 0 10px 20px rgba(0,242,254,0.3);"></div>
  <span style="font-size: 12px; color: #94a3b8; font-family: monospace;">GPU Floating Transform</span>
</div>`,
          type: 'html',
          quiz: {
            question: 'Which two CSS properties are safest to animate for 60fps GPU performance?',
            options: ['width and height', 'margin and top', 'transform and opacity', 'border-width and padding'],
            correct: 2,
            explanation: 'transform and opacity can be composited directly on the GPU without triggering CPU reflow/repaint.'
          }
        }
      ]
    }
  ]
};
