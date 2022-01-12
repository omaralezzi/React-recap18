import { useEffect } from 'react';

const Form = ({ changeHandler, submitHandler, formData, inputRef }) => {
  useEffect(() => {
    inputRef.current.focus();
  }, [inputRef]);

  return (
    <form>
      <input
        type='text'
        placeholder='Please enter your userName'
        name='name'
        ref={inputRef}
        value={formData.name}
        onChange={(e) => changeHandler(e)}
      />
      <input
        type='text'
        placeholder='Please enter your password'
        name='password'
        value={formData.password}
        onChange={(e) => changeHandler(e)}
      />
      <button onClick={(e) => submitHandler(e)}>Submit</button>
    </form>
  );
};

export default Form;
