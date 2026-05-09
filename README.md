# Sloka Summer Camp

A responsive, elegant, and spiritually-themed summer camp landing website for children and parents. Built with vanilla HTML5, CSS3, and JavaScript for maximum performance and simplicity.

## Features

- **Devotional Aesthetic:** A peaceful and welcoming design with a traditional Indian cultural feel.
- **Mentors Section:** Featuring dedicated guides with professional profiles and consistent, high-quality portraits.
- **Registration Form:** Integrated with **FormSubmit.co (AJAX)** for direct email notifications of new enrollments.
- **Responsive Navigation:** Optimized for both desktop and mobile, with a persistent "Register Now" call-to-action.
- **Interactive Elements:** FAQ accordion, testimonial slider, and a lightbox gallery for high engagement.
- **SEO Optimized:** Semantic HTML and meta tags for better search visibility.

## Project Structure

- `index.html`: Main website structure.
- `styles.css`: Modern CSS with custom design tokens and responsive layouts.
- `app.js`: Clean vanilla JavaScript for interactive components and form handling.
- `assets/`: 
  - `images/`: Optimized images, including the custom SVG logo and mentor portraits.

## Getting Started

Since this is a static website, no build step is required.

1. Clone the repository.
2. Open `index.html` directly in any modern web browser.
3. Alternatively, serve it using any simple static server (e.g., `python -m http.server`).

## Backend Configuration

The registration form uses **FormSubmit.co**. To update the destination email, modify the following line in `app.js`:

```javascript
fetch('https://formsubmit.co/ajax/YOUR_EMAIL@gmail.com', { ... })
```

## Credits

Developed with a focus on peace, devotion, and cultural education for the next generation.
