import { useState, useEffect, useMemo } from 'react';

const ScrambledWord = ({ answer, hint }) => {

  const [inputs, setInputs] = useState(() => {
    const i = {};
    [...Array(answer.length).keys()].forEach((a) => { i[a] = '' })
    return i;
  });

  useEffect(() => {
    const inputString = Object.values(inputs).reduce((str, i) => str + i, '');
    if (inputString === answer) setComplete(true);
  }, [answer, inputs])

  const [error, setError] = useState(false);
  const [complete, setComplete] = useState(false);

  const scramble = (word) => {
    const a = word.split("");
    const n = a.length;

    for(let i = n - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = a[i];
      a[i] = a[j];
      a[j] = tmp;
    }

    return a.join("");
  };

  const scrambledWord = useMemo(() => scramble(answer), [answer])

  const handleChange = (e, ind) => {
    setError(false);

    const input = e.currentTarget.value;
    setInputs({ ...inputs, [ind]: (input.length > 1) ? input.slice(-1) : input });

    if (input.length <= 0) return;

    if (input.length <= 0 || ind + 1 >= answer.length) return;
  
    const form = e.target.form;
    form[ind + 1].focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const input = inputs[0] + inputs[1];

    if (input === answer) {
      setComplete(true)
      return;
    }

    setError(true);
  };

  return (
    <div className={(complete) ? 'ScrambledWord Complete' : 'ScrambledWord'}>
      <p>{hint}</p>

      <p>{scrambledWord}</p>

      <form
        className={(error) ? 'Error' : ''}
        onSubmit={handleSubmit}
        noValidate
      >
        {Object.values(inputs).map((i, ind) =>
          <input
            key={answer+ind}
            type='text'
            value={i}
            onChange={(e) => handleChange(e, ind)}
            pattern='[a-zA-Z]'
            maxLength='1'
            required
          />
        )}
      </form>
    </div>
  );
};

export default ScrambledWord;
