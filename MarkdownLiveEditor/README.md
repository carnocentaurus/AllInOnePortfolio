# Markdown Live Editor
A simple, interactive Markdown editor built with HTML, CSS, and vanilla JavaScript. It allows users to write Markdown text and see the rendered HTML in real-time.

## Features
- Real-time Markdown rendering
- Sanitized HTML output to prevent XSS
- Side-by-side editing and preview
- Print to PDF functionality
- Automatic zero-width character removal

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Styling and layout |
| JavaScript (ES6) | Logic, event handling, and parsing |
| [marked.js](https://marked.js.org/) | Markdown parsing |
| [DOMPurify](https://github.com/cure53/dompurify) | HTML sanitization |

## How It Works
1. User enters text into the textarea input.
2. JavaScript triggers the `renderMarkdown()` function on every `oninput` event.
3. The app cleans the text by removing common zero-width characters at the start of the file.
4. The [marked.js](https://marked.js.org/) library parses the Markdown string into raw HTML.
5. The [DOMPurify](https://github.com/cure53/dompurify) library sanitizes the raw HTML to ensure security against malicious scripts.
6. The resulting sanitized HTML is injected into the output display element.
7. Users can use the "Print PDF" button to export their rendered Markdown.

## Screenshots
- [MarkdownLiveEditor Demo](./screenshots/MarkdownLiveEditorDemo.png)
- [MarkdownLiveEditor Print](./screenshots/MarkdownLiveEditorPrint.png)

## How to Run
1. Navigate to the MarkdownLiveEditor folder:
   ```bash
   cd MarkdownLiveEditor
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation or build steps required.

## Future Improvements
- Syntax highlighting for code blocks
- Save and load functionality using LocalStorage
- Support for multiple Markdown themes
- Export to other formats (Markdown file, Word)

## References
- [marked.js](https://github.com/markedjs/marked) - Markdown parser.
- [DOMPurify](https://github.com/cure53/dompurify) - HTML sanitizer.