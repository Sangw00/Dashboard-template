import FirstSide from "./Components/FirstSide";
import SecondSide from "./Components/SecondSide";

function App() {
  return (
    <div className="App">
      <div className="flex">
    <FirstSide/>
    <SecondSide/>

<div className="flex-3">

      <div className="bg-stone-500 pl-0">3</div>
</div>
<div className="flex-4">
      <div className="bg-stone-400 ">4</div>
</div>
      </div>
      </div>
  );
}

export default App;
