
import { Outlet } from "react-router-dom";

function App() {

  return (
    <div className="w-screen h-screen bg-neutral-800">
      <header className="font-mono text-5xl w-screen bg-zinc-900 text-yellow-400 font-medium text-center py-2.5" style={{fontFamily: "Nerko One"}}>AnimalHierarchy</header>
      
      <Outlet />
    </div>
  )
}

export default App
