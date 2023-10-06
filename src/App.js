import { Route, Routes } from "react-router";
import Navbar from "./pages/Shared/Navbar";
import Home from "./pages/Home/Home";
import Services from "./pages/Home/Services";
import Blog from "./pages/Home/Blog";
import Footer from "./pages/Shared/Footer";
import Login from "./pages/Login/Login";
import SignUp from "./pages/Login/SignUp";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import Courses from "./pages/Home/Courses";
import RequireAuth from  "./pages/Login/RequireAuth" ;
import CheckOut from "./pages/CheckOut/CheckOut";
import NotFound from "./pages/Shared/NotFound";

function App() {
  return (
    <div>

      <Navbar></Navbar>
      <Routes>
          
        
        <Route path="/" element={<Home />} /> 
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} /> 
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/course" element={<Courses/>} />

        <Route path="/course/:courseId" element={
        
          <RequireAuth>

            <CourseDetail />

          </RequireAuth>
      
      
        } />


        <Route path="/checkOut" element={
        
          <RequireAuth>

            <CheckOut />

          </RequireAuth>
      
      
        } />

        <Route path="*" element={<NotFound></NotFound>}></Route>
        
          
      </Routes>  

      <Footer></Footer>  
      
    </div>
  );
}

export default App;

