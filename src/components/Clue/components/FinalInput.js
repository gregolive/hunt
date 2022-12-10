import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AnswerInput = () => {

  const navigate = useNavigate();

  const answer = 'concert';

  const [inputs, setInputs] = useState(() => {
    const i = {};
    [...Array(answer.length).keys()].forEach((a) => { i[a] = '' })
    return i;
  });

  const [error, setError] = useState(false);

  const handleChange = (e, ind) => {
    setError(false);

    const input = e.currentTarget.value;
    setInputs({ ...inputs, [ind]: (input.length > 1) ? input.slice(-1) : input });

    if (input.length <= 0) return;

    const form = e.target.form;
    form[ind + 1].focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const input = Object.values(inputs).reduce((str, i) => str + i, '');

    if (input === answer) {
      navigate('/winner');
      return;
    }

    setError(true);
  };

  return (
    <form
      className={(error) ? 'Error' : ''}
      onSubmit={handleSubmit}
      noValidate
    >
      {Object.values(inputs).map((i, ind) =>
        <input
          key={ind}
          type='text'
          value={i}
          onChange={(e) => handleChange(e, ind)}
          pattern='[a-zA-Z]'
          maxLength='1'
          required
        />
      )}

      <button type='submit'>
        Answer
      </button>
    </form>
  );
};

export default AnswerInput;
