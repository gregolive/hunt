import { ClueBase } from './components';

const Two = () => {

  const renderHint = () => {
    return (
      <>
        <p>Good job! But there are more clues to find before you get your birthday surprise.</p>
        <p>Find the second clue where you can see the shape of you.</p>
      </>
    );
  };

  return (
    <ClueBase
      title='Clue Two'
      hint={renderHint()}
      answer='15'
      nextClue='/3'
    />
  );
};

export default Two;
