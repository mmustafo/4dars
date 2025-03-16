import { useEffect, useState } from "react";

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); // setLoading qo‘shildi

  useEffect(() => {
    fetch("https://dummyjson.com/products") // TO‘G‘RI URL
      .then((data) => data.json())
      .then((response) => {
        setPosts(response.products); // `products` massivini olish
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Yuklanmoqda...</h2>; // Yaxshi UX uchun yuklanish statusi
  }

  return (
    <div>
      <h1>Market</h1>
      <ul className="flex flex-wrap justify-center gap-3 bg-amber-500">
        {posts.map((e) => (
          <li className="bg-amber-800 rounded-2xl p-[20px]" key={e.id}>
            <img src={e.thumbnail} alt="" />
            <h2 className="card-title text-center">{e.title}</h2>
            <h4>rating: {e.rating}</h4>
            <h5>{e.price}$</h5>
            </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
