import Video from '../img/prize.mp4';

const Prize = () => {
  return (
    <div className='Prize'>
      <h1>Play me...</h1>

      <video controls>
        <source src={Video} type='video/mp4' />ß
      </video>
    </div>
  );
};

export default Prize;
