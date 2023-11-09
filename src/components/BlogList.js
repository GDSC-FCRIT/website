import React, { useState } from 'react';

const BlogList = ({ blogArray }) => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (blog) => {
    setSelectedBlog(blog);
    setModalVisible(true);
  };

  const closeModal = () => {
    setSelectedBlog(null);
    setModalVisible(false);
  };

  return (
    <div className='flex flex-wrap justify-around w-screen p-10'>
      {blogArray.map((blog, index) => (
        <div key={index} className='w-96 h-56' onClick={() => openModal(blog)}>
          <div
            className='w-96 h-44 p-2 bg-cover rounded'
            style={{ backgroundImage: `url(${blog.imagePath})` }}
          ></div>
          <h2 className='ml-10'>{blog.title}</h2>
          <h4 className='ml-10'>By {blog.by}</h4>
        </div>
      ))}

      {modalVisible && (
        <Modal blog={selectedBlog} onClose={closeModal} />
      )}
    </div>
  );
};

const Modal = ({ blog, onClose }) => {
  return (
    <div className='fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center'>
      <div className='bg-white p-8 w-3/4 relative'>
        <button
          className='absolute top-1 right-2 text-2xl cursor-pointer hover:text-red-500 transition-colors'
          onClick={onClose}
        >
          &times;
        </button>
        <h2>{blog.title}</h2>
        <p>{blog.content}</p>
        <p>- {blog.by}</p>
      </div>
    </div>
  );
};
export default BlogList;
