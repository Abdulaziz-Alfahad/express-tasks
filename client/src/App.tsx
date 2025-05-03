import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { Navigate } from "react-router-dom";
import NotFoundPage from "./pages/error/NotFoundPage";
import GuestRoute from "./components/auth/GuestRoute";
import DashBoardPage from "./pages/DashBoardPage";
import SignUpPage from "./pages/SignUpPage";
import NavBar from "./components/NavBar";
function App(){
    return(
        <div className="main-div flexy">
            <NavBar></NavBar>
            <Router>
             <Routes>
                <Route path='/dashboard' element={<ProtectedRoute><DashBoardPage></DashBoardPage></ProtectedRoute>}></Route>
                <Route path='/' element={<ProtectedRoute><DashBoardPage></DashBoardPage></ProtectedRoute>}></Route>
                <Route path='/signup' element={<GuestRoute><SignUpPage></SignUpPage></GuestRoute>}></Route>
                <Route path='/login' element={<GuestRoute><LoginPage></LoginPage></GuestRoute>}></Route>
                <Route path='/404' element={<NotFoundPage></NotFoundPage>}></Route>
                <Route path="*" element={<Navigate to="/404" replace />} />
             </Routes>
        </Router>
        </div>
        
    )
}

export default App;