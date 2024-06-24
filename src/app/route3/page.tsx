'use client';
export default function Route3() {
  const throwError = () => {
    throw Error('Dummy error');
  };
  return (
    <>
      <div>Route3</div>
      <button onClick={throwError}>Throw error</button>
    </>
  );
}
