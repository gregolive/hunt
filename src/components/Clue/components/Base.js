import AnswerInput from './AnswerInput';
import FinalInput from './FinalInput';

const ClueBase = ({
  title,
  hint,
  answer,
  nextClue,
  final = false
}) => {

  return (
    <div>
      <h1>{title}</h1>

      {hint}

      {final ?
        <FinalInput />
      :
        <AnswerInput
          answer={answer}
          nextClue={nextClue}
        />
      }
    </div>
  );
};

export default ClueBase;
