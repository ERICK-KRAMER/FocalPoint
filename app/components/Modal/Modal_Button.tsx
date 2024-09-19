// Modal_Button.tsx
import React, { forwardRef } from 'react';
import styles from "./Modal.module.scss";

type ButtonProps = {
    onClick: (e?: React.MouseEvent<HTMLButtonElement>) => void;
    variant: 'primary' | 'secondary' | 'danger';
    children: React.ReactNode;
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ onClick, variant, children }, ref) => (
    <button
        ref={ref}
        className={`${styles.button} ${styles[variant]}`}
        onClick={onClick}
    >
        {children}
    </button>
));

Button.displayName = "Button";

export { Button };