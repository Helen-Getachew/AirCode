// lessons.js — all course content for Trace Code

const SUBJECTS = [
  { id: 'html', name: 'HTML', icon: '🌐', description: 'Structure of the web' },
  { id: 'css', name: 'CSS', icon: '🎨', description: 'Style and layout' },
  { id: 'javascript', name: 'JavaScript', icon: '⚡', description: 'Logic and interactivity' },
  { id: 'python', name: 'Python', icon: '🐍', description: 'Programming fundamentals' }
];

const LEVELS = ['beginner', 'intermediate', 'advanced'];

const COURSES = {
  html: {
    beginner: {
      lessons: [
        {
          id: 'html-beg-01',
          title: 'The Anatomy of a Tag',
          summary: 'Learn what HTML tags are and how they work',
          content: [
            { type: 'text', value: 'HTML stands for HyperText Markup Language. It is the foundation of every website you have ever visited. HTML tells the browser what each piece of content is — a heading, a paragraph, an image, a link.' },
            { type: 'text', value: 'Everything in HTML is made of elements, and elements are written using tags. A tag is simply a word wrapped in angle brackets: < and >.' },
            { type: 'heading', value: 'Opening and Closing Tags' },
            { type: 'text', value: 'Most HTML elements have two tags — an opening tag to start the element, and a closing tag to end it. The closing tag always has a forward slash / before the element name.' },
            { type: 'code', value: '<p>This is a paragraph of text.</p>' },
            { type: 'text', value: 'Breaking this down:\n• <p> is the opening tag — it tells the browser "start a paragraph here"\n• "This is a paragraph of text." is the content\n• </p> is the closing tag — it tells the browser "end the paragraph here"\n• The whole thing together is called an element' },
            { type: 'heading', value: 'More Examples' },
            { type: 'code', value: '<h1>Welcome to my website</h1>\n<p>This is my first paragraph.</p>\n<strong>This text is bold.</strong>' },
            { type: 'heading', value: 'Void Elements' },
            { type: 'text', value: 'Some elements do not have a closing tag. These are called void elements. They cannot contain any content — they just do one thing on their own.' },
            { type: 'code', value: '<br>      <!-- line break -->\n<hr>      <!-- horizontal line -->\n<img src="photo.jpg" alt="A photo">   <!-- image -->\n<input type="text">   <!-- text field -->' },
            { type: 'text', value: 'Notice that void elements have no closing tag and no content between tags. The browser knows exactly what to do with them from the tag name alone.' },
            { type: 'heading', value: 'How Browsers Read HTML' },
            { type: 'text', value: 'The browser reads your HTML from top to bottom, left to right. When it sees an opening tag, it starts the element. When it sees a closing tag, it ends the element. The browser then displays the result on screen — but never shows the tags themselves. Tags are invisible instructions.' },
            { type: 'code', value: '<!-- This is a comment. Browsers ignore it. -->\n<p>Only this text shows on screen.</p>' }
          ],
          quiz: [
            { question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'High Tech Modern Language', 'HyperText Machine Learning', 'Home Tool Markup Language'], correct: 0, explanation: 'HTML stands for HyperText Markup Language — the standard language for creating web pages.' },
            { question: 'What is the closing tag for a paragraph?', options: ['<p>', '<\\p>', '</p>', '<-p>'], correct: 2, explanation: 'Closing tags always start with a forward slash: </p>. The slash tells the browser the element is ending.' },
            { question: 'What is a void element?', options: ['An element with no content or closing tag', 'An empty paragraph', 'An invisible element', 'An element with no attributes'], correct: 0, explanation: 'Void elements like &lt;br&gt;, &lt;img&gt;, and &lt;input&gt; have no closing tag and cannot contain content.' },
            { question: 'Which of these is a complete HTML element?', options: ['<h1>', '</h1>', '<h1>Hello</h1>', 'Hello World'], correct: 2, explanation: 'A complete element has an opening tag, content, and a closing tag. Only <h1>Hello</h1> has all three.' },
            { question: 'Do HTML tags appear on screen when a browser displays a page?', options: ['Yes, always', 'Only opening tags', 'No, tags are invisible instructions', 'Only if you add CSS'], correct: 2, explanation: 'Browsers read tags as instructions but never display them. Only the content between tags is shown on screen.' }
          ]
        },
        {
          id: 'html-beg-02',
          title: 'Attributes',
          summary: 'Add extra information to HTML elements',
          content: [
            { type: 'text', value: 'Tags alone are sometimes not enough. You often need to give an element extra information — like where a link should go, or what image to show. This extra information is called an attribute.' },
            { type: 'heading', value: 'How Attributes Work' },
            { type: 'text', value: 'Attributes are always written inside the opening tag. They follow a name="value" pattern. The name says what kind of information it is, and the value says what that information actually is.' },
            { type: 'code', value: '<p align="center">This text is centered!</p>' },
            { type: 'text', value: 'Here, align is the attribute name and "center" is the attribute value. Together they tell the browser to center the paragraph.' },
            { type: 'heading', value: 'Multiple Attributes' },
            { type: 'text', value: 'One element can have many attributes. Separate them with a space inside the opening tag.' },
            { type: 'code', value: '<img src="puppy.jpg" alt="A cute puppy" width="300" height="200">' },
            { type: 'text', value: 'This image element has four attributes:\n• src — the file to show\n• alt — description if image fails\n• width — how wide the image is\n• height — how tall the image is' },
            { type: 'heading', value: 'Common Attributes' },
            { type: 'code', value: '<!-- id: a unique name for one element -->\n<p id="intro">Welcome paragraph</p>\n\n<!-- class: a group name for multiple elements -->\n<p class="highlight">Important text</p>\n<p class="highlight">Also important</p>\n\n<!-- style: add CSS directly -->\n<p style="color: red;">Red text</p>' },
            { type: 'heading', value: 'Boolean Attributes' },
            { type: 'text', value: 'Some attributes do not need a value. Just writing the attribute name is enough — its presence means true.' },
            { type: 'code', value: '<input type="checkbox" checked>   <!-- box is ticked -->\n<input type="text" disabled>      <!-- field is greyed out -->\n<video controls>                  <!-- show video controls -->' },
            { type: 'heading', value: 'Important Rule' },
            { type: 'text', value: 'Attributes only go in the opening tag — never in the closing tag. The closing tag is always just </tagname> with nothing else inside it.' }
          ],
          quiz: [
            { question: 'Where do you always place attributes?', options: ['In the closing tag', 'Between the opening and closing tags', 'In the opening tag', 'After the element'], correct: 2, explanation: 'Attributes are always placed inside the opening tag. The closing tag only contains the tag name with a slash.' },
            { question: 'What is the correct format for an attribute?', options: ['value:name', 'name=value', 'name="value"', '"name"=value'], correct: 2, explanation: 'Attributes follow the name="value" format. The value is wrapped in quotation marks.' },
            { question: 'What does a boolean attribute mean when present?', options: ['The attribute is false', 'The attribute is true', 'The attribute is optional', 'The attribute is required'], correct: 1, explanation: 'Boolean attributes like checked, disabled, and controls mean true just by being present. No value is needed.' },
            { question: 'Which attribute gives an element a unique name?', options: ['class', 'name', 'id', 'tag'], correct: 2, explanation: 'The id attribute gives an element a unique identifier. Only one element on the page should have any given id.' },
            { question: 'Can one element have multiple attributes?', options: ['No, only one per element', 'Yes, separated by spaces', 'Yes, separated by commas', 'Only two at most'], correct: 1, explanation: 'An element can have many attributes. They are written inside the opening tag, separated by spaces.' }
          ]
        },
        {
          id: 'html-beg-03',
          title: 'The Page Skeleton',
          summary: 'The structure every HTML file must have',
          content: [
            { type: 'text', value: 'Every HTML file you ever create must start with the same basic structure. Think of it as the skeleton of your page — without it, the browser may not display your content correctly.' },
            { type: 'heading', value: 'The Full Skeleton' },
            { type: 'code', value: '<!DOCTYPE html>\n<html lang="en">\n<head>\n    <meta charset="UTF-8">\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    <title>My First Website</title>\n</head>\n<body>\n    <h1>Hello World!</h1>\n    <p>This is my first web page.</p>\n</body>\n</html>' },
            { type: 'heading', value: '<!DOCTYPE html>' },
            { type: 'text', value: 'This must be the very first line of every HTML file. It tells the browser: "This is a modern HTML5 document." Without it, the browser may enter quirks mode and display things incorrectly.' },
            { type: 'heading', value: '<html lang="en">' },
            { type: 'text', value: 'The html element wraps your entire page. Everything goes inside it. The lang="en" attribute tells the browser (and screen readers) that this page is written in English. For Amharic you would use lang="am".' },
            { type: 'heading', value: '<head>' },
            { type: 'text', value: 'The head is the brain section. Users never see what is inside head on the actual page. It holds settings and metadata about the page.' },
            { type: 'code', value: '<head>\n    <!-- Character set: UTF-8 handles English, Amharic, emojis, etc. -->\n    <meta charset="UTF-8">\n    \n    <!-- Makes the page display correctly on mobile phones -->\n    <meta name="viewport" content="width=device-width, initial-scale=1.0">\n    \n    <!-- The title shown in the browser tab -->\n    <title>Trace Code — Learn HTML</title>\n    \n    <!-- Link to your CSS file -->\n    <link rel="stylesheet" href="style.css">\n</head>' },
            { type: 'heading', value: '<body>' },
            { type: 'text', value: 'The body is what the user actually sees on screen. Every heading, paragraph, image, link, form, and button goes inside the body.' },
            { type: 'code', value: '<body>\n    <h1>Welcome to Trace Code</h1>\n    <p>Learn to code offline, at your own pace.</p>\n    <img src="logo.png" alt="Trace Code logo">\n</body>' },
            { type: 'heading', value: 'Indentation' },
            { type: 'text', value: 'Notice how elements inside other elements are indented (pushed to the right with spaces). This is not required by the browser, but it makes your code much easier to read and debug. Always indent nested elements.' }
          ],
          quiz: [
            { question: 'What must be the very first line of every HTML file?', options: ['<html>', '<head>', '<!DOCTYPE html>', '<body>'], correct: 2, explanation: '<!DOCTYPE html> must be the first line. It tells the browser this is an HTML5 document and prevents quirks mode.' },
            { question: 'What goes inside the &lt;head&gt; element?', options: ['Paragraphs and images', 'Everything the user sees', 'Page settings and metadata', 'Navigation links'], correct: 2, explanation: 'The head contains metadata like charset, viewport settings, page title, and CSS links. Users do not see this content directly.' },
            { question: 'What goes inside the &lt;body&gt; element?', options: ['CSS styles', 'Page settings', 'Everything visible on screen', 'JavaScript files only'], correct: 2, explanation: 'Everything the user sees on screen goes inside the body — headings, paragraphs, images, links, forms, and more.' },
            { question: 'What does the lang attribute on &lt;html&gt; do?', options: ['Changes the font', 'Sets the page language', 'Translates the page', 'Links to a language file'], correct: 1, explanation: 'lang="en" tells browsers and screen readers the language of the page. For Amharic it would be lang="am".' },
            { question: 'Why do we indent nested HTML elements?', options: ['The browser requires it', 'It makes the page load faster', 'It makes code easier to read', 'It adds spacing on screen'], correct: 2, explanation: 'Indentation is for humans, not browsers. It makes nested elements easy to see and debug. The browser ignores extra whitespace.' }
          ]
        },
        {
          id: 'html-beg-04',
          title: 'Headings',
          summary: 'Organize content with six levels of headings',
          content: [
            { type: 'text', value: 'Headings are titles. They help users scan a page quickly and understand what each section is about. Search engines like Google also use headings to understand your content.' },
            { type: 'heading', value: 'Six Heading Levels' },
            { type: 'text', value: 'HTML gives you six heading elements, from h1 (the biggest and most important) to h6 (the smallest and least important).' },
            { type: 'code', value: '<h1>Main Page Title</h1>\n<h2>Major Section</h2>\n<h3>Sub-section</h3>\n<h4>Smaller heading</h4>\n<h5>Even smaller</h5>\n<h6>Smallest heading</h6>' },
            { type: 'heading', value: 'The h1 Rule' },
            { type: 'text', value: 'Every page should have exactly one h1 element. It describes the main topic of the page — like the title of a book. Think of it like this:\n• h1 = Book title\n• h2 = Chapter names\n• h3 = Sections within chapters\n• h4–h6 = Sub-sections' },
            { type: 'heading', value: 'Real World Example' },
            { type: 'code', value: '<h1>Trace Code — Learn to Code</h1>\n\n<h2>HTML Course</h2>\n<h3>Beginner Level</h3>\n<h3>Intermediate Level</h3>\n\n<h2>Python Course</h2>\n<h3>Beginner Level</h3>' },
            { type: 'heading', value: 'Headings Are Not Just About Size' },
            { type: 'text', value: 'Do not choose a heading level based on how big you want the text to look. Choose it based on the importance and hierarchy of the content. Use CSS to change the size if needed.' },
            { type: 'text', value: 'Screen readers (used by visually impaired people) navigate pages by jumping between headings. If your heading structure is wrong, the page becomes hard to navigate.' }
          ],
          quiz: [
            { question: 'How many h1 elements should a page have?', options: ['As many as needed', 'Only one', 'At least two', 'None'], correct: 1, explanation: 'Each page should have exactly one h1 that describes its main topic. Multiple h1 tags confuse search engines and screen readers.' },
            { question: 'Which heading is the most important?', options: ['h6', 'h3', 'h1', 'h2'], correct: 2, explanation: 'h1 is the most important heading. It should describe the main topic of the page and appear only once.' },
            { question: 'How many heading levels does HTML have?', options: ['3', '4', '5', '6'], correct: 3, explanation: 'HTML has six heading levels: h1 through h6. h1 is the largest and most important, h6 is the smallest.' },
            { question: 'Should you choose a heading level based on how big you want the text?', options: ['Yes always', 'No — choose based on content hierarchy', 'Only for h1', 'Yes if no CSS is used'], correct: 1, explanation: 'Choose heading levels based on content importance and structure, not size. Use CSS to control the visual size.' },
            { question: 'Why do screen readers care about heading structure?', options: ['They display headings in large text', 'They use headings to navigate the page', 'They ignore headings', 'They read headings twice'], correct: 1, explanation: 'Screen readers let visually impaired users jump between headings to navigate a page. Wrong heading structure makes this impossible.' }
          ]
        },
        {
          id: 'html-beg-05',
          title: 'Paragraphs & Line Breaks',
          summary: 'Control how text flows on your page',
          content: [
            { type: 'text', value: 'Text is the most common content on the web. HTML gives you several elements to control how text is organized and displayed.' },
            { type: 'heading', value: 'Paragraphs — <p>' },
            { type: 'text', value: 'The p element wraps a block of text into a paragraph. The browser automatically adds space above and below each paragraph, separating them visually.' },
            { type: 'code', value: '<p>This is the first paragraph. It can be as long as you need it to be.</p>\n<p>This is the second paragraph. The browser puts space between them automatically.</p>' },
            { type: 'heading', value: 'Line Breaks — <br>' },
            { type: 'text', value: '<br> forces the text to drop to the next line immediately — without starting a whole new paragraph. It is a void element with no closing tag.' },
            { type: 'code', value: '<p>Line one of this paragraph.<br>\nLine two is right below it.<br>\nLine three continues here.</p>' },
            { type: 'text', value: 'Important: Do not use multiple <br> tags to create space between sections. Use separate <p> tags or CSS margin instead. <br> is only for line breaks within a paragraph — like a poem or an address.' },
            { type: 'heading', value: 'Horizontal Rule — <hr>' },
            { type: 'text', value: '<hr> draws a horizontal line across the page. It is used to visually separate sections of content. Like <br>, it is a void element.' },
            { type: 'code', value: '<p>Section one content here.</p>\n<hr>\n<p>Section two content here.</p>' },
            { type: 'heading', value: 'What Browsers Ignore' },
            { type: 'text', value: 'Browsers collapse multiple spaces and line breaks in your code into a single space. This means you can format your HTML code however you like for readability — it will not affect the output.' },
            { type: 'code', value: '<!-- This code... -->\n<p>Hello     World</p>\n\n<!-- ...displays as this on screen -->\nHello World' }
          ],
          quiz: [
            { question: 'What does the &lt;p&gt; element do?', options: ['Creates a heading', 'Wraps text in a paragraph with spacing', 'Makes text bold', 'Creates a line break'], correct: 1, explanation: '<p> wraps text into a paragraph. The browser adds space above and below each paragraph automatically.' },
            { question: 'What does &lt;br&gt; do?', options: ['Creates a new paragraph', 'Draws a horizontal line', 'Forces a line break within text', 'Makes text italic'], correct: 2, explanation: '<br> forces the text to continue on the next line without starting a new paragraph. It has no closing tag.' },
            { question: 'What does &lt;hr&gt; display on screen?', options: ['A heading', 'A horizontal line', 'A hyperlink', 'A hard space'], correct: 1, explanation: '<hr> draws a horizontal rule — a line across the page — used to separate content sections visually.' },
            { question: 'What happens if you put many spaces in your HTML code?', options: ['They all appear on screen', 'The browser shows an error', 'The browser collapses them into one space', 'The page breaks'], correct: 2, explanation: 'Browsers ignore extra whitespace in HTML code. Multiple spaces, tabs, and line breaks in your code all become a single space on screen.' },
            { question: 'When should you use &lt;br&gt;?', options: ['To separate major sections', 'To add space between paragraphs', 'For line breaks inside a paragraph like a poem or address', 'To create columns'], correct: 2, explanation: '<br> is for line breaks within a paragraph — like in a poem, address, or lyrics. Use separate <p> elements or CSS for spacing between sections.' }
          ]
        },
        {
          id: 'html-beg-06',
          title: 'Text Formatting',
          summary: 'Make text bold, italic, and styled',
          content: [
            { type: 'text', value: 'HTML gives you elements to add meaning and style to your text. The most important are strong, em, and code.' },
            { type: 'heading', value: 'Bold Text — <strong>' },
            { type: 'text', value: '<strong> makes text bold and marks it as important. Use it when the content is genuinely important — not just for visual decoration.' },
            { type: 'code', value: '<p>Please <strong>do not</strong> share your password with anyone.</p>' },
            { type: 'heading', value: 'Italic Text — <em>' },
            { type: 'text', value: '<em> makes text italic and adds emphasis. Screen readers change their tone when reading em text, which helps convey meaning to visually impaired users.' },
            { type: 'code', value: '<p>The word <em>semantics</em> means meaning in language.</p>' },
            { type: 'heading', value: 'Code Text — <code>' },
            { type: 'text', value: '<code> displays text in a monospace font, making it look like computer code. Use it when writing about code inline within a paragraph.' },
            { type: 'code', value: '<p>Use the <code>console.log()</code> function to print values in JavaScript.</p>' },
            { type: 'heading', value: 'Other Formatting Elements' },
            { type: 'code', value: '<p><mark>Highlighted text</mark></p>\n<p><del>Deleted text</del></p>\n<p><ins>Inserted text</ins></p>\n<p>H<sub>2</sub>O is water</p>\n<p>E = mc<sup>2</sup></p>\n<p><small>Fine print text</small></p>' },
            { type: 'heading', value: 'Semantic vs Visual' },
            { type: 'text', value: 'Notice we use <strong> (meaning: important) not <b> (meaning: bold). We use <em> (meaning: emphasis) not <i> (meaning: italic). The semantic versions carry meaning that helps browsers, search engines, and screen readers understand your content.' },
            { type: 'code', value: '<!-- Semantic — carries meaning -->\n<strong>Important!</strong>\n<em>Emphasized word</em>\n\n<!-- Visual only — no meaning -->\n<b>Just bold</b>\n<i>Just italic</i>' }
          ],
          quiz: [
            { question: 'What does &lt;strong&gt; do?', options: ['Underlines text', 'Makes text bold and marks it as important', 'Makes text italic', 'Changes text color'], correct: 1, explanation: '<strong> makes text bold AND tells browsers/screen readers the text is important. It carries semantic meaning.' },
            { question: 'What does &lt;em&gt; do?', options: ['Erases text', 'Makes text bold', 'Makes text italic with emphasis', 'Makes text larger'], correct: 2, explanation: '<em> italicizes text and adds emphasis. Screen readers change their tone when reading emphasized text.' },
            { question: 'Which element displays text in a code-style font?', options: ['<pre>', '<kbd>', '<code>', '<mono>'], correct: 2, explanation: '<code> displays text in a monospace font, making it look like code. Use it inline within paragraphs when mentioning code.' },
            { question: 'Why is &lt;strong&gt; better than &lt;b&gt;?', options: ['<strong> is newer', '<strong> is smaller', '<strong> carries semantic meaning — it means important', '<b> does not work in modern browsers'], correct: 2, explanation: '<strong> tells browsers and screen readers the text is important — it has meaning. <b> just changes visual appearance with no meaning.' },
            { question: 'Which element would you use to show "H₂O"?', options: ['<sub>', '<sup>', '<small>', '<code>'], correct: 0, explanation: '<sub> creates subscript text (below the baseline) — perfect for chemical formulas like H₂O. <sup> creates superscript (above the baseline) like in E=mc².' }
          ]
        },
        {
          id: 'html-beg-07',
          title: 'Unordered Lists',
          summary: 'Group items with bullet points',
          content: [
            { type: 'text', value: 'When you have a group of items that do not need to be in a specific order, you use an unordered list. These display as bullet points.' },
            { type: 'heading', value: 'Basic Unordered List' },
            { type: 'code', value: '<ul>\n  <li>HTML</li>\n  <li>CSS</li>\n  <li>JavaScript</li>\n  <li>Python</li>\n</ul>' },
            { type: 'text', value: 'Two elements work together:\n• <ul> (unordered list) — the container that wraps the whole list\n• <li> (list item) — each individual item in the list' },
            { type: 'heading', value: 'Nested Lists' },
            { type: 'text', value: 'You can put a list inside a list item to create a nested list. This is useful for subcategories.' },
            { type: 'code', value: '<ul>\n  <li>Frontend Development\n    <ul>\n      <li>HTML</li>\n      <li>CSS</li>\n      <li>JavaScript</li>\n    </ul>\n  </li>\n  <li>Backend Development\n    <ul>\n      <li>Python</li>\n      <li>Node.js</li>\n    </ul>\n  </li>\n</ul>' },
            { type: 'heading', value: 'Real World Uses' },
            { type: 'text', value: 'Unordered lists are everywhere on the web:\n• Navigation menus\n• Feature lists\n• Ingredient lists\n• Tags and categories\n• Any group of items where order does not matter' },
            { type: 'code', value: '<!-- Navigation menu -->\n<nav>\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li><a href="/about">About</a></li>\n    <li><a href="/contact">Contact</a></li>\n  </ul>\n</nav>' },
            { type: 'heading', value: 'Styling Lists' },
            { type: 'text', value: 'By default, unordered lists show bullet points. With CSS you can change the bullet style or remove it entirely — which is how most navigation menus are built.' }
          ],
          quiz: [
            { question: 'Which element creates an unordered list?', options: ['<ol>', '<list>', '<ul>', '<li>'], correct: 2, explanation: '<ul> creates an unordered list (bullet points). <ol> creates an ordered list (numbers). <li> is the list item used inside both.' },
            { question: 'What does &lt;li&gt; stand for?', options: ['Line Item', 'List Item', 'Link Icon', 'Layout Item'], correct: 1, explanation: '<li> stands for List Item. It is used inside both <ul> and <ol> to define each item in the list.' },
            { question: 'What appears next to each item in an unordered list by default?', options: ['Numbers', 'Letters', 'Bullet points', 'Dashes'], correct: 2, explanation: 'By default, unordered lists show bullet points (•) next to each list item. CSS can change or remove them.' },
            { question: 'Can you put a list inside another list?', options: ['No', 'Yes — inside a <li> element', 'Yes — but only two levels deep', 'Only with JavaScript'], correct: 1, explanation: 'You can nest lists by placing a <ul> or <ol> inside a <li> element. This creates indented sub-lists.' },
            { question: 'Which is the correct structure for an unordered list?', options: ['<li><ul><li>Item</li></ul></li>', '<ul><p>Item</p></ul>', '<ul><li>Item</li></ul>', '<list><item>Item</item></list>'], correct: 2, explanation: 'The correct structure is <ul> as the container with <li> elements inside it for each item.' }
          ]
        },
        {
          id: 'html-beg-08',
          title: 'Ordered Lists',
          summary: 'Create numbered lists for sequential content',
          content: [
            { type: 'text', value: 'When the order of items matters — like steps in a recipe or instructions — you use an ordered list. The browser numbers them automatically.' },
            { type: 'heading', value: 'Basic Ordered List' },
            { type: 'code', value: '<ol>\n  <li>Open VS Code</li>\n  <li>Create a new file called index.html</li>\n  <li>Type the HTML skeleton</li>\n  <li>Save the file</li>\n  <li>Open with Live Server</li>\n</ol>' },
            { type: 'text', value: 'The browser automatically adds the numbers 1, 2, 3... You do not write the numbers yourself. If you add or remove an item, the numbering updates automatically.' },
            { type: 'heading', value: 'Changing the Number Type' },
            { type: 'code', value: '<!-- Uppercase letters: A, B, C -->\n<ol type="A">\n  <li>First</li>\n  <li>Second</li>\n</ol>\n\n<!-- Lowercase letters: a, b, c -->\n<ol type="a">\n  <li>First</li>\n  <li>Second</li>\n</ol>\n\n<!-- Roman numerals: I, II, III -->\n<ol type="I">\n  <li>First</li>\n  <li>Second</li>\n</ol>' },
            { type: 'heading', value: 'Starting From a Different Number' },
            { type: 'code', value: '<!-- Start counting from 5 -->\n<ol start="5">\n  <li>Step five</li>\n  <li>Step six</li>\n  <li>Step seven</li>\n</ol>' },
            { type: 'heading', value: 'When to Use Ordered vs Unordered' },
            { type: 'text', value: 'Use <ol> when order matters:\n• Step-by-step instructions\n• Rankings (1st, 2nd, 3rd)\n• Legal or numbered references\n\nUse <ul> when order does not matter:\n• Lists of features\n• Navigation items\n• Ingredients (unless a recipe with specific steps)' }
          ],
          quiz: [
            { question: 'Which element creates a numbered list?', options: ['<ul>', '<nl>', '<ol>', '<li>'], correct: 2, explanation: '<ol> stands for Ordered List and creates a numbered list. The browser adds numbers automatically.' },
            { question: 'Do you need to write the numbers yourself in an ordered list?', options: ['Yes, always', 'Only for the first item', 'No, the browser adds them automatically', 'Only if you use type="1"'], correct: 2, explanation: 'The browser automatically numbers <li> items inside an <ol>. You just write the content.' },
            { question: 'Which attribute makes an ordered list start from number 5?', options: ['begin="5"', 'start="5"', 'from="5"', 'first="5"'], correct: 1, explanation: 'The start attribute on <ol> sets the starting number. <ol start="5"> begins counting from 5.' },
            { question: 'When should you use an ordered list?', options: ['When you have bullet points', 'When order does not matter', 'When the sequence of items matters', 'When you have more than 10 items'], correct: 2, explanation: 'Use <ol> when the order is important — like steps in instructions, rankings, or any numbered sequence.' },
            { question: 'Which type attribute shows Roman numerals?', options: ['type="r"', 'type="roman"', 'type="R"', 'type="I"'], correct: 3, explanation: 'type="I" shows uppercase Roman numerals (I, II, III...). type="i" shows lowercase Roman numerals (i, ii, iii...).' }
          ]
        },
        {
          id: 'html-beg-09',
          title: 'Links',
          summary: 'Connect pages together with anchor tags',
          content: [
            { type: 'text', value: 'Links are what make the web a web. Without links, every page would be an island. The anchor element <a> creates clickable links that take users to other pages, files, or locations.' },
            { type: 'heading', value: 'Basic Link' },
            { type: 'code', value: '<a href="https://www.google.com">Go to Google</a>' },
            { type: 'text', value: 'Breaking this down:\n• <a> is the anchor element\n• href="https://www.google.com" is where the link goes\n• "Go to Google" is the clickable text the user sees\n• href stands for Hypertext Reference' },
            { type: 'heading', value: 'Linking to Other Pages on Your Site' },
            { type: 'code', value: '<!-- Relative links (pages on your own site) -->\n<a href="about.html">About Us</a>\n<a href="contact.html">Contact</a>\n<a href="courses/html.html">HTML Course</a>' },
            { type: 'heading', value: 'Opening in a New Tab' },
            { type: 'code', value: '<a href="https://google.com" target="_blank">Open Google in new tab</a>' },
            { type: 'text', value: 'target="_blank" makes the link open in a new browser tab. Use it for external links so users do not leave your site.' },
            { type: 'heading', value: 'Email and Phone Links' },
            { type: 'code', value: '<!-- Email link - opens email app -->\n<a href="mailto:hello@tracecode.app">Send us an email</a>\n\n<!-- Phone link - works on mobile -->\n<a href="tel:+251911234567">Call us</a>' },
            { type: 'heading', value: 'Jump Links (Anchor Links)' },
            { type: 'code', value: '<!-- The link -->\n<a href="#section2">Jump to Section 2</a>\n\n<!-- The target -->\n<h2 id="section2">Section 2</h2>' },
            { type: 'text', value: 'Jump links use the # symbol followed by an id. When clicked, the page scrolls to the element with that id. This is used for table of contents and long pages.' }
          ],
          quiz: [
            { question: 'What does href stand for?', options: ['Hypertext Reference', 'Hyperlink Resource', 'HTML Reference Element', 'Home Reference'], correct: 0, explanation: 'href stands for Hypertext Reference. It contains the URL or path the link points to.' },
            { question: 'What does target="_blank" do?', options: ['Opens in same tab', 'Opens in a new tab', 'Downloads the file', 'Opens a popup'], correct: 1, explanation: 'target="_blank" makes the link open in a new browser tab or window instead of replacing the current page.' },
            { question: 'How do you create a link to an email address?', options: ['href="email:..."', 'href="mail:..."', 'href="mailto:..."', 'href="send:..."'], correct: 2, explanation: 'Use href="mailto:address@example.com" to create a link that opens the user\'s email app with that address pre-filled.' },
            { question: 'What is a relative link?', options: ['A link with http://', 'A link to a page on the same site using a file path', 'A link that changes based on location', 'A link to a database'], correct: 1, explanation: 'A relative link uses a file path like "about.html" without http://. It links to pages on the same website.' },
            { question: 'What does &lt;a href="#contact"&gt;Contact&lt;/a&gt; do?', options: ['Links to contact.html', 'Opens an email', 'Jumps to an element with id="contact" on the same page', 'Creates a phone link'], correct: 2, explanation: 'Links starting with # are anchor links. They scroll the page to the element with the matching id attribute.' }
          ]
        },
        {
          id: 'html-beg-10',
          title: 'Images',
          summary: 'Add and configure images on your page',
          content: [
            { type: 'text', value: 'Images make the web visual. The <img> element displays images on your page. It is a void element — it has no closing tag and no content.' },
            { type: 'heading', value: 'Basic Image' },
            { type: 'code', value: '<img src="puppy.jpg" alt="A cute golden retriever puppy sitting in the grass">' },
            { type: 'text', value: 'Two attributes are required:\n• src — the source: where the image file is\n• alt — alternative text: a description of the image' },
            { type: 'heading', value: 'The src Attribute' },
            { type: 'code', value: '<!-- Image in the same folder -->\n<img src="photo.jpg" alt="A photo">\n\n<!-- Image in a subfolder -->\n<img src="images/banner.jpg" alt="Site banner">\n\n<!-- Image from the internet -->\n<img src="https://example.com/logo.png" alt="Company logo">' },
            { type: 'heading', value: 'The alt Attribute' },
            { type: 'text', value: 'The alt attribute is critical for three reasons:\n1. If the image fails to load, the alt text is shown instead\n2. Screen readers read the alt text to visually impaired users\n3. Search engines use alt text to understand what the image shows\n\nAlways write descriptive alt text. Bad: alt="image". Good: alt="Student studying HTML on a laptop"' },
            { type: 'heading', value: 'Setting Image Size' },
            { type: 'code', value: '<!-- Size in HTML (not recommended for layout) -->\n<img src="photo.jpg" alt="Photo" width="400" height="300">\n\n<!-- Better: size with CSS -->\n<img src="photo.jpg" alt="Photo" style="width: 400px; height: 300px;">' },
            { type: 'heading', value: 'Image Formats' },
            { type: 'text', value: 'Choose the right format:\n• JPG/JPEG — photographs (smaller file size)\n• PNG — images with transparency\n• WebP — modern format, smaller than JPG and PNG\n• SVG — logos and icons (scales to any size without blurring)\n• GIF — simple animations' },
            { type: 'code', value: '<img src="logo.svg" alt="Company logo">\n<img src="hero.webp" alt="Hero banner">\n<img src="profile.jpg" alt="Profile photo">' }
          ],
          quiz: [
            { question: 'Which two attributes are required on an <img> element?', options: ['src and width', 'alt and title', 'src and alt', 'href and src'], correct: 2, explanation: 'src tells the browser where the image is, and alt provides a text description. Both are required for accessible, correct HTML.' },
            { question: 'What does the alt attribute do?', options: ['Sets image size', 'Provides a text description of the image', 'Changes image color', 'Links the image to another page'], correct: 1, explanation: 'alt provides alternative text shown when images fail to load, read by screen readers, and used by search engines.' },
            { question: 'What image format is best for photographs?', options: ['SVG', 'GIF', 'PNG', 'JPG'], correct: 3, explanation: 'JPG/JPEG is the best format for photographs because it compresses well and keeps file sizes small without visible quality loss.' },
            { question: 'What image format supports transparency?', options: ['JPG', 'GIF only', 'PNG and WebP', 'SVG only'], correct: 2, explanation: 'PNG and WebP both support transparent backgrounds. JPG does not support transparency — transparent areas become white.' },
            { question: 'Does &lt;img&gt; need a closing tag?', options: ['Yes, always', 'Only for large images', 'No — it is a void element', 'Only in HTML5'], correct: 2, explanation: '&lt;img&gt; is a void element. It has no closing tag and no content — just the opening tag with its attributes.' }
          ]
        }
      ],
      exam: [
        { question: 'What does HTML stand for?', options: ['HyperText Markup Language', 'High Tech Modern Language', 'HyperText Machine Learning', 'Home Tool Markup Language'], correct: 0 },
        { question: 'What is a closing tag?', options: ['A tag with no content', 'A tag with a forward slash like </p>', 'The last tag on a page', 'A void element'], correct: 1 },
        { question: 'What is a void element?', options: ['An empty paragraph', 'An element with no closing tag', 'An invisible element', 'A broken element'], correct: 1 },
        { question: 'Where do attributes go?', options: ['Closing tag', 'Between tags', 'Opening tag', 'After the element'], correct: 2 },
        { question: 'What must be the first line of every HTML file?', options: ['<html>', '<head>', '<!DOCTYPE html>', '<body>'], correct: 2 },
        { question: 'What goes inside the &lt;body&gt; element?', options: ['CSS styles', 'Page settings', 'Everything visible on screen', 'JavaScript only'], correct: 2 },
        { question: 'How many h1 elements should a page have?', options: ['As many as needed', 'Only one', 'At least two', 'None'], correct: 1 },
        { question: 'What does &lt;br&gt; do?', options: ['Creates a paragraph', 'Draws a line', 'Forces a line break', 'Makes text bold'], correct: 2 },
        { question: 'What does &lt;strong&gt; mean?', options: ['Just bold text', 'Important text', 'Underlined text', 'Large text'], correct: 1 },
        { question: 'Which element creates bullet points?', options: ['<ol>', '<bl>', '<ul>', '<li>'], correct: 2 },
        { question: 'Which element creates numbered lists?', options: ['<ul>', '<nl>', '<ol>', '<num>'], correct: 2 },
        { question: 'What does href stand for?', options: ['Hypertext Reference', 'Hyperlink Resource', 'HTML Reference', 'Home Reference'], correct: 0 },
        { question: 'What does target="_blank" do?', options: ['Opens in same tab', 'Opens in a new tab', 'Downloads the file', 'Opens a popup'], correct: 1 },
        { question: 'Which two attributes are required on &lt;img&gt;?', options: ['src and width', 'alt and title', 'src and alt', 'href and src'], correct: 2 },
        { question: 'What image format is best for photographs?', options: ['SVG', 'GIF', 'PNG', 'JPG'], correct: 3 },
        { question: 'What does &lt;em&gt; do?', options: ['Makes text bigger', 'Makes text italic with emphasis', 'Makes text bold', 'Deletes text'], correct: 1 },
        { question: 'What does lang="en" on &lt;html&gt; do?', options: ['Translates the page', 'Sets the page language', 'Changes the font', 'Links a dictionary'], correct: 1 },
        { question: 'What is the alt attribute for?', options: ['Image size', 'Image description', 'Image link', 'Image color'], correct: 1 },
        { question: 'How do you create a link to an email?', options: ['href="email:..."', 'href="mailto:..."', 'href="mail:..."', 'href="send:..."'], correct: 1 },
        { question: 'What does &lt;code&gt; display?', options: ['A code editor', 'Text in a monospace code style', 'A terminal window', 'Colored syntax'], correct: 1 }
      ]
    },
    intermediate: {
      lessons: [
        {
          id: 'html-int-01',
          title: 'Tables — Basics',
          summary: 'Display data in rows and columns',
          content: [
            { type: 'text', value: 'Tables organize data into rows and columns — like a spreadsheet. Use them for tabular data like price lists, schedules, and comparison charts. Never use tables for page layout.' },
            { type: 'heading', value: 'Table Structure' },
            { type: 'code', value: '<table>\n  <tr>\n    <th>Item</th>\n    <th>Price</th>\n    <th>Stock</th>\n  </tr>\n  <tr>\n    <td>Coffee</td>\n    <td>$3</td>\n    <td>50</td>\n  </tr>\n  <tr>\n    <td>Tea</td>\n    <td>$2</td>\n    <td>30</td>\n  </tr>\n</table>' },
            { type: 'text', value: 'Four elements work together:\n• <table> — the container for the whole table\n• <tr> (table row) — creates a horizontal row\n• <th> (table header) — bold header cells at the top\n• <td> (table data) — normal data cells' },
            { type: 'heading', value: 'Adding thead and tbody' },
            { type: 'code', value: '<table>\n  <thead>\n    <tr>\n      <th>Name</th>\n      <th>Score</th>\n    </tr>\n  </thead>\n  <tbody>\n    <tr>\n      <td>Kal</td>\n      <td>95</td>\n    </tr>\n    <tr>\n      <td>Sara</td>\n      <td>88</td>\n    </tr>\n  </tbody>\n</table>' },
            { type: 'text', value: '<thead> wraps the header row and <tbody> wraps the data rows. This separation helps browsers, screen readers, and CSS target specific parts of the table.' },
            { type: 'heading', value: 'Adding a Caption' },
            { type: 'code', value: '<table>\n  <caption>Student Exam Results — June 2026</caption>\n  <thead>...</thead>\n  <tbody>...</tbody>\n</table>' }
          ],
          quiz: [
            { question: 'Which element creates a table row?', options: ['<td>', '<th>', '<tr>', '<row>'], correct: 2, explanation: '<tr> stands for Table Row. It creates a horizontal row inside a table.' },
            { question: 'What is the difference between <th> and <td>?', options: ['<th> is for tables, <td> is for divs', '<th> is a header cell (bold), <td> is a data cell', '<th> is taller, <td> is wider', 'They are the same'], correct: 1, explanation: '<th> creates header cells that are bold and centered by default. <td> creates regular data cells.' },
            { question: 'What does &lt;thead&gt; contain?', options: ['The table title', 'The header row(s)', 'The footer row', 'The entire table'], correct: 1, explanation: '<thead> wraps the header rows of a table. It helps browsers, CSS, and screen readers identify the header section.' },
            { question: 'What is a &lt;caption&gt; in a table?', options: ['An image description', 'A table title displayed above or below it', 'A column header', 'A table footer'], correct: 1, explanation: '<caption> adds a title to the table. It appears above the table by default and helps users understand what the data shows.' },
            { question: 'Should you use tables for page layout?', options: ['Yes, always', 'Only for two-column layouts', 'No — use CSS for layout', 'Only if CSS is not available'], correct: 2, explanation: 'Tables should only be used for tabular data (data with rows and columns). Use CSS Flexbox or Grid for page layout.' }
          ]
        },
        {
          id: 'html-int-02',
          title: 'Tables — Advanced',
          summary: 'Merge cells and add accessibility',
          content: [
            { type: 'text', value: 'Once you know basic tables, you can merge cells to create complex layouts and add accessibility features for screen readers.' },
            { type: 'heading', value: 'Merging Columns — colspan' },
            { type: 'text', value: 'colspan makes one cell span across multiple columns.' },
            { type: 'code', value: '<table>\n  <tr>\n    <th colspan="3">Full Student Report</th>\n  </tr>\n  <tr>\n    <th>Name</th>\n    <th>Score</th>\n    <th>Grade</th>\n  </tr>\n  <tr>\n    <td>Kal</td>\n    <td>95</td>\n    <td>A</td>\n  </tr>\n</table>' },
            { type: 'heading', value: 'Merging Rows — rowspan' },
            { type: 'text', value: 'rowspan makes one cell span across multiple rows.' },
            { type: 'code', value: '<table>\n  <tr>\n    <td rowspan="2">Ethiopia</td>\n    <td>Addis Ababa</td>\n  </tr>\n  <tr>\n    <td>Dessie</td>\n  </tr>\n</table>' },
            { type: 'heading', value: 'Scope for Accessibility' },
            { type: 'code', value: '<table>\n  <tr>\n    <th scope="col">Name</th>\n    <th scope="col">Age</th>\n  </tr>\n  <tr>\n    <th scope="row">Kal</th>\n    <td>20</td>\n  </tr>\n</table>' },
            { type: 'text', value: 'scope="col" tells screen readers this header applies to its column. scope="row" means it applies to its row. This makes tables fully accessible.' }
          ],
          quiz: [
            { question: 'What does colspan="3" do?', options: ['Creates 3 rows', 'Makes a cell span 3 columns', 'Adds 3 borders', 'Merges 3 tables'], correct: 1, explanation: 'colspan merges a cell across multiple columns. colspan="3" makes one cell take up the space of 3 columns.' },
            { question: 'What does rowspan="2" do?', options: ['Creates 2 rows', 'Makes a cell span 2 rows', 'Adds 2 borders', 'Doubles the row height'], correct: 1, explanation: 'rowspan merges a cell across multiple rows. rowspan="2" makes one cell take up the space of 2 rows.' },
            { question: 'What does scope="col" tell screen readers?', options: ['The cell is a column header', 'The cell spans columns', 'The column is hidden', 'The column is sorted'], correct: 0, explanation: 'scope="col" on a <th> tells screen readers this header applies to all cells in its column.' },
            { question: 'When would you use colspan?', options: ['To merge rows', 'To create a title that spans multiple columns', 'To add more columns', 'To hide columns'], correct: 1, explanation: 'colspan is useful for titles or headers that should span multiple columns, like a section heading across a whole row.' },
            { question: 'What is the purpose of &lt;tfoot&gt;?', options: ['A table\'s footer row — like totals', 'The last column', 'A table border', 'A table caption'], correct: 0, explanation: '<tfoot> wraps footer rows at the bottom of a table — useful for totals, averages, or summary rows.' }
          ]
        },
        {
          id: 'html-int-03',
          title: 'Forms — Basics',
          summary: 'Collect information from users',
          content: [
            { type: 'text', value: 'Forms are how users interact with websites — login pages, search bars, contact forms, and checkout pages are all built with HTML forms.' },
            { type: 'heading', value: 'Basic Form Structure' },
            { type: 'code', value: '<form action="/submit" method="POST">\n  <label for="name">Your Name:</label>\n  <input type="text" id="name" name="name">\n\n  <label for="email">Email:</label>\n  <input type="email" id="email" name="email">\n\n  <button type="submit">Submit</button>\n</form>' },
            { type: 'heading', value: 'The form Element' },
            { type: 'text', value: '• action — where the form data is sent (a URL or server endpoint)\n• method="POST" — sends data securely in the request body\n• method="GET" — adds data to the URL (use for searches)' },
            { type: 'heading', value: 'Labels' },
            { type: 'text', value: 'Labels are critical for accessibility. The for attribute must match the id of the input it describes. When a user clicks the label, the input gets focused.' },
            { type: 'code', value: '<!-- Correct: for matches id -->\n<label for="username">Username:</label>\n<input type="text" id="username" name="username">\n\n<!-- Alternative: wrap input inside label -->\n<label>\n  Email Address:\n  <input type="email" name="email">\n</label>' },
            { type: 'heading', value: 'The name Attribute' },
            { type: 'text', value: 'The name attribute on inputs is how the server knows which data is which. Without it, the input will not be submitted with the form.' },
            { type: 'code', value: '<input type="text" name="city" id="city">' }
          ],
          quiz: [
            { question: 'What does the action attribute on a &lt;form&gt; do?', options: ['Styles the form', 'Defines where the form data is sent', 'Validates the inputs', 'Creates input fields'], correct: 1, explanation: 'The action attribute specifies the URL where the form data is sent when submitted.' },
            { question: 'What is the difference between method="GET" and method="POST"?', options: ['GET is faster', 'POST adds data to URL, GET sends it securely', 'GET adds data to URL, POST sends it in the request body', 'They are the same'], correct: 2, explanation: 'GET appends data to the URL (visible, good for searches). POST sends data in the request body (secure, good for passwords).' },
            { question: 'Why are &lt;label&gt; elements important?', options: ['They style the inputs', 'They make inputs bigger', 'They describe inputs for users and screen readers', 'They validate input data'], correct: 2, explanation: 'Labels tell users what to enter in each field. The for attribute links a label to its input, improving accessibility.' },
            { question: 'What must match between a &lt;label&gt; and its &lt;input&gt;?', options: ['The name attribute', 'The class attribute', 'The for and id attributes', 'The type attribute'], correct: 2, explanation: 'The for attribute on &lt;label&gt; must match the id attribute on the &lt;input&gt;. This links them for click behavior and screen readers.' },
            { question: 'Why does an input need a name attribute?', options: ['For styling', 'So it appears on screen', 'So the server knows which data is which', 'For validation'], correct: 2, explanation: 'The name attribute identifies the data when submitted to the server. Without it, the input\'s value is not sent with the form.' }
          ]
        },
        {
          id: 'html-int-04',
          title: 'Input Types',
          summary: 'All the ways users can enter data',
          content: [
            { type: 'text', value: 'HTML5 introduced many specialized input types that handle formatting and basic validation automatically — no JavaScript needed.' },
            { type: 'heading', value: 'Text Inputs' },
            { type: 'code', value: '<input type="text">      <!-- single-line text -->\n<input type="email">     <!-- validates email format -->\n<input type="password">  <!-- hides characters -->\n<input type="number">    <!-- numbers only -->\n<input type="tel">       <!-- phone number -->\n<input type="url">       <!-- validates URL format -->\n<input type="search">    <!-- search field with X button -->' },
            { type: 'heading', value: 'Date and Time' },
            { type: 'code', value: '<input type="date">          <!-- date picker -->\n<input type="time">          <!-- time picker -->\n<input type="datetime-local"> <!-- date and time together -->\n<input type="month">         <!-- month picker -->' },
            { type: 'heading', value: 'Other Inputs' },
            { type: 'code', value: '<input type="color">              <!-- color picker -->\n<input type="range" min="0" max="100">  <!-- slider -->\n<input type="file">               <!-- file upload -->\n<input type="hidden" value="123"> <!-- invisible data -->' },
            { type: 'heading', value: 'Useful Attributes on Inputs' },
            { type: 'code', value: '<input type="text" placeholder="Enter your name">\n<input type="text" value="Default text">\n<input type="number" min="1" max="100" step="5">\n<input type="text" maxlength="50">' }
          ],
          quiz: [
            { question: 'Which input type automatically validates an email address format?', options: ['type="mail"', 'type="email"', 'type="text"', 'type="address"'], correct: 1, explanation: 'type="email" validates that the input contains a valid email format before the form can be submitted.' },
            { question: 'Which input type hides characters as you type?', options: ['type="hidden"', 'type="secret"', 'type="password"', 'type="private"'], correct: 2, explanation: 'type="password" replaces each character with a dot or asterisk, hiding what the user types.' },
            { question: 'What does placeholder do on an input?', options: ['Sets the default value', 'Shows hint text that disappears when typing', 'Validates the input', 'Makes the input required'], correct: 1, explanation: 'placeholder shows hint text inside the input field. It disappears as soon as the user starts typing.' },
            { question: 'Which input type shows a slider?', options: ['type="slider"', 'type="scroll"', 'type="range"', 'type="scale"'], correct: 2, explanation: 'type="range" creates a slider control. Use min, max, and step attributes to configure it.' },
            { question: 'What does type="hidden" do?', options: ['Makes the input invisible but submits its value', 'Deletes the input', 'Encrypts the input', 'Skips the input during submission'], correct: 0, explanation: 'type="hidden" creates an invisible input field. It does not appear on screen but its value is submitted with the form — useful for passing data like IDs.' }
          ]
        },
        {
          id: 'html-int-05',
          title: 'Labels & Accessibility',
          summary: 'Make forms usable for everyone',
          content: [
            { type: 'text', value: 'Accessible forms work for all users — including those using screen readers, keyboard navigation, or assistive technology. Good form accessibility also improves usability for everyone.' },
            { type: 'heading', value: 'Fieldset and Legend' },
            { type: 'code', value: '<form>\n  <fieldset>\n    <legend>Personal Information</legend>\n    <label for="fname">First Name:</label>\n    <input type="text" id="fname" name="fname">\n    \n    <label for="lname">Last Name:</label>\n    <input type="text" id="lname" name="lname">\n  </fieldset>\n\n  <fieldset>\n    <legend>Account Details</legend>\n    <label for="email">Email:</label>\n    <input type="email" id="email" name="email">\n  </fieldset>\n</form>' },
            { type: 'text', value: '<fieldset> groups related inputs with a visual border. <legend> provides a title for the group. Screen readers announce the legend when entering the fieldset.' },
            { type: 'heading', value: 'Required Fields' },
            { type: 'code', value: '<label for="email">Email: <span aria-hidden="true">*</span></label>\n<input type="email" id="email" name="email" required\n       aria-required="true">' },
            { type: 'heading', value: 'Error Messages' },
            { type: 'code', value: '<label for="username">Username:</label>\n<input type="text" id="username" aria-describedby="username-error">\n<span id="username-error" role="alert">Username must be at least 3 characters</span>' },
            { type: 'text', value: 'aria-describedby links the input to its error message. role="alert" makes screen readers announce the error immediately.' }
          ],
          quiz: [
            { question: 'What does &lt;fieldset&gt; do?', options: ['Creates a form', 'Groups related form inputs', 'Validates inputs', 'Styles the form'], correct: 1, explanation: '&lt;fieldset&gt; groups related inputs together with a visual border. It helps organize complex forms.' },
            { question: 'What does &lt;legend&gt; provide?', options: ['A form title', 'A title for a fieldset group', 'A list of fields', 'An error message'], correct: 1, explanation: '&lt;legend&gt; is the title for a &lt;fieldset&gt; group. Screen readers announce it when users navigate into the group.' },
            { question: 'What does the required attribute do?', options: ['Makes the input bold', 'Prevents form submission if the field is empty', 'Adds a red border', 'Marks the field as optional'], correct: 1, explanation: 'required prevents the form from being submitted if the field is empty. The browser shows an error message automatically.' },
            { question: 'What does aria-describedby do?', options: ['Hides an element', 'Links an input to its description or error message', 'Creates a tooltip', 'Adds a label'], correct: 1, explanation: 'aria-describedby links an input to another element (like an error message) by its id. Screen readers read both the label and the description.' },
            { question: 'What does role="alert" do?', options: ['Styles the element red', 'Makes the browser beep', 'Makes screen readers announce the content immediately', 'Shows a popup'], correct: 2, explanation: 'role="alert" tells screen readers to immediately announce the content of that element — perfect for error messages that appear after user action.' }
          ]
        },
        {
          id: 'html-int-06',
          title: 'Checkboxes & Radio Buttons',
          summary: 'Let users choose from options',
          content: [
            { type: 'text', value: 'Checkboxes and radio buttons let users make selections. Checkboxes allow multiple selections; radio buttons allow only one.' },
            { type: 'heading', value: 'Checkboxes' },
            { type: 'code', value: '<p>What do you want to learn?</p>\n\n<input type="checkbox" id="html" name="courses" value="html">\n<label for="html">HTML</label>\n\n<input type="checkbox" id="css" name="courses" value="css">\n<label for="css">CSS</label>\n\n<input type="checkbox" id="js" name="courses" value="js" checked>\n<label for="js">JavaScript (pre-selected)</label>' },
            { type: 'text', value: 'Note: checkboxes with the same name are grouped but independent. checked makes one pre-selected.' },
            { type: 'heading', value: 'Radio Buttons' },
            { type: 'code', value: '<p>Choose your level:</p>\n\n<input type="radio" id="beg" name="level" value="beginner">\n<label for="beg">Beginner</label>\n\n<input type="radio" id="int" name="level" value="intermediate">\n<label for="int">Intermediate</label>\n\n<input type="radio" id="adv" name="level" value="advanced" checked>\n<label for="adv">Advanced</label>' },
            { type: 'text', value: 'Radio buttons in the same group must share the same name. Only one can be selected at a time. Selecting one automatically deselects the others.' },
            { type: 'heading', value: 'Select Dropdown' },
            { type: 'code', value: '<label for="country">Country:</label>\n<select id="country" name="country">\n  <option value="">-- Choose a country --</option>\n  <option value="et">Ethiopia</option>\n  <option value="ke">Kenya</option>\n  <option value="ug">Uganda</option>\n</select>' }
          ],
          quiz: [
            { question: 'What is the difference between checkboxes and radio buttons?', options: ['Checkboxes are circles, radio buttons are squares', 'Checkboxes allow multiple selections, radio buttons allow only one', 'Radio buttons are larger', 'They are the same'], correct: 1, explanation: 'Checkboxes allow users to select any number of options. Radio buttons only allow one selection — choosing one deselects others.' },
            { question: 'How do you group radio buttons so only one can be selected?', options: ['Give them the same id', 'Give them the same value', 'Give them the same name', 'Put them in a fieldset'], correct: 2, explanation: 'Radio buttons with the same name attribute form a group. Only one button in the group can be selected at a time.' },
            { question: 'What does the checked attribute do?', options: ['Validates the input', 'Makes the checkbox or radio button pre-selected', 'Disables the input', 'Makes it required'], correct: 1, explanation: 'The checked attribute makes a checkbox or radio button selected by default when the page loads.' },
            { question: 'Which element creates a dropdown menu?', options: ['<dropdown>', '<list>', '<select>', '<menu>'], correct: 2, explanation: '<select> creates a dropdown menu. Each <option> inside it is one choice in the dropdown.' },
            { question: 'What does the value attribute on a checkbox do?', options: ['Shows text next to the checkbox', 'Sets what data is sent when the checkbox is checked', 'Makes the checkbox larger', 'Sets the default state'], correct: 1, explanation: 'The value attribute sets what data is actually submitted with the form when the checkbox is checked. The label text is for display only.' }
          ]
        },
        {
          id: 'html-int-07',
          title: 'Video Element',
          summary: 'Embed videos natively in HTML5',
          content: [
            { type: 'text', value: 'HTML5 lets you embed video directly without plugins like Flash. The <video> element handles it natively.' },
            { type: 'heading', value: 'Basic Video' },
            { type: 'code', value: '<video controls width="640" height="360">\n  <source src="lesson.mp4" type="video/mp4">\n  <source src="lesson.webm" type="video/webm">\n  Your browser does not support the video element.\n</video>' },
            { type: 'text', value: 'Multiple <source> elements let you provide fallback formats. The browser uses the first format it supports. The text at the end is a fallback for very old browsers.' },
            { type: 'heading', value: 'Video Attributes' },
            { type: 'code', value: '<!-- Show play/pause/volume controls -->\n<video controls>\n\n<!-- Play automatically when page loads -->\n<video autoplay>\n\n<!-- Repeat forever -->\n<video loop>\n\n<!-- Start muted -->\n<video muted>\n\n<!-- Show a thumbnail before playing -->\n<video poster="thumbnail.jpg">\n\n<!-- Preload video data -->\n<video preload="auto">' },
            { type: 'heading', value: 'Combining Attributes' },
            { type: 'code', value: '<video\n  controls\n  autoplay\n  muted\n  loop\n  poster="thumbnail.jpg"\n  width="800">\n  <source src="intro.mp4" type="video/mp4">\n</video>' },
            { type: 'text', value: 'Note: browsers block autoplay with sound by default. Use autoplay with muted to allow automatic playback.' }
          ],
          quiz: [
            { question: 'What does the controls attribute do on a video?', options: ['Adds captions', 'Shows play, pause, and volume buttons', 'Loops the video', 'Sets the video size'], correct: 1, explanation: 'controls shows the browser\'s built-in video player interface with play, pause, volume, and fullscreen buttons.' },
            { question: 'Why provide multiple &lt;source&gt; elements?', options: ['To play multiple videos', 'To provide fallback formats for different browsers', 'To make the video faster', 'To add captions'], correct: 1, explanation: 'Different browsers support different video formats. Multiple sources let the browser pick the first format it can play.' },
            { question: 'What does the poster attribute do?', options: ['Adds a caption', 'Shows a thumbnail image before the video plays', 'Sets the video title', 'Adds a border'], correct: 1, explanation: 'poster shows a static image (thumbnail) while the video is not playing — like a cover image for the video.' },
            { question: 'Why should you use muted with autoplay?', options: ['To make it faster', 'Browsers block autoplay with sound by default', 'To save data', 'To improve quality'], correct: 1, explanation: 'Modern browsers block autoplaying videos with sound to prevent annoying user experiences. muted allows autoplay to work.' },
            { question: 'What is the fallback text inside &lt;video&gt; for?', options: ['It is the video caption', 'It shows in very old browsers that do not support video', 'It is the video title', 'It describes the video for SEO'], correct: 1, explanation: 'Text placed between &lt;video&gt; tags only shows in very old browsers that cannot handle the video element — it is a graceful fallback.' }
          ]
        },
        {
          id: 'html-int-08',
          title: 'Audio Element',
          summary: 'Add audio to your web pages',
          content: [
            { type: 'text', value: 'The <audio> element works like <video> but for sound files. You can add music, sound effects, or recorded lessons.' },
            { type: 'heading', value: 'Basic Audio' },
            { type: 'code', value: '<audio controls>\n  <source src="lesson.mp3" type="audio/mpeg">\n  <source src="lesson.ogg" type="audio/ogg">\n  Your browser does not support the audio element.\n</audio>' },
            { type: 'heading', value: 'Audio Attributes' },
            { type: 'code', value: '<!-- Show audio controls -->\n<audio controls>\n\n<!-- Play automatically (muted browsers may block) -->\n<audio autoplay>\n\n<!-- Repeat forever -->\n<audio loop>\n\n<!-- Start muted -->\n<audio muted>\n\n<!-- Preload options: none | metadata | auto -->\n<audio preload="metadata">' },
            { type: 'heading', value: 'Audio Formats' },
            { type: 'text', value: 'Different browsers support different audio formats:\n• MP3 — most widely supported\n• OGG — open format, good Firefox support\n• WAV — uncompressed, high quality but large files\n• AAC — good quality, supported by most modern browsers\n\nAlways provide MP3 as the primary source.' },
            { type: 'code', value: '<audio controls preload="metadata">\n  <source src="podcast.mp3" type="audio/mpeg">\n  <source src="podcast.ogg" type="audio/ogg">\n  <p>Your browser cannot play this audio. \n     <a href="podcast.mp3">Download it instead.</a>\n  </p>\n</audio>' }
          ],
          quiz: [
            { question: 'Which element adds audio to a web page?', options: ['<sound>', '<music>', '<audio>', '<mp3>'], correct: 2, explanation: '<audio> is the HTML5 element for embedding audio. It supports multiple source formats and built-in controls.' },
            { question: 'Which audio format has the widest browser support?', options: ['OGG', 'WAV', 'AAC', 'MP3'], correct: 3, explanation: 'MP3 has the widest browser support and good compression. It should be your primary audio format.' },
            { question: 'What does preload="metadata" do?', options: ['Loads the entire audio file', 'Loads nothing', 'Loads only the file\'s duration and basic info', 'Deletes the audio'], correct: 2, explanation: 'preload="metadata" loads just the audio\'s metadata (duration, format) without downloading the whole file — a good balance.' },
            { question: 'Can you use autoplay and loop together?', options: ['No', 'Yes', 'Only with JavaScript', 'Only with muted'], correct: 1, explanation: 'You can combine any audio attributes. autoplay + loop creates audio that starts and repeats automatically (though browsers may block unless muted).' },
            { question: 'What is a good fallback for the &lt;audio&gt; element?', options: ['A JavaScript alert', 'A download link inside the audio tags', 'An image', 'Nothing needed'], correct: 1, explanation: 'Place a download link between the &lt;audio&gt; tags as a fallback. Old browsers that cannot play audio will show the link instead.' }
          ]
        },
        {
          id: 'html-int-09',
          title: 'Responsive Images',
          summary: 'Serve the right image to the right device',
          content: [
            { type: 'text', value: 'Phones have small screens and slow connections. Showing a huge desktop image to a phone user wastes data and makes pages slow. HTML gives you tools to serve different images to different devices.' },
            { type: 'heading', value: 'The picture Element' },
            { type: 'code', value: '<picture>\n  <!-- Large screens: use the high-res version -->\n  <source media="(min-width: 1024px)" srcset="banner-large.jpg">\n  \n  <!-- Medium screens -->\n  <source media="(min-width: 600px)" srcset="banner-medium.jpg">\n  \n  <!-- Default: phones and fallback -->\n  <img src="banner-small.jpg" alt="Trace Code banner">\n</picture>' },
            { type: 'text', value: 'The browser checks each <source> from top to bottom and uses the first one that matches. The <img> at the end is both the fallback and required.' },
            { type: 'heading', value: 'srcset for Resolution' },
            { type: 'code', value: '<!-- Provide 1x and 2x versions for retina screens -->\n<img\n  src="logo.png"\n  srcset="logo.png 1x, logo@2x.png 2x"\n  alt="Trace Code logo">' },
            { type: 'heading', value: 'srcset with Sizes' },
            { type: 'code', value: '<img\n  srcset="small.jpg 400w, medium.jpg 800w, large.jpg 1200w"\n  sizes="(max-width: 600px) 400px, (max-width: 1000px) 800px, 1200px"\n  src="medium.jpg"\n  alt="Course hero image">' },
            { type: 'text', value: 'w after the number means the actual pixel width of that image file. The browser picks the best match based on the device screen and sizes hint.' }
          ],
          quiz: [
            { question: 'What is the purpose of the &lt;picture&gt; element?', options: ['To display multiple images at once', 'To serve different images based on screen size or format support', 'To create an image gallery', 'To animate images'], correct: 1, explanation: '&lt;picture&gt; lets you provide multiple image sources. The browser picks the best one based on screen size, resolution, or format support.' },
            { question: 'Why is responsive images important for mobile users?', options: ['Mobile screens are brighter', 'It saves data and loads faster on small screens', 'Mobile users prefer smaller images', 'It improves image quality'], correct: 1, explanation: 'Sending large desktop images to phones wastes data and slows page load. Responsive images send appropriately sized files.' },
            { question: 'What does the &lt;img&gt; inside &lt;picture&gt; serve as?', options: ['The main image for desktop', 'The fallback image for browsers that do not support picture', 'An alternative image', 'A placeholder'], correct: 1, explanation: 'The &lt;img&gt; tag inside &lt;picture&gt; is the required fallback. It also displays in browsers that do not support the &lt;picture&gt; element.' },
            { question: 'What does 2x mean in srcset="logo.png 1x, logo@2x.png 2x"?', options: ['The image is twice as fast', 'The image is for screens with double pixel density (retina)', 'The image is twice as large', 'The image loads second'], correct: 1, explanation: '2x targets retina/high-DPI screens that have twice the pixel density. The 2x image has twice the pixels but displays at the same size.' },
            { question: 'What does "w" mean after a number in srcset?', options: ['The image weight in KB', 'The actual pixel width of that image file', 'The width on screen', 'A width percentage'], correct: 1, explanation: '400w means this image file is 400 pixels wide. The browser uses this information with the sizes hint to pick the most efficient image.' }
          ]
        },
        {
          id: 'html-int-10',
          title: 'Form Validation',
          summary: 'Validate user input without JavaScript',
          content: [
            { type: 'text', value: 'HTML5 has built-in form validation that checks user input before the form is submitted — no JavaScript required.' },
            { type: 'heading', value: 'Required Fields' },
            { type: 'code', value: '<input type="text" name="username" required>' },
            { type: 'heading', value: 'Length Limits' },
            { type: 'code', value: '<!-- Minimum and maximum character count -->\n<input type="text" minlength="3" maxlength="20" name="username">\n\n<!-- Number range -->\n<input type="number" min="1" max="100" name="age">' },
            { type: 'heading', value: 'Pattern Matching' },
            { type: 'code', value: '<!-- Only letters, 3-10 characters -->\n<input type="text" pattern="[A-Za-z]{3,10}" name="username"\n       title="Only letters, 3 to 10 characters">\n\n<!-- Ethiopian phone number format -->\n<input type="tel" pattern="[0-9]{10}" name="phone"\n       title="Enter a 10-digit phone number">' },
            { type: 'heading', value: 'Custom Validation Messages' },
            { type: 'code', value: '<input type="email" name="email"\n       required\n       oninvalid="this.setCustomValidity(\'Please enter a valid email address\')"\n       oninput="this.setCustomValidity(\'\')">'},
            { type: 'heading', value: 'Disabling Validation' },
            { type: 'code', value: '<!-- Skip validation for this form -->\n<form novalidate>\n  <input type="email" name="email">\n  <button type="submit">Submit</button>\n</form>' }
          ],
          quiz: [
            { question: 'Which attribute prevents form submission if a field is empty?', options: ['mandatory', 'required', 'validate', 'notempty'], correct: 1, explanation: 'required prevents the form from submitting if the field is empty. The browser shows an error message automatically.' },
            { question: 'What does minlength="3" do on a text input?', options: ['Limits input to 3 characters', 'Requires at least 3 characters', 'Shows 3 rows', 'Sets 3 as the default'], correct: 1, explanation: 'minlength="3" requires the user to enter at least 3 characters before the form can submit.' },
            { question: 'What does the pattern attribute do?', options: ['Adds a background pattern', 'Validates input against a regular expression', 'Sets the input style', 'Creates a template'], correct: 1, explanation: 'pattern validates the input against a regular expression (regex). If the input does not match, the form will not submit.' },
            { question: 'What does novalidate on a &lt;form&gt; do?', options: ['Adds extra validation', 'Disables all HTML5 validation for that form', 'Validates only required fields', 'Enables JavaScript validation'], correct: 1, explanation: 'novalidate disables all built-in HTML5 validation for the form. Useful when you want to handle validation with JavaScript instead.' },
            { question: 'Which attribute sets the maximum number for a number input?', options: ['maximum', 'top', 'limit', 'max'], correct: 3, explanation: 'max sets the maximum allowed value for number, date, and range inputs. min sets the minimum.' }
          ]
        }
      ],
      exam: [
        { question: 'Which element creates a table row?', options: ['<td>', '<th>', '<tr>', '<row>'], correct: 2 },
        { question: 'What does colspan="2" do?', options: ['Creates 2 rows', 'Merges 2 columns into one cell', 'Adds 2 borders', 'Duplicates the cell'], correct: 1 },
        { question: 'What does the action attribute on a form do?', options: ['Styles the form', 'Sends form data to a URL', 'Validates inputs', 'Creates fields'], correct: 1 },
        { question: 'Which input type hides characters?', options: ['type="hidden"', 'type="secret"', 'type="password"', 'type="private"'], correct: 2 },
        { question: 'What does &lt;fieldset&gt; do?', options: ['Creates a form', 'Groups related inputs', 'Validates data', 'Styles inputs'], correct: 1 },
        { question: 'How do radio buttons ensure only one is selected?', options: ['Same id', 'Same value', 'Same name', 'Same class'], correct: 2 },
        { question: 'What does the controls attribute do on &lt;video&gt;?', options: ['Adds captions', 'Shows play/pause buttons', 'Loops video', 'Mutes video'], correct: 1 },
        { question: 'What is the most widely supported audio format?', options: ['OGG', 'WAV', 'MP3', 'AAC'], correct: 2 },
        { question: 'What does &lt;picture&gt; do?', options: ['Shows multiple images', 'Serves different images per screen size', 'Creates a gallery', 'Animates images'], correct: 1 },
        { question: 'Which attribute prevents form submission if empty?', options: ['mandatory', 'validate', 'required', 'notempty'], correct: 2 },
        { question: 'What does &lt;legend&gt; provide?', options: ['Form title', 'Fieldset title', 'Input label', 'Error message'], correct: 1 },
        { question: 'What does rowspan="2" do?', options: ['Creates 2 rows', 'Merges 2 rows into one cell', 'Doubles row height', 'Copies a row'], correct: 1 },
        { question: 'What does minlength do?', options: ['Limits characters', 'Requires minimum characters', 'Sets default text', 'Sets input width'], correct: 1 },
        { question: 'What does poster do on a video?', options: ['Adds a caption', 'Shows a thumbnail', 'Sets video title', 'Adds a border'], correct: 1 },
        { question: 'What does method="POST" do?', options: ['Adds data to URL', 'Sends data in request body', 'Encrypts data', 'Validates data'], correct: 1 },
        { question: 'What element creates a dropdown menu?', options: ['<dropdown>', '<list>', '<select>', '<menu>'], correct: 2 },
        { question: 'What does the pattern attribute validate against?', options: ['A CSS pattern', 'A regular expression', 'A list of values', 'A database'], correct: 1 },
        { question: 'What does srcset do on an image?', options: ['Sets image source', 'Provides multiple image options for different screens', 'Sets image size', 'Adds a caption'], correct: 1 },
        { question: 'What does checked do on a checkbox?', options: ['Validates it', 'Pre-selects it', 'Disables it', 'Makes it required'], correct: 1 },
        { question: 'What does aria-describedby do?', options: ['Hides element', 'Links input to description', 'Adds tooltip', 'Creates label'], correct: 1 }
      ]
    },
    advanced: {
      lessons: [
        {
          id: 'html-adv-01',
          title: 'Semantic Tags',
          summary: 'Use meaningful elements for better structure',
          content: [
            { type: 'text', value: 'Semantic HTML means using elements that describe the meaning of the content, not just how it looks. Before HTML5, developers used <div> for everything. Now we have specific elements for each part of a page.' },
            { type: 'heading', value: 'The Old Way vs The Semantic Way' },
            { type: 'code', value: '<!-- Old way: all divs, no meaning -->\n<div class="header">...</div>\n<div class="nav">...</div>\n<div class="main">...</div>\n<div class="footer">...</div>\n\n<!-- Semantic way: clear meaning -->\n<header>...</header>\n<nav>...</nav>\n<main>...</main>\n<footer>...</footer>' },
            { type: 'heading', value: 'Core Semantic Elements' },
            { type: 'code', value: '<header>\n  <!-- Site logo, name, and top navigation -->\n  <h1>Trace Code</h1>\n  <nav>...</nav>\n</header>\n\n<nav>\n  <!-- All navigation links -->\n  <ul>\n    <li><a href="/">Home</a></li>\n    <li><a href="/courses">Courses</a></li>\n  </ul>\n</nav>\n\n<main>\n  <!-- The unique main content of this page -->\n  <article>...</article>\n  <aside>...</aside>\n</main>\n\n<footer>\n  <!-- Copyright, links, contact info -->\n  <p>© 2026 Trace Code</p>\n</footer>' },
            { type: 'heading', value: 'Article and Section' },
            { type: 'code', value: '<article>\n  <!-- A self-contained piece of content -->\n  <!-- Could be a blog post, lesson, news story -->\n  <h2>Lesson 1: HTML Tags</h2>\n  <p>HTML tags are the building blocks...</p>\n</article>\n\n<section>\n  <!-- A thematic grouping of content -->\n  <h2>Beginner Lessons</h2>\n  <article>Lesson 1</article>\n  <article>Lesson 2</article>\n</section>\n\n<aside>\n  <!-- Related content, sidebar, ads -->\n  <h3>Related Lessons</h3>\n</aside>' }
          ],
          quiz: [
            { question: 'What is semantic HTML?', options: ['HTML with inline styles', 'Using meaningful elements that describe content purpose', 'HTML without CSS', 'Compressed HTML'], correct: 1, explanation: 'Semantic HTML uses elements that describe the meaning and purpose of content — like <nav> for navigation and <article> for articles.' },
            { question: 'Which element should contain the main navigation links?', options: ['<div class="nav">', '<navigation>', '<nav>', '<links>'], correct: 2, explanation: '<nav> is the semantic element specifically for navigation links. It tells browsers and screen readers this is navigation.' },
            { question: 'What is the difference between &lt;article&gt; and &lt;section&gt;?', options: ['They are the same', '&lt;article&gt; is self-contained content, &lt;section&gt; is a thematic group', '&lt;section&gt; is bigger', '&lt;article&gt; is for news only'], correct: 1, explanation: '&lt;article&gt; is standalone content that makes sense on its own (like a blog post). &lt;section&gt; is a thematic grouping of related content.' },
            { question: 'Why do search engines care about semantic HTML?', options: ['They do not', 'It helps them understand the structure and importance of content', 'It makes pages load faster', 'It improves image quality'], correct: 1, explanation: 'Search engines use semantic elements to identify the most important content. &lt;main&gt; signals the main content, &lt;nav&gt; is navigation, etc.' },
            { question: 'What does &lt;aside&gt; represent?', options: ['The header', 'A sidebar or tangentially related content', 'The footer', 'An article'], correct: 1, explanation: '&lt;aside&gt; is for content that is related to the main content but not central to it — like a sidebar, pull quotes, or related links.' }
          ]
        },
        {
          id: 'html-adv-02',
          title: 'ARIA Roles',
          summary: 'Make custom elements accessible',
          content: [
            { type: 'text', value: 'ARIA (Accessible Rich Internet Applications) is a set of attributes you add to HTML to make complex or custom UI elements accessible to screen readers and assistive technology.' },
            { type: 'text', value: 'The first rule of ARIA: if you can use a native HTML element, do that instead. <button> is better than <div role="button">. Use ARIA only when native HTML is not enough.' },
            { type: 'heading', value: 'Landmark Roles' },
            { type: 'code', value: '<!-- These match semantic elements -->\n<div role="banner">     = <header>\n<div role="navigation"> = <nav>\n<div role="main">       = <main>\n<div role="contentinfo">= <footer>\n<div role="search">     = search area\n<div role="complementary"> = <aside>' },
            { type: 'heading', value: 'Widget Roles' },
            { type: 'code', value: '<!-- Tab interface -->\n<div role="tablist">\n  <button role="tab" aria-selected="true">HTML</button>\n  <button role="tab" aria-selected="false">CSS</button>\n</div>\n<div role="tabpanel">\n  <p>HTML content here</p>\n</div>\n\n<!-- Alert messages -->\n<div role="alert">Form submitted successfully!</div>\n\n<!-- Dialog/Modal -->\n<div role="dialog" aria-labelledby="dialog-title" aria-modal="true">\n  <h2 id="dialog-title">Confirm Action</h2>\n  <p>Are you sure you want to delete this?</p>\n</div>' },
            { type: 'heading', value: 'Live Regions' },
            { type: 'code', value: '<!-- Announce changes to screen readers -->\n<div aria-live="polite">Score: 95%</div>    <!-- waits for user to finish -->\n<div aria-live="assertive">Error!</div>     <!-- announces immediately -->' }
          ],
          quiz: [
            { question: 'What does ARIA stand for?', options: ['Accessible Rich Internet Applications', 'Advanced Responsive Interface API', 'Automated Reader Interface Attributes', 'Accessible Rendering in Applications'], correct: 0, explanation: 'ARIA stands for Accessible Rich Internet Applications — a set of attributes that improve accessibility for assistive technologies.' },
            { question: 'When should you use ARIA roles?', options: ['Always instead of semantic HTML', 'Only when native HTML elements cannot describe the element', 'Never — use CSS instead', 'Only for forms'], correct: 1, explanation: 'Use ARIA only when native HTML is not enough. A real <button> is always better than <div role="button">.' },
            { question: 'What does role="alert" do?', options: ['Creates a popup', 'Makes screen readers announce content immediately', 'Adds a red border', 'Plays a sound'], correct: 1, explanation: 'role="alert" tells screen readers to immediately announce the content — useful for error messages or important notifications.' },
            { question: 'What does aria-live="polite" do?', options: ['Announces changes immediately', 'Announces changes when the user is idle', 'Hides the element', 'Makes the element larger'], correct: 1, explanation: 'aria-live="polite" queues announcements and waits until the user stops interacting before announcing changes.' },
            { question: 'What does role="dialog" tell assistive technology?', options: ['This is a link', 'This is a modal dialog window', 'This is a form', 'This is a navigation menu'], correct: 1, explanation: 'role="dialog" tells screen readers this is a modal or dialog window, so they can handle focus and navigation correctly.' }
          ]
        },
        {
          id: 'html-adv-03',
          title: 'ARIA Labels & States',
          summary: 'Describe elements and their current state',
          content: [
            { type: 'text', value: 'ARIA labels give accessible names to elements that have no visible text. ARIA states communicate whether an element is expanded, selected, checked, or has an error.' },
            { type: 'heading', value: 'aria-label' },
            { type: 'code', value: '<!-- Button with only an icon -- no visible text -->\n<button aria-label="Close menu">✕</button>\n<button aria-label="Search courses">🔍</button>\n\n<!-- Input with no visible label -->\n<input type="search" aria-label="Search lessons">' },
            { type: 'heading', value: 'aria-labelledby' },
            { type: 'code', value: '<!-- Reference another element as the label -->\n<h2 id="section-title">HTML Lessons</h2>\n<section aria-labelledby="section-title">\n  <p>Lesson content here...</p>\n</section>' },
            { type: 'heading', value: 'ARIA States' },
            { type: 'code', value: '<!-- Is this accordion section open? -->\n<button aria-expanded="false" onclick="toggle(this)">\n  What is HTML?\n</button>\n\n<!-- Is this menu item current page? -->\n<a href="/html" aria-current="page">HTML</a>\n\n<!-- Is this toggle on? -->\n<button role="switch" aria-checked="true">Dark Mode</button>\n\n<!-- Is this form field invalid? -->\n<input type="email" aria-invalid="true">\n<span role="alert">Please enter a valid email</span>' },
            { type: 'heading', value: 'aria-hidden' },
            { type: 'code', value: '<!-- Hide decorative elements from screen readers -->\n<span aria-hidden="true">🎉</span>\n<p>Congratulations! You passed!</p>\n\n<!-- Hide entire sections -->\n<div aria-hidden="true">\n  <p>This decorative sidebar is hidden from screen readers</p>\n</div>' }
          ],
          quiz: [
            { question: 'What does aria-label do?', options: ['Creates a visible label', 'Provides an accessible name read by screen readers', 'Links two elements', 'Hides an element'], correct: 1, explanation: 'aria-label provides an invisible accessible name that screen readers announce. Use it when there is no visible text label.' },
            { question: 'What is the difference between aria-label and aria-labelledby?', options: ['They are the same', 'aria-label provides text directly, aria-labelledby references another element\'s text', 'aria-labelledby is newer', 'aria-label is for buttons only'], correct: 1, explanation: 'aria-label contains the label text directly. aria-labelledby references the id of another visible element to use as the label.' },
            { question: 'What does aria-expanded="false" communicate?', options: ['The element is disabled', 'A collapsible section is currently closed', 'The element is hidden', 'The element cannot be clicked'], correct: 1, explanation: 'aria-expanded tells screen readers whether a collapsible element (like an accordion or dropdown) is open (true) or closed (false).' },
            { question: 'What does aria-hidden="true" do?', options: ['Makes the element invisible on screen', 'Hides the element from screen readers only', 'Deletes the element', 'Disables the element'], correct: 1, explanation: 'aria-hidden="true" hides an element from screen readers while keeping it visually visible. Use it for decorative elements like icons.' },
            { question: 'What does aria-current="page" communicate?', options: ['The current date', 'This link represents the current page', 'The current user', 'The active tab'], correct: 1, explanation: 'aria-current="page" tells screen readers that this link represents the page currently being viewed — important for navigation menus.' }
          ]
        },
        {
          id: 'html-adv-04',
          title: 'async vs defer Scripts',
          summary: 'Control how JavaScript loads for better performance',
          content: [
            { type: 'text', value: 'When a browser encounters a <script> tag, it normally stops parsing HTML, downloads the script, executes it, then continues. This can make your page feel slow.' },
            { type: 'heading', value: 'The Problem' },
            { type: 'code', value: '<!-- Normal script: blocks HTML parsing -->\n<head>\n  <script src="app.js"></script>  <!-- Page freezes here until loaded -->\n</head>' },
            { type: 'heading', value: 'defer' },
            { type: 'code', value: '<script defer src="app.js"></script>' },
            { type: 'text', value: 'defer downloads the script in the background while HTML continues parsing. The script executes after all HTML is fully parsed. Scripts with defer execute in order.' },
            { type: 'heading', value: 'async' },
            { type: 'code', value: '<script async src="analytics.js"></script>' },
            { type: 'text', value: 'async also downloads in the background. But it executes as soon as it finishes downloading — even if HTML is still being parsed. Order is not guaranteed.' },
            { type: 'heading', value: 'When to Use Each' },
            { type: 'code', value: '<!-- defer: scripts that depend on the DOM or each other -->\n<script defer src="app.js"></script>\n<script defer src="ui.js"></script>   <!-- runs after app.js -->\n\n<!-- async: independent scripts like analytics -->\n<script async src="analytics.js"></script>\n\n<!-- Neither: small critical scripts -->\n<script src="critical.js"></script>' },
            { type: 'heading', value: 'Best Practice' },
            { type: 'text', value: 'Place scripts at the bottom of <body> or use defer. This ensures HTML is parsed first and elements exist when JavaScript tries to access them.' }
          ],
          quiz: [
            { question: 'What problem does a normal &lt;script&gt; tag cause?', options: ['It makes the page ugly', 'It blocks HTML parsing while the script downloads', 'It runs scripts in the wrong order', 'It breaks CSS'], correct: 1, explanation: 'A normal &lt;script&gt; tag stops HTML parsing completely until the script is downloaded and executed — making pages feel slow.' },
            { question: 'What does defer do?', options: ['Skips the script', 'Downloads in background, executes after HTML is fully parsed', 'Executes immediately', 'Caches the script forever'], correct: 1, explanation: 'defer downloads the script in the background without blocking HTML. It executes after HTML parsing is complete, in order.' },
            { question: 'What does async do?', options: ['Delays the script by 1 second', 'Downloads in background, executes as soon as downloaded', 'Runs scripts in alphabetical order', 'Makes scripts optional'], correct: 1, explanation: 'async downloads the script without blocking HTML, but executes it as soon as it is ready — regardless of HTML parsing status.' },
            { question: 'When should you use defer?', options: ['For analytics scripts', 'For scripts that need the DOM or depend on other scripts', 'For critical above-the-fold content', 'Never'], correct: 1, explanation: 'Use defer for scripts that interact with the DOM or depend on other scripts — it guarantees execution order and waits for HTML.' },
            { question: 'Which attribute guarantees scripts execute in order?', options: ['async', 'defer', 'order', 'sync'], correct: 1, explanation: 'defer executes scripts in the order they appear in HTML. async does not guarantee order — each runs as soon as it is ready.' }
          ]
        },
        {
          id: 'html-adv-05',
          title: 'Responsive Images with picture',
          summary: 'Advanced image techniques for all devices',
          content: [
            { type: 'text', value: 'The <picture> element gives you full control over which image loads on which device — based on screen width, pixel density, or even supported format.' },
            { type: 'heading', value: 'Format-Based Selection' },
            { type: 'code', value: '<picture>\n  <!-- Modern browsers: use WebP (smaller, faster) -->\n  <source type="image/webp" srcset="hero.webp">\n  \n  <!-- Fallback: JPG for older browsers -->\n  <img src="hero.jpg" alt="Course hero image">\n</picture>' },
            { type: 'heading', value: 'Art Direction' },
            { type: 'code', value: '<picture>\n  <!-- Desktop: wide landscape photo -->\n  <source media="(min-width: 1024px)"\n          srcset="hero-wide.jpg">\n  \n  <!-- Tablet: square crop -->\n  <source media="(min-width: 600px)"\n          srcset="hero-square.jpg">\n  \n  <!-- Phone: portrait crop, zoomed in -->\n  <img src="hero-portrait.jpg"\n       alt="Students learning to code">\n</picture>' },
            { type: 'heading', value: 'Combining Format and Size' },
            { type: 'code', value: '<picture>\n  <source\n    media="(min-width: 800px)"\n    type="image/webp"\n    srcset="large.webp 1x, large@2x.webp 2x">\n  <source\n    media="(min-width: 800px)"\n    srcset="large.jpg 1x, large@2x.jpg 2x">\n  <img src="small.jpg" alt="Responsive image">\n</picture>' },
            { type: 'heading', value: 'Lazy Loading' },
            { type: 'code', value: '<!-- Do not load this image until near viewport -->\n<img src="below-fold.jpg"\n     alt="Content lower on the page"\n     loading="lazy">' }
          ],
          quiz: [
            { question: 'What does type="image/webp" do in a &lt;source&gt; element?', options: ['Converts the image to WebP', 'Tells the browser to use this source if it supports WebP', 'Sets the image type for all browsers', 'Makes the image transparent'], correct: 1, explanation: 'type="image/webp" tells the browser to use this source only if it supports the WebP format. Old browsers that do not support WebP skip it.' },
            { question: 'What is "art direction" in responsive images?', options: ['Using artistic filters', 'Serving different crops or compositions for different screen sizes', 'Animating images', 'Adding image captions'], correct: 1, explanation: 'Art direction means serving completely different image crops for different screens — like a zoomed-in portrait on phone vs a wide landscape on desktop.' },
            { question: 'What does loading="lazy" do?', options: ['Loads the image slowly', 'Delays loading until the image is near the viewport', 'Caches the image', 'Compresses the image'], correct: 1, explanation: 'loading="lazy" tells the browser to skip loading this image until the user scrolls near it — saving bandwidth on initial load.' },
            { question: 'Why use WebP format?', options: ['It is supported by all browsers since 2000', 'It produces smaller file sizes than JPG and PNG with similar quality', 'It supports animation only', 'It replaces SVG'], correct: 1, explanation: 'WebP produces significantly smaller file sizes than JPG and PNG while maintaining similar visual quality — making pages load faster.' },
            { question: 'What is the &lt;img&gt; inside &lt;picture&gt; always used for?', options: ['The desktop image', 'The required fallback for unsupported browsers', 'The largest image', 'The alt text container'], correct: 1, explanation: 'The &lt;img> tag inside &lt;picture> is required and serves as the fallback for browsers that do not support &lt;picture>. It also holds the alt attribute.' }
          ]
        },
        {
          id: 'html-adv-06',
          title: 'Microdata & Schema',
          summary: 'Help search engines understand your content',
          content: [
            { type: 'text', value: 'Microdata and Schema.org let you add machine-readable meaning to your HTML. Google uses this to show rich results — like star ratings, prices, and event details directly in search results.' },
            { type: 'heading', value: 'How Microdata Works' },
            { type: 'code', value: '<div itemscope itemtype="https://schema.org/Book">\n  <h1 itemprop="name">The Great Gatsby</h1>\n  <p>Written by: <span itemprop="author">F. Scott Fitzgerald</span></p>\n  <p>Published: <time itemprop="datePublished" datetime="1925">1925</time></p>\n</div>' },
            { type: 'text', value: '• itemscope — marks this element as a schema item\n• itemtype — the URL of the schema type\n• itemprop — marks individual properties of the item' },
            { type: 'heading', value: 'Course Schema' },
            { type: 'code', value: '<div itemscope itemtype="https://schema.org/Course">\n  <h2 itemprop="name">HTML for Beginners</h2>\n  <p itemprop="description">Learn HTML from scratch in 10 lessons.</p>\n  <div itemprop="provider" itemscope itemtype="https://schema.org/Organization">\n    <span itemprop="name">Trace Code</span>\n  </div>\n</div>' },
            { type: 'heading', value: 'JSON-LD (Recommended by Google)' },
            { type: 'code', value: '<script type="application/ld+json">\n{\n  "@context": "https://schema.org",\n  "@type": "Course",\n  "name": "HTML for Beginners",\n  "description": "Learn HTML from scratch",\n  "provider": {\n    "@type": "Organization",\n    "name": "Trace Code"\n  }\n}\n</script>' },
            { type: 'text', value: 'Google recommends JSON-LD over microdata. It is placed in a <script> tag in the <head> and does not require modifying your HTML structure.' }
          ],
          quiz: [
            { question: 'What does itemscope do?', options: ['Scopes CSS to an element', 'Marks an element as the root of a schema item', 'Creates a scoped variable', 'Hides an element'], correct: 1, explanation: 'itemscope marks an HTML element as representing a schema.org item. Everything inside is a property of that item.' },
            { question: 'What does itemprop do?', options: ['Adds a CSS property', 'Marks an element as a property of a schema item', 'Creates a JavaScript property', 'Sets item priority'], correct: 1, explanation: 'itemprop marks an element as a specific property of the parent schema item — like the name, author, or price.' },
            { question: 'What are rich results in Google search?', options: ['Coloured search results', 'Enhanced results with extra info like ratings, prices, or events', 'Paid search ads', 'Image search results'], correct: 1, explanation: 'Rich results are enhanced search listings that show extra information from structured data — like star ratings, event dates, or product prices.' },
            { question: 'What does Google recommend for structured data?', options: ['Microdata in HTML attributes', 'JSON-LD in a script tag', 'RDFa attributes', 'Meta tags only'], correct: 1, explanation: 'Google recommends JSON-LD for structured data because it is easy to add without modifying your HTML structure.' },
            { question: 'Where should JSON-LD structured data be placed?', options: ['In the body', 'In a <script type="application/ld+json"> tag', 'In a CSS file', 'In an external JSON file'], correct: 1, explanation: 'JSON-LD is placed inside a <script type="application/ld+json"> tag, usually in the <head>. It is not displayed on the page.' }
          ]
        },
        {
          id: 'html-adv-07',
          title: 'Performance Optimization',
          summary: 'Make your pages load as fast as possible',
          content: [
            { type: 'text', value: 'Page speed directly affects user experience, bounce rates, and search rankings. These HTML techniques improve load time without any server changes.' },
            { type: 'heading', value: 'Preload Critical Resources' },
            { type: 'code', value: '<head>\n  <!-- Load this CSS before anything else -->\n  <link rel="preload" href="critical.css" as="style">\n  \n  <!-- Preload the hero image -->\n  <link rel="preload" href="hero.webp" as="image">\n  \n  <!-- Preload a font -->\n  <link rel="preload" href="font.woff2" as="font"\n        type="font/woff2" crossorigin>\n</head>' },
            { type: 'heading', value: 'Prefetch Future Pages' },
            { type: 'code', value: '<!-- Tell browser to download this page in the background -->\n<!-- User probably will go here next -->\n<link rel="prefetch" href="/lesson-2.html">' },
            { type: 'heading', value: 'DNS Prefetch and Preconnect' },
            { type: 'code', value: '<!-- Resolve DNS for external domains early -->\n<link rel="dns-prefetch" href="https://api.tracecode.app">\n\n<!-- Full connection setup for critical external domains -->\n<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>' },
            { type: 'heading', value: 'Optimize Images' },
            { type: 'code', value: '<!-- Always specify width and height to prevent layout shift -->\n<img src="hero.webp" alt="Hero"\n     width="1200" height="600"\n     loading="lazy">' },
            { type: 'text', value: 'Specifying width and height on images prevents Cumulative Layout Shift (CLS) — where the page jumps around as images load. This is a key Google ranking factor.' }
          ],
          quiz: [
            { question: 'What does rel="preload" do?', options: ['Loads a page in the background', 'Tells the browser to fetch a resource early before it is needed', 'Caches a resource forever', 'Skips a resource'], correct: 1, explanation: 'preload tells the browser to fetch a critical resource (CSS, font, image) as soon as possible, before it would normally be discovered.' },
            { question: 'What does rel="prefetch" do?', options: ['Same as preload', 'Downloads a resource the user might need on the next page', 'Refreshes the cache', 'Skips loading a resource'], correct: 1, explanation: 'prefetch downloads a resource in the background for possible future use — like the next lesson page. Lower priority than preload.' },
            { question: 'What does rel="preconnect" do?', options: ['Connects to a database', 'Sets up a connection to an external domain early', 'Loads external images', 'Validates an external URL'], correct: 1, explanation: 'preconnect establishes the full connection (DNS + TCP + TLS) to an external domain early, reducing connection time when resources are needed.' },
            { question: 'Why specify width and height on images?', options: ['For styling', 'To prevent layout shift as images load', 'To improve SEO', 'To set the max size'], correct: 1, explanation: 'Specifying width and height lets the browser reserve space for images before they load, preventing Cumulative Layout Shift (CLS).' },
            { question: 'What does rel="dns-prefetch" do?', options: ['Full connection setup', 'Only resolves the DNS for an external domain early', 'Downloads a file', 'Validates a domain'], correct: 1, explanation: 'dns-prefetch resolves the domain name early (the first step of connecting) — lighter than preconnect but still saves time.' }
          ]
        },
        {
          id: 'html-adv-08',
          title: 'Web Components',
          summary: 'Build reusable custom HTML elements',
          content: [
            { type: 'text', value: 'Web Components let you create your own custom HTML elements with encapsulated styling and behavior — reusable across any project without a framework.' },
            { type: 'heading', value: 'Custom Elements' },
            { type: 'code', value: '// Define a custom element\nclass TraceCard extends HTMLElement {\n  // Called when element is added to the DOM\n  connectedCallback() {\n    this.innerHTML = `\n      <div class="card">\n        <h3>${this.getAttribute("title")}</h3>\n        <p>${this.getAttribute("description")}</p>\n      </div>\n    `;\n  }\n}\n\n// Register the custom element\ncustomElements.define("trace-card", TraceCard);' },
            { type: 'heading', value: 'Using the Custom Element' },
            { type: 'code', value: '<!-- Use it like any HTML element -->\n<trace-card\n  title="HTML Basics"\n  description="Learn the fundamentals">\n</trace-card>' },
            { type: 'heading', value: 'Shadow DOM' },
            { type: 'code', value: 'class MyButton extends HTMLElement {\n  connectedCallback() {\n    // Create isolated shadow DOM\n    const shadow = this.attachShadow({ mode: "open" });\n    \n    shadow.innerHTML = `\n      <style>\n        /* These styles only apply inside this component */\n        button {\n          background: #3b82f6;\n          color: white;\n          padding: 10px 20px;\n          border: none;\n          border-radius: 8px;\n        }\n      </style>\n      <button><slot></slot></button>\n    `;\n  }\n}\ncustomElements.define("my-button", MyButton);' },
            { type: 'text', value: 'Shadow DOM creates an isolated DOM tree. Styles inside the Shadow DOM do not leak out, and external styles do not leak in.' }
          ],
          quiz: [
            { question: 'What method registers a custom HTML element?', options: ['HTMLElement.register()', 'customElements.define()', 'document.createElement()', 'window.registerElement()'], correct: 1, explanation: 'customElements.define("tag-name", ClassName) registers a custom element, linking a tag name to a JavaScript class.' },
            { question: 'What does connectedCallback() do?', options: ['Connects to a server', 'Runs when the element is added to the DOM', 'Validates the element', 'Registers the element'], correct: 1, explanation: 'connectedCallback() is a lifecycle method called automatically when a custom element is inserted into the page DOM.' },
            { question: 'What does Shadow DOM provide?', options: ['Faster rendering', 'Encapsulated styles and DOM that do not affect the rest of the page', 'Dark mode', 'Server-side rendering'], correct: 1, explanation: 'Shadow DOM creates an isolated DOM tree with scoped styles. CSS inside does not leak out and external CSS does not leak in.' },
            { question: 'What does &lt;slot&gt;&lt;/slot&gt; do in a Web Component?', options: ['Creates a time slot', 'A placeholder where the component\'s children are inserted', 'Adds a loading spinner', 'Creates a gap'], correct: 1, explanation: '<slot> is a placeholder in the Shadow DOM where the content you put between the custom element\'s tags gets inserted.' },
            { question: 'What naming rule must custom element tag names follow?', options: ['Must start with my-', 'Must contain a hyphen', 'Must be lowercase only', 'Must start with x-'], correct: 1, explanation: 'Custom element names must contain a hyphen (like my-button, trace-card). This prevents conflicts with existing or future HTML elements.' }
          ]
        },
        {
          id: 'html-adv-09',
          title: 'Service Workers',
          summary: 'Power offline-first web apps',
          content: [
            { type: 'text', value: 'A Service Worker is a JavaScript file that runs in the background, separate from your web page. It can intercept network requests, cache files, and make your app work offline.' },
            { type: 'heading', value: 'Registering a Service Worker' },
            { type: 'code', value: '// In your main app.js\nif ("serviceWorker" in navigator) {\n  window.addEventListener("load", () => {\n    navigator.serviceWorker\n      .register("/sw.js")\n      .then(() => console.log("Service Worker registered"))\n      .catch(err => console.error("Failed:", err));\n  });\n}' },
            { type: 'heading', value: 'The Service Worker File (sw.js)' },
            { type: 'code', value: 'const CACHE_NAME = "trace-code-v1";\nconst FILES = ["/", "/index.html", "/css/main.css", "/js/app.js"];\n\n// Cache files on install\nself.addEventListener("install", event => {\n  event.waitUntil(\n    caches.open(CACHE_NAME)\n      .then(cache => cache.addAll(FILES))\n  );\n});\n\n// Serve from cache when offline\nself.addEventListener("fetch", event => {\n  event.respondWith(\n    caches.match(event.request)\n      .then(cached => cached || fetch(event.request))\n  );\n});' },
            { type: 'heading', value: 'Cache Strategy' },
            { type: 'text', value: 'Cache First: try the cache, use network as fallback (fast, works offline)\nNetwork First: try network, use cache as fallback (always fresh when online)\nStale While Revalidate: serve cache immediately, update cache in background' }
          ],
          quiz: [
            { question: 'What is a Service Worker?', options: ['A server-side script', 'A background script that runs separately from the page', 'A CSS preprocessor', 'A testing tool'], correct: 1, explanation: 'A Service Worker is a JavaScript file that runs in a background thread, separate from the web page, enabling offline caching and push notifications.' },
            { question: 'What does the install event do in a Service Worker?', options: ['Installs the app on the phone', 'Runs when the SW is first installed — good for caching files', 'Updates the SW', 'Connects to a server'], correct: 1, explanation: 'The install event fires when the Service Worker is first installed. It is the right time to open a cache and store files for offline use.' },
            { question: 'What does the fetch event do?', options: ['Downloads files', 'Intercepts all network requests from the page', 'Refreshes the cache', 'Fetches user data'], correct: 1, explanation: 'The fetch event intercepts every network request from the page. You can return cached responses, fetch from network, or mix both.' },
            { question: 'What is the Cache First strategy?', options: ['Always use network', 'Try cache first, use network as fallback', 'Cache everything forever', 'Network first, cache second'], correct: 1, explanation: 'Cache First serves from cache immediately. If not cached, it fetches from the network. Fast and works offline but may serve stale content.' },
            { question: 'What does caches.match() do?', options: ['Matches CSS selectors', 'Checks if a request has a matching cached response', 'Validates cache size', 'Deletes old caches'], correct: 1, explanation: 'caches.match() looks through all caches for a response matching the request. Returns the cached response or undefined if not found.' }
          ]
        },
        {
          id: 'html-adv-10',
          title: 'HTML Architecture & Best Practices',
          summary: 'Structure large projects like a professional',
          content: [
            { type: 'text', value: 'As projects grow, code organization matters as much as the code itself. These patterns help you build maintainable, scalable HTML projects.' },
            { type: 'heading', value: 'BEM Naming Convention' },
            { type: 'code', value: '<!-- Block__Element--Modifier -->\n\n<!-- Block: a standalone component -->\n<div class="lesson-card">\n  \n  <!-- Element: a part of the block -->\n  <h3 class="lesson-card__title">HTML Basics</h3>\n  <p class="lesson-card__description">Learn the fundamentals</p>\n  \n  <!-- Modifier: a variation of the block or element -->\n  <button class="lesson-card__btn lesson-card__btn--primary">Start</button>\n  <button class="lesson-card__btn lesson-card__btn--secondary">Preview</button>\n  \n</div>' },
            { type: 'heading', value: 'Component-Based Thinking' },
            { type: 'text', value: 'Break your UI into small, reusable components. Each component owns its own HTML, CSS, and JavaScript. This makes them easy to test, reuse, and update.' },
            { type: 'heading', value: 'Recommended Folder Structure' },
            { type: 'code', value: 'trace-code/\n├── index.html\n├── manifest.json\n├── sw.js\n├── css/\n│   └── main.css\n├── js/\n│   ├── app.js\n│   ├── router.js\n│   └── ui.js\n├── data/\n│   └── lessons/\n└── assets/\n    └── icons/' },
            { type: 'heading', value: 'HTML Checklist for Every Project' },
            { type: 'code', value: '✓ <!DOCTYPE html> on line 1\n✓ lang attribute on <html>\n✓ charset and viewport meta tags\n✓ Descriptive <title>\n✓ One <h1> per page\n✓ alt on every image\n✓ Labels for all form inputs\n✓ Semantic elements (nav, main, footer)\n✓ Defer on non-critical scripts\n✓ Lazy loading on below-fold images' }
          ],
          quiz: [
            { question: 'What does BEM stand for?', options: ['Browser Element Model', 'Block Element Modifier', 'Basic Edit Method', 'Build Element Markup'], correct: 1, explanation: 'BEM (Block Element Modifier) is a CSS naming convention using double underscores for elements and double dashes for modifiers.' },
            { question: 'What is a BEM Block?', options: ['A div element', 'A standalone, reusable component', 'A section of text', 'A CSS block rule'], correct: 1, explanation: 'A BEM Block is a standalone UI component that is meaningful on its own — like a card, button, or navigation menu.' },
            { question: 'What is a BEM Modifier?', options: ['A modified HTML element', 'A variation of a block or element', 'A JavaScript function', 'A CSS media query'], correct: 1, explanation: 'A BEM Modifier represents a variation of a block or element — like btn--primary vs btn--secondary for different button styles.' },
            { question: 'What is component-based thinking?', options: ['Using only div elements', 'Breaking UI into small, reusable, self-contained pieces', 'Writing HTML in components.html', 'Using a JavaScript framework only'], correct: 1, explanation: 'Component-based thinking means designing UI as small, reusable pieces where each component owns its own HTML, CSS, and behavior.' },
            { question: 'Which of these belongs in the HTML checklist?', options: ['Use tables for layout', 'Multiple h1 elements per page', 'alt attribute on every image', 'Inline all CSS'], correct: 2, explanation: 'Every image needs an alt attribute for accessibility and SEO. It is a fundamental HTML best practice that should never be skipped.' }
          ]
        }
      ],
      exam: [
        { question: 'What is semantic HTML?', options: ['HTML with styles', 'Using meaningful elements describing content purpose', 'Minified HTML', 'HTML without CSS'], correct: 1 },
        { question: 'Which element is for navigation?', options: ['<div class="nav">', '<navigate>', '<nav>', '<links>'], correct: 2 },
        { question: 'What does ARIA stand for?', options: ['Accessible Rich Internet Applications', 'Advanced Responsive Interface API', 'Automated Reader Interface', 'Accessible Rendering Applications'], correct: 0 },
        { question: 'What does aria-label do?', options: ['Creates visible label', 'Provides accessible name for screen readers', 'Links elements', 'Hides element'], correct: 1 },
        { question: 'What does defer do on a script?', options: ['Skips script', 'Runs after HTML parsed', 'Runs immediately', 'Caches script'], correct: 1 },
        { question: 'What does async do on a script?', options: ['Delays 1 second', 'Downloads in background, runs when ready', 'Alphabetical order', 'Makes optional'], correct: 1 },
        { question: 'What does loading="lazy" do?', options: ['Slow load', 'Load when near viewport', 'Cache forever', 'Compress image'], correct: 1 },
        { question: 'What does itemscope do?', options: ['Scopes CSS', 'Marks schema item root', 'Creates variable', 'Hides element'], correct: 1 },
        { question: 'What does rel="preload" do?', options: ['Background page load', 'Fetch resource early', 'Cache forever', 'Skip resource'], correct: 1 },
        { question: 'What registers a custom element?', options: ['HTMLElement.register()', 'customElements.define()', 'document.createElement()', 'window.register()'], correct: 1 },
        { question: 'What does Shadow DOM do?', options: ['Dark mode', 'Encapsulates styles and DOM', 'Server rendering', 'Faster rendering'], correct: 1 },
        { question: 'What does the fetch event do in a SW?', options: ['Downloads files', 'Intercepts network requests', 'Refreshes cache', 'Fetches user data'], correct: 1 },
        { question: 'What does BEM stand for?', options: ['Browser Element Model', 'Block Element Modifier', 'Basic Edit Method', 'Build Element Markup'], correct: 1 },
        { question: 'What does aria-expanded communicate?', options: ['Element disabled', 'Collapsible section open or closed', 'Element hidden', 'Cannot be clicked'], correct: 1 },
        { question: 'What does rel="preconnect" do?', options: ['Database connection', 'Early external domain connection', 'Load images', 'Validate URL'], correct: 1 },
        { question: 'What is Cache First strategy?', options: ['Always network', 'Cache first, network fallback', 'Cache forever', 'Network first'], correct: 1 },
        { question: 'What does &lt;article&gt; represent?', options: ['A news site only', 'Self-contained reusable content', 'The main page', 'A section header'], correct: 1 },
        { question: 'What does aria-hidden="true" do?', options: ['Hides visually', 'Hides from screen readers only', 'Deletes element', 'Disables element'], correct: 1 },
        { question: 'What does connectedCallback() do?', options: ['Server connection', 'Runs when element added to DOM', 'Validates element', 'Registers element'], correct: 1 },
        { question: 'What is on every project HTML checklist?', options: ['Tables for layout', 'Multiple h1 tags', 'alt on every image', 'Inline all CSS'], correct: 2 }
      ]
    }
  },
  css: {
    beginner: {
      lessons: [
        {
          id: 'css-beg-01',
          title: 'The Anatomy of a CSS Rule',
          summary: 'Learn what CSS is and how a style rule is built',
          content: [
            { type: 'text', value: 'CSS stands for Cascading Style Sheets. HTML builds the structure of a page — CSS controls how it looks: colors, fonts, spacing, sizing, and layout.' },
            { type: 'text', value: 'Think of it like this: if HTML is the skeleton of a webpage, CSS is the skin, clothes, and style that make it presentable.' },
            { type: 'heading', value: 'The Three Parts of a Rule' },
            { type: 'code', value: 'selector {\n  property: value;\n}\n\n/* Example */\np {\n  color: blue;\n  font-size: 18px;\n}' },
            { type: 'text', value: 'A CSS rule has a selector (what to style), and a declaration block wrapped in curly braces. Inside, each declaration is a property paired with a value, separated by a colon, and ended with a semicolon.' },
            { type: 'text', value: 'The selector "p" above targets every paragraph element on the page. Every declaration needs that trailing semicolon — forgetting it is the most common beginner mistake, and it can break every rule that comes after it.' },
            { type: 'heading', value: 'Comments in CSS' },
            { type: 'code', value: '/* This is a CSS comment.\n   It can span multiple lines.\n   The browser ignores everything in here. */\n\nh1 {\n  color: red; /* you can also comment at the end of a line */\n}' },
            { type: 'text', value: 'Try it yourself: open any HTML page, add a <style> block, and write "body { background-color: lightyellow; }" — reload and watch the whole page change color. Small experiments like this are the fastest way to learn CSS.' }
          ],
          quiz: [
            { question: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Styled Sections', 'Colorful Style Syntax'], correct: 1, explanation: 'CSS stands for Cascading Style Sheets — the language used to style and lay out HTML documents.' },
            { question: 'What are the two main parts inside a CSS declaration block?', options: ['Tag and attribute', 'Property and value', 'Selector and comment', 'Element and class'], correct: 1, explanation: 'Each declaration pairs a property (like color) with a value (like blue), separated by a colon and ended with a semicolon.' },
            { question: 'What happens if you forget a semicolon at the end of a declaration?', options: ['Nothing, it is optional', 'The page stops loading entirely', 'It can break that declaration and the ones after it', 'The browser adds one automatically every time'], correct: 2, explanation: 'The semicolon separates declarations. Missing one can cause the browser to misread the next declaration, breaking your styling.' }
          ]
        },
        {
          id: 'css-beg-02',
          title: 'Three Ways to Add CSS',
          summary: 'Inline, internal, and external stylesheets',
          content: [
            { type: 'text', value: 'There are three ways to apply CSS to an HTML page: inline, internal (embedded), and external. Each has its place, but professional projects almost always use external CSS.' },
            { type: 'heading', value: '1. Inline CSS' },
            { type: 'code', value: '<p style="color: red; font-size: 20px;">This paragraph is styled inline.</p>' },
            { type: 'text', value: 'Inline CSS is written directly in the style attribute of an element. It only affects that one element and is the hardest to maintain — avoid it except for quick tests or dynamic styles set by JavaScript.' },
            { type: 'heading', value: '2. Internal (Embedded) CSS' },
            { type: 'code', value: '<head>\n  <style>\n    p {\n      color: red;\n      font-size: 20px;\n    }\n  </style>\n</head>' },
            { type: 'text', value: 'Internal CSS lives inside a <style> tag in the <head> of the document. It affects the whole page but only that one file — useful for single-page demos.' },
            { type: 'heading', value: '3. External CSS' },
            { type: 'code', value: '<!-- in index.html -->\n<head>\n  <link rel="stylesheet" href="style.css">\n</head>\n\n/* in style.css */\np {\n  color: red;\n  font-size: 20px;\n}' },
            { type: 'text', value: 'External CSS lives in its own .css file, linked with a <link> tag. This is the industry standard: one stylesheet can style every page on a site, and your HTML stays clean and readable.' }
          ],
          quiz: [
            { question: 'Which method applies a style to only one single element?', options: ['External CSS', 'Internal CSS', 'Inline CSS', 'Global CSS'], correct: 2, explanation: 'Inline CSS is written in the style attribute of one element and affects only that element.' },
            { question: 'Which tag links an external stylesheet to an HTML page?', options: ['<style>', '<script>', '<css>', '<link>'], correct: 3, explanation: 'The <link rel="stylesheet" href="..."> tag, placed in the <head>, connects an external .css file to the page.' },
            { question: 'Why do professionals prefer external CSS?', options: ['It loads slower on purpose', 'One file can style every page on a site, keeping code organized', 'It only works with JavaScript', 'It cannot be cached by the browser'], correct: 1, explanation: 'External stylesheets separate structure (HTML) from style (CSS), can be reused across every page, and can be cached by the browser for faster loads.' }
          ]
        },
        {
          id: 'css-beg-03',
          title: 'Selectors: Element, Class, and ID',
          summary: 'Target exactly the HTML you want to style',
          content: [
            { type: 'text', value: 'A selector tells the browser which element(s) a rule applies to. The three you will use constantly are the element selector, the class selector, and the id selector.' },
            { type: 'heading', value: 'Element Selector' },
            { type: 'code', value: 'p {\n  color: darkslategray;\n}' },
            { type: 'text', value: 'Targets every element of that type on the page — every <p> in this case.' },
            { type: 'heading', value: 'Class Selector' },
            { type: 'code', value: '.highlight {\n  background-color: yellow;\n}\n\n<!-- in your HTML -->\n<p class="highlight">This is highlighted</p>\n<span class="highlight">So is this</span>' },
            { type: 'text', value: 'A class starts with a dot (.) and can be reused on as many elements as you like — perfect for a style you want to apply in multiple places.' },
            { type: 'heading', value: 'ID Selector' },
            { type: 'code', value: '#main-title {\n  font-size: 36px;\n}\n\n<!-- in your HTML -->\n<h1 id="main-title">Welcome</h1>' },
            { type: 'text', value: 'An id starts with a hash (#) and should be used only once per page — it is meant to target one unique element.' },
            { type: 'heading', value: 'Grouping and the Universal Selector' },
            { type: 'code', value: '/* Grouping: style several selectors at once */\nh1, h2, h3 {\n  font-family: sans-serif;\n}\n\n/* Universal selector: every element on the page */\n* {\n  margin: 0;\n  padding: 0;\n}' },
            { type: 'text', value: 'A comma lets you apply the same declarations to several selectors without repeating yourself. The universal selector (*) is often used at the top of a stylesheet to reset default spacing.' }
          ],
          quiz: [
            { question: 'Which symbol starts a class selector?', options: ['# (hash)', '. (dot)', '* (asterisk)', '@ (at sign)'], correct: 1, explanation: 'Class selectors start with a dot, like .highlight, and can be reused on many elements.' },
            { question: 'Which symbol starts an id selector?', options: ['. (dot)', '# (hash)', '& (ampersand)', '% (percent)'], correct: 1, explanation: 'ID selectors start with a hash, like #main-title, and should target only one element per page.' },
            { question: 'How many times should the same id be used on one page?', options: ['As many times as needed', 'Exactly once', 'Exactly twice', 'It does not matter'], correct: 1, explanation: 'An id is meant to be unique — it should identify exactly one element on the page.' },
            { question: 'What does a comma do between selectors, like "h1, h2 { }"?', options: ['Creates an error', 'Selects h1 elements only', 'Applies the same rule to every selector listed', 'Nests h2 inside h1'], correct: 2, explanation: 'A comma groups selectors together so they all receive the same set of declarations, avoiding repetition.' }
          ]
        },
        {
          id: 'css-beg-04',
          title: 'Colors and Backgrounds',
          summary: 'Style text and backgrounds with color values',
          content: [
            { type: 'text', value: 'Color is one of the first things you will control with CSS. The two most common properties are color (text color) and background-color (the background behind an element).' },
            { type: 'code', value: 'h1 {\n  color: crimson;\n  background-color: black;\n}' },
            { type: 'heading', value: 'Ways to Write a Color' },
            { type: 'text', value: 'CSS accepts several formats for the same color: a named keyword, a hex code, rgb(), or hsl(). All four lines below produce the exact same shade of blue.' },
            { type: 'code', value: 'p { color: blue; }\np { color: #0000ff; }\np { color: rgb(0, 0, 255); }\np { color: hsl(240, 100%, 50%); }' },
            { type: 'text', value: 'Named keywords (like red, blue, tomato) are the easiest to read. Hex codes (#rrggbb) and rgb() are the most common in real projects because they give you precise control over the exact shade.' },
            { type: 'heading', value: 'Transparency with rgba()' },
            { type: 'code', value: '.overlay {\n  background-color: rgba(0, 0, 0, 0.5); /* 50% see-through black */\n}' },
            { type: 'text', value: 'rgba() adds a fourth value, alpha, from 0 (fully transparent) to 1 (fully solid) — useful for overlays, shadows, and hover effects.' }
          ],
          quiz: [
            { question: 'Which property changes the color of text?', options: ['background-color', 'text-color', 'color', 'font-color'], correct: 2, explanation: 'The color property sets the color of an element\'s text content.' },
            { question: 'Which of these is a valid hex color code?', options: ['color(255,0,0)', '#ff0000', 'hex-red', 'rgb-red'], correct: 1, explanation: 'Hex codes start with a # followed by six characters representing red, green, and blue, like #ff0000 for red.' },
            { question: 'What does the fourth value in rgba() control?', options: ['Red intensity', 'Brightness', 'Transparency (alpha)', 'Saturation'], correct: 2, explanation: 'The alpha value in rgba() ranges from 0 (fully transparent) to 1 (fully opaque), controlling how see-through the color is.' }
          ]
        },
        {
          id: 'css-beg-05',
          title: 'The Box Model',
          summary: 'Every element is a box — content, padding, border, and margin',
          content: [
            { type: 'text', value: 'Every single element on a webpage is rendered as a rectangular box. Understanding the box model is the single most important CSS concept for layout — almost every spacing bug traces back to it.' },
            { type: 'heading', value: 'The Four Layers' },
            { type: 'text', value: 'From the inside out: content (the text or image itself), padding (space between the content and the border), border (the line around the padding), and margin (space outside the border, separating this box from others).' },
            { type: 'code', value: '.card {\n  width: 300px;\n  padding: 20px;\n  border: 2px solid gray;\n  margin: 16px;\n}' },
            { type: 'text', value: 'By default, width only sets the content area — the padding and border are added on top of it, so this .card box actually takes up more than 300px of total space.' },
            { type: 'heading', value: 'box-sizing: border-box' },
            { type: 'code', value: '* {\n  box-sizing: border-box;\n}' },
            { type: 'text', value: 'This one declaration changes the math: width now includes the padding and border, so the box stays exactly the size you set. Most developers add this to every project — it makes layouts far more predictable.' },
            { type: 'heading', value: 'Shorthand for Spacing' },
            { type: 'code', value: '/* top right bottom left, clockwise from the top */\nmargin: 10px 20px 10px 20px;\n\n/* top-bottom  left-right */\npadding: 10px 20px;\n\n/* all four sides equal */\nmargin: 12px;' },
          ],
          quiz: [
            { question: 'In order from the inside out, what are the four layers of the box model?', options: ['Margin, border, padding, content', 'Content, padding, border, margin', 'Border, content, margin, padding', 'Padding, content, border, margin'], correct: 1, explanation: 'From the center outward: content, then padding, then border, then margin.' },
            { question: 'By default, does the width property include padding and border?', options: ['Yes, always', 'No — they are added on top of the width', 'Only the border is included', 'Only the padding is included'], correct: 1, explanation: 'By default (content-box sizing), width sets only the content area. Padding and border add extra size on top of it.' },
            { question: 'What does box-sizing: border-box do?', options: ['Removes all borders', 'Makes width include padding and border', 'Adds a border to every element', 'Hides overflowing content'], correct: 1, explanation: 'border-box makes the width and height you set include the padding and border, keeping the total box size predictable.' },
            { question: 'In "margin: 10px 20px 10px 20px;", what order are the four values applied?', options: ['Left, top, right, bottom', 'Top, right, bottom, left', 'Random order', 'Top, bottom, left, right'], correct: 1, explanation: 'The four-value shorthand always goes clockwise starting from the top: top, right, bottom, left.' }
          ]
        },
        {
          id: 'css-beg-06',
          title: 'Text and Font Styling',
          summary: 'Control typography: font, size, weight, and alignment',
          content: [
            { type: 'text', value: 'Typography is a huge part of good design. CSS gives you fine control over how text looks and reads.' },
            { type: 'code', value: 'p {\n  font-family: "Segoe UI", Arial, sans-serif;\n  font-size: 16px;\n  font-weight: bold;\n  font-style: italic;\n  text-align: center;\n  text-decoration: underline;\n  line-height: 1.6;\n}' },
            { type: 'heading', value: 'Font Stacks' },
            { type: 'text', value: 'font-family accepts a list of fonts, separated by commas — the browser tries each one in order and falls back to the next if a font is not installed. Always end the list with a generic family like sans-serif, serif, or monospace as a safety net.' },
            { type: 'heading', value: 'Common Text Properties' },
            { type: 'text', value: 'font-size sets the text size (commonly in px or rem). font-weight controls thickness (normal, bold, or a number like 400/700). text-align controls horizontal alignment (left, center, right, justify). line-height controls the vertical spacing between lines of text, and a value like 1.5 (no unit) usually reads best.' },
            { type: 'text', value: 'Try it yourself: take a paragraph of body text and set line-height to 1.6 and font-size to 18px — notice how much easier long text becomes to read compared to the browser default.' }
          ],
          quiz: [
            { question: 'What is the purpose of listing several fonts in font-family, separated by commas?', options: ['To apply all fonts at once', 'To give the browser fallback options if a font is unavailable', 'To make text bold', 'To increase file size on purpose'], correct: 1, explanation: 'The browser tries each font left to right and uses the first one available, which is why a generic fallback like sans-serif should always be last.' },
            { question: 'Which property controls the space between lines of text?', options: ['text-spacing', 'line-height', 'letter-spacing', 'text-align'], correct: 1, explanation: 'line-height controls the vertical space between lines within a block of text, which greatly affects readability.' },
            { question: 'Which value of text-align stretches text so both edges line up, like a newspaper column?', options: ['center', 'left', 'justify', 'stretch'], correct: 2, explanation: 'text-align: justify spreads words so both the left and right edges of the text are aligned evenly.' }
          ]
        },
        {
          id: 'css-beg-07',
          title: 'Width, Height, and Display',
          summary: 'Understand block, inline, and inline-block behavior',
          content: [
            { type: 'text', value: 'Every HTML element has a default display type that controls how it behaves in the flow of a page. The three basics are block, inline, and inline-block.' },
            { type: 'heading', value: 'Block Elements' },
            { type: 'text', value: 'Block elements (like <div>, <p>, and <h1>) always start on a new line and stretch to fill the full width available. You can set width and height on them freely.' },
            { type: 'heading', value: 'Inline Elements' },
            { type: 'text', value: 'Inline elements (like <span>, <a>, and <strong>) sit in the flow of text, only take up as much width as their content, and do not start a new line. Setting width or height on an inline element has no effect.' },
            { type: 'heading', value: 'Inline-Block' },
            { type: 'code', value: '.tag {\n  display: inline-block;\n  width: 100px;\n  height: 40px;\n  background-color: teal;\n}' },
            { type: 'text', value: 'inline-block gives you the best of both: it sits next to other elements like inline content, but respects width and height like a block element. It is commonly used for buttons, badges, and navigation items.' },
            { type: 'heading', value: 'Hiding Elements' },
            { type: 'code', value: '.hidden {\n  display: none; /* removed entirely, takes up no space */\n}' }
          ],
          quiz: [
            { question: 'What does a block element do by default?', options: ['Sits inline with text', 'Starts on a new line and takes the full available width', 'Has no width or height', 'Is invisible until styled'], correct: 1, explanation: 'Block-level elements always start on a new line and stretch to fill the width of their container.' },
            { question: 'Can you set a width on a normal inline element and have it take effect?', options: ['Yes, always', 'No — width and height are ignored on inline elements', 'Only in Chrome', 'Only if it has an id'], correct: 1, explanation: 'Inline elements size themselves to their content and ignore width/height unless their display is changed.' },
            { question: 'What makes inline-block different from a regular inline element?', options: ['It hides the element', 'It respects width and height while still sitting inline with other content', 'It always breaks onto a new line', 'It removes all padding'], correct: 1, explanation: 'inline-block combines inline flow (sitting next to other elements) with block-like control over width and height.' },
            { question: 'What does display: none do to an element?', options: ['Makes it transparent', 'Removes it completely — it takes up no space', 'Makes it gray', 'Moves it off screen but keeps its space'], correct: 1, explanation: 'display: none removes the element from the page entirely, as if it were never there, freeing up its space.' }
          ]
        },
        {
          id: 'css-beg-08',
          title: 'Borders and Border Radius',
          summary: 'Add outlines and rounded corners to elements',
          content: [
            { type: 'text', value: 'A border is a line drawn around the edge of an element, right between the padding and the margin.' },
            { type: 'code', value: '.box {\n  border-width: 2px;\n  border-style: solid;\n  border-color: navy;\n}\n\n/* shorthand — same result in one line */\n.box {\n  border: 2px solid navy;\n}' },
            { type: 'text', value: 'A border needs all three pieces to show up: width, style, and color. Without border-style set to something like solid, dashed, or dotted, no border appears at all — even if width and color are set.' },
            { type: 'heading', value: 'Styling One Side' },
            { type: 'code', value: '.card {\n  border-bottom: 3px solid orange;\n}' },
            { type: 'heading', value: 'Border Radius' },
            { type: 'code', value: '.rounded {\n  border-radius: 12px;\n}\n\n.pill-button {\n  border-radius: 999px; /* fully rounded ends */\n}\n\n.circle {\n  width: 80px;\n  height: 80px;\n  border-radius: 50%; /* turns a square into a perfect circle */\n}' },
            { type: 'text', value: 'border-radius rounds the corners of a box. A value equal to half the element\'s width and height (or 50%) turns a square element into a perfect circle — a common trick for profile pictures and avatars.' }
          ],
          quiz: [
            { question: 'Which three properties does a visible border need?', options: ['Width, radius, and color', 'Width, style, and color', 'Style, margin, and padding', 'Color, radius, and shadow'], correct: 1, explanation: 'A border needs border-width, border-style (like solid or dashed), and border-color to actually appear.' },
            { question: 'What happens if you set border-width and border-color but forget border-style?', options: ['A solid border shows anyway', 'No border shows at all', 'The browser throws an error', 'A dotted border shows by default'], correct: 1, explanation: 'Without a border-style, the browser has no line pattern to draw, so no border appears even with width and color set.' },
            { question: 'What border-radius value turns a square box into a perfect circle?', options: ['0', '10px', '50%', '100px'], correct: 2, explanation: 'Setting border-radius to 50% on an element with equal width and height rounds it into a perfect circle.' }
          ]
        },
        {
          id: 'css-beg-09',
          title: 'CSS Units: px, %, em, and rem',
          summary: 'Choose the right unit for sizing and spacing',
          content: [
            { type: 'text', value: 'CSS gives you several units to measure size. Choosing the right one makes your layouts more flexible and easier to maintain.' },
            { type: 'heading', value: 'px — Pixels (Absolute)' },
            { type: 'text', value: 'A pixel is a fixed, absolute unit. "font-size: 16px" is always 16px, no matter what. Pixels are precise and predictable, but do not automatically scale if a user changes their browser\'s font size settings.' },
            { type: 'heading', value: '% — Percentage (Relative to Parent)' },
            { type: 'code', value: '.sidebar {\n  width: 25%; /* a quarter of its parent container\'s width */\n}' },
            { type: 'text', value: 'A percentage is relative to the size of the parent element — useful for building flexible, responsive layouts.' },
            { type: 'heading', value: 'em — Relative to the Parent\'s Font Size' },
            { type: 'text', value: '1em equals the current font-size of the element\'s parent. If a parent has font-size: 16px, then 2em inside it equals 32px. This can compound and get confusing when em is nested many levels deep.' },
            { type: 'heading', value: 'rem — Relative to the Root Font Size' },
            { type: 'code', value: 'html {\n  font-size: 16px; /* the root */\n}\n\nh1 {\n  font-size: 2rem; /* always 32px, no matter where h1 is nested */\n}' },
            { type: 'text', value: 'rem stands for "root em" — it is always relative to the font-size set on the <html> element, never to a nearby parent. This makes it predictable and is why most developers prefer rem for font sizes and spacing.' }
          ],
          quiz: [
            { question: 'Which unit is a fixed, absolute size that never scales relative to anything else?', options: ['em', 'rem', 'px', '%'], correct: 2, explanation: 'A pixel (px) is an absolute unit — 16px is always 16px, regardless of parent elements or the page\'s root font size.' },
            { question: 'What is a percentage size relative to?', options: ['The browser window only', 'The root html element', 'Its parent element', 'The font-size of the body only'], correct: 2, explanation: 'A percentage value is calculated relative to the corresponding size of the parent element.' },
            { question: 'What makes rem different from em?', options: ['rem is always relative to the root html font-size, while em is relative to the parent', 'rem is an absolute unit like px', 'em only works on headings', 'There is no difference'], correct: 0, explanation: 'em is relative to the parent\'s font-size and can compound when nested, while rem is always relative to the single root font-size, making it more predictable.' }
          ]
        },
        {
          id: 'css-beg-10',
          title: 'The Cascade and Specificity',
          summary: 'Understand which rule wins when styles conflict',
          content: [
            { type: 'text', value: 'CSS stands for Cascading Style Sheets — the "cascading" part describes the rules the browser uses to decide which style wins when more than one rule targets the same element.' },
            { type: 'heading', value: 'Specificity: Who Wins?' },
            { type: 'text', value: 'From weakest to strongest: element selectors (like p) are the weakest, class selectors (like .highlight) are stronger, id selectors (like #title) are stronger still, and inline styles (style="...") beat almost everything.' },
            { type: 'code', value: 'p { color: black; }        /* weakest */\n.highlight { color: green; } /* beats element selector */\n#title { color: purple; }   /* beats class selector */\n\n<p id="title" class="highlight">What color am I?</p>\n<!-- Answer: purple. The id selector wins. -->' },
            { type: 'heading', value: 'Order Matters Too' },
            { type: 'text', value: 'When two selectors have equal specificity, the one that appears later in the stylesheet wins. This is the "cascade" — later rules override earlier ones of the same strength.' },
            { type: 'heading', value: 'The !important Escape Hatch' },
            { type: 'code', value: 'p {\n  color: red !important;\n}' },
            { type: 'text', value: '!important overrides normal specificity rules and almost always wins. It is tempting to use, but it makes stylesheets hard to debug and maintain — treat it as a last resort, not a habit.' }
          ],
          quiz: [
            { question: 'From weakest to strongest, which order is correct?', options: ['ID, class, element', 'Element, class, ID', 'Class, ID, element', 'ID, element, class'], correct: 1, explanation: 'Element selectors are weakest, class selectors are stronger, and ID selectors are stronger still. Inline styles are stronger than all of them.' },
            { question: 'If a p element has both a matching class rule and a matching id rule with different colors, which one is applied?', options: ['The class rule, always', 'The one written first', 'The id rule, because it is more specific', 'Both are blended together'], correct: 2, explanation: 'An id selector has higher specificity than a class selector, so its declaration wins regardless of order.' },
            { question: 'When two rules have equal specificity, which one wins?', options: ['The shorter one', 'The one that appears later in the CSS', 'The one that appears earlier in the CSS', 'Neither applies'], correct: 1, explanation: 'When specificity is tied, the cascade falls back to source order — the last rule declared wins.' },
            { question: 'Why should !important generally be avoided?', options: ['It is not supported by modern browsers', 'It makes styles load slower', 'It overrides normal specificity and makes stylesheets hard to debug', 'It only works on ids'], correct: 2, explanation: '!important short-circuits the normal cascade, which can make it very hard to track down why a style is or is not applying later on.' }
          ]
        }
      ],
      exam: [
        { question: 'What does CSS stand for?', options: ['Creative Style Sheets', 'Cascading Style Sheets', 'Computer Styled Sections', 'Colorful Style Syntax'], correct: 1 },
        { question: 'What are the two parts of a declaration inside a rule?', options: ['Tag and attribute', 'Property and value', 'Selector and comment', 'Element and class'], correct: 1 },
        { question: 'Which tag links an external stylesheet to an HTML page?', options: ['<style>', '<script>', '<css>', '<link>'], correct: 3 },
        { question: 'Which method applies styling to only one single element?', options: ['External CSS', 'Internal CSS', 'Inline CSS', 'Global CSS'], correct: 2 },
        { question: 'Which symbol starts a class selector?', options: ['# (hash)', '. (dot)', '* (asterisk)', '@ (at sign)'], correct: 1 },
        { question: 'Which symbol starts an id selector?', options: ['. (dot)', '# (hash)', '& (ampersand)', '% (percent)'], correct: 1 },
        { question: 'Which property changes the color of text?', options: ['background-color', 'text-color', 'color', 'font-color'], correct: 2 },
        { question: 'Which is a valid hex color code?', options: ['color(255,0,0)', '#ff0000', 'hex-red', 'rgb-red'], correct: 1 },
        { question: 'In order from the inside out, what are the four layers of the box model?', options: ['Margin, border, padding, content', 'Content, padding, border, margin', 'Border, content, margin, padding', 'Padding, content, border, margin'], correct: 1 },
        { question: 'What does box-sizing: border-box do?', options: ['Removes all borders', 'Makes width include padding and border', 'Adds a border to every element', 'Hides overflowing content'], correct: 1 },
        { question: 'Which property controls the space between lines of text?', options: ['text-spacing', 'line-height', 'letter-spacing', 'text-align'], correct: 1 },
        { question: 'What does a block element do by default?', options: ['Sits inline with text', 'Starts on a new line and takes full width', 'Has no width or height', 'Is invisible until styled'], correct: 1 },
        { question: 'What makes inline-block different from inline?', options: ['It hides the element', 'It respects width and height while sitting inline', 'It always breaks onto a new line', 'It removes all padding'], correct: 1 },
        { question: 'What does display: none do?', options: ['Makes it transparent', 'Removes it completely from the page', 'Makes it gray', 'Moves it off screen but keeps its space'], correct: 1 },
        { question: 'Which three properties does a visible border need?', options: ['Width, radius, and color', 'Width, style, and color', 'Style, margin, and padding', 'Color, radius, and shadow'], correct: 1 },
        { question: 'What border-radius value makes a square a perfect circle?', options: ['0', '10px', '50%', '100px'], correct: 2 },
        { question: 'Which unit is a fixed, absolute size?', options: ['em', 'rem', 'px', '%'], correct: 2 },
        { question: 'What is rem always relative to?', options: ['The nearest parent element', 'The root html font-size', 'The browser window width', 'The body\'s padding'], correct: 1 },
        { question: 'From weakest to strongest specificity, which order is correct?', options: ['ID, class, element', 'Element, class, ID', 'Class, ID, element', 'ID, element, class'], correct: 1 },
        { question: 'Why should !important generally be avoided?', options: ['It is unsupported in modern browsers', 'It makes styles load slower', 'It overrides normal specificity and makes debugging hard', 'It only works on ids'], correct: 2 }
      ]
    }
  },
  javascript: {
    beginner: {
      lessons: [
        {
          id: 'js-beg-01',
          title: 'What is JavaScript?',
          summary: 'Add JavaScript to a page and print your first output',
          content: [
            { type: 'text', value: 'JavaScript is the programming language of the web. If HTML is the structure and CSS is the style, JavaScript is the behavior — it makes pages interactive: clicking buttons, validating forms, updating content without reloading the page.' },
            { type: 'heading', value: 'Adding JavaScript to a Page' },
            { type: 'code', value: '<!-- Internal: inside a <script> tag -->\n<script>\n  console.log("Hello, world!");\n</script>\n\n<!-- External: in its own .js file -->\n<script src="app.js"></script>' },
            { type: 'text', value: 'Just like CSS, JavaScript can be inline, internal (in a <script> tag), or external (in its own .js file). External is the standard for real projects — it keeps your HTML clean and lets the browser cache the file.' },
            { type: 'heading', value: 'console.log()' },
            { type: 'text', value: 'console.log() is the single most useful tool for learning and debugging JavaScript. It prints a value to the browser\'s console (open it with F12 or right-click → Inspect → Console) so you can see what your code is doing.' },
            { type: 'code', value: 'console.log("Hello!");\nconsole.log(2 + 2);\nconsole.log("The answer is:", 42);' },
            { type: 'heading', value: 'Statements and Semicolons' },
            { type: 'text', value: 'JavaScript code is made of statements — instructions the browser runs one after another, top to bottom. Each statement usually ends with a semicolon. JavaScript can often infer where a statement ends without one, but writing the semicolon explicitly avoids subtle bugs and is considered best practice.' },
            { type: 'heading', value: 'Comments' },
            { type: 'code', value: '// This is a single-line comment\n\n/* This is a\n   multi-line comment */\n\nconsole.log("This line actually runs"); // comments can follow code too' },
            { type: 'text', value: 'Try it yourself: open any webpage, open the browser console, and type console.log(1 + 1) — press Enter and see 2 appear instantly. The console is a live JavaScript sandbox.' }
          ],
          quiz: [
            { question: 'What does JavaScript primarily add to a webpage?', options: ['Structure', 'Visual style', 'Interactive behavior', 'Search engine ranking'], correct: 2, explanation: 'HTML provides structure, CSS provides style, and JavaScript adds behavior and interactivity to a webpage.' },
            { question: 'What does console.log() do?', options: ['Deletes a variable', 'Prints a value to the browser console', 'Creates a new webpage', 'Saves data permanently'], correct: 1, explanation: 'console.log() prints values to the browser\'s developer console — the most common tool for debugging and learning JavaScript.' },
            { question: 'Which tag adds an external JavaScript file to a page?', options: ['<javascript src="app.js">', '<script src="app.js"></script>', '<js href="app.js">', '<link src="app.js">'], correct: 1, explanation: 'The <script src="..."></script> tag links an external JavaScript file. It can go in the <head> or before the closing </body> tag.' }
          ]
        },
        {
          id: 'js-beg-02',
          title: 'Variables: let, const, and var',
          summary: 'Store and label data so you can use it later',
          content: [
            { type: 'text', value: 'A variable is a named container for a value. Instead of retyping "John Smith" everywhere, you store it once in a variable and reuse the name.' },
            { type: 'heading', value: 'Declaring a Variable' },
            { type: 'code', value: 'let name = "John Smith";\nlet age = 25;\n\nconsole.log(name); // John Smith\nconsole.log(age);  // 25' },
            { type: 'text', value: 'The = sign here is the assignment operator — it stores the value on the right into the variable on the left. This is different from math\'s "equals"; think of it as "gets set to".' },
            { type: 'heading', value: 'let vs const' },
            { type: 'code', value: 'let score = 0;\nscore = score + 10; // fine — let can be reassigned\n\nconst pi = 3.14159;\npi = 4; // Error! const cannot be reassigned' },
            { type: 'text', value: 'Use const by default — it signals "this value never changes" and prevents accidental reassignment. Use let only when you know the value needs to change later, like a counter or a running total.' },
            { type: 'heading', value: 'var — The Old Way' },
            { type: 'text', value: 'var is the original way to declare variables, from before 2015. It still works, but has confusing scoping rules that cause bugs. Modern JavaScript uses let and const instead — you will rarely see var in new code.' },
            { type: 'heading', value: 'Naming Rules' },
            { type: 'code', value: 'let firstName = "Amara";   // camelCase — the JS convention\nlet _private = "secret";  // can start with underscore\nlet $element = null;      // can start with $\n\n// let 1stPlace = "gold";  // Error! cannot start with a number\n// let my-name = "Kal";    // Error! hyphens are not allowed' },
            { type: 'text', value: 'Variable names can contain letters, digits, underscores, and dollar signs, but cannot start with a digit. JavaScript convention is camelCase: firstWordLowercase, restOfWordsCapitalized.' }
          ],
          quiz: [
            { question: 'Which keyword should you use by default for a variable that will not be reassigned?', options: ['var', 'let', 'const', 'static'], correct: 2, explanation: 'const signals that a variable\'s value will not change. Use it by default, and switch to let only when reassignment is needed.' },
            { question: 'What happens if you try to reassign a const variable?', options: ['It works normally', 'JavaScript throws an error', 'The value is ignored silently', 'It converts to let automatically'], correct: 1, explanation: 'Reassigning a const variable throws a TypeError. const variables must keep the same reference after declaration.' },
            { question: 'Which of these is a valid JavaScript variable name?', options: ['1stPlace', 'my-name', 'firstName', 'my name'], correct: 2, explanation: 'firstName follows the rules: it starts with a letter and uses camelCase. Variable names cannot start with a digit, contain hyphens, or contain spaces.' },
            { question: 'Why is var less commonly used in modern JavaScript?', options: ['It is slower', 'It has confusing scoping rules compared to let and const', 'It was removed from JavaScript', 'It only works with numbers'], correct: 1, explanation: 'var has function-level scoping and can be redeclared, which leads to subtle bugs. let and const use clearer block-level scoping.' }
          ]
        },
        {
          id: 'js-beg-03',
          title: 'Data Types',
          summary: 'The kinds of values JavaScript can store',
          content: [
            { type: 'text', value: 'Every value in JavaScript has a type. Knowing the basic types is essential — they behave differently in comparisons, math, and logic.' },
            { type: 'heading', value: 'Primitive Types' },
            { type: 'code', value: 'let name = "Amara";        // string — text, in quotes\nlet age = 25;              // number — integers and decimals\nlet isStudent = true;      // boolean — true or false\nlet nothing = null;        // null — intentionally empty\nlet notSet;                 // undefined — declared but no value yet' },
            { type: 'heading', value: 'Checking a Type with typeof' },
            { type: 'code', value: 'console.log(typeof "hello");   // "string"\nconsole.log(typeof 42);        // "number"\nconsole.log(typeof true);      // "boolean"\nconsole.log(typeof undefined); // "undefined"\nconsole.log(typeof null);      // "object" (a famous, long-standing JS quirk)' },
            { type: 'heading', value: 'null vs undefined' },
            { type: 'text', value: 'undefined means a variable was declared but never given a value — JavaScript sets this automatically. null means "empty on purpose" — you set it yourself to say "there is deliberately no value here".' },
            { type: 'heading', value: 'Two Non-Primitive Types (Preview)' },
            { type: 'code', value: 'let colors = ["red", "green", "blue"]; // array — an ordered list\nlet person = { name: "Amara", age: 25 }; // object — key/value pairs' },
            { type: 'text', value: 'Arrays and objects are covered in their own lessons later, but it helps to recognize them now: square brackets [] make an array, curly braces {} make an object.' }
          ],
          quiz: [
            { question: 'Which type represents text in JavaScript?', options: ['number', 'string', 'boolean', 'text'], correct: 1, explanation: 'A string represents text and is always written inside quotes, like "Hello".' },
            { question: 'What does typeof true return?', options: ['"true"', '"boolean"', '"bool"', '"logical"'], correct: 1, explanation: 'typeof true returns the string "boolean" — booleans represent true/false values.' },
            { question: 'What is the difference between null and undefined?', options: ['They are exactly the same', 'undefined means never assigned; null means intentionally set to empty', 'null is for numbers; undefined is for strings', 'undefined is newer than null'], correct: 1, explanation: 'undefined is JavaScript\'s automatic value for a variable with no assigned value. null is a value you deliberately assign to represent "no value".' },
            { question: 'Which symbol is used to create an array?', options: ['{}', '()', '[]', '<>'], correct: 2, explanation: 'Square brackets [] create an array — an ordered list of values, like ["red", "green", "blue"].' }
          ]
        },
        {
          id: 'js-beg-04',
          title: 'Operators',
          summary: 'Do math, compare values, and combine logic',
          content: [
            { type: 'text', value: 'Operators let you calculate, compare, and combine values. JavaScript groups them into arithmetic, comparison, and logical operators.' },
            { type: 'heading', value: 'Arithmetic Operators' },
            { type: 'code', value: 'console.log(5 + 3);  // 8   addition\nconsole.log(5 - 3);  // 2   subtraction\nconsole.log(5 * 3);  // 15  multiplication\nconsole.log(5 / 3);  // 1.666... division\nconsole.log(5 % 3);  // 2   remainder (modulo)\nconsole.log(5 ** 2); // 25  exponent (5 squared)' },
            { type: 'heading', value: 'Assignment Shortcuts' },
            { type: 'code', value: 'let score = 10;\nscore += 5;  // same as: score = score + 5  → 15\nscore -= 3;  // same as: score = score - 3  → 12\nscore *= 2;  // same as: score = score * 2  → 24\n\nlet count = 0;\ncount++;     // same as: count = count + 1\ncount--;     // same as: count = count - 1' },
            { type: 'heading', value: 'Comparison Operators' },
            { type: 'code', value: 'console.log(5 == "5");   // true  — loosely equal (converts type first)\nconsole.log(5 === "5");  // false — strictly equal (checks type too)\nconsole.log(5 !== "5");  // true  — strictly not equal\nconsole.log(5 > 3);      // true\nconsole.log(5 <= 5);     // true' },
            { type: 'text', value: 'Always prefer === and !== over == and !=. The triple-equals checks both value and type, avoiding the surprising type conversions that == performs behind the scenes.' },
            { type: 'heading', value: 'Logical Operators' },
            { type: 'code', value: 'console.log(true && false); // false — AND: both must be true\nconsole.log(true || false); // true  — OR: at least one must be true\nconsole.log(!true);         // false — NOT: flips the value' }
          ],
          quiz: [
            { question: 'What does the % operator return?', options: ['A percentage', 'The remainder of a division', 'A rounded result', 'An exponent'], correct: 1, explanation: 'The modulo operator (%) returns the remainder after dividing two numbers. 5 % 3 is 2, because 3 goes into 5 once with 2 left over.' },
            { question: 'Why is === generally preferred over ==?', options: ['It is shorter to type', 'It checks both value and type, avoiding unexpected conversions', 'It only works with numbers', 'It is faster in every case'], correct: 1, explanation: 'The strict equality operator (===) checks that both the value and type match, avoiding surprising results like 5 == "5" being true.' },
            { question: 'What does score += 5 do?', options: ['Sets score to 5', 'Adds 5 to score and reassigns it', 'Compares score to 5', 'Divides score by 5'], correct: 1, explanation: 'score += 5 is shorthand for score = score + 5 — it adds 5 to the current value and stores the result back in score.' },
            { question: 'What does true && false evaluate to?', options: ['true', 'false', 'undefined', 'An error'], correct: 1, explanation: 'The && (AND) operator only returns true if both sides are true. Since one side is false, the whole expression is false.' }
          ]
        },
        {
          id: 'js-beg-05',
          title: 'Strings and Template Literals',
          summary: 'Work with and combine text',
          content: [
            { type: 'text', value: 'Strings represent text. JavaScript gives you three ways to write them, plus powerful built-in tools for working with the text they contain.' },
            { type: 'heading', value: 'Writing Strings' },
            { type: 'code', value: 'let a = \'Single quotes\';\nlet b = "Double quotes";\nlet c = `Backticks (template literals)`;' },
            { type: 'heading', value: 'Concatenation (the Old Way)' },
            { type: 'code', value: 'let firstName = "Amara";\nlet age = 25;\n\nlet message = "Hello, " + firstName + "! You are " + age + " years old.";\nconsole.log(message);' },
            { type: 'heading', value: 'Template Literals (the Modern Way)' },
            { type: 'code', value: 'let firstName = "Amara";\nlet age = 25;\n\nlet message = `Hello, ${firstName}! You are ${age} years old.`;\nconsole.log(message);' },
            { type: 'text', value: 'Template literals use backticks (`) instead of quotes. Anything inside ${ } is evaluated as JavaScript and inserted directly into the string — no messy + signs needed. They also support real line breaks.' },
            { type: 'heading', value: 'Useful String Methods' },
            { type: 'code', value: 'let text = "  Hello, World!  ";\n\nconsole.log(text.length);        // 19 — number of characters\nconsole.log(text.trim());        // "Hello, World!" — removes outer spaces\nconsole.log(text.toUpperCase());  // "  HELLO, WORLD!  "\nconsole.log(text.toLowerCase());  // "  hello, world!  "\nconsole.log(text.includes("World")); // true\nconsole.log(text.trim().slice(0, 5)); // "Hello" — extract characters' }
          ],
          quiz: [
            { question: 'What character wraps a template literal?', options: ['Single quotes (\')', 'Double quotes (")', 'Backticks (`)', 'Square brackets ([])'], correct: 2, explanation: 'Template literals are wrapped in backticks (`), which allow ${} interpolation and multi-line strings.' },
            { question: 'What does ${} do inside a template literal?', options: ['Adds a comment', 'Evaluates JavaScript and inserts the result into the string', 'Creates a new variable', 'Escapes a character'], correct: 1, explanation: '${expression} inside a template literal runs the JavaScript expression and inserts its result directly into the string.' },
            { question: 'What does the .trim() string method do?', options: ['Deletes the string', 'Removes whitespace from the start and end of a string', 'Shortens a string to 10 characters', 'Converts to uppercase'], correct: 1, explanation: '.trim() removes leading and trailing whitespace, leaving whitespace in the middle of the string untouched.' },
            { question: 'What does "hello".length return?', options: ['4', '5', '6', 'undefined'], correct: 1, explanation: '.length counts the number of characters in a string. "hello" has 5 characters: h-e-l-l-o.' }
          ]
        },
        {
          id: 'js-beg-06',
          title: 'Conditionals: if, else, and switch',
          summary: 'Make your code decide between paths',
          content: [
            { type: 'text', value: 'Conditionals let your program make decisions — run one block of code if something is true, and a different block if it is not.' },
            { type: 'heading', value: 'if / else' },
            { type: 'code', value: 'let age = 20;\n\nif (age >= 18) {\n  console.log("You can vote.");\n} else {\n  console.log("Too young to vote.");\n}' },
            { type: 'heading', value: 'else if for Multiple Conditions' },
            { type: 'code', value: 'let score = 75;\n\nif (score >= 90) {\n  console.log("Grade: A");\n} else if (score >= 80) {\n  console.log("Grade: B");\n} else if (score >= 70) {\n  console.log("Grade: C");\n} else {\n  console.log("Grade: F");\n}' },
            { type: 'text', value: 'JavaScript checks each condition top to bottom and runs the first one that is true, then skips the rest — even if a later condition would also be true.' },
            { type: 'heading', value: 'Truthy and Falsy' },
            { type: 'text', value: 'Every value in JavaScript is either "truthy" or "falsy" when checked in a condition. The falsy values are: false, 0, "" (empty string), null, undefined, and NaN. Everything else — including "0" as a string and any non-empty string — is truthy.' },
            { type: 'code', value: 'if ("") {\n  console.log("This never runs — empty string is falsy");\n}\n\nif ("hello") {\n  console.log("This runs — non-empty strings are truthy");\n}' },
            { type: 'heading', value: 'switch Statements' },
            { type: 'code', value: 'let day = "Mon";\n\nswitch (day) {\n  case "Mon":\n    console.log("Start of the week");\n    break;\n  case "Fri":\n    console.log("Almost the weekend");\n    break;\n  default:\n    console.log("A regular day");\n}' },
            { type: 'text', value: 'switch compares one value against several possible cases. Do not forget break after each case — without it, execution "falls through" into the next case even if it does not match.' }
          ],
          quiz: [
            { question: 'What runs if the if condition is false and there is an else block?', options: ['Nothing', 'The if block runs anyway', 'The else block', 'Both blocks run'], correct: 2, explanation: 'If the condition is false, the else block runs instead of the if block.' },
            { question: 'Which of these values is falsy in JavaScript?', options: ['"0" (string)', '1', '""  (empty string)', '"false" (string)'], correct: 2, explanation: 'An empty string ("") is falsy. Non-empty strings, including "0" and "false" as text, are truthy.' },
            { question: 'What happens if you forget break in a switch case?', options: ['A syntax error occurs', 'Execution falls through into the next case', 'The switch stops entirely', 'Nothing changes'], correct: 1, explanation: 'Without break, JavaScript continues executing the next case\'s code even if it does not match, which is called "fall-through".' },
            { question: 'In a chain of else if statements, how many blocks can run?', options: ['All matching blocks', 'Only the first one whose condition is true', 'Only the last one', 'None, unless using switch'], correct: 1, explanation: 'JavaScript checks conditions top to bottom and stops at the first true one — later else if blocks are skipped even if they would also be true.' }
          ]
        },
        {
          id: 'js-beg-07',
          title: 'Arrays',
          summary: 'Store an ordered list of values',
          content: [
            { type: 'text', value: 'An array stores multiple values in a single variable, in order. Think of it as a numbered list where the numbering starts at 0.' },
            { type: 'heading', value: 'Creating and Accessing an Array' },
            { type: 'code', value: 'let fruits = ["apple", "banana", "cherry"];\n\nconsole.log(fruits[0]); // "apple"  — the first item\nconsole.log(fruits[1]); // "banana"\nconsole.log(fruits.length); // 3' },
            { type: 'text', value: 'Arrays are zero-indexed — the first item is at position 0, not 1. fruits[3] does not exist here and returns undefined.' },
            { type: 'heading', value: 'Modifying Arrays' },
            { type: 'code', value: 'let fruits = ["apple", "banana"];\n\nfruits.push("cherry");   // adds to the end → ["apple", "banana", "cherry"]\nfruits.pop();             // removes from the end → ["apple", "banana"]\nfruits.unshift("mango");  // adds to the start → ["mango", "apple", "banana"]\nfruits.shift();            // removes from the start → ["apple", "banana"]' },
            { type: 'heading', value: 'Looping Over an Array' },
            { type: 'code', value: 'let fruits = ["apple", "banana", "cherry"];\n\nfruits.forEach(function(fruit) {\n  console.log(fruit);\n});\n// prints: apple, banana, cherry — one per line' },
            { type: 'heading', value: 'Useful Array Methods' },
            { type: 'code', value: 'let numbers = [1, 2, 3, 4, 5];\n\nconsole.log(numbers.includes(3));  // true\nconsole.log(numbers.indexOf(4));   // 3 — position of the value 4\nconsole.log(numbers.join(", "));   // "1, 2, 3, 4, 5" — array to string\nconsole.log(numbers.reverse());    // [5, 4, 3, 2, 1]' }
          ],
          quiz: [
            { question: 'What position is the first item in an array?', options: ['1', '0', '-1', 'first'], correct: 1, explanation: 'Arrays are zero-indexed in JavaScript — the first item is at index 0, the second at index 1, and so on.' },
            { question: 'Which method adds an item to the end of an array?', options: ['.pop()', '.push()', '.shift()', '.unshift()'], correct: 1, explanation: '.push() adds one or more items to the end of an array. .pop() removes the last item instead.' },
            { question: 'What does .length return on an array?', options: ['The last index', 'The number of items in the array', 'The first item', 'The array\'s data type'], correct: 1, explanation: '.length returns the total count of items in the array — for ["a","b","c"], .length is 3.' },
            { question: 'Which method removes the first item from an array?', options: ['.pop()', '.push()', '.shift()', '.slice()'], correct: 2, explanation: '.shift() removes and returns the first item of the array, shifting all remaining items down by one position.' }
          ]
        },
        {
          id: 'js-beg-08',
          title: 'Loops: for and while',
          summary: 'Repeat code without writing it over and over',
          content: [
            { type: 'text', value: 'Loops let you repeat a block of code multiple times — perfect for going through lists, counting, or repeating an action a set number of times.' },
            { type: 'heading', value: 'The for Loop' },
            { type: 'code', value: 'for (let i = 0; i < 5; i++) {\n  console.log(i);\n}\n// prints: 0, 1, 2, 3, 4' },
            { type: 'text', value: 'A for loop has three parts, separated by semicolons: the starting point (let i = 0), the condition to keep looping (i < 5), and what happens after each pass (i++). The loop stops as soon as the condition becomes false.' },
            { type: 'heading', value: 'Looping Through an Array with for' },
            { type: 'code', value: 'let fruits = ["apple", "banana", "cherry"];\n\nfor (let i = 0; i < fruits.length; i++) {\n  console.log(fruits[i]);\n}' },
            { type: 'heading', value: 'The while Loop' },
            { type: 'code', value: 'let count = 0;\n\nwhile (count < 3) {\n  console.log("Count is " + count);\n  count++;\n}' },
            { type: 'text', value: 'A while loop keeps running as long as its condition stays true. It checks the condition first — if it starts out false, the loop body never runs at all. Always make sure something inside the loop eventually makes the condition false, or you will get an infinite loop that freezes the page.' },
            { type: 'heading', value: 'break and continue' },
            { type: 'code', value: 'for (let i = 0; i < 10; i++) {\n  if (i === 5) break;    // stop the loop entirely\n  if (i % 2 === 0) continue; // skip to the next iteration\n  console.log(i); // prints: 1, 3\n}' }
          ],
          quiz: [
            { question: 'What are the three parts of a for loop, separated by semicolons?', options: ['Start, middle, end', 'Initialization, condition, increment/decrement', 'Array, index, value', 'Name, type, value'], correct: 1, explanation: 'A for loop has: initialization (starting point), a condition (when to keep going), and an update step (like i++) run after each pass.' },
            { question: 'What happens if a while loop\'s condition is false from the very start?', options: ['It runs once anyway', 'The loop body never runs', 'It throws an error', 'It runs forever'], correct: 1, explanation: 'A while loop checks its condition before each pass, including the first one. If it is false immediately, the loop body is skipped entirely.' },
            { question: 'What does break do inside a loop?', options: ['Skips to the next iteration', 'Stops the loop completely', 'Pauses the loop for 1 second', 'Restarts the loop from zero'], correct: 1, explanation: 'break immediately exits the loop entirely, and no further iterations run.' },
            { question: 'What does continue do inside a loop?', options: ['Stops the loop', 'Skips the rest of the current iteration and moves to the next one', 'Restarts the whole program', 'Deletes the loop variable'], correct: 1, explanation: 'continue skips the remaining code in the current pass and jumps straight to the next iteration of the loop.' }
          ]
        },
        {
          id: 'js-beg-09',
          title: 'Functions',
          summary: 'Package reusable blocks of code',
          content: [
            { type: 'text', value: 'A function is a reusable block of code that performs a task. Instead of repeating the same logic everywhere, you write it once as a function and call it whenever you need it.' },
            { type: 'heading', value: 'Function Declaration' },
            { type: 'code', value: 'function greet(name) {\n  return "Hello, " + name + "!";\n}\n\nconsole.log(greet("Amara")); // "Hello, Amara!"\nconsole.log(greet("Kal"));   // "Hello, Kal!"' },
            { type: 'text', value: 'name here is a parameter — a placeholder for whatever value gets passed in when the function is called. "Amara" and "Kal" are arguments — the actual values supplied at call time.' },
            { type: 'heading', value: 'The return Keyword' },
            { type: 'text', value: 'return sends a value back out of the function, and immediately stops the function from running any further. A function without a return statement returns undefined.' },
            { type: 'code', value: 'function add(a, b) {\n  return a + b;\n}\n\nlet total = add(3, 4);\nconsole.log(total); // 7' },
            { type: 'heading', value: 'Default Parameters' },
            { type: 'code', value: 'function greet(name = "friend") {\n  return "Hello, " + name + "!";\n}\n\nconsole.log(greet());        // "Hello, friend!"\nconsole.log(greet("Amara")); // "Hello, Amara!"' },
            { type: 'heading', value: 'Arrow Functions' },
            { type: 'code', value: '// Traditional function\nfunction add(a, b) {\n  return a + b;\n}\n\n// Arrow function — shorter syntax, same result\nconst add2 = (a, b) => {\n  return a + b;\n};\n\n// Arrow function with implicit return (one-line body)\nconst add3 = (a, b) => a + b;\n\nconsole.log(add3(3, 4)); // 7' },
            { type: 'text', value: 'Arrow functions are a shorter way to write functions, common in modern JavaScript. When the function body is a single expression, you can drop the curly braces and the return keyword — the result is returned automatically.' }
          ],
          quiz: [
            { question: 'What is the difference between a parameter and an argument?', options: ['They are the same thing', 'A parameter is the placeholder in the function definition; an argument is the actual value passed in', 'An argument is only used in arrow functions', 'A parameter must always be a number'], correct: 1, explanation: 'Parameters are named placeholders listed in the function definition. Arguments are the real values you pass in when calling the function.' },
            { question: 'What does the return keyword do?', options: ['Prints a value to the console', 'Sends a value back and stops the function', 'Restarts the function', 'Deletes the function'], correct: 1, explanation: 'return sends a value out of the function and immediately ends the function\'s execution — code after return does not run.' },
            { question: 'What does a function return if it has no return statement?', options: ['0', 'An empty string', 'undefined', 'An error'], correct: 2, explanation: 'A function without an explicit return statement automatically returns undefined.' },
            { question: 'What is the shortest way to write an arrow function that just returns a + b?', options: ['(a, b) => a + b', 'function(a, b) => a + b', '(a, b) { return a + b }', 'arrow(a, b) return a + b'], correct: 0, explanation: 'When an arrow function\'s body is a single expression, you can omit the curly braces and return keyword: (a, b) => a + b returns the sum automatically.' }
          ]
        },
        {
          id: 'js-beg-10',
          title: 'Objects',
          summary: 'Group related data together with key-value pairs',
          content: [
            { type: 'text', value: 'An object stores data as key-value pairs, letting you group related information together — much closer to how we think about real-world things than a plain list.' },
            { type: 'heading', value: 'Creating an Object' },
            { type: 'code', value: 'const person = {\n  name: "Amara",\n  age: 25,\n  isStudent: true\n};' },
            { type: 'text', value: 'Each name: value pair is called a property. name, age, and isStudent are the keys; "Amara", 25, and true are their values.' },
            { type: 'heading', value: 'Accessing Properties' },
            { type: 'code', value: 'console.log(person.name);      // dot notation → "Amara"\nconsole.log(person["age"]);    // bracket notation → 25' },
            { type: 'text', value: 'Dot notation (person.name) is the most common and readable way to access a property. Bracket notation (person["name"]) is required when the property name is stored in a variable or contains spaces.' },
            { type: 'heading', value: 'Updating and Adding Properties' },
            { type: 'code', value: 'person.age = 26;              // update an existing property\nperson.city = "Dessie";       // add a brand new property\n\nconsole.log(person);\n// { name: "Amara", age: 26, isStudent: true, city: "Dessie" }' },
            { type: 'heading', value: 'Objects with Methods' },
            { type: 'code', value: 'const person = {\n  name: "Amara",\n  greet: function() {\n    return "Hi, I am " + this.name;\n  }\n};\n\nconsole.log(person.greet()); // "Hi, I am Amara"' },
            { type: 'text', value: 'A function stored as a property is called a method. this inside a method refers to the object the method belongs to — here, this.name means "the name property of this object".' }
          ],
          quiz: [
            { question: 'What is each name: value pair inside an object called?', options: ['A method', 'A property', 'An index', 'An argument'], correct: 1, explanation: 'Each key-value pair in an object is called a property, like name: "Amara" or age: 25.' },
            { question: 'Which notation is required when a property name is stored in a variable?', options: ['Dot notation', 'Bracket notation', 'Arrow notation', 'Parentheses'], correct: 1, explanation: 'Bracket notation, like person[variableName], lets you access a property using a dynamic value instead of a hardcoded name.' },
            { question: 'What is a function stored as an object property called?', options: ['A property', 'A method', 'A parameter', 'An argument'], correct: 1, explanation: 'When a function is stored as a property of an object, it is called a method — like person.greet() above.' },
            { question: 'What does this refer to inside an object\'s method?', options: ['The global window object always', 'The object the method belongs to', 'The function\'s parameters', 'Nothing — this is not valid in methods'], correct: 1, explanation: 'Inside a method, this refers to the object that method was called on, letting you access that object\'s own properties.' }
          ]
        }
      ],
      exam: [
        { question: 'What does JavaScript primarily add to a webpage?', options: ['Structure', 'Visual style', 'Interactive behavior', 'Search ranking'], correct: 2 },
        { question: 'What does console.log() do?', options: ['Deletes a variable', 'Prints a value to the console', 'Creates a webpage', 'Saves data permanently'], correct: 1 },
        { question: 'Which keyword should you use by default for a value that will not be reassigned?', options: ['var', 'let', 'const', 'static'], correct: 2 },
        { question: 'What happens if you reassign a const variable?', options: ['It works fine', 'JavaScript throws an error', 'It is ignored silently', 'It becomes a let'], correct: 1 },
        { question: 'What does typeof null return?', options: ['"null"', '"undefined"', '"object"', '"boolean"'], correct: 2 },
        { question: 'What is the difference between null and undefined?', options: ['They are identical', 'undefined means never assigned; null is intentionally empty', 'null is only for numbers', 'undefined is newer'], correct: 1 },
        { question: 'Why is === preferred over ==?', options: ['It is shorter', 'It checks value and type, avoiding surprises', 'It only works with strings', 'It is always faster'], correct: 1 },
        { question: 'What does the % operator return?', options: ['A percentage', 'The remainder of division', 'A rounded value', 'An exponent'], correct: 1 },
        { question: 'What wraps a template literal?', options: ['Single quotes', 'Double quotes', 'Backticks', 'Square brackets'], correct: 2 },
        { question: 'What does ${} do inside a template literal?', options: ['Adds a comment', 'Evaluates JS and inserts the result', 'Creates a variable', 'Escapes text'], correct: 1 },
        { question: 'Which value is falsy in JavaScript?', options: ['"0" (string)', '1', '"" (empty string)', '"false" (string)'], correct: 2 },
        { question: 'What happens without break in a switch case?', options: ['A syntax error', 'Fall-through into the next case', 'The switch stops', 'Nothing changes'], correct: 1 },
        { question: 'What position is the first item in an array?', options: ['1', '0', '-1', 'first'], correct: 1 },
        { question: 'Which method adds an item to the end of an array?', options: ['.pop()', '.push()', '.shift()', '.unshift()'], correct: 1 },
        { question: 'What are the three parts of a for loop?', options: ['Start, middle, end', 'Initialization, condition, update', 'Array, index, value', 'Name, type, value'], correct: 1 },
        { question: 'What does break do inside a loop?', options: ['Skips to next iteration', 'Stops the loop completely', 'Pauses for 1 second', 'Restarts from zero'], correct: 1 },
        { question: 'What is the difference between a parameter and an argument?', options: ['Same thing', 'Parameter is the placeholder; argument is the real value passed in', 'Argument is only for arrows', 'Parameter must be a number'], correct: 1 },
        { question: 'What does a function return with no return statement?', options: ['0', 'Empty string', 'undefined', 'An error'], correct: 2 },
        { question: 'What is each name: value pair in an object called?', options: ['A method', 'A property', 'An index', 'An argument'], correct: 1 },
        { question: 'What does this refer to inside an object method?', options: ['The window object always', 'The object the method belongs to', 'The function parameters', 'Nothing'], correct: 1 }
      ]
    }
  }
,
  python: {
    beginner: {
      lessons: [
        {
          id: 'py-beg-01',
          title: 'What is Python?',
          summary: 'Run your first line of Python code',
          content: [
            { type: 'text', value: 'Python is a general-purpose programming language known for clean, readable syntax. It powers websites, data science, automation scripts, and AI — and it is one of the most beginner-friendly languages to start with.' },
            { type: 'heading', value: 'Your First Line of Python' },
            { type: 'code', value: 'print("Hello, World!")' },
            { type: 'text', value: 'print() displays a value on the screen. Unlike some languages, Python does not need a semicolon at the end of a line, and it does not need a main() function to get started — this one line is a complete, runnable program.' },
            { type: 'heading', value: 'Indentation Matters' },
            { type: 'text', value: 'Python uses indentation (spaces at the start of a line) to group code together, instead of curly braces like many other languages. Getting indentation wrong is one of the most common beginner errors — it will cause an IndentationError.' },
            { type: 'code', value: 'if True:\n    print("This line is indented — it belongs to the if")\nprint("This line is not indented — it always runs")' },
            { type: 'heading', value: 'Comments' },
            { type: 'code', value: '# This is a single-line comment — Python ignores it\n\n"""\nThis is a multi-line comment,\ntechnically a string Python does not use,\noften used for documentation.\n"""\n\nprint("Only this line actually runs") # comments can follow code too' },
            { type: 'text', value: 'Try it yourself: change "Hello, World!" to your own name and run the script again — that one small edit is the fastest way to confirm you understand how print() works.' }
          ],
          quiz: [
            { question: 'Which function displays output on the screen in Python?', options: ['echo()', 'print()', 'display()', 'show()'], correct: 1, explanation: 'print() outputs a value to the screen. It is the most commonly used function while learning and debugging Python.' },
            { question: 'How does Python group lines of code together, like inside an if statement?', options: ['Curly braces {}', 'Semicolons', 'Indentation (spaces)', 'Parentheses'], correct: 2, explanation: 'Python uses indentation instead of curly braces to define code blocks. Consistent spacing is required or Python raises an IndentationError.' },
            { question: 'Which symbol starts a single-line comment in Python?', options: ['//', '#', '<!--', '/*'], correct: 1, explanation: 'A single-line comment in Python starts with #. Everything after it on that line is ignored by Python.' }
          ]
        },
        {
          id: 'py-beg-02',
          title: 'Variables and Data Types',
          summary: 'Store values and learn Python\'s core types',
          content: [
            { type: 'text', value: 'A variable is a name that points to a value. Python figures out the type automatically — you never have to declare it yourself.' },
            { type: 'heading', value: 'Creating Variables' },
            { type: 'code', value: 'name = "Amara"\nage = 25\nheight = 1.65\nis_student = True\n\nprint(name)   # Amara\nprint(age)    # 25' },
            { type: 'text', value: 'Notice there is no let, const, or var keyword — just name = value. Python variable names use snake_case by convention: lowercase words separated by underscores.' },
            { type: 'heading', value: 'The Core Data Types' },
            { type: 'code', value: 'name = "Amara"        # str    — text\nage = 25              # int    — whole numbers\nheight = 1.65         # float  — decimal numbers\nis_student = True     # bool   — True or False\nnothing = None        # NoneType — intentionally empty' },
            { type: 'heading', value: 'Checking a Type with type()' },
            { type: 'code', value: 'print(type("Amara"))  # <class \'str\'>\nprint(type(25))       # <class \'int\'>\nprint(type(1.65))     # <class \'float\'>\nprint(type(True))     # <class \'bool\'>' },
            { type: 'heading', value: 'Python is Dynamically Typed' },
            { type: 'text', value: 'A variable can hold a different type of value later on — Python does not lock a variable to one type the way some languages do.' },
            { type: 'code', value: 'x = 5        # x is an int\nprint(type(x)) # <class \'int\'>\n\nx = "five"   # now x is a str — this is completely legal\nprint(type(x)) # <class \'str\'>' }
          ],
          quiz: [
            { question: 'Which keyword is required to declare a variable in Python?', options: ['let', 'var', 'const', 'No keyword is needed'], correct: 3, explanation: 'Python does not use a keyword to declare variables — you simply write name = value and Python creates the variable.' },
            { question: 'What naming convention does Python use for variables?', options: ['camelCase', 'PascalCase', 'snake_case', 'kebab-case'], correct: 2, explanation: 'Python convention (PEP 8) uses snake_case for variable names: lowercase words separated by underscores, like first_name.' },
            { question: 'Which function tells you the type of a value?', options: ['typeof()', 'type()', 'kind()', 'class()'], correct: 1, explanation: 'type() returns the data type of a value, like <class \'int\'> or <class \'str\'>.' },
            { question: 'Can a Python variable change its type after being created?', options: ['No, never', 'Yes — Python is dynamically typed', 'Only for numbers', 'Only with a special keyword'], correct: 1, explanation: 'Python is dynamically typed, meaning the same variable can be reassigned to hold a completely different type of value later on.' }
          ]
        },
        {
          id: 'py-beg-03',
          title: 'Numbers and Operators',
          summary: 'Do math and understand int vs float',
          content: [
            { type: 'text', value: 'Python has two main numeric types: int (whole numbers) and float (decimal numbers). Arithmetic operators work as you would expect, with a couple of Python-specific twists.' },
            { type: 'heading', value: 'Arithmetic Operators' },
            { type: 'code', value: 'print(5 + 3)   # 8   addition\nprint(5 - 3)   # 2   subtraction\nprint(5 * 3)   # 15  multiplication\nprint(5 / 3)   # 1.666...  division — always returns a float\nprint(5 // 3)  # 1   floor division — rounds down to the nearest whole number\nprint(5 % 3)   # 2   modulo — the remainder\nprint(5 ** 2)  # 25  exponent — 5 squared' },
            { type: 'text', value: 'Notice / always returns a float, even if the numbers divide evenly (6 / 3 gives 2.0, not 2). Use // (floor division) when you specifically want a whole number result.' },
            { type: 'heading', value: 'Mixing int and float' },
            { type: 'code', value: 'result = 5 + 2.5\nprint(result)       # 7.5\nprint(type(result)) # <class \'float\'> — mixing int and float always gives a float' },
            { type: 'heading', value: 'Assignment Shortcuts' },
            { type: 'code', value: 'score = 10\nscore += 5   # same as: score = score + 5  → 15\nscore -= 3   # same as: score = score - 3  → 12\nscore *= 2   # same as: score = score * 2  → 24' },
            { type: 'heading', value: 'Comparison Operators' },
            { type: 'code', value: 'print(5 == 5)   # True\nprint(5 != 3)   # True\nprint(5 > 3)    # True\nprint(5 <= 5)   # True' }
          ],
          quiz: [
            { question: 'What does the / operator always return in Python?', options: ['An int', 'A float', 'A string', 'A boolean'], correct: 1, explanation: 'The / (division) operator always returns a float in Python, even when the result is a whole number, like 6 / 3 == 2.0.' },
            { question: 'Which operator performs floor (whole-number) division?', options: ['/', '//', '%', '**'], correct: 1, explanation: '// performs floor division, rounding the result down to the nearest whole number: 5 // 3 gives 1.' },
            { question: 'What does 5 % 3 return?', options: ['1.66', '2', '1', '15'], correct: 1, explanation: 'The modulo operator (%) returns the remainder of division. 3 goes into 5 once, leaving a remainder of 2.' },
            { question: 'What type results from adding an int and a float together?', options: ['int', 'float', 'str', 'It causes an error'], correct: 1, explanation: 'Whenever an int and a float are combined in arithmetic, Python promotes the result to a float.' }
          ]
        },
        {
          id: 'py-beg-04',
          title: 'Strings',
          summary: 'Work with text using Python\'s string tools',
          content: [
            { type: 'text', value: 'Strings hold text. Python gives you flexible ways to build and manipulate them.' },
            { type: 'heading', value: 'Creating Strings' },
            { type: 'code', value: "name = 'Amara'\ngreeting = \"Hello there\"\nmulti_line = '''This string\ncan span\nmultiple lines'''" },
            { type: 'heading', value: 'f-Strings (the Modern Way to Combine Text)' },
            { type: 'code', value: 'name = "Amara"\nage = 25\n\nmessage = f"Hello, {name}! You are {age} years old."\nprint(message)' },
            { type: 'text', value: 'An f-string starts with the letter f before the opening quote. Anything inside curly braces {} is evaluated as Python and inserted directly into the string — the cleanest way to combine text and variables.' },
            { type: 'heading', value: 'String Concatenation (the Old Way)' },
            { type: 'code', value: 'name = "Amara"\nmessage = "Hello, " + name + "!"\nprint(message)' },
            { type: 'heading', value: 'Useful String Methods' },
            { type: 'code', value: 'text = "  Hello, World!  "\n\nprint(len(text))          # 19 — number of characters\nprint(text.strip())       # "Hello, World!" — removes outer spaces\nprint(text.upper())       # "  HELLO, WORLD!  "\nprint(text.lower())       # "  hello, world!  "\nprint("World" in text)    # True — checks if text contains a substring\nprint(text.strip().replace("World", "Python")) # "Hello, Python!"' },
            { type: 'heading', value: 'Slicing Strings' },
            { type: 'code', value: 'word = "Python"\nprint(word[0])     # "P" — first character (index 0)\nprint(word[0:3])   # "Pyt" — characters from index 0 up to (not including) 3\nprint(word[-1])    # "n" — last character' }
          ],
          quiz: [
            { question: 'What letter goes before the quote to create an f-string?', options: ['s', 'f', 'r', 'b'], correct: 1, explanation: 'An f-string starts with f before the quotation mark, like f"Hello, {name}!", letting you embed expressions directly in the text.' },
            { question: 'What does len("hello") return?', options: ['4', '5', '6', 'An error'], correct: 1, explanation: 'len() returns the number of characters in a string. "hello" has 5 characters.' },
            { question: 'What does word[0] refer to in "Python"?', options: ['The last character', 'The first character', 'The whole string', 'An error, since indexing starts at 1'], correct: 1, explanation: 'Python strings are zero-indexed, so word[0] refers to the first character — "P" in "Python".' },
            { question: 'What does the .strip() method do?', options: ['Deletes the string', 'Removes leading and trailing whitespace', 'Reverses the string', 'Converts to uppercase'], correct: 1, explanation: '.strip() removes whitespace from the start and end of a string, leaving the middle untouched.' }
          ]
        },
        {
          id: 'py-beg-05',
          title: 'Lists',
          summary: 'Store an ordered, changeable collection of items',
          content: [
            { type: 'text', value: 'A list stores multiple values in a single variable, in order. Lists are one of the most-used data structures in Python.' },
            { type: 'heading', value: 'Creating and Accessing a List' },
            { type: 'code', value: 'fruits = ["apple", "banana", "cherry"]\n\nprint(fruits[0])  # "apple" — first item\nprint(fruits[1])  # "banana"\nprint(len(fruits)) # 3' },
            { type: 'text', value: 'Like strings, lists are zero-indexed — the first item is at position 0. Negative indexes count from the end: fruits[-1] gives the last item.' },
            { type: 'heading', value: 'Modifying a List' },
            { type: 'code', value: 'fruits = ["apple", "banana"]\n\nfruits.append("cherry")  # adds to the end → ["apple", "banana", "cherry"]\nfruits.remove("banana")  # removes by value → ["apple", "cherry"]\nfruits.insert(1, "mango") # inserts at a position → ["apple", "mango", "cherry"]\nfruits.pop()               # removes the last item → ["apple", "mango"]' },
            { type: 'heading', value: 'Looping Over a List' },
            { type: 'code', value: 'fruits = ["apple", "banana", "cherry"]\n\nfor fruit in fruits:\n    print(fruit)\n# prints: apple, banana, cherry — one per line' },
            { type: 'heading', value: 'Slicing a List' },
            { type: 'code', value: 'numbers = [10, 20, 30, 40, 50]\n\nprint(numbers[1:3])  # [20, 30] — items from index 1 up to (not including) 3\nprint(numbers[:2])   # [10, 20] — everything before index 2\nprint(numbers[2:])   # [30, 40, 50] — everything from index 2 onward' },
            { type: 'heading', value: 'Checking Membership and Sorting' },
            { type: 'code', value: 'numbers = [3, 1, 4, 1, 5]\n\nprint(4 in numbers)     # True\nprint(sorted(numbers))  # [1, 1, 3, 4, 5] — returns a new sorted list' }
          ],
          quiz: [
            { question: 'What position is the first item in a list?', options: ['1', '0', '-1', 'first'], correct: 1, explanation: 'Python lists are zero-indexed — the first item is at index 0, just like strings.' },
            { question: 'Which method adds an item to the end of a list?', options: ['.remove()', '.append()', '.insert()', '.pop()'], correct: 1, explanation: '.append() adds a single item to the end of a list. .insert() adds an item at a specific position instead.' },
            { question: 'What does numbers[1:3] return from [10, 20, 30, 40]?', options: ['[10, 20, 30]', '[20, 30]', '[20, 30, 40]', '[10, 20]'], correct: 1, explanation: 'Slicing [1:3] returns items from index 1 up to but not including index 3 — that is indexes 1 and 2, giving [20, 30].' },
            { question: 'What does fruits[-1] refer to?', options: ['The first item', 'An invalid index that errors', 'The last item', 'A random item'], correct: 2, explanation: 'Negative indexes count backward from the end of the list. -1 always refers to the last item.' }
          ]
        },
        {
          id: 'py-beg-06',
          title: 'Conditionals: if, elif, else',
          summary: 'Make decisions in your code',
          content: [
            { type: 'text', value: 'Conditionals let your program choose between different actions based on whether something is true or false.' },
            { type: 'heading', value: 'if / else' },
            { type: 'code', value: 'age = 20\n\nif age >= 18:\n    print("You can vote.")\nelse:\n    print("Too young to vote.")' },
            { type: 'text', value: 'Notice the colon (:) after the condition, and that the code belonging to each branch is indented. This is how Python knows which lines belong to which branch.' },
            { type: 'heading', value: 'elif for Multiple Conditions' },
            { type: 'code', value: 'score = 75\n\nif score >= 90:\n    print("Grade: A")\nelif score >= 80:\n    print("Grade: B")\nelif score >= 70:\n    print("Grade: C")\nelse:\n    print("Grade: F")' },
            { type: 'text', value: 'Python checks each condition top to bottom and runs the first one that is true, then skips the rest — even if a later condition would also match. elif is short for "else if".' },
            { type: 'heading', value: 'Truthy and Falsy Values' },
            { type: 'text', value: 'Python treats some values as automatically false when used in a condition: False, 0, 0.0, "" (empty string), [] (empty list), and None. Everything else counts as true.' },
            { type: 'code', value: 'name = ""\n\nif name:\n    print(f"Hello, {name}")\nelse:\n    print("No name was given") # this runs — empty string is falsy' },
            { type: 'heading', value: 'Combining Conditions' },
            { type: 'code', value: 'age = 25\nhas_id = True\n\nif age >= 18 and has_id:\n    print("Entry allowed")\nelif age >= 18 or has_id:\n    print("Check further")\nelse:\n    print("Entry denied")' }
          ],
          quiz: [
            { question: 'What must follow the condition in an if statement in Python?', options: ['A semicolon', 'A colon (:)', 'Curly braces', 'Nothing'], correct: 1, explanation: 'Python requires a colon (:) after the condition in if, elif, else, for, and while statements, followed by an indented block.' },
            { question: 'What does elif mean?', options: ['"else if" — check another condition if the first was false', '"end if" — closes the if block', 'A loop keyword', 'A function name'], correct: 0, explanation: 'elif is short for "else if". It lets you check another condition only if the previous ones were false.' },
            { question: 'Which of these values is falsy in Python?', options: ['[1, 2, 3]', '"0" (a string containing zero)', '[] (an empty list)', '"False" (a string)'], correct: 2, explanation: 'An empty list [] is falsy in Python. Non-empty lists and non-empty strings (even "0" or "False" as text) are truthy.' },
            { question: 'How does Python know which lines belong to an if block?', options: ['Curly braces', 'Parentheses', 'Indentation', 'Semicolons'], correct: 2, explanation: 'Python uses indentation to define which lines belong to a block — there are no curly braces like in JavaScript.' }
          ]
        },
        {
          id: 'py-beg-07',
          title: 'Loops: for and while',
          summary: 'Repeat actions without repeating code',
          content: [
            { type: 'text', value: 'Loops repeat a block of code multiple times — essential for going through lists, counting, or repeating an action until a condition changes.' },
            { type: 'heading', value: 'The for Loop with range()' },
            { type: 'code', value: 'for i in range(5):\n    print(i)\n# prints: 0, 1, 2, 3, 4' },
            { type: 'text', value: 'range(5) generates the numbers 0 through 4 — five numbers total, but it stops before reaching 5. range(2, 6) would generate 2, 3, 4, 5 instead.' },
            { type: 'heading', value: 'Looping Through a List' },
            { type: 'code', value: 'fruits = ["apple", "banana", "cherry"]\n\nfor fruit in fruits:\n    print(fruit)' },
            { type: 'text', value: 'This is Python\'s most natural way to loop — for item in collection reads almost like plain English: "for each fruit in fruits, do this".' },
            { type: 'heading', value: 'The while Loop' },
            { type: 'code', value: 'count = 0\n\nwhile count < 3:\n    print(f"Count is {count}")\n    count += 1' },
            { type: 'text', value: 'A while loop keeps running as long as its condition is true. Always make sure something inside the loop eventually makes the condition false, or you get an infinite loop that never stops.' },
            { type: 'heading', value: 'break and continue' },
            { type: 'code', value: 'for i in range(10):\n    if i == 5:\n        break       # stop the loop entirely\n    if i % 2 == 0:\n        continue    # skip to the next iteration\n    print(i) # prints: 1, 3' }
          ],
          quiz: [
            { question: 'What numbers does range(5) generate?', options: ['1, 2, 3, 4, 5', '0, 1, 2, 3, 4', '0, 1, 2, 3, 4, 5', '1, 2, 3, 4'], correct: 1, explanation: 'range(5) generates five numbers starting at 0 and stopping before 5: 0, 1, 2, 3, 4.' },
            { question: 'What is the most natural way to loop through a list in Python?', options: ['for i in range(len(list)):', 'for item in list:', 'while item in list:', 'loop item in list:'], correct: 1, explanation: 'for item in list: is the most readable and common way to loop through each element of a list directly.' },
            { question: 'What happens if a while loop condition never becomes false?', options: ['The loop runs once', 'The loop stops automatically after 100 tries', 'The loop runs forever (an infinite loop)', 'Python throws an error immediately'], correct: 2, explanation: 'If nothing inside the loop makes the condition false, the while loop keeps running forever, freezing the program.' },
            { question: 'What does continue do inside a loop?', options: ['Stops the loop completely', 'Skips the rest of the current iteration and moves to the next one', 'Restarts the loop from zero', 'Pauses execution'], correct: 1, explanation: 'continue skips the remaining code in the current pass of the loop and jumps to the next iteration.' }
          ]
        },
        {
          id: 'py-beg-08',
          title: 'Functions',
          summary: 'Package reusable blocks of code with def',
          content: [
            { type: 'text', value: 'A function is a reusable, named block of code. Instead of repeating the same logic, you define it once and call it whenever you need it.' },
            { type: 'heading', value: 'Defining a Function' },
            { type: 'code', value: 'def greet(name):\n    return f"Hello, {name}!"\n\nprint(greet("Amara")) # "Hello, Amara!"\nprint(greet("Kal"))   # "Hello, Kal!"' },
            { type: 'text', value: 'def starts a function definition. name is a parameter — a placeholder for the value passed in when the function is called. "Amara" and "Kal" are the arguments — the actual values supplied.' },
            { type: 'heading', value: 'The return Keyword' },
            { type: 'code', value: 'def add(a, b):\n    return a + b\n\ntotal = add(3, 4)\nprint(total) # 7' },
            { type: 'text', value: 'return sends a value back out of the function and stops it from running any further. A function with no return statement returns None automatically.' },
            { type: 'heading', value: 'Default Parameter Values' },
            { type: 'code', value: 'def greet(name="friend"):\n    return f"Hello, {name}!"\n\nprint(greet())        # "Hello, friend!"\nprint(greet("Amara")) # "Hello, Amara!"' },
            { type: 'heading', value: 'Multiple Return Values' },
            { type: 'code', value: 'def get_name_and_age():\n    return "Amara", 25\n\nname, age = get_name_and_age()\nprint(name) # "Amara"\nprint(age)  # 25' },
            { type: 'text', value: 'Python functions can return more than one value at once, separated by commas — something many other languages cannot do directly.' }
          ],
          quiz: [
            { question: 'Which keyword starts a function definition in Python?', options: ['function', 'def', 'func', 'define'], correct: 1, explanation: 'def is the keyword used to define a function in Python, followed by the function name and parentheses.' },
            { question: 'What does a function return if it has no return statement?', options: ['0', 'An empty string', 'None', 'An error'], correct: 2, explanation: 'A Python function without an explicit return statement automatically returns None.' },
            { question: 'What is the difference between a parameter and an argument?', options: ['They are the same', 'A parameter is the placeholder in the definition; an argument is the actual value passed in', 'An argument is only for default values', 'A parameter must be a string'], correct: 1, explanation: 'Parameters are named placeholders in the function definition. Arguments are the real values supplied when the function is called.' },
            { question: 'Can a Python function return more than one value?', options: ['No, never', 'Yes, separated by commas', 'Only using a list', 'Only with a special import'], correct: 1, explanation: 'Python functions can return multiple values at once, separated by commas, like return name, age.' }
          ]
        },
        {
          id: 'py-beg-09',
          title: 'Dictionaries',
          summary: 'Store data as key-value pairs',
          content: [
            { type: 'text', value: 'A dictionary stores data as key-value pairs, letting you look up a value by a meaningful name instead of a numeric position.' },
            { type: 'heading', value: 'Creating a Dictionary' },
            { type: 'code', value: 'person = {\n    "name": "Amara",\n    "age": 25,\n    "is_student": True\n}' },
            { type: 'text', value: 'Each "key": value pair is separated by a comma. Keys are usually strings, and values can be any type — even another list or dictionary.' },
            { type: 'heading', value: 'Accessing and Updating Values' },
            { type: 'code', value: 'print(person["name"])   # "Amara"\n\nperson["age"] = 26      # update an existing key\nperson["city"] = "Dessie" # add a brand new key\n\nprint(person)\n# {\'name\': \'Amara\', \'age\': 26, \'is_student\': True, \'city\': \'Dessie\'}' },
            { type: 'heading', value: 'Avoiding Errors with .get()' },
            { type: 'code', value: 'print(person["country"])       # KeyError! "country" does not exist\nprint(person.get("country"))   # None — no error, just returns nothing\nprint(person.get("country", "Unknown")) # "Unknown" — a custom fallback' },
            { type: 'text', value: '.get() is safer than square-bracket access because it never crashes your program — if the key is missing, it returns None (or your chosen fallback) instead of raising an error.' },
            { type: 'heading', value: 'Looping Through a Dictionary' },
            { type: 'code', value: 'person = {"name": "Amara", "age": 25}\n\nfor key, value in person.items():\n    print(f"{key}: {value}")\n# prints: name: Amara\n#         age: 25' }
          ],
          quiz: [
            { question: 'What are the two parts of each entry in a dictionary called?', options: ['Index and value', 'Key and value', 'Name and type', 'Parameter and argument'], correct: 1, explanation: 'Each entry in a dictionary is a key-value pair, like "name": "Amara", where "name" is the key and "Amara" is the value.' },
            { question: 'What happens if you access a missing key with square brackets, like person["country"]?', options: ['It returns None', 'It returns an empty string', 'It raises a KeyError', 'It creates the key automatically'], correct: 2, explanation: 'Accessing a missing key with square brackets raises a KeyError. Use .get() instead if the key might not exist.' },
            { question: 'What does person.get("country", "Unknown") do if "country" is not a key?', options: ['Raises an error', 'Returns None', 'Returns "Unknown"', 'Adds "country" to the dictionary'], correct: 2, explanation: '.get(key, fallback) returns the fallback value if the key does not exist, instead of raising an error.' },
            { question: 'What does .items() give you when looping through a dictionary?', options: ['Only the keys', 'Only the values', 'Both the key and value together', 'The dictionary\'s length'], correct: 2, explanation: '.items() returns each key-value pair together, letting you loop with for key, value in dict.items():.' }
          ]
        },
        {
          id: 'py-beg-10',
          title: 'User Input and f-Strings',
          summary: 'Get input from the user and build dynamic output',
          content: [
            { type: 'text', value: 'Most useful programs need to react to what a user types. Python\'s input() function reads text typed into the console.' },
            { type: 'heading', value: 'Getting Input' },
            { type: 'code', value: 'name = input("What is your name? ")\nprint(f"Hello, {name}!")' },
            { type: 'text', value: 'input() always returns a string, even if the user types a number. The text inside the parentheses is the prompt shown to the user before they type.' },
            { type: 'heading', value: 'Converting Input to a Number' },
            { type: 'code', value: 'age_text = input("How old are you? ")\nage = int(age_text)  # convert the string to an integer\n\nnext_year = age + 1\nprint(f"Next year you will be {next_year}.")' },
            { type: 'text', value: 'Because input() always returns a string, trying to do math directly on it (age_text + 1) causes an error. Convert it first with int() or float().' },
            { type: 'heading', value: 'Putting It Together' },
            { type: 'code', value: 'name = input("What is your name? ")\nage = int(input("How old are you? "))\n\nif age >= 18:\n    print(f"Hi {name}, you are old enough to vote.")\nelse:\n    print(f"Hi {name}, you will be able to vote in {18 - age} years.")' },
            { type: 'heading', value: 'Handling Bad Input' },
            { type: 'code', value: 'age_text = input("How old are you? ")\n\ntry:\n    age = int(age_text)\n    print(f"You are {age} years old.")\nexcept ValueError:\n    print("That does not look like a valid number.")' },
            { type: 'text', value: 'try/except catches errors instead of letting them crash the program. If int(age_text) fails because the user typed letters instead of digits, the except block runs instead of stopping the whole script.' }
          ],
          quiz: [
            { question: 'What data type does input() always return?', options: ['int', 'float', 'str', 'bool'], correct: 2, explanation: 'input() always returns a string, no matter what the user types — even if they type digits, you get a string of characters.' },
            { question: 'How do you convert a string like "25" into a usable integer?', options: ['str(25)', 'int("25")', 'float("25")', 'bool("25")'], correct: 1, explanation: 'int() converts a string containing digits into an integer. int("25") returns the number 25.' },
            { question: 'What is the purpose of try/except?', options: ['To repeat code', 'To catch errors so they do not crash the program', 'To define a function', 'To create a loop'], correct: 1, explanation: 'try/except lets your program handle errors gracefully. If code inside try fails, the matching except block runs instead of crashing.' },
            { question: 'What error occurs if you try int("hello")?', options: ['TypeError', 'ValueError', 'KeyError', 'IndexError'], correct: 1, explanation: 'int() raises a ValueError when the string cannot be converted to a number, like int("hello").' }
          ]
        }
      ],
      exam: [
        { question: 'Which function displays output on the screen in Python?', options: ['echo()', 'print()', 'display()', 'show()'], correct: 1 },
        { question: 'How does Python group lines of code together?', options: ['Curly braces', 'Semicolons', 'Indentation', 'Parentheses'], correct: 2 },
        { question: 'Which keyword is required to declare a variable?', options: ['let', 'var', 'const', 'No keyword needed'], correct: 3 },
        { question: 'What naming convention does Python use for variables?', options: ['camelCase', 'PascalCase', 'snake_case', 'kebab-case'], correct: 2 },
        { question: 'What does the / operator always return?', options: ['An int', 'A float', 'A string', 'A boolean'], correct: 1 },
        { question: 'Which operator performs floor division?', options: ['/', '//', '%', '**'], correct: 1 },
        { question: 'What letter starts an f-string?', options: ['s', 'f', 'r', 'b'], correct: 1 },
        { question: 'What does len("hello") return?', options: ['4', '5', '6', 'An error'], correct: 1 },
        { question: 'What position is the first item in a list?', options: ['1', '0', '-1', 'first'], correct: 1 },
        { question: 'Which method adds an item to the end of a list?', options: ['.remove()', '.append()', '.insert()', '.pop()'], correct: 1 },
        { question: 'What must follow the condition in an if statement?', options: ['A semicolon', 'A colon', 'Curly braces', 'Nothing'], correct: 1 },
        { question: 'What does elif mean?', options: ['"else if"', '"end if"', 'A loop keyword', 'A function name'], correct: 0 },
        { question: 'What numbers does range(5) generate?', options: ['1-5', '0-4', '0-5', '1-4'], correct: 1 },
        { question: 'What happens if a while condition never becomes false?', options: ['Runs once', 'Stops after 100 tries', 'Runs forever', 'Errors immediately'], correct: 2 },
        { question: 'Which keyword starts a function definition?', options: ['function', 'def', 'func', 'define'], correct: 1 },
        { question: 'What does a function return with no return statement?', options: ['0', 'Empty string', 'None', 'An error'], correct: 2 },
        { question: 'What are the two parts of a dictionary entry called?', options: ['Index and value', 'Key and value', 'Name and type', 'Parameter and argument'], correct: 1 },
        { question: 'What happens accessing a missing dictionary key with []?', options: ['Returns None', 'Returns empty string', 'Raises a KeyError', 'Creates the key'], correct: 2 },
        { question: 'What data type does input() always return?', options: ['int', 'float', 'str', 'bool'], correct: 2 },
        { question: 'What error occurs from int("hello")?', options: ['TypeError', 'ValueError', 'KeyError', 'IndexError'], correct: 1 }
      ]
    }
  }

};

// ─── Helper Functions ─────────────────────────────────
function getSubject(id) {
  return SUBJECTS.find(s => s.id === id);
}

function getLessons(subject, level) {
  return COURSES[subject]?.[level]?.lessons || [];
}

function getLesson(subject, level, lessonId) {
  return getLessons(subject, level).find(l => l.id === lessonId);
}

function getExam(subject, level) {
  return COURSES[subject]?.[level]?.exam || [];
}
