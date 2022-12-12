import AnswerInput from './AnswerInput';
import FinalInput from './FinalInput';

const ClueBase = ({
  title,
  hint,
  answer,
  nextClue,
  className = '',
  final = false
}) => {

  const classNames = (className.length > 0) ? 'Details ' + className : 'Details';

  return (
    <>
      <div className={classNames}>
        <h1>{title}</h1>

        {hint}
      </div>
      

      {final ?
        <FinalInput />
      :
        <AnswerInput
          answer={answer}
          nextClue={nextClue}
        />
      }
    </>
  );
};

export default ClueBase;
