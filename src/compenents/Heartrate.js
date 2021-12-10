function Heartrate(props) {
  const { data } = props; //mettre les valeurs de l'App dans le composant
  console.log(data);
  //var rythmeCardiaque = 40 + Math.floor(Math.random() * (200 - 40));
  var pbBpm = '';
  var description = ' ';
  if (data < 50 || data > 150) {
    pbBpm = 'pbBpm';
    description = data + ' -> Danger';
  } else {
    pbBpm = 'bpmOk';
    description = data + ' -> Ok';
  }
  return <div class={pbBpm}> {description} </div>;
}

export default Heartrate;
