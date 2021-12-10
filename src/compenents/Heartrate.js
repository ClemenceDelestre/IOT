function Heartrate() {
  //const {data} = props ; //mettre les valeurs de l'App dans le composant
  var rythmeCardiaque = 40 + Math.floor(Math.random() * (200 - 40));
  var pbBpm = ""
  var description = " "
  if (rythmeCardiaque<50 || rythmeCardiaque>150) {
     pbBpm = "pbBpm";
     description = rythmeCardiaque + " -> Danger";
  }
  else {
     pbBpm ="bpmOk";
     description = rythmeCardiaque + " -> Ok";
  }
  return <div class={pbBpm}> {description} </div>;
}

export default Heartrate;
