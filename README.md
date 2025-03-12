# Canonical Realty

## Overview
This is a modern and visually appealing **real estate website** built with **Vue.js**. It provides an intuitive and engaging user experience, helping clients **explore properties, gain market insights, and connect with experts.**

## Features
✅ **Modern UI Design** – Clean, minimalistic layout with a professional color scheme.  
✅ **SEO-Optimized Content** – Engaging, keyword-rich copywriting for better search rankings.  
✅ **Responsive & Mobile-Friendly** – Ensures a seamless experience across all devices.  
✅ **Modular Vue Components** – Navigation, Hero, Services, Contact, and Footer as separate components.  
✅ **Optimized Performance** – Efficient code structure, lightweight assets, and smooth animations.  

## Tech Stack
- **Vue.js** – Frontend framework for building the UI.
- **CSS** – Styling for responsive design.
- **Vite** – Fast development server and build tool.
- **ESLint & Prettier** – Code formatting and linting.

## Installation & Setup

### 1. Clone the Repository
```sh
git clone https://github.com/Sn0wF1re/canonicalrealty.git
cd canonicalrealty
```

### 2. Install Dependencies
```sh
npm install
```

### 3. Run the Development Server
```sh
npm run dev
```

### 4. Build for Production
```sh
npm run build
```

### 5. Preview Production Build
```sh
npm run preview
```

## Project Structure
```
canonicalrealty/
├── public/               # Static assets
├── src/
│   ├── components/
│   │   ├── Navigation.vue
│   │   ├── Hero.vue
│   │   ├── Services.vue
│   │   ├── Contact.vue
│   │   ├── Footer.vue
│   ├── assets/           # Styles, images, icons
|   |   ├──styles.css
│   ├── views/
│   ├── App.vue           # Main Vue app
│   ├── main.js           # Entry file
├── package.json
├── vite.config.js        # Vite configuration
└── README.md
```

## Component Breakdown

### **1. Navigation.vue**
- Sticky navigation bar with links to different sections.
- "Contact Us" button with strong **CTA (Call-to-Action).**

### **2. Hero.vue**
- High-quality background image with **engaging headline** and CTA buttons.
- Uses a **semi-transparent overlay** for readability.

### **3. Services.vue**
- Showcases **key real estate services** in a structured grid layout.
- Uses **soft shadows and hover effects** for interactivity.
- Enhanced copywriting for better **SEO and conversion.**

### **4. Contact.vue**
- Simple, clear layout to encourage **quick engagement.**

### **5. Footer.vue**
- **Brand logo and copyright.**
- **Subtle background color** for a professional look.

## Styling Guide
### **Color Scheme**
- 🌿 **Primary Green (#98FF98)** – Used for CTA buttons and highlights.
- 🎨 **Soft Greenish White (#EFFBEF)** – Background color for sections.
- ⚪ **Light Gray (#F5F5F5)** – Used for service cards.
- ⚫ **Dark Gray (#333333)** – Text color for contrast.

### **Typography**
- **Headings:** Inter, Semi-Bold, 1.5x spacing.
- **Body Text:** Inter, Regular, readable line height.
- **CTA Buttons:** Larger font size for visibility.

## Deployment
To deploy the project, you can use **Netlify, Vercel, or GitHub Pages.**

For Netlify:
1. Push your project to GitHub.
2. Connect your repository to Netlify.
3. Choose `npm run build` as the build command.
4. Deploy 🚀

## Contributing
Feel free to fork this project and submit **pull requests** to improve the design or functionality!

