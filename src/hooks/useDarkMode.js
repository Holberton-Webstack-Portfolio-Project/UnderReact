import { useEffect, useState } from "react";

/**
 * provides a react hook to set the dark mode state from within a component
 */
export default function useDarkMode() {
    const [theme, setTheme] = useState('dark');
    const colorTheme = theme === 'dark' ? 'light' : 'dark'
    useEffect(() => {
        // tailwindcss needs dark mode set as a class= in the html tag
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}
