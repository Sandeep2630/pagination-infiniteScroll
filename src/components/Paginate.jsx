import { useEffect, useState } from "react";
import { getPost } from "../api";
import Post from "./Post";
export default function Paginate() {
  const [page, setPage] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPost(page).then((res) => setPosts(res));
  }, [page]);

  function nextPage() {
    setPage((s) => s + 1);
  }
  function prevPage() {
    setPage((s) => s - 1);
  }
  console.log(posts);
  // https://restcountries.com/v3.1/name/india

  //   const data = function (country) {

  //     fetch("https://restcountries.com/v3.1/name/india")

  //       .then((res) => res.json())

  //       .then((data) => console.log(data));
  //   };

  //   data();

  return (
    <div>
      <h1>Paginate</h1>
      <nav className="bg-purple-100">
        <button
          disabled={page === 1}
          className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={prevPage}
        >
          prev
        </button>
        <button
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          onClick={nextPage}
        >
          next
        </button>
      </nav>

      {posts.map((post) => (
        <Post post={post} />
      ))}
    </div>
  );
}
