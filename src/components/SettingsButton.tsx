import { useState } from 'react';
import { FaCog } from 'react-icons/fa';

export const SettingsToggle = () => {
    const [open, setOpen] = useState(false);

    const handleToggle = () => {
        setOpen(!open);
    };

    return (
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
    );
};
