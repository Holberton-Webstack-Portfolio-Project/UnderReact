import Melty from './Melty.js';

export default function Body() {
    return (
     <div className="
     my-24
     mx-auto
     grid 
     grid-flow-col 
     grid-rows-2 grid-cols-2 gap-4
     ">
    <div className="border-black border-2 mx-1 dark:border-r_white-2020">
        <p className="p-4 dark:text-r_white-2020">Panel 1</p>
        <Melty />
      </div>
      <div class="col-start-2 border-black border-2 mx-1 dark:border-r_white-2020">
      <p className="p-4 dark:text-r_white-2020">Panel 2</p>
    </div>
    <div className="border-black border-2 mx-1 dark:border-r_white-2020">
      <p className="p-4 dark:text-r_white-2020">Panel 3</p>
    </div>
    <div className="border-black border-2 mx-1 dark:border-r_white-2020">
      <p className="p-4 dark:text-r_white-2020">Panel 4</p>
    </div>
    </div>
    )
}
