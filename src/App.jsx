import { Routes, Route } from "react-router-dom"
import {lazy,Suspense} from "react"
import Loader from "./components/loader.jsx"
import Login from "./pages/auth/login.jsx"
import Protected from "./pages/protected_pages/protected_routes.jsx"
import Admin_protection from "./pages/protected_pages/admin_protected.jsx"
import AdminLogin from "./pages/auth/admin.jsx"
import   Home  from "./pages/home.jsx" 
import Navbar from "./components/navbar.jsx"
import Footer from "./components/footer.jsx"
const Entry_Exit = lazy(()=>import("./pages/entry_exit.jsx"))
const Explore_Course = lazy(()=>import("./pages/categoriosed-book/explore-course.jsx"))
const Borrow_Return = lazy(()=>import("./pages/borrow-return.jsx")) 
const Signup = lazy(()=>import( "./pages/auth/signup.jsx"))
const About = lazy(()=>import("./pages/about.jsx"))
const Profile = lazy(()=>import("./pages/profile.jsx"))
const Books = lazy(()=>import( "./pages/categoriosed-book/books.jsx"
))
const AddBook = lazy(()=> import("./pages/admin/admin-pages/addBook.jsx"))
const Dashboard = lazy(()=>import("./pages/admin/admin-pages/dashboard.jsx")) 
const Admin_Students =lazy(()=>import("./pages/admin/admin-pages/students.jsx")) 
const Admin_Books = lazy(()=>import("./pages/admin/admin-pages/Books.jsx"))
const Admin_Borrow =  lazy(()=>import("./pages/admin/admin-pages/borrow.jsx"))  
const Admin_Return =  lazy(()=>import( "./pages/admin/admin-pages/return.jsx")) 
const Admin_Entry_Exit =  lazy(()=>import("./pages/admin/admin-pages/Entry-Exit.jsx"))  


function App() {


  return (
    <>
    <Suspense fallback={<Loader />} >

      <Routes >
        <Route element={<Login />} path="/login" />
        <Route element={<Signup />} path="/signup" />
         <Route element={ <AdminLogin />} path="/adminlogin" />   
 <Route element={<><Navbar />  <Home /> <Footer /></>} path="/" />
        <Route element={<><Navbar />  <About /> <Footer /></>} path="/about" />
        <Route element={<><Navbar />  <Explore_Course /> <Footer /></>} path="/explore-course" />
       <Route element={<Protected />}>
         <Route element={<><Navbar />  <Profile /> </>} path="/profile" />
       
      
        <Route element={<><Navbar />  <Books /> <Footer /></>} path="/explore-course/books" />
        <Route element={<><Navbar />  <Borrow_Return /> <Footer /></>} path="/borrow_return" />
        <Route element={<><Navbar />  <Entry_Exit /> <Footer /></>} path="/entry_exit" />
            
       </Route>
<Route element={<Admin_protection />}>

      <Route path="/admin_dashboard" element={<Dashboard />} />
      <Route path="/admin_students" element={<Admin_Students />} />
      <Route path="/admin_books" element={<Admin_Books />} />
      <Route path="/admin_borrow" element={<Admin_Borrow />} />
      <Route path="/admin_return" element={<Admin_Return />} />
      <Route path="/admin_entry_exit" element={<Admin_Entry_Exit />} />
       <Route path="/addbook" element={<AddBook />} />

</Route>




      </Routes>


</Suspense>

    </>
  )
}

export default App
