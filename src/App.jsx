import { useState, useRef } from 'react';

import Header from './components/Header';
import Footer from './components/Footer';
import Modal from './components/Modal';
import Form from './components/Form';

import './App.css';

const App = () => {
  //We create two states. One to show the modal or nor and the other to handle our form inputs
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ name: '', password: '' });

  //We create two references. One to handle the focus on our input fields, the other to
  //to save off the entered name.
  const savedUserName = useRef();
  const inputRef = useRef();

  //Handle the onChange event for our form inputs
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  //Handle the form submit button
  const submitHandler = (e) => {
    e.preventDefault();
    if (formData.name !== '' && formData.password !== '') {
      savedUserName.current = formData.name;
      setFormData({ name: '', password: '' });
      setShow(false);
    }
  };

  //Simulate a logout by clearing out the savedUsername reference
  const logoutHandler = () => {
    savedUserName.current = formData.name;
    setFormData({ name: '', password: '' });
  };

  return (
    <main>
      {/* Send all relevant data and functionality to our Header component */}
      <Header
        name={savedUserName.current}
        setShow={setShow}
        logoutHandler={logoutHandler}
      />
      <section>
        <h1>Main Content goes here</h1>
      </section>

      {/* Send all relevant data and functionality to our Modal component */}
      <Modal show={show} onClose={() => setShow(false)}>
        {/* Send all relevant data and functionality to our Form component */}
        {/* Anything inside out Modal tags are considered children. Therefore our Form */}
        {/* component is considered a child or children of the Modal component */}
        <Form
          changeHandler={changeHandler}
          submitHandler={submitHandler}
          formData={formData}
          inputRef={inputRef}
        />
      </Modal>
      <Footer />
    </main>
  );
};

export default App;
