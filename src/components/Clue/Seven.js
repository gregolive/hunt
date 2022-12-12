import { ClueBase, LetterNumberTable } from './components';

const Seven = () => {

  const renderHint = () => {
    return (
      <>
        <p>Use this grid to find the next secret word.</p>

        <LetterNumberTable />

        <ol>
          <li>Dive</li>
          <li>Small Bump</li>
          <li>Galway Girl</li>
          <li>Wake Me Up</li>
          <li>Perfect</li>
          <li>Castle on the Hill</li>
          <li>Overpass Graffiti</li>
          <li>The A Team</li>
        </ol>

        <p>
          <span>_ O _ _ _ _</span>
          <span>_ _ _ N</span>
        </p>
      </>
    );
  };

  return (
    <ClueBase
      title='Clue Seven'
      hint={renderHint()}
      answer='20'
      nextClue='/8'
      className='Seven'
    />
  );
};

export default Seven;
