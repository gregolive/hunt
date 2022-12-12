
const Congrats = () => {

  const numberArr = Array.from({length: 50}, (_, i) => i + 1);

  return (
    <div className='Congrats'>
      {numberArr.map((n) =>
        <i key={`Confetti${n}`}></i>
      )}
    </div>
  );
};

export default Congrats;
