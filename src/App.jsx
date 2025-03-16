import { useEffect, useState } from "react";
import Modal from "./assets/Modal"; 

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null); // Modal uchun state

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((data) => data.json())
      .then((response) => {
        setPosts(response.products);
        setLoading(false);
      });
  }, []);

  const handleCardClick = (post) => {
    setSelectedPost(post);
  };

  const closeModal = () => {
    setSelectedPost(null);
  };

  if (loading) {
    return <h2>Yuklanmoqda...</h2>;
  }

  return (
    <div>
      {/* Navbar */}
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">Market</a>
        </div>
      </div>

      {/* Product List */}
      <ul className="flex flex-wrap justify-center gap-3 bg-amber-500 pb-[70px] pt-[70px]">
        {posts.map((e) => (
          <li
            className="bg-amber-800 rounded-2xl p-[20px] cursor-pointer"
            key={e.id}
            onClick={() => handleCardClick(e)}
          >
            <img src={e.thumbnail} alt={e.title} className="rounded-xl" />
            <h2 className="card-title text-center">{e.title}</h2>
            <h4>Rating: {e.rating}</h4>
            <h5>{e.price}$</h5>
          </li>
        ))}
      </ul>

      {/* Modal */}
      <Modal post={selectedPost} onClose={closeModal} />
    </div>
  );
}

export default App;
