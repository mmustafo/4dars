import React from "react";

function Modal({ post, onClose }) {
  if (!post) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-5 rounded-xl shadow-lg w-96">
        <h2 className="text-xl font-bold">{post.title}</h2>
        <img
          src={post.thumbnail}
          alt={post.title}
          className="w-full h-48 object-cover rounded-xl my-3"
        />
        <p>{post.description}</p>
        <p className="text-lg font-semibold mt-2">Narxi: {post.price}$</p>
        <p className="text-sm">Reyting: {post.rating}</p>
        <button
          className="bg-red-95000 text-amber-400 px-4 py-2 rounded-lg mt-4"
          onClick={onClose}
        >
          Yopish
        </button>
      </div>
    </div>
  );
}

export default Modal;
