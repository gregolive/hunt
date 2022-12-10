import { ClueBase } from './components';
import ImgFive from '../../img/five.png';

const Five = () => {

  const renderHint = () => {
    return (
      <>
        <p>Decode this to find your next clue.</p>
        <img src={ImgFive} alt='' />
      </>
    );
  };

  return (
    <ClueBase
      title='Clue Five'
      hint={renderHint()}
      answer='05'
      nextClue='/6'
    />
  );
};

export default Five;
