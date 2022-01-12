import React from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ show, children, onClose }) => {
  //If the show state is false don't render anything
  if (!show) return null;

  //Otherwise we return a portal
  //We do this by using the createPortal method supplied to us by the react-dom library
  //This method accepts two arguments. The first argument is what we want to render
  //The second argument is where we want this jsx to be rendered. In this case we want
  //it rendered to our new div with an id of modal.
  return createPortal(
    <div>
      <div className='overlay' onClick={onClose}></div>
      <div className='modal'>
        <div className='modal-children'>
          <button className='close-button' onClick={onClose}>
            Close
          </button>

          {/* Here we are telling jsx that we want whatever is in between the <Modal></Modal> tags
            in the App.jsx to be rendered. We access these children from the react props object, 
            which we have deconstructed above */}

          {children}
        </div>
      </div>
    </div>,
    document.querySelector('#modal')
  );
};

export default Modal;
