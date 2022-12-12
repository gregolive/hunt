import { ClueBase } from './components';

const One = () => {

  const renderHint = () => {
    return (
      <>
        <p>Y__R F_RST CL__ _S H_DD_N _ND_R</p>
        <p>TH_ L_RG_ST P__NT_NG.</p>
      </>
    );
  };

  return (
    <ClueBase
      title='Clue One'
      hint={renderHint()}
      answer='03'
      nextClue='/2'
      className='One'
    />
  );
};

export default One;
