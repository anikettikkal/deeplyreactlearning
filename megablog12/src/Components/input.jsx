import React, { useId } from "react";

const Input = React.forwardRef(function Input({
    label,
    type = 'text',
    className = '',
    ...props

}, ref) {
    const id = useId(id)

    return (
        <div className="w-full">
            {label && <label className="block mb-1" htmlFor={id}>
                {label}
            </label>}
            <input type={type}
            className={`${className} px-3 py-2 rounded-lg w-full bg-white text-black border
            outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent`}
            ref={ref}
            {...props}
            id={id}
             />
        </div>
    )
})
export default Input