import { useEffect, useState } from "react";
import "./App.css";

type TrafficLightState = "stop" | "slow" | "start";

const STOP_TIMER = 3000;
const SLOW_TIMER = 1000;
const START_TIMER = 5000;

export function TrafficLight({
  initialState,
}: {
  initialState?: TrafficLightState;
}) {
  const [state, setState] = useState<TrafficLightState>(initialState ?? "stop");

  function getTrafficLightState(light: TrafficLightState) {
    return `light ${light}` + (state === light ? " on" : "");
  }

  useEffect(() => {
    if (state === "stop") {
      setTimeout(() => setState("start"), STOP_TIMER);
    } else if (state === "slow") {
      setTimeout(() => setState("stop"), SLOW_TIMER);
    } else {
      setTimeout(() => setState("slow"), START_TIMER);
    }
  }, [state]);

  return (
    <div className="trafficLight">
      <div className={getTrafficLightState("stop")}></div>
      <div className={getTrafficLightState("slow")}></div>
      <div className={getTrafficLightState("start")}></div>
    </div>
  );
}
