import { useNavigate } from 'react-router-dom';

const Welcome = () => {

  const navigate = useNavigate();

  return (
    <>
      <h1>Welcome</h1>

      <p>Welcome to your birthday scavenger hunt!</p>
      <p>Get ready to search high and low for clues that will lead you to your ultimate prize.</p>
      
      
      <button onClick={() => navigate('/1')}>
        Start
      </button>
    </>
  );
};

export default Welcome;
