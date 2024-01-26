import {ButtonHTMLAttributes} from "react";

export default function Subtitle({ className = '', children, ...props }: any) {
    return (
        <h2
            {...props}
            className={
                `p-6 text-gray-900 dark:text-gray-100 text-2xl font-semibold ` + className
            }
        >
            {children}
        </h2>
    );
}
