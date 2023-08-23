import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "../common/navbar";
import Loader from "../common/loader.jsx";
export function Takeaway() {
  const location = useLocation();
  let book = location.state;
  let data = {};
  const navigate = useNavigate();
  console.log(book);

  const [loading, setLoading] = useState(true);
  const [thumbnail, setThumbnail] = useState("");
  const ReadMore = ({ children }) => {
    const text = children;
    const [isReadMore, setIsReadMore] = useState(true);
    const toggleReadMore = () => {
      setIsReadMore(!isReadMore);
    };
    return (
      <p className="text">
        {isReadMore ? text.slice(0, 150) : text}
        <span onClick={toggleReadMore} className="read-or-hide">
          {isReadMore ? (
            <span className="font-bold">...read more</span>
          ) : (
            <span className="font-bold">show less</span>
          )}
        </span>
      </p>
    );
  };

  function readBook(name) {
    navigate("/gpt", { state: name });
  }
  // const systemMessage = {
  //   role: "system",
  //   content: "Act like you are a librarian",
  // };
  // async function fetchdata() {
  //   const response = await fetch("https://api.openai.com/v1/chat/completions", {
  //     method: "POST",

  //     headers: {
  //       Authorization: `Bearer ${API_KEY}`,
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       model: "gpt-3.5-turbo",
  //       messages: [
  //         {
  //           role: "user",
  //           content: `elaborate chapter wise takeaways from the book ${book.volumeInfo.title}enclosed in an  js array`,
  //         },
  //       ],
  //     }),
  //   });
  //   data = await response.json();
  //   console.log(data);
  // }
  // useEffect(() => {
  //   fetchdata();
  // }, []);
  // let { id } = useParams();
  // console.log(book);
  // console.log("page2");

  useEffect(() => {
    if (!book) return;
    if (!book.volumeInfo.imageLinks) return;
    setThumbnail(book.volumeInfo.imageLinks.thumbnail);
    setLoading(false);
  }, [book]);

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Loader />
      </div>
    );
  }

  return (
    <div className="flex-col w-full page-container">
      <Navbar />
      <div className="flex-col mx-12 my-24 md:mx-32 text-darkblue content-container">
        <div className="flex items-center justify-start mb-6 md:flex-row-reverse md:justify-around image-container">
          <img src={thumbnail} className="md:w-52" />
          <div className="hidden md:flex md:flex-col md:gap-y-4 ">
            <h1 className="text-4xl font-bold lg:text-4xl">
              {book.volumeInfo.title}
            </h1>
            <h2 className="text-2xl lg:text-3xl lg:font-semibold">
              {book.volumeInfo.authors[0]}
            </h2>
            {/* <p className="text-xl">Rating:{book.volumeInfo.averageRating}</p> */}
          </div>
        </div>
        <div className="flex flex-col gap-y-4 details-container">
          <div className="md:hidden">
            <h1 className="text-2xl font-bold">{book.volumeInfo.title}</h1>
            <h2 className="text-lg font-semibold ">
              {book.volumeInfo.authors[0]}
            </h2>
          </div>
          <div>
            {/* <a href="/gpt"> */}
            <button
              className="p-1 mb-10 font-semibold rounded-lg bg-lightgrey md:text-xl md:p-2"
              onClick={() => readBook(book.volumeInfo.title)}
            >
              Read TakeAway
            </button>
            {/* </a> */}

            <h3 className="text-lg font-semibold tracking-wider lg:leading-loose md:text-xl">
              What is it about?
            </h3>

            <p className="leading-relaxed tracking-wide md:text-xl md:tracking-wide md:leading-normal">
              <ReadMore>{book.volumeInfo.description}</ReadMore>
            </p>

            <button className="p-2 mt-4 font-semibold rounded-lg bg-lightgrey md:text-xl md:p-2">
              {book.volumeInfo.categories}
            </button>
          </div>
          <div>
            <h3 className="text-lg font-semibold md:text-xl">Rating</h3>
            <p className="md:text-xl">{book.volumeInfo.averageRating}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold md:text-xl">
              Date of Publish
            </h3>
            <p className="md:text-xl">{book.volumeInfo.publishedDate}</p>
          </div>
        </div>

        {/* <div className="takeaway-container">
        <p>{data.choices[0].message.content}</p>
      </div> */}
      </div>
    </div>
  );
}
