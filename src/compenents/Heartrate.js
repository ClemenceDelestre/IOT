const RythmeCardiaque = 40 + Math.floor(Math.random() * (200 - 40));

function Heartrate() {
  return <div>{RythmeCardiaque}</div>;
}

export default Heartrate;
