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
          className="  hover:border-[#2ce080] hover:border-solid hover:border-2 border-2 border-white text-[#03314B] bg-[#F1F6F4] p-2 text-sm  rounded-lg md:text-lg md:p-4"
          onClick={() => {
            setCategory(["Entrepreneurship"]);
          }}
        >
          Entrepreneurship
        </button>
        <button
          className=" hover:border-[#2ce080] hover:border-solid hover:border-2 border-2 border-white bg-[#F1F6F4] text-[#03314B] p-2 text-sm   rounded-lg md:text-lg md:p-4"
          onClick={() => {
            setCategory(["Productivity"]);
          }}
        >
          Productivity
        </button>
        <button
          className=" hover:border-[#2ce080] hover:border-solid hover:border-2 border-2 border-white bg-[#F1F6F4] text-[#03314B] p-2 text-sm   rounded-lg md:text-lg md:p-4"
          onClick={() => {
            setCategory(["Communication"]);
          }}
        >
          Communication Skills
        </button>
        <button
          className=" hover:border-[#2ce080] hover:border-solid hover:border-2 border-2 border-white text-[#03314B] p-2 text-sm bg-[#F1F6F4]  rounded-lg md:text-lg md:p-4"
          onClick={() => {
            setCategory(["Biography"]);
          }}
        >
          Biography and Memoir
        </button>
        <button
          className="hover:border-[#2ce080] hover:border-solid hover:border-2 border-2 border-white text-[#03314B] p-2 text-sm bg-[#F1F6F4]  rounded-lg md:text-lg md:p-4"
          onClick={() => {
            setCategory(["Money"]);
          }}
        >
          Money & Investment
        </button>
        <button
          className=" hover:border-[#2ce080] hover:border-solid hover:border-2 border-2 border-white text-[#03314B] p-2 text-sm bg-[#F1F6F4]  rounded-lg md:text-lg md:p-4"
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
