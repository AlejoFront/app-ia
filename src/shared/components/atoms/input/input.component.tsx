import { FC } from 'react'

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label?: string;
    id?: string;
    className?:string;
    isTextArea?:boolean;
}

export const Input: FC<InputProps> = ({ label, id, className,isTextArea = false,...props }) => {
    return (
        <>
            {label && (
                <label htmlFor={id || props.name} className='input-label'>
                    {label}
                </label>
            )}
            {
                isTextArea
                ? <textarea id={id || props.name} {...props} className={`input-field ${className}`}/>
                : <input id={id || props.name} {...props} className={`input-field ${className}`} />
            }
        </>
    )
}

export default Input