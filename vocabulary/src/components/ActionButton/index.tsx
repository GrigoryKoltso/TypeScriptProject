
import React from 'react';

import s from './index.module.css';

interface ButtonProps {
    children: React.ReactNode,
    action?: () => void
}

const ActionButton = ({children, action}: ButtonProps) => {
    return (
        <div className={s.btn} onClick={action}>
            {children}
        </div>
    );
};

export default ActionButton;