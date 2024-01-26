import {ButtonHTMLAttributes} from "react";

export default function MainTitle({ className = '', children, ...props }: any) {
    return (
        <h1
            {...props}
            className={
                `p-6 text-gray-900 dark:text-gray-100 text-4xl font-bold ` + className
            }
        >
            {children}
        </h1>
    );
}
