import { Home } from "./Pages/Home/Home";
import { Login } from "./Pages/Login/Login";
import { SingleUser } from "./Pages/SingleUser/SingleUser";
import { NewUser } from "./Pages/NewUser/NewUser";
import { ListPage } from "./Pages/ListPage/ListPage";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="users">
              <Route index element={<ListPage />} />
              <Route path=":userId" element={<SingleUser />} />
              <Route path="new" element={<NewUser inputs={userInputs} title="Add new User" />} />
            </Route>
            <Route path="products">
              <Route index element={<ListPage />} />
              <Route path=":productId" element={<SingleUser />} />
              <Route path="new" element={<NewUser inputs={productInputs} title="Add new Product" />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
