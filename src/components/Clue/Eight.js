import { ClueBase, LetterNumberTable } from './components';

const Eight = () => {

  const renderHint = () => {
    return (
      <>
        <p>Unlock the secret word using the numbers from each previous clue to reveal your present.</p>

        <LetterNumberTable />
      </>
    );
  };

  return (
    <ClueBase
      title='Final Question'
      hint={renderHint()}
      final={true}
    />
  );
};

export default Eight;
