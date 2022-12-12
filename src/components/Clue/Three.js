import { ClueBase, ScrambledWord } from './components';

const Three = () => {

  const words = [
    {
      answer: 'mathematics',
      hint: '1) Subject in school',
      target: 5,
    },
    {
      answer: 'sing',
      hint: '2) Karaoke',
      target: 1,
    },
    {
      answer: 'barcelona',
      hint: '3) City in Spain',
      target: 3,
    },
    {
      answer: 'ferry',
      hint: '4) Vancouver to Victoria',
      target: 2,
    },
    {
      answer: 'photograph',
      hint: '5) Camera',
      target: 2,
    },
    {
      answer: 'blow',
      hint: '6) Balloon',
      target: 3,
    },
    {
      answer: 'seattle',
      hint: '7) Oregon',
      target: 2,
    },
    {
      answer: 'shivers',
      hint: '8) When you are cold you have the ...',
      target: 3,
    },
    {
      answer: 'england',
      hint: '9) Country you have been to',
      target: 0,
    },
  ];

  const renderHint = () => {
    return (
      <>
        <p>Unscramble the words to find the location of your next clue.</p>

        {words.map((a) =>
          <ScrambledWord
            key={a.answer}
            answer={a.answer}
            hint={a.hint}
            target={a.target}
          />
        )}
      </>
    );
  };

  return (
    <ClueBase
      title='Clue Three'
      hint={renderHint()}
      answer='14'
      nextClue='/4'
      className='Three'
    />
  );
};

export default Three;
