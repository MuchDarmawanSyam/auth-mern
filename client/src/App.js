import { 
  BrowserRouter,
  Routes,
  Route
 } from "react-router-dom";
 import Dashboard from "./pages/Dashboard";
 import Login from "./components/Login";
 import Users from "./pages/Users";
 import Products from "./pages/Products";

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
