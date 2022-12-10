import { useState } from 'react';
import { ClueBase } from './components';
import { JigsawPuzzle } from 'react-jigsaw-puzzle/lib';
import ImgSix from '../../img/six.png'

const Six = () => {

  const incompleteText = '';
  const completeText = '';

  const [text, setText] = useState(incompleteText);

  const renderHint = () => {
    return (
      <>
        <p>{text}</p>

        <JigsawPuzzle
          imageSrc={ImgSix}
          rows={3}
          columns={5}
          onSolved={() => setText(completeText)}
          className='Puzzle'
        />
        
      </>
    );
  };

  return (
    <ClueBase
      title='Clue Six'
      hint={renderHint()}
      answer='18'
      nextClue='/7'
    />
  );
};

export default Six;
