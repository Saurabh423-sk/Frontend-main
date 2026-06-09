# 📚 MGM Library Automation System - Frontend

<div align="center">

![Library System](https://img.shields.io/badge/React-18.x-61DAFB?style=for-the-badge&logo=react)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=for-the-badge&logo=vite)
![Redux Toolkit](https://img.shields.io/badge/Redux-Toolkit-764ABC?style=for-the-badge&logo=redux)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

**A modern, dynamic web application for managing library operations efficiently! 📖✨**

</div>

---

## 🌟 Features

✅ **User Authentication**
- Secure login and signup system
- Admin and Student role-based access
- Protected routes for different user types

✅ **Book Management**
- Browse books by categories/courses
- Advanced book search and filtering
- Detailed book information display
- Book availability status

✅ **Borrowing System**
- Borrow books with ease
- Track borrowed books
- Return book management
- Borrow/Return history

✅ **Entry/Exit Management**
- Library entry-exit logging
- Automated tracking system
- Historical records

✅ **Admin Dashboard**
- Complete student management
- Book inventory management
- Approve/reject borrow requests
- Entry-exit approvals
- Dashboard analytics

✅ **User Profile**
- View personal information
- Manage borrowing history
- Track library activities

✅ **Beautiful UI**
- Responsive design for all devices
- Smooth animations and transitions
- Modern and intuitive interface

---

## 🛠️ Tech Stack

| Technology | Purpose | Version |
|-----------|---------|---------|
| **React** | Frontend Library | 18.x |
| **Vite** | Build Tool & Dev Server | Latest |
| **Redux Toolkit** | State Management | Latest |
| **CSS3** | Styling | Native |
| **JavaScript (ES6+)** | Programming Language | - |

---

## 📋 Prerequisites

Make sure you have the following installed:

- **Node.js** (v14.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control)

Check your installation:
```bash
node --version
npm --version
```

---

## 🚀 Quick Start

### 1️⃣ Clone the Repository

```bash
git clone <repository-url>
cd mgm-library-automation_system_frontend
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Configure Environment (if needed)

Create a `.env` file in the root directory with your API endpoints:
```env
VITE_API_URL=http://localhost:5000
VITE_API_TIMEOUT=30000
```

### 4️⃣ Start Development Server

```bash
npm run dev
```

🎉 Your application will run at `http://localhost:5173` (default Vite port)

---

## 📦 Build & Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist` folder.

### Preview Build

```bash
npm run preview
```

### Deploy

1. Upload the contents of the `dist` folder to your hosting service
2. Configure your server to redirect all routes to `index.html` (for SPA routing)

---

## 📂 Project Structure

```
mgm-library-automation_system_frontend/
│
├── 📄 index.html              # Main HTML file
├── 📄 package.json            # Dependencies and scripts
├── 📄 vite.config.js          # Vite configuration
├── 📄 eslint.config.js        # ESLint rules
│
├── 📁 src/                    # Source code
│   ├── main.jsx               # Entry point
│   ├── App.jsx                # Main App component
│   ├── index.css              # Global styles
│   │
│   ├── 📁 components/         # Reusable components
│   │   ├── navbar.jsx         # Navigation bar
│   │   ├── footer.jsx         # Footer
│   │   ├── loader.jsx         # Loading spinner
│   │   │
│   │   ├── 📁 admin/          # Admin-specific components
│   │   │   ├── admin-nav.jsx
│   │   │   ├── detail-box.jsx
│   │   │   ├── heading.jsx
│   │   │   ├── table-head.jsx
│   │   │   └── table-cnt.jsx
│   │   │
│   │   ├── 📁 explore-books/  # Book browsing components
│   │   │   ├── bookcard.jsx
│   │   │   └── course.jsx
│   │   │
│   │   ├── 📁 library-view/   # Library display
│   │   │   └── gallery.jsx
│   │   │
│   │   └── 📁 rules/          # Rules display
│   │       └── rule.jsx
│   │
│   ├── 📁 pages/              # Page components
│   │   ├── home.jsx           # Home page
│   │   ├── about.jsx          # About page
│   │   ├── profile.jsx        # User profile
│   │   ├── borrow-return.jsx  # Borrow/return main page
│   │   ├── entry_exit.jsx     # Entry/exit page
│   │   │
│   │   ├── 📁 auth/           # Authentication pages
│   │   │   ├── login.jsx
│   │   │   ├── signup.jsx
│   │   │   └── admin.jsx
│   │   │
│   │   ├── 📁 categoriosed-book/
│   │   │   ├── books.jsx
│   │   │   └── explore-course.jsx
│   │   │
│   │   ├── 📁 admin/          # Admin pages
│   │   │   └── 📁 admin-pages/
│   │   │       ├── dashboard.jsx
│   │   │       ├── addBook.jsx
│   │   │       ├── Books.jsx
│   │   │       ├── students.jsx
│   │   │       ├── borrow.jsx
│   │   │       ├── return.jsx
│   │   │       └── Entry-Exit.jsx
│   │   │
│   │   └── 📁 protected_pages/
│   │       ├── protected_routes.jsx
│   │       └── admin_protected.jsx
│   │
│   ├── 📁 redux-toolkit/      # Redux state management
│   │   ├── 📁 store/
│   │   │   └── store.js       # Redux store configuration
│   │   │
│   │   ├── 📁 features/       # Redux slices
│   │   │   ├── book_bycourse_slice.js
│   │   │   ├── profile_slice.js
│   │   │   ├── signup_slice.js
│   │   │   └── 📁 admin/
│   │   │       ├── getAllbook_slice.js
│   │   │       ├── students_slice.js
│   │   │       ├── get_borrow_return.js
│   │   │       ├── get_All_entry_exit.js
│   │   │       └── toggle_student_status_slice.js
│   │   │
│   │   ├── 📁 Admin/          # Admin API calls
│   │   │   ├── admin-api.js
│   │   │   ├── add_book.js
│   │   │   ├── get_books.js
│   │   │   ├── get_students.js
│   │   │   ├── get_borrow_return.js
│   │   │   ├── approve_borrow_return.js
│   │   │   ├── get_entry_exit.js
│   │   │   ├── approve_entry_exit.js
│   │   │   ├── toggle_student_status.js
│   │   │   └── check_admin_api.js
│   │   │
│   │   └── 📁 all_api/        # Common API calls
│   │       ├── common_api.js
│   │       ├── login-api.js
│   │       ├── signup_api.js
│   │       ├── logout.js
│   │       ├── borrow_return.js
│   │       ├── entry-exit.js
│   │       ├── get_book_bycourse_api.js
│   │       └── check_api.js
│   │
│   └── 📁 assets/             # Static assets
│       ├── 📁 images/         # Images
│       └── 📁 font/           # Custom fonts
│
└── 📁 public/                 # Static files

```

---

## 🧩 Component Architecture

### 📌 Key Components

**Authentication Flow:**
```
Login/Signup → Protected Routes → Dashboard/Home
```

**Admin Features:**
```
Admin Dashboard → Manage Books, Students, Requests
```

**User Features:**
```
Home → Explore Books → Borrow/Return
```

---

## 💾 Redux State Management

The application uses Redux Toolkit for state management with the following structure:

**Slices:**
- 📊 `book_bycourse_slice` - Filter books by course
- 👤 `profile_slice` - User profile data
- 📝 `signup_slice` - Registration form state
- 📚 `getAllbook_slice` - All books list (admin)
- 👥 `students_slice` - Student management (admin)
- 🔄 `get_borrow_return` - Borrow/return requests
- 🚪 `get_All_entry_exit` - Entry/exit logs
- ✅ `toggle_student_status_slice` - Student status toggle

---

## 🔌 API Integration

All API calls are organized in the `redux-toolkit` folder:

| Folder | Purpose |
|--------|---------|
| `Admin/` | Admin-specific operations |
| `all_api/` | Common user operations |

---

## 📝 Available Scripts

```bash
# Development server with hot reload
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code with ESLint
npm run lint

# Fix ESLint issues automatically
npm run lint:fix
```

---

## 🔐 Authentication & Security

✅ Role-based access control (Admin/Student)
✅ Protected routes for authenticated users
✅ Secure login/logout mechanism
✅ Session management with Redux

---

## 🎨 Styling

- Pure **CSS3** for styling
- Responsive design using media queries
- Mobile-first approach
- Organized CSS architecture

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes and commit**
   ```bash
   git commit -m "Add: description of your feature"
   ```
4. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```
5. **Create a Pull Request** with a clear description

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill the process using port 5173 and restart
npm run dev
```

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Build Errors
```bash
# Clear Vite cache and rebuild
rm -rf dist
npm run build
```

### Redux DevTools
Install [Redux DevTools Extension](https://github.com/reduxjs/redux-devtools) for Chrome/Firefox to debug state management.

---

## 📊 Performance Tips

- 🚀 Code splitting is handled automatically by Vite
- 📦 Minimize bundle size using dynamic imports
- 🖼️ Optimize images and assets
- 💾 Use Redux Toolkit for efficient state updates

---

## 📞 Support & Contact

Have questions? Need help?

- 📧 Email: support@mgmlibrary.com
- 🐛 Report bugs in Issues section
- 💬 Start a discussion for feature requests

---

## 📄 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 🎓 Learning Resources

- [React Documentation](https://react.dev)
- [Vite Guide](https://vitejs.dev)
- [Redux Toolkit Docs](https://redux-toolkit.js.org)
- [MDN Web Docs](https://developer.mozilla.org)

---

<div align="center">

**Made with ❤️ for MGM Library Management System**

⭐ If this project helps you, please give it a star!

</div>
#   F r o n t e n d - m a i n  
 #   F r o n t e n d - m a i n  
 