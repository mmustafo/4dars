import { useEffect, useState } from "react";
import Modal from "./assets/Modal";


function App() {
  const [posts, setPosts] = useState([]);
  const [selectedPost, setSelectedPost] = useState(null);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => data.json())
      .then((posts) => {
        setPosts(posts);
        setLoading(false);
      });
  }, []);

  function openModal(post) {
    setSelectedPost(post);
    setModal(true);
  }

  function closeModal() {
    setModal(false);
  }

  return (
    <div>
      <h1>{loading ? "Loading..." : "Posts"}</h1>

      <ul>
        {posts.map((post) => (
          <li onClick={() => openModal(post)} key={post.id} className="post-item">
            {post.title}
          </li>
        ))}
      </ul>

      {modal && selectedPost && <Modal selectedPost={selectedPost} closeModal={closeModal} />}
    </div>
  );
}

export default App;
