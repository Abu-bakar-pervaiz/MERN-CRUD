import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Navbar from './pages/layout/Navbar'
import Sidebar from './pages/layout/Sidebar'
import AddCourse from "./pages/course/AddCourse";
import Courses from "./pages/course/Courses";
import EditCourse from "./pages/course/EditCourse";
import AddCategory from "./pages/category/AddCategory";
import Categories from "./pages/category/Categories";
import Students from "./pages/student/Students";
import AddStudent from "./pages/student/AddStudent";
import Profile from "./pages/profile/Profile";
import AddEnrollment from "./pages/enrollment/AddEnrollment";
import Enrollments from "./pages/enrollment/Enrollments";

function App() {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route path="/" exact element={ <Home /> }></Route>
        <Route path="/dashboard" element={ <Dashboard/> }></Route>

        {/* Course Routes */}
        <Route path="/add-course" element={ <AddCourse/> }></Route>
        <Route path="/all-course" element={ <Courses/> }></Route>
        <Route path="/edit-course/:id" element={ <EditCourse/> }></Route>
        
        {/* Categories Routes */}
        <Route path="/add-category" element={ <AddCategory/> }></Route>
        <Route path="/all-categories" element={ <Categories/> }></Route>

        {/* Students Routes */}
        <Route path="/add-student" element={ <AddStudent/> }></Route>
        <Route path="/all-students" element={ <Students/> }></Route>
        {/* Profile Routes */}
        <Route path="/profile" element={ <Profile/> }></Route>

        {/* Enrollments Routes */}
        <Route path="/add-enrollment" element={ <AddEnrollment/> }></Route>
        <Route path="/all-enrollments" element={ <Enrollments/> }></Route>
      </Routes>
    </Router>
  );
}

export default App;
