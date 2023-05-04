import { React } from "react";
import { Route, Routes } from "react-router-dom";
import { Takeaways } from "./pages/takeaways/takeaway";
import { Page1 } from "./pages/library/page";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route exact path="/book/:id" element={<Takeaways />} />
        {/* <Route path="*">"404 Not Found"</Route> */}
      </Routes>
    </div>
  );
}

export default App;
