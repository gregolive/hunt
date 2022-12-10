import { ClueBase } from './components';

const Four = () => {

  const renderHint = () => {
    return (
      <p>
        Your next clue is hidden with the king, joker and the queen.
      </p>
    );
  };

  return (
    <ClueBase
      title='Clue Four'
      hint={renderHint()}
      answer='03'
      nextClue='/5'
    />
  );
};

export default Four;
