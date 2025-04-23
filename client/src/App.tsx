import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { Navigate } from "react-router-dom";
import NotFoundPage from "./pages/error/NotFoundPage";
function App(){
    return(
        <Router>
             <Routes>
                <Route path='/' element={<LoginPage></LoginPage>}></Route>
                <Route path='/login' element={<LoginPage></LoginPage>}></Route>
                <Route path='/404' element={<NotFoundPage></NotFoundPage>}></Route>
                <Route path="*" element={<Navigate to="/404" replace />} />
             </Routes>
        </Router>
    )
}

export default App;