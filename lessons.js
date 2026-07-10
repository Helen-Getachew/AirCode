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
            { question: 'What is a void element?', options: ['An element with no content or closing tag', 'An empty paragraph', 'An invisible element', 'An element with no attributes'], correct: 0, explanation: 'Void elements like <br>, <img>, and <input> have no closing tag and cannot contain content.' },
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