import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./pages/productList/ProductList";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";
import Transaction from "./pages/transaction/Transaction";
import Orders from "./pages/Orders/Orders";
import Analatics from "./components/analatics/Analatics";
import Sales from "./pages/sales/Sales";
import Reports from "./pages/report/Reports";
import OrderDetails from "./pages/Orders/OrderDetails/OrderDetails";
import NewProduct from "./pages/productList/newProduct/NewProduct";
import Product from "./pages/productList/product/Product";
import ErrorBoundary from "./utils/ErrorBoundary";
import UserList from "../src/pages/userList/UserList";
import User from "../src/pages/userList/user/User";
import NewUser from "../src/pages/userList/newUser/NewUser";
import Admins from "./pages/admin/AdminList";
import AddBanner from "./pages/AddBanner/AddBanner";

function App() {
  const admin = useSelector((state) => state.user?.currentUser?.isAdmin);
  return (
    <ErrorBoundary>
      <Router>
        <Switch>
          {admin ? (
            <>
              <Topbar />
              <div className="container">
                <Sidebar />
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path="/users">
                  <UserList />
                </Route>
                <Route path="/user/:userId">
                  <User />
                </Route>
                <Route path="/newUser">
                  <NewUser />
                </Route>
                <Route path="/products">
                  <ProductList />
                </Route>
                <Route exact path="/orders">
                  <Orders />
                </Route>
                <Route path="/orders/:orderedId">
                  <OrderDetails />
                </Route>
                <Route path="/product/:productId">
                  <Product />
                </Route>
                <Route path="/newproduct">
                  <NewProduct />
                </Route>
                <Route path="/banner">
                  <AddBanner />
                </Route>
                <Route path="/transaction">
                  <Transaction />
                </Route>
                <Route path="/analatics">
                  <Analatics />
                </Route>
                <Route path="/sales">
                  <Sales />
                </Route>
                <Route path="/reports">
                  <Reports />
                </Route>
                <Route path="/make-admin">
                  <Admins />
                </Route>
              </div>
            </>
          ) : (
            <Login />
          )}
        </Switch>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
