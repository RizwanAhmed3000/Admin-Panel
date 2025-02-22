import { Home } from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import { SingleUser } from "./Pages/SingleUser/SingleUser";
import { NewUser } from "./Pages/NewUser/NewUser";
import { ListPage } from "./Pages/ListPage/ListPage";
import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import { productInputs, userInputs, hotelsInputs } from "./formSource";
import "./Styles/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./Context/darkModeContext";
import { AuthContext } from "./Context/AuthContext";

function App() {

  const { darkMode } = useContext(DarkModeContext)

  const ProtectedRoute = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (!user) {
      return <Navigate to="/login" />
    } else {
      return children
    }
  }

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route path="login" element={<Login />} />
            <Route index element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            } />
            <Route path="Customers">
              <Route index element={
                <ProtectedRoute>
                  <ListPage />
                </ProtectedRoute>
              } />
              <Route path=":userId" element={
                <ProtectedRoute>
                  <SingleUser />
                </ProtectedRoute>
              } />
              <Route path="new" element={
                <ProtectedRoute>
                  <NewUser inputs={userInputs} title="Add new User" />
                </ProtectedRoute>
              } />
            </Route>
            <Route path="Hotels">
              <Route index element={
                <ProtectedRoute>
                  <ListPage />
                </ProtectedRoute>
              } />
              <Route path=":hotelId" element={
                <ProtectedRoute>
                  <SingleUser />
                </ProtectedRoute>
              } />
              <Route path="new" element={
                <ProtectedRoute>
                  <NewUser inputs={hotelsInputs} title="Add New Hotel" />
                </ProtectedRoute>
              } />
            </Route>
            <Route path="Rooms">
              <Route index element={
                <ProtectedRoute>
                  <ListPage />
                </ProtectedRoute>
              } />
              <Route path=":productId" element={
                <ProtectedRoute>
                  <SingleUser />
                </ProtectedRoute>
              } />
              <Route path="new" element={
                <ProtectedRoute>
                  <NewUser inputs={productInputs} title="Add new Product" />
                </ProtectedRoute>
              } />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
