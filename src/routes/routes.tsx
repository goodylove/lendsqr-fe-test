import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../pages/login";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard/" element={"dashboard"} />
        <Route path="/users" element={"user"} />
        <Route path="/users/:id" element={"userDetails"} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
