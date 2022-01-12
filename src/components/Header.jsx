import React from 'react';

const Header = ({ name, setShow, logoutHandler }) => {
  return (
    <header>
      <h1>
        Welcome <span>{name}</span>
      </h1>
      <aside>
        {/* We use a conditional to either display the login button or the logout button */}
        {name === undefined || name.length === 0 ? (
          <button className='button-show' onClick={() => setShow(true)}>
            Login
          </button>
        ) : (
          <button className='button-show' onClick={logoutHandler}>
            Logout
          </button>
        )}
      </aside>
    </header>
  );
};

export default Header;
