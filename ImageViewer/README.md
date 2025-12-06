# ImageViewer
A lightweight image viewer web app that fetches photos from the Picsum API. Users can view random images or search specific images by ID, with optional grayscale, blur, and size adjustments.

## Features
- Fetch a random image from Picsum
- Search image by ID (0–1084)
- Grayscale toggle
- Adjustable blur intensity
- Change image height/shape
- Simple two-tab interface (Random / Search)

## Tech Stack
| Technology | Purpose |
|------------|---------|
| HTML5 | UI structure |
| CSS3 | Styling and layout |
| JavaScript (ES6) | Logic and event handling |
| Fetch API | Retrieves image data |
| Picsum Photos API | External image source |

## How It Works
1. User selects either the Random tab or Search tab.
2. In Random mode:
   - A random ID (0–1084) is generated.
   - The app builds a Picsum URL including optional grayscale and blur parameters.
3. In Search mode:
   - User enters an ID.
   - Input is validated (0–1084 only).
   - A Picsum URL is constructed using the selected filters.
4. The generated URL is applied to the image element, updating the displayed photo.
5. Blur sliders update the image preview in real time.

## Screenshots
- [Random Image](ImageViewerRandomImg.png)
- [Search Image](ImageViewerSearchImg.png)

## How to Run
1. Navigate to the ImageViewer folder:
   ```bash
   cd ImageViewer
   ```
2. Open the HTML file in your browser:
   ```bash
   open index.html
   ```
No installation required.

## Future Improvements
- Add download image button
- Display image metadata (author, size, etc.)

## API Reference
This project uses the Picsum Photos API, a free service for placeholder and sample images.