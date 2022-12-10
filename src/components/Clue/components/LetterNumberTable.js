const LetterNumberTable = () => {

  const numberArr = Array.from({length: 26}, (_, i) => i + 1);

  return (
    <table>
      <thead>
        <tr>
          {numberArr.map((n) =>
            <td key={`letter-${n}`}>
              {(String.fromCharCode(n + 64))}
            </td>
          )}
        </tr>
      </thead>
      <tbody>
        <tr>
          {numberArr.map((n) =>
            <td key={`number-${n}`}>{n}</td>
          )}
        </tr>
      </tbody>
    </table>
  );
};

export default LetterNumberTable;
