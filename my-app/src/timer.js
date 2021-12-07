import React from 'react';
import ReactDOM from 'react-dom';
import Rating from './starfeedback';

export default function Timer() {
  const [minutes, setMinutes] = React.useState(10)
  const [seconds, setSeconds] = React.useState(0);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      if (minutes !== 0 && seconds === 0) {
        setTimeout(() => setMinutes(minutes - 1));
        setSeconds(59);
      }
      else {
        // setSeconds('Test Ended')
        ReactDOM.render(<Rating />, document.getElementById('root'));

      }
    }
  });

  return (
    <html>
      <head>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" />
      </head>
      <body>
        <div className="App">
          <div className="text-danger">
            <strong> Time Remaining: {minutes}:{seconds}</strong>
          </div>
        </div>
      </body>
    </html>
  );
}