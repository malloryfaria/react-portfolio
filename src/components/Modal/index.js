import React from 'react';

function Modal({ onClose, currentPhoto }) {
    const {name, category, description, index, url} = currentPhoto;
    
  
    return (
      <div className="modalBackdrop">
        <div className="modalContainer">
          <h3 className="modalTitle">{name}</h3>
          <a href={url}>{url}</a><br />
          <p>{description}</p><br />
          
          <img src={require(`../../assets/large/${category}/${index}.jpg`).default} alt="current category" />

          <button onClick={onClose} type="button">Close</button>
            </div>
    </div>
    );
  }
  
  export default Modal;