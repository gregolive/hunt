import { ClueBase, ScrambledWord } from './components';

const Three = () => {

  const words = [
    {
      answer: 'mathematics',
      hint: 'Subject in school',
    },
    {
      answer: 'sing',
      hint: 'Karaoke',
    },
    {
      answer: 'barcelona',
      hint: 'City in Spain',
    },
    {
      answer: 'ferry',
      hint: 'Vancouver to Victoria',
    },
    {
      answer: 'photograph',
      hint: 'Camera',
    },
    {
      answer: 'blow',
      hint: 'Balloon',
    },
    {
      answer: 'england',
      hint: 'Country you have been to',
    },
    {
      answer: 'shivers',
      hint: 'When you are cold you have the ...',
    },
    {
      answer: 'seattle',
      hint: 'Oregon',
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
    />
  );
};

export default Three;
