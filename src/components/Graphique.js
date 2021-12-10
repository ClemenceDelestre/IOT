import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

function Graphique(props) {
  const { data } = props;
  const liste = data.map((goat) => ({
    heartrate: goat.heartrate,
    heure: new Date(goat.timestamp).toLocaleTimeString('fr-FR'),
  }));
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={500}
        height={300}
        data={liste}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="heure" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="heartrate" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Graphique;
