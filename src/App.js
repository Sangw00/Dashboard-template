import FirstSide from "./Components/FirstSide";
import SecondSide from "./Components/SecondSide";

function App() {
  return (
    <div className="App h-screen">
      <div className="flex w-full h-full">
    <FirstSide/>
    <SecondSide/>

<div className=" bg-gray-100 flex-1 flex flex-col  overflow-hidden md:w-72">

   
</div>
<div className=" bg-gray-100 flex-2 flex flex-col  overflow-hidden md:w-72">
     
</div>
      </div>
      </div>
  );
}

export default App;
