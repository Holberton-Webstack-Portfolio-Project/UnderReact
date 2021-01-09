import Melty from './Melty.js';

export default function Body() {
  return (
  <div class="container px-5 py-24 mx-auto border-black border-2">
    <div class="flex flex-wrap justify-center -m-3">
      <div class="p-1 mb-6 lg:w-1/3 lg:mb-0 border-black border-2">
        <div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
          <p class="leading-relaxed mb-6 dark:text-white">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
        </div>
      </div>
      <div class="p-1 mb-4 w-auto lg:mb-0 border-black border-2 flex items-center">
        <Melty />
      </div>
      <div class="p-1 mb-4 lg:w-1/3 lg:mb-0 border-black border-2">
        <div class="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
          <p class="leading-relaxed mb-6 dark:text-white">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
        </div>
      </div>
    </div>
  </div>
  )
  }
