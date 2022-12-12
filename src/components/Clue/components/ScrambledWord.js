import { useState, useEffect, useMemo } from 'react';

const ScrambledWord = ({ answer, hint, target }) => {

  const initialInputs = () => {
    const i = {};
    [...Array(answer.length).keys()].forEach((a) => { i[a] = '' })
    return i;
  };

  const [inputs, setInputs] = useState(() => initialInputs());

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

    const form = e.target.form;

    if (ind + 1 >= answer.length) {
      handleSubmit(form);
      return;
    }
  
    form[ind + 1].focus();
  };

  const handleSubmit = (form) => {
    const input = Array.from(form).reduce((str, i) => str + i.value, '');

    if (input === answer) {
      setComplete(true)
      return;
    }

    setError(true);
    setInputs(initialInputs());
    form[0].focus();
  };

  return (
    <div className={(complete) ? 'ScrambledWord Complete' : 'ScrambledWord'}>
      <p>{hint}</p>

      <p>{scrambledWord}</p>

      <form
        className={(error) ? 'Error' : null}
        noValidate
      >
        {Object.values(inputs).map((i, ind) =>
          <input
            key={answer+ind}
            className={(ind === target) ? 'Target' : null}
            type='text'
            value={i}
            onChange={(e) => handleChange(e, ind)}
            pattern='[a-zA-Z]'
            maxLength='1'
            disabled={complete}
            required
          />
        )}
      </form>
    </div>
  );
};

export default ScrambledWord;
