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
      <ul className="flex mr-0 flex-col py-4 m-4 text-slate-600 mt-12 gaps-4">
          <li className='flex items-center '>
          <span className=" text-sm material-symbols-outlined text-orange-400 text-center text-3xl bg-orange-100 h-10 w-10 rounded-full mr-2">target</span>
          <span className=" text-sm text-gray-500 font-medium mr-2 dark:bg-gray-700 dark:text-white">Goals</span>
          <span className=" text-2xl material-symbols-outlined text-sm">chevron_right</span>
          </li>

          <li className='flex items-center '>
          <span className=" text-sm material-symbols-outlined text-purple-400 text-center text-3xl bg-purple-100 h-10 w-10 rounded-full mr-2">calendar_today
</span>
          <span className=" text-sm text-gray-500 font-medium mr-2 dark:bg-gray-700 dark:text-white">Monthly plan</span>
          <span className=" text-2xl material-symbols-outlined text-sm">chevron_right</span>
          </li>



 </ul>
      </div>
    

      

    )
}