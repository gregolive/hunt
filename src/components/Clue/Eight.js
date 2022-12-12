import { ClueBase, LetterNumberTable } from './components';

const Eight = () => {

  const renderHint = () => {
    return (
      <>
        <p>Unlock the secret word using the numbers from each previous clue to reveal your present.</p>

        <LetterNumberTable />

        <p>Did you pick up on the hints sprinkled throughout the scavenger hunt?</p>
      </>
    );
  };

  return (
    <ClueBase
      title='Final Question'
      hint={renderHint()}
      final={true}
      className='Eight'
    />
  );
};

export default Eight;
