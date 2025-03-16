function Modal({ selectedPost, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <h2>{selectedPost.title}</h2>
        <p>{selectedPost.body}</p>
        <button onClick={closeModal}>X</button>
      </div>
    </div>
  );
}

export default Modal;
