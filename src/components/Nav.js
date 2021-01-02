import DarkModeButton from './DarkModeButton';

export default function Nav() {
    return (
        <div className="
        fixed 
        top-0 
        bg-teal-2020
        dark:bg-gray-2020
        w-full 
        p-5
        transition duration-450
        ">
        <DarkModeButton />
        </div>
    )
}
