import { useNavigate } from 'react-router-dom';
import Detective from '../img/detective.png'

const Welcome = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className='Details'>
        <h1>Let the games begin</h1>

        <p>Welcome to your birthday scavenger hunt!</p>
        <p>Get ready to search high and low for clues that will lead you to your ultimate prize.</p>

        <img
          className='Detective'
          src={Detective}
          alt=''
        />
      </div>
      
      <button
        className='WelcomeButton'
        onClick={() => navigate('/1')}
      >
        Start
      </button>
    </>
  );
};

export default Welcome;
