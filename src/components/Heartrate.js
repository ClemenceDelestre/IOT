function Heartrate(props) {
  const { data } = props; //mettre les valeurs de l'App dans le composant
  var pbBpm = '';
  var description = ' ';
  if (!data) {
    return <p>Pas de valeur</p>;
  }
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
