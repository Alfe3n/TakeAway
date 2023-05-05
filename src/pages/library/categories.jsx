import { React } from "react";
import { useNavigate } from "react-router-dom";

function categories() {
  const navigate = useNavigate();
  function setCategory(parameter) {
    navigate("/categorylist", { state: parameter });
  }
  return (
    <div>
      {/* <p
        onClick={() => {
          setCategory(["biography"]);
        }}
      >
        Biography and Memoir
      </p> */}
      <div className="flex mt-10 categories-container">
        <button
          className="p-5 m-2 bg-white rounded-lg"
          onClick={() => {
            setCategory(["biography"]);
          }}
        >
          Entrepreneurship
        </button>
        <button
          className="p-5 m-2 bg-white rounded-lg"
          onClick={() => {
            setCategory(["biography"]);
          }}
        >
          Productivity
        </button>
        <button
          className="p-5 m-2 bg-white rounded-lg"
          onClick={() => {
            setCategory(["biography"]);
          }}
        >
          Communication Skills
        </button>
        <button
          className="p-5 m-2 bg-white rounded-lg"
          onClick={() => {
            setCategory(["biography"]);
          }}
        >
          Biography and Memoir
        </button>
        <button
          className="p-5 m-2 bg-white rounded-lg"
          onClick={() => {
            setCategory(["biography"]);
          }}
        >
          Money & Investment
        </button>
      </div>
    </div>
  );
}

export default categories;
