import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import UserDetails from "../pages/UserDetails";
import RepositoryDetails from "../pages/RepositoryDetails";
import NotFound from "../pages/NotFound";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/users/:username" element={<UserDetails />} />
      <Route path="/users/:username/repos/:repo" element={<RepositoryDetails />} />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  )
}