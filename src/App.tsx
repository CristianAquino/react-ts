import useTimeAgo from "./utils/timeAgo.utils";

const App = () => {
  const fecha = "2020-08-07T00:00:00.000Z";
  const { datetime, timeago } = useTimeAgo(fecha);
  return (
    <div>
      {timeago}"-"{datetime}
    </div>
  );
};
export default App;
