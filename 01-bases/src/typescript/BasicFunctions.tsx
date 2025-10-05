const addTwoNumbers = (a: number, b: number): string => {
  return `${a + b}`;
};
export const BasicFunctions = () => {
  return (
    <>
      <h2>Basic Functions</h2>
      <span>{addTwoNumbers(2, 7)}</span>
    </>
  );
};
