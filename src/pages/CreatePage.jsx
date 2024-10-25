import React, { useState } from 'react';
import '../styles/CreatePage.css';

const CreatePage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [file, setFile] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle NFT creation logic here
    alert("NFT Minted Successfully!");
  };

  return (
    <div className="createContainer">
      <h1 className="createTitle">Create Your NFT</h1>
      <p className="createDescription">
        Mint and showcase your unique NFT on the NFTEduMint platform. Start by filling out the details below.
      </p>
      
      <form onSubmit={handleSubmit} className="createForm">
        <label className="formLabel">NFT Title</label>
        <input 
          type="text"
          className="formInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter NFT title"
          required
        />

        <label className="formLabel">Description</label>
        <textarea
          className="formTextarea"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe your NFT..."
          rows="4"
          required
        />

        <label className="formLabel">Upload File</label>
        <input 
          type="file"
          className="formFileInput"
          onChange={handleFileChange}
          required
        />

        <button type="submit" className="mintButton">Mint NFT</button>
      </form>
    </div>
  );
};

export default CreatePage;
