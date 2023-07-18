import { useEffect } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const DarkModeToggle = ({ isDarkMode, setIsDarkMode }) => {

    // This function will be called when the user switches themes
    const toggleTheme = (theme) => {
        if (theme === 'dark') {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');

            setIsDarkMode(true);
        } else {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
            
            setIsDarkMode(false);
        }
    };

    // This useEffect hook will run once when the component mounts
    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark' || (!currentTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

    // Example usage
    return (
        <>
            <button className={`fixed z-10 top-4 right-4 inline-block rounded text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out 
            bg-neutral-800 dark:bg-neutral-50 px-6 pb-2 pt-2.5 
            text-neutral-50 dark:text-neutral-800 
            shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] dark:shadow-[0_4px_9px_-4px_#cbcbcb] 
            hover:bg-neutral-800 dark:hover:bg-neutral-100 
            hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] 
            focus:bg-neutral-800 dark:focus:bg-neutral-100 
            focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] 
            focus:outline-none focus:ring-0 dark:focus:outline-none dark:focus:ring-0 
            active:bg-neutral-900 dark:active:bg-neutral-200
            active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] 
            `}
            onClick={() => isDarkMode? toggleTheme('light'): toggleTheme('dark')}
            >
                {
                    isDarkMode
                    ?
                    <SunIcon className="h-6 w-6" aria-hidden="true" />
                    :
                    <MoonIcon className="h-6 w-6" aria-hidden="true" />

                }
            </button>

            {/* <button className={`fixed z-10 top-4 right-24 inline-block rounded text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out 
            bg-neutral-800 dark:bg-neutral-50 px-6 pb-2 pt-2.5 
            text-neutral-50 dark:text-neutral-800 
            shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)] dark:shadow-[0_4px_9px_-4px_#cbcbcb] 
            hover:bg-neutral-800 dark:hover:bg-neutral-100 
            hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] 
            focus:bg-neutral-800 dark:focus:bg-neutral-100 
            focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] 
            focus:outline-none focus:ring-0 dark:focus:outline-none dark:focus:ring-0 
            active:bg-neutral-900 dark:active:bg-neutral-200
            active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] 
            `}
            onClick={() => toggleTheme('dark')}
            >
                <MoonIcon className="h-6 w-6" aria-hidden="true" />
            </button> */}
        </>
    );
}

export default DarkModeToggle;
