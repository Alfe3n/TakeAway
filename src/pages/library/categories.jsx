import { React } from "react";
import { useNavigate } from "react-router-dom";

function categories() {
  const navigate = useNavigate();
  function setCategory(parameter) {
    navigate("/categorylist", { state: parameter });
  }
  return (
    <div className="flex items-center justify-center w-full">
      <div className="flex flex-wrap justify-center w-1/2 mt-10 categories-container gap-x-3 gap-y-3">
        <button
          className="p-1 text-sm bg-white border-2 border-solid rounded-lg md:text-lg md:p-2"
          onClick={() => {
            setCategory(["Entrepreneurship"]);
          }}
        >
          Entrepreneurship
        </button>
        <button
          className="p-1 text-sm bg-white border-2 border-solid rounded-lg md:text-lg md:p-2"
          onClick={() => {
            setCategory(["Productivity"]);
          }}
        >
          Productivity
        </button>
        <button
          className="p-1 text-sm bg-white border-2 border-solid rounded-lg md:text-lg md:p-2"
          onClick={() => {
            setCategory(["Communication"]);
          }}
        >
          Communication Skills
        </button>
        <button
          className="p-1 text-sm bg-white border-2 border-solid rounded-lg md:text-lg md:p-2"
          onClick={() => {
            setCategory(["Biography"]);
          }}
        >
          Biography and Memoir
        </button>
        <button
          className="p-1 text-sm bg-white border-2 border-solid rounded-lg md:text-lg md:p-2"
          onClick={() => {
            setCategory(["Money"]);
          }}
        >
          Money & Investment
        </button>
        <button
          className="p-1 text-sm bg-white border-2 border-solid rounded-lg md:text-lg md:p-2"
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
