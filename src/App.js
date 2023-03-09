// eslint-disable-next-line no-unused-vars
import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import Error404 from "./pages/error404/Error404";
import Skins from "./pages/skins/Skins";
import Ranking from "./pages/ranking/Ranking";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/skins" element={<Skins />} />
        <Route exact path="/ranking" element={<Ranking />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
