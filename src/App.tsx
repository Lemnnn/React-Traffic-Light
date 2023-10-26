import "./App.css";
import { TrafficLight } from "./TrafficLight";

function App() {
  return (
    <div className="trafficLights">
      <TrafficLight />
      <TrafficLight initialState="slow" />
      <TrafficLight />
      <TrafficLight initialState="start" />
      <TrafficLight />
      <TrafficLight initialState="start" />
    </div>
  );
}

export default App;
