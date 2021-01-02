import { useEffect, useState } from "react";

export default function useDarkMode() {
    const [theme, setTheme] = useState('dark');
    const colorTheme = theme === 'dark' ? 'light' : 'dark'
    useEffect(() => {
        // tailwindcss needs dark mode set as a class= in the html tag
        const root = window.document.documentElement;

        root.classList.remove(colorTheme);
        root.classList.add(theme);
        // store user's latest preference to be re-used on page reload
        localStorage.setItem('theme', theme);
    }, [theme, colorTheme]);

    return [colorTheme, setTheme];
}