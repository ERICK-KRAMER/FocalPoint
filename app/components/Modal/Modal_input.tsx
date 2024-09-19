import React, { forwardRef } from 'react';
import styles from './Modal.module.scss';

type LabelInputProps = {
    label: string;
    type?: string;
    placeholder?: string;
    name?: string;
};

const ModalInput = forwardRef<HTMLInputElement, LabelInputProps>(
    ({ label, type = 'text', placeholder, name }, ref) => (
        <label className={styles.label}>
            {label}
            <input
                ref={ref}
                type={type}
                placeholder={placeholder}
                name={name}
                className={styles.input}
            />
        </label>
    )
);

ModalInput.displayName = "Input";

export { ModalInput };
