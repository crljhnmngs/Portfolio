import { useState } from 'react';
import { FaCog } from 'react-icons/fa';
import { useThemeSwitcher } from '../hook/useThemeSwitcher';

export const SettingsToggle = () => {
    const [open, setOpen] = useState(false);
    const [theme, setTheme] = useThemeSwitcher();

    const handleToggle = () => {
        setOpen(!open);
    };

    const toggleDarkMode = () => {
        try {
            if (theme === 'light') {
                setTheme('dark');
            } else {
                setTheme('light');
            }
        } catch (error) {
            console.log('Error switching theme');
        }
    };

    return (
       <div className='relative'>
         <button
            onClick={handleToggle}
            className="p-2 rounded-full transition"
            aria-label="Toggle settings"
        >
            <FaCog
                className={`w-7 h-7 transition-transform duration-300 dark:text-white text-black ${
                    open ? 'rotate-[100deg]' : 'rotate-[0deg]'
                }`}
            />
        </button>
        {open && (
        <div className="absolute right-0 mt-4 w-56 p-4 bg-white dark:bg-gray-700 shadow-xl rounded-lg z-50 flex justify-center flex-col gap-3">
            <div className='flex justify-center'>
                <div className={`dark text-[11%] nav:text-[12%] dark:border dark:border-white border border-black relative h-[16em] w-[30em] rounded-[16em] cursor-pointer bg-[#423966] ${theme === 'light' ? 'day' : ''}`} onClick={toggleDarkMode}
                >
                <div className={`moon absolute block rounded-[50%] top-[3em] left-[3em] w-[10em] h-[10em] bg-[#423966] ${ theme === 'light' ? 'sun' : ''}`}
                ></div>
            </div>
            </div>
            <div className='w-full'>
                <h1 className='text-black dark:text-white text-base'>Select Language:</h1>
                 <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    <option value="en">English</option>
                    <option value="ceb">Cebuano</option>
                    <option value="tl">Tagalog</option>
                    <option value="es">Español</option>
                    <option value="fr">Français</option>
                    <option value="zh">中文</option>
                    <option value="ja">日本語</option>
                </select>
            </div>
        </div>
      )}
       </div>
    );
};
