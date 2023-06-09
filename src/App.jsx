import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { Takeaway } from "./pages/takeaways/takeaway";
import { Page1 } from "./pages/library/page";
import { Categorylist } from "./pages/categorylist/categorylist";
import { Page } from "./pages/gpt/page";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route exact path="/book" element={<Takeaway />} />
        <Route path="/gpt" element={<Page />} />
        <Route path="/categorylist" element={<Categorylist />} />
        {/* <Route path="*">"404 Not Found"</Route> */}
      </Routes>
    </div>
  );
}
// src\pages\categorylist\categorylist.jsx
export default App;
