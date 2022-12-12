import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Congrats from './Congrats';

const AnswerInput = ({ answer, nextClue }) => {

  const navigate = useNavigate();

  const initialInputs = () => {
    const i = {};
    [...Array(answer.length).keys()].forEach((a) => { i[a] = '' })
    return i;
  };

  const [inputs, setInputs] = useState(() => initialInputs());

  const [error, setError] = useState(false);
  const [complete, setComplete] = useState(false);

  const handleChange = (e, ind) => {
    setError(false);

    const input = e.currentTarget.value;
    setInputs({ ...inputs, [ind]: (input.length > 1) ? input.slice(-1) : input });

    if (input.length <= 0) return;

    const form = e.target.form;
    form[ind + 1].focus();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    const input = inputs[0] + inputs[1];

    if (input === answer) {
      setComplete(true);
      await new Promise(resolve => setTimeout(resolve, 1000));
      navigate(nextClue);
      return;
    }

    setError(true);
    setInputs(initialInputs());
  };

  return (
    <form
      className={(error) ? 'Error' : null}
      onSubmit={handleSubmit}
      noValidate
    >
      {(complete) && <Congrats />}

      {Object.values(inputs).map((i, ind) =>
        <input
          key={ind}
          type='number'
          value={i}
          onChange={(e) => handleChange(e, ind)}
          pattern='[0-9]*'
          min='0'
          max='9'
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
