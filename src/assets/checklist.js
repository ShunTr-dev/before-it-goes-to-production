;[
    // — Sección: Head —
    {
        type: 'head',
        name: 'Doctype',
        description: 'The Doctype is HTML5 and is at the top of all your HTML pages.',
        tags: ['Meta tag'],
    },
    {
        type: 'head',
        name: 'Charset',
        description: 'The charset (UTF-8) is declared correctly.',
        tags: ['Meta tag'],
    },
    {
        type: 'head',
        name: 'Viewport',
        description: 'The viewport is declared correctly.',
        tags: ['Meta tag'],
    },
    {
        type: 'head',
        name: 'Title',
        description: 'A title is used on all pages (around 55 characters).',
        tags: ['Meta tag'],
    },
    {
        type: 'head',
        name: 'Description',
        description: 'A meta description is provided, unique and ≤ 150 characters.',
        tags: ['Meta tag'],
    },
    {
        type: 'head',
        name: 'Favicons',
        description: 'Each favicon has been created and displays correctly; PNG recommended (32×32 px).',
        tags: ['Meta tag'],
    },
    {
        type: 'head',
        name: 'Apple Web App Meta',
        description: 'Apple meta-tags (e.g., apple-touch-icon, mobile-web-app-capable) are present.',
        tags: ['Meta tag'],
    },
    {
        type: 'head',
        name: 'Windows Tiles',
        description: 'Windows tile meta elements are present and linked (browserconfig.xml).',
        tags: ['Meta tag'],
    },
    {
        type: 'head',
        name: 'Canonical',
        description: 'Use rel="canonical" to avoid duplicate content.',
        tags: ['Meta tag'],
    },
    {
        type: 'head',
        name: 'Language attribute',
        description: 'The <html> “lang” attribute is specified appropriately.',
        tags: ['HTML tag'],
    },
    {
        type: 'head',
        name: 'Direction attribute',
        description: 'The “dir” attribute is specified (e.g., “rtl” if needed).',
        tags: ['HTML tag'],
    },
    {
        type: 'head',
        name: 'Alternate language',
        description: 'Alternate language links (hreflang) are provided (including x-default).',
        tags: ['HTML tag'],
    },
    {
        type: 'head',
        name: 'Conditional comments',
        description: 'Conditional comments for IE are present if needed.',
        tags: ['HTML tag'],
    },
    {
        type: 'head',
        name: 'RSS feed',
        description: 'An RSS link is provided if the project has articles or a blog.',
        tags: ['HTML tag'],
    },
    {
        type: 'head',
        name: 'Inline critical CSS',
        description: 'Critical (above-the-fold) CSS is inline and minified in the <head>.',
        tags: ['CSS', 'Performance'],
    },
    {
        type: 'head',
        name: 'CSS order',
        description: 'All CSS files are loaded before JS files in the <head> (unless async).',
        tags: ['HTML tag'],
    },
    {
        type: 'head',
        name: 'Facebook Open Graph',
        description:
            'Facebook OG tags are present, tested, with proper image sizing (600×315px min; 1200×630px recommended).',
        tags: ['Social meta'],
    },
    {
        type: 'head',
        name: 'Twitter Card',
        description: 'Twitter Card meta tags are present and correct.',
        tags: ['Social meta'],
    },

    // — Sección: HTML —
    {
        type: 'html',
        name: 'HTML5 Semantic Elements',
        description: 'HTML5 semantic elements (header, section, footer, main...) are used appropriately.',
        tags: ['HTML', 'Best Practices'],
    },
    {
        type: 'html',
        name: 'Error pages',
        description: 'Error 404 and 5xx pages exist; 5xx pages include integrated CSS (no external call).',
        tags: ['HTML', 'Best Practices', 'Error Handling'],
    },
    {
        type: 'html',
        name: 'Noopener',
        description: 'External links with target="_blank" include rel="noopener" or "noopener noreferrer".',
        tags: ['HTML', 'Best Practices', 'Security'],
    },
    {
        type: 'html',
        name: 'Clean up comments',
        description: 'Unnecessary comments or code are removed before production.',
        tags: ['HTML', 'Best Practices', 'Clean Code'],
    },
    {
        type: 'html',
        name: 'W3C compliant',
        description: 'Pages validate by W3C validator.',
        tags: ['HTML', 'Testing'],
    },
    {
        type: 'html',
        name: 'HTML Lint',
        description: 'HTML code is analyzed with linters like webhint or HTML Lint.',
        tags: ['HTML', 'Testing'],
    },
    {
        type: 'html',
        name: 'Link checker',
        description: 'No broken links; validated with link checker.',
        tags: ['HTML', 'Testing'],
    },
    {
        type: 'html',
        name: 'Adblockers test',
        description: 'Site renders correctly with adblockers enabled.',
        tags: ['HTML', 'Testing'],
    },

    // — Sección: Webfonts —
    {
        type: 'webfonts',
        name: 'Webfont format',
        description: 'Webfonts are in WOFF, WOFF2 or TTF (supported by modern browsers).',
        tags: ['Webfont'],
    },
    {
        type: 'webfonts',
        name: 'Webfont size',
        description: 'Webfont file sizes don’t exceed 100 KB (all variants included).',
        tags: ['Webfont'],
    },
    {
        type: 'webfonts',
        name: 'Webfont loader',
        description: 'Loading behavior is controlled via a webfont loader.',
        tags: ['Webfont'],
    },

    // — Sección: CSS —
    {
        type: 'css',
        name: 'Responsive Web Design',
        description: 'Site uses responsive web design.',
        tags: ['CSS'],
    },
    {
        type: 'css',
        name: 'CSS Print',
        description: 'A print stylesheet is provided and correct.',
        tags: ['CSS'],
    },
    {
        type: 'css',
        name: 'Unique ID',
        description: 'IDs used are unique per page.',
        tags: ['CSS'],
    },
    {
        type: 'css',
        name: 'Reset CSS',
        description: 'A CSS reset or normalize is used and up to date.',
        tags: ['CSS'],
    },
    {
        type: 'css',
        name: 'JS prefix',
        description: 'Classes or IDs used in JS begin with "js-" and aren’t styled via CSS.',
        tags: ['JavaScript', 'Best Practices'],
    },
    {
        type: 'css',
        name: 'Embedded or inline CSS',
        description: 'Avoid embedding CSS in <style> tags or inline.',
        tags: ['CSS', 'Best Practices'],
    },
    {
        type: 'css',
        name: 'Vendor prefixes',
        description: 'CSS vendor prefixes are used appropriately (e.g., via Autoprefixer).',
        tags: ['CSS'],
    },
    {
        type: 'css',
        name: 'Concatenation',
        description: 'CSS files are concatenated into a single file (if not using HTTP/2).',
        tags: ['CSS', 'Performance'],
    },
    {
        type: 'css',
        name: 'Minification',
        description: 'CSS files are minified.',
        tags: ['CSS', 'Performance'],
    },
    {
        type: 'css',
        name: 'Non-blocking CSS',
        description: 'CSS is non-blocking (e.g., loadCSS or preload is used).',
        tags: ['CSS', 'Performance'],
    },
    {
        type: 'css',
        name: 'Stylelint',
        description: 'CSS or SCSS files pass linting (no stylelint errors).',
        tags: ['CSS', 'Testing'],
    },
    {
        type: 'css',
        name: 'Responsive web design',
        description: 'All pages tested at correct breakpoints.',
        tags: ['CSS', 'Testing'],
    },
    {
        type: 'css',
        name: 'CSS Validator',
        description: 'CSS validated and errors corrected.',
        tags: ['CSS', 'Testing'],
    },
    {
        type: 'css',
        name: 'Desktop browsers tested',
        description: 'Tested on all relevant desktop browsers.',
        tags: ['CSS', 'Testing'],
    },
    {
        type: 'css',
        name: 'Mobile browsers tested',
        description: 'Tested on all relevant mobile browsers.',
        tags: ['CSS', 'Testing'],
    },
    {
        type: 'css',
        name: 'Operating systems tested',
        description: 'Tested across operating systems (Windows, Android, iOS, macOS).',
        tags: ['CSS', 'Testing'],
    },
    {
        type: 'css',
        name: 'Reading direction tested',
        description: 'LTR and RTL reading directions tested if applicable.',
        tags: ['CSS', 'Testing'],
    },

    // — Sección: JavaScript —
    {
        type: 'js',
        name: 'JavaScript Inline',
        description: 'No inline JavaScript code (all JS separated).',
        tags: ['JavaScript'],
    },
    {
        type: 'js',
        name: 'Concatenation',
        description: 'JavaScript files are concatenated.',
        tags: ['JavaScript'],
    },
    {
        type: 'js',
        name: 'Minification',
        description: 'JavaScript files are minified (e.g., .min suffix).',
        tags: ['JavaScript'],
    },
    {
        type: 'js',
        name: 'JavaScript security',
        description: 'JavaScript is developed following security best practices.',
        tags: ['JavaScript', 'Security'],
    },
    {
        type: 'js',
        name: 'noscript tag',
        description: 'A <noscript> tag is provided for non-JS environments.',
        tags: ['JavaScript'],
    },
    {
        type: 'js',
        name: 'Non-blocking JS',
        description: 'JS files load asynchronously (async or defer).',
        tags: ['JavaScript', 'Performance'],
    },
    {
        type: 'js',
        name: 'Modernizer',
        description:
            'If you need to target some specific features you can use a custom Modernizr to add classes in your <html> tag.',
        tags: ['JavaScript', 'Best Practices'],
    },

    // — Sección: Imágenes (Images) —
    {
        type: 'images',
        name: 'Optimization',
        description: 'All images optimized for web (e.g., Imagemin, ImageOptim).',
        tags: ['Images', 'Best Practices'],
    },
    {
        type: 'images',
        name: 'Picture/Srcset',
        description: 'Use <picture> or srcset to serve appropriate images per viewport.',
        tags: ['Images'],
    },
    {
        type: 'images',
        name: 'Retina',
        description: 'Provide 2× or 3× images for retina displays.',
        tags: ['Images'],
    },
    {
        type: 'images',
        name: 'Sprite',
        description: 'Use sprites for small icons (e.g., SVG sprite).',
        tags: ['Images'],
    },
    {
        type: 'images',
        name: 'Width and Height',
        description: 'Set width and height attributes on <img> when known.',
        tags: ['Images', 'Performance'],
    },
    {
        type: 'images',
        name: 'Alternative text',
        description: 'Alt text provided for all <img> elements.',
        tags: ['Accessibility'],
    },
    {
        type: 'images',
        name: 'Lazy loading',
        description: 'Images lazy-loaded with fallback <noscript>.',
        tags: ['Images', 'Performance'],
    },

    // — Sección: Accesibilidad (Accessibility) —
    {
        type: 'accessibility',
        name: 'Progressive enhancement',
        description: 'Major functionality like main navigation and search should work without JavaScript enabled.',
        tags: ['Best Practices'],
    },
    {
        type: 'accessibility',
        name: 'Color contrast',
        description: 'Color contrast should at least pass WCAG AA (AAA for mobile).',
        tags: ['Best Practices'],
    },
    {
        type: 'accessibility',
        name: 'H1',
        description: 'All pages have an H1 which is not the title of the website.',
        tags: ['Best Practices', 'SEO'],
    },
    {
        type: 'accessibility',
        name: 'Headings',
        description: 'Headings should be used properly and in the right order (H1 to H6).',
        tags: ['Best Practices'],
    },
    {
        type: 'accessibility',
        name: 'Specific HTML5 input types are used',
        description:
            'This is especially important for mobile devices that show customized keypads and widgets for different types.',
        tags: ['Best Practices'],
    },
    {
        type: 'accessibility',
        name: 'Label',
        description:
            'A label is associated with each input form element. In case a label can’t be displayed, use aria-label instead.',
        tags: ['Best Practices'],
    },
    {
        type: 'accessibility',
        name: 'Accessibility standards testing',
        description: 'Use the WAVE tool to test if your page respects the accessibility standards.',
        tags: ['Testing'],
    },
    {
        type: 'accessibility',
        name: 'Keyboard navigation',
        description:
            'Test your website using only your keyboard in a predictable order. All interactive elements are reachable and usable.',
        tags: ['Testing'],
    },
    {
        type: 'accessibility',
        name: 'Screen reader',
        description: 'All pages were tested in two or more screen readers (such as JAWS, VoiceOver, and NVDA).',
        tags: ['Testing'],
    },
    {
        type: 'accessibility',
        name: 'Focus style',
        description: 'If the focus is disabled, it is replaced by visible state in CSS.',
        tags: ['Testing'],
    },

    // — Sección: Performance —
    {
        type: 'performance',
        name: 'Page weight',
        description: 'The weight of each page is between 0 and 500 KB.',
        tags: ['Performance'],
    },
    {
        type: 'performance',
        name: 'Minified HTML',
        description: 'Your HTML is minified.',
        tags: ['Performance'],
    },
    {
        type: 'performance',
        name: 'Lazy loading',
        description: 'Images, scripts and CSS need to be lazy loaded to improve the response time of the current page.',
        tags: ['Best Practices'],
    },
    {
        type: 'performance',
        name: 'Cookie size',
        description: 'Each cookie doesn’t exceed 4096 bytes and the domain doesn’t use more than 20 cookies.',
        tags: ['Best Practices'],
    },
    {
        type: 'performance',
        name: 'Third party components',
        description:
            'Third party iframes or components relying on external JS are replaced by static components when possible, to limit calls to external APIs.',
        tags: ['Best Practices'],
    },
    {
        type: 'performance',
        name: 'DNS resolution',
        description:
            'DNS of third-party services that may be needed are resolved in advance during idle time using dns-prefetch.',
        tags: ['Requests'],
    },
    {
        type: 'performance',
        name: 'Preconnection',
        description:
            'DNS lookup, TCP handshake and TLS negotiation with services needed soon are done in advance during idle time using preconnect.',
        tags: ['Requests'],
    },
    {
        type: 'performance',
        name: 'Prefetching',
        description: 'Resources that will be needed soon are requested in advance during idle time using prefetch.',
        tags: ['Requests'],
    },
    {
        type: 'performance',
        name: 'Preloading',
        description: 'Resources needed in the current page are requested in advance using preload.',
        tags: ['Requests'],
    },
    {
        type: 'performance',
        name: 'Google PageSpeed',
        description: 'All your pages have a Google PageSpeed score of at least 90/100.',
        tags: ['Testing'],
    },
    // — Sección: SEO —
    {
        type: 'seo',
        name: 'Google Analytics',
        description: 'Google Analytics is installed and correctly configured.',
        tags: ['SEO'],
    },
    {
        type: 'seo',
        name: 'Headings logic',
        description: 'Heading text helps to understand the content on the current page.',
        tags: ['SEO', 'Accessibility'],
    },
    {
        type: 'seo',
        name: 'sitemap.xml',
        description: 'A sitemap.xml exists and was submitted to Google Search Console.',
        tags: ['SEO'],
    },
    {
        type: 'seo',
        name: 'robots.txt',
        description: 'The robots.txt is not blocking webpages.',
        tags: ['SEO', 'Testing'],
    },
    {
        type: 'seo',
        name: 'Structured Data',
        description: 'Pages using structured data are tested and are error-free.',
        tags: ['SEO', 'Testing'],
    },
    {
        type: 'seo',
        name: 'Sitemap HTML',
        description: 'An HTML sitemap is provided and is accessible via a link in the footer of your website.',
        tags: ['SEO', 'HTML'],
    },
    {
        type: 'seo',
        name: 'Pagination link tags',
        description: 'Provide rel="prev" and rel="next" to indicate paginated content.',
        tags: ['SEO', 'HTML'],
    },
]
