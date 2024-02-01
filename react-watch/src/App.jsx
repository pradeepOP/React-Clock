import DigitalClock from "./Component/DigitalClock";

import { GoStopwatch } from "react-icons/go";
import DigitalStopWatch from "./Component/DigitalStopWatch";

function App() {
  return (
    <div>
      <div className="flex items-center justify-center gap-4 mx-auto mt-10 font-mono text-5xl font-semibold md:text-6xl text-primary-color/70 ">
        <span>React Watch</span>
        <GoStopwatch size={60} />
      </div>
      <DigitalClock />
      <DigitalStopWatch />
    </div>
  );
}
export default App;
