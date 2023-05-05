import { React } from "react";
import { useNavigate } from "react-router-dom";

function categories() {
  const navigate = useNavigate();
  function setCategory(parameter) {
    navigate("/categorylist", { state: parameter });
  }
  return (
    <div>
      <div className="flex mt-10 categories-container">
        <button
          className="p-5 m-2 bg-white rounded-lg"
          onClick={() => {
            setCategory(["Entrepreneurship"]);
          }}
        >
          Entrepreneurship
        </button>
        <button
          className="p-5 m-2 bg-white rounded-lg"
          onClick={() => {
            setCategory(["Productivity"]);
          }}
        >
          Productivity
        </button>
        <button
          className="p-5 m-2 bg-white rounded-lg"
          onClick={() => {
            setCategory(["Communication"]);
          }}
        >
          Communication Skills
        </button>
        <button
          className="p-5 m-2 bg-white rounded-lg"
          onClick={() => {
            setCategory(["Biography"]);
          }}
        >
          Biography and Memoir
        </button>
        <button
          className="p-5 m-2 bg-white rounded-lg"
          onClick={() => {
            setCategory(["Money"]);
          }}
        >
          Money & Investment
        </button>
        <button
          className="p-5 m-2 bg-white rounded-lg"
          onClick={() => {
            setCategory(["Philosophy"]);
          }}
        >
          Philosophy
        </button>
      </div>
    </div>
  );
}

export default categories;
