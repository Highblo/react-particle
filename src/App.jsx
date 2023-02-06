import { Suspense } from "react";

import { AnimationCanvas } from "./components/AnimationCanvas";

function App() {
  return (
    <div className="anim">
      <div className="header">
        <span>ParticleAnimation</span>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <AnimationCanvas />
      </Suspense>
    </div>
  );
}

export default App;
