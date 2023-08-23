import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { Takeaway } from "./pages/takeaways/takeaway";
import { Page1 } from "./pages/home/page";
import { Categorylist } from "./pages/categorylist/categorylist";
import { Page } from "./pages/gpt/page";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route exact path="/book" element={<Takeaway />} />
        <Route path="/gpt" element={<Page />} />
        <Route path="/categorylist" element={<Categorylist />} />
        {/* <Route path="*">"404 Not Found"</Route> */}
      </Routes>
      <ToastContainer />
    </div>
  );
}
// src\pages\categorylist\categorylist.jsx
export default App;
