import { FC } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    id?: string;
    className?:string;
}

export const Input: FC<InputProps> = ({ label, id, className,...props }) => {
    return (
        <>
            {label && (
                <label htmlFor={id || props.name} className='input-label'>
                    {label}
                </label>
            )}
            <input id={id || props.name} {...props} className={`input-field ${className}`} />
        </>
    )
}

export default Input