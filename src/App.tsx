import { useEffect, useRef } from 'react';

interface IProps {}
interface IState {}

const App = (props: IProps, state: IState) => {
  const canvasRef = useRef();

  useEffect(() => {
    canvasInit();

    return () => {};
  }, []);

  const canvasInit  = () => {
    const cv = canvasRef.current || null;
    const ctx = cv?.getContext('2d');

    // Rect
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, 600, 500);

    ctx.font = '2.6rem Noto Sans Mono';
    ctx.fillStyle = '#2962FF';
    ctx.strokeStyle = '#FFF';

    // Text
    ctx.fillText('I miss you...', 100, 50);
    ctx.strokeText('I miss you...', 100, 50);
  };

  return (
    <>
      <h1>------ bun-react-basis ------</h1>
      <canvas ref={canvasRef} width="660" height="500"></canvas>
    </>
  );
};

export default App;
