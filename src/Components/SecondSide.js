import { Button } from "primereact/button"

export default function SecondSide(){
    
    return (
        <div className=" bg-gray-100 flex-2 flex flex-col  overflow-hidden md:w-72">
     <div className="mt-12 ml-2 flex gap-4 items-center ">
    <img className="h-12 w-12 rounded-full border-4 border-purple-400 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80" src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg" alt="" />
   <div>
          <h3 className="text-lg font-medium text-gray-700 dark:text-white">AR Shakir</h3>
          <span className="text-sm tracking-wide text-gray-400 dark:text-gray-300">joined 6 month ago</span>
        </div>
      </div>
      <ul className="flex flex-col my-8 m-4 mt-12 gap-4 text-slate-600">
  <li className="flex items-center justify-between mt-4">
    <div className="flex items-center">
      <span className="text-xl material-symbols-outlined text-orange-400 text-center bg-orange-100 h-10 w-10 rounded-full pt-1 mr-2">target</span>
      <span className="text-sm text-gray-500 font-medium mr-2 dark:bg-gray-700 dark:text-white">Goals</span>
    </div>
    <button className="rounded-xl shadow-md shadow-gray-300/50 w-12 h-12 text-black  bg-gray-50">
      <span className="text-2xl material-symbols-outlined text-xl">chevron_right</span>
    </button>
  </li>
  <li className="flex items-center justify-between mt-4">
    <div className="flex items-center">
      <span className="text-xl material-symbols-outlined text-purple-400 text-center bg-purple-100 h-10 w-10 rounded-full pt-1 mr-2">calendar_today</span>
      <span className="text-sm text-gray-500 font-medium mr-2 dark:bg-gray-700 dark:text-white">Monthly plan</span>
    </div>
    <button className="rounded-xl shadow-md shadow-gray-300/50 w-12 h-12 text-black  bg-gray-50">
      <span className="text-2xl material-symbols-outlined text-xl">chevron_right</span>
    </button>
  </li>
  <li className="flex items-center justify-between mt-4">
    <div className="flex items-center">
      <span className="text-xl material-symbols-outlined text-cyan-400 text-center bg-cyan-100 h-10 w-10 rounded-full pt-1 mr-2">settings</span>
      <span className="text-sm text-gray-500 font-medium mr-2 dark:bg-gray-700 dark:text-white">Setting</span>
    </div>
    <button className="rounded-xl shadow-md shadow-gray-300/50 w-12 h-12 text-black  bg-gray-50">
      <span className="text-2xl material-symbols-outlined text-xl">chevron_right</span>
    </button>
  </li>
</ul>


 <div className="flex items-center  pl-8">
  <div className="flex-grow flex flex-col items-start text-gray-600">
    Activity graph
  </div>
  <div className="flex-grow flex flex-col text-2xl items-end">
    $186K
  </div>
</div>
    

 <div className="flex-grow py-2 flex flex-col items-center">
  
    <div className="text-xs text-gray-500  tracking-wide uppercase py-3 px-1 rounded-full">BETWEEN SEP 9 - 27</div>
    
    
    <div className="grid grid-cols-12 gap-1 pl-8 flex-grow self-stretch">
    <div className="flex flex-col justify-start items-center  px-2">
    <div className="w-3 h-10 mx-auto   space-between" ></div>
            <div className="text-center text-xs text-gray-400 py-2">15k</div>
            <div className="text-center text-xs text-gray-400 py-2">10k</div>
            <div className="text-center text-xs text-gray-400 py-2">5k</div>
            <div className="text-center text-xs text-gray-400 py-2">0</div>
        </div>
        
       
        <div className="flex flex-col mt-12 justify-end items-center">
            <div className="w-3 h-4 mx-auto rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div className="text-center text-xs text-gray-400  mt-2">9</div>
        </div>
        <div className="flex flex-col justify-end items-center">
            <div className="w-3 h-16 mx-auto rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div className="text-center text-xs text-gray-400  mt-2">11</div>
        </div>
        <div className="flex flex-col justify-end items-center">
            <div className="w-3 h-24 mx-auto rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div className="text-center text-xs text-gray-400  mt-2">13</div>
        </div>
       
        <div className="flex flex-col justify-end items-center">
            <div className="w-3 h-32 mx-auto rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div className="text-center text-xs text-gray-400  mt-2">15</div>
        </div>
        <div className="flex flex-col justify-end items-center">
            <div className="w-3 h-20 mx-auto rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div className="text-center text-xs text-gray-400  mt-2">17</div>
        </div>
     
        <div className="flex flex-col justify-end items-center">
            <div className="w-3 h-10 mx-auto rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div className="text-center text-xs text-gray-400  mt-2">19</div>
        </div>
        <div className="flex flex-col justify-end items-center">
            <div className="w-3 h-10 mx-auto rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div className="text-center text-xs text-gray-400  mt-2">21</div>
        </div>
    
        <div className="flex flex-col justify-end items-center">
            <div className="w-3 h-24 mx-auto rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div className="text-center text-xs text-gray-400  mt-2">23</div>
        </div>
        <div className="flex flex-col justify-end items-center">
            <div className="w-3 h-32 mx-auto rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div className="text-center text-xs text-gray-400  mt-2">25</div>
        </div>
        <div className="flex flex-col justify-end items-center">
            <div className="w-3 h-20 mx-auto rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"></div>
            <div className="text-center text-xs text-gray-400  mt-2">27</div>
        </div>
        </div> 
    </div> 
    today
    <div className="mt-12 ml-6 flex gap-4 items-center "> 
    
    <div className="flex ml-4 items-start">
      
  <button className="rounded-xl shadow-md shadow-gray-300/50 w-12 h-12 text-black bg-indigo-800">
    <span className="text-2xl material-symbols-outlined text-white text-xl">water_drop</span>
  </button>
  <div className="flex ml-4 flex-col items-center">
    <div className="flex-grow flex flex-col items-start">
      <span className="text-gray-700 text-l font-bold">Water bill</span>
    </div>
    <div className="flex-grow flex flex-col items-end">
      <span className="text-gray-400 text-sm">Unsuccessfully</span>
    </div>
  </div>
  <span className="text-red-500 font-semibold">-$280</span>
</div>

    </div>
   
    </div>
   


  
    

      

    )
}