import { useEffect, useState } from 'react';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';
import updateDocTheme from './updateDocTheme';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(
    !('theme' in localStorage) || localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    updateDocTheme();
  }, [isDarkMode]);

  // This function will be called when the user switches themes
  const toggleTheme = (theme) => {
    if (theme === 'dark') {
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    } else {
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    }
  };

  return (
    <>
      <button
        className={`fixed z-10 top-4 right-4 inline-block rounded text-xs font-medium uppercase leading-normal transition duration-150 ease-in-out px-6 pb-2 pt-2.5
            dark:bg-neutral-50 bg-neutral-800
            dark:text-neutral-800 text-neutral-50
            dark:shadow-[0_4px_9px_-4px_#cbcbcb] shadow-[0_4px_9px_-4px_rgba(51,45,45,0.7)]
            dark:hover:bg-neutral-100 hover:bg-neutral-800
            dark:hover:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] hover:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)]
            dark:focus:bg-neutral-100 focus:bg-neutral-800
            dark:focus:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)]
            dark:focus:outline-none focus:outline-none 
            dark:focus:ring-0 focus:ring-0
            dark:active:bg-neutral-200 active:bg-neutral-900
            dark:active:shadow-[0_8px_9px_-4px_rgba(203,203,203,0.3),0_4px_18px_0_rgba(203,203,203,0.2)] active:shadow-[0_8px_9px_-4px_rgba(51,45,45,0.2),0_4px_18px_0_rgba(51,45,45,0.1)]
            `}
        onClick={() =>
          isDarkMode ? toggleTheme('light') : toggleTheme('dark')
        }
      >
        {isDarkMode ? (
          <SunIcon className='h-6 w-6' aria-hidden='true' />
        ) : (
          <MoonIcon className='h-6 w-6' aria-hidden='true' />
        )}
      </button>
    </>
  );
};

export default DarkModeToggle;
