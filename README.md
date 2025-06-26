# Volt - React E-Commerce App for Electronics

**Volt** is a modern, responsive e-commerce web application for selling electronics, built with React and Bootstrap. The project showcases dynamic routing, real-time cart/wishlist management, API integration, and clean UI/UX. It’s optimized for both desktop and mobile experiences.

## 🚀 Features

- 💡 **Modern UI**: Built with Bootstrap 5 and styled with Poppins font.
- 🛒 **Cart Functionality**: Add, remove, and update item quantities.
- ❤️ **Wishlist System**: Add or remove items with visual badge counts.
- 📦 **Product Filtering**: Pulls only electronics products from Fake Store API.
- 🔍 **Search & Animation**: Integrated search bar with Lottie animation for no results.
- ✅ **Responsive Design**: Clean layout across all screen sizes.
- 🔧 **Custom Hooks & Context API**: Centralized cart and wishlist logic.
- 💳 **Checkout Summary**: View total and proceed to checkout (static UI).
- 🔄 **Error-Free Mobile Navbar**: Pure React-based toggle without Bootstrap JS bugs.

## 🖼️ UI Preview

- Responsive navbar with logo and counters
- Product cards with image, title, price, and action buttons
- Custom-styled Cart and Wishlist pages
- Lottie animation on empty search
- Sticky footer and properly aligned elements

## 🛠️ Tech Stack

- React (via Vite)
- React Router
- Bootstrap 5 (CSS only)
- Context API for state management
- Fake Store API for data
- Lottie for loading animations

## 🧱 Folder Structure

```bash
src/
├── components/
│   ├── Navbar.jsx
│   ├── ProductCard.jsx
│   ├── Cart.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   ├── Products.jsx
│   ├── CartPage.jsx
│   ├── WishlistPage.jsx
│   └── NotFound.jsx
├── context/
│   └── CartContext.jsx
├── App.jsx
├── index.js
└── assets/
    ├── Styles
    └── Animations
```

## 🔗 Live Demo

> Deployed on [Vercel](https://volt-neon.vercel.app/)

## 📦 API Used

[**https://fakestoreapi.com/products/category/electronics**](https://fakestoreapi.com/products/category/electronics)

## 📄 How to Use

1. Clone the repo
2. Run `npm install`
3. Run `npm run dev`
4. Visit `localhost:5173`

## 🧠 Author Insight

This project was built step-by-step to master:

- React Context API for managing cart/wishlist
- Clean, component-based design patterns
- Responsive UIs with Bootstrap in React
- Integration with external APIs and animations
- Vercel deployment and environment preparation

---

## 🧑‍💻 Author

Mahmoud Hany

---

**If you like the project, give it a star ⭐ and feel free to fork.**

