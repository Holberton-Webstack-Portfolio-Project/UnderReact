export default function Body() {
    return (
     <div className="
     mx-auto
     grid 
     grid-flow-col 
     grid-rows-2 grid-cols-2 gap-4
     ">
    <div className="border-black border-2 mx-1">
        <p className="p-4">Panel 1</p>
      </div>
      <div class="col-start-2 border-black border-2 mx-1">
      <p className="p-4">Panel 2</p>
    </div>
    <div className="border-black border-2 mx-1">
      <p className="p-4">Panel 3</p>
    </div>
    <div className="border-black border-2 mx-1">
      <p className="p-4">Panel 4</p>
    </div>
    </div>
    )
}