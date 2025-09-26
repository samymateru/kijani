import {SVGProps} from "react";

export const FacebookIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width || 24}
        height={props.height || 24}
        fill="currentColor"
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="M22.675 0h-21.35C.596 0 0 .596 0 1.325v21.351C0 23.404.596 24
    1.325 24h11.495v-9.294H9.691v-3.622h3.129V8.413c0-3.1 1.893-4.788
    4.659-4.788 1.325 0 2.464.099
    2.797.143v3.24l-1.918.001c-1.504 0-1.796.715-1.796
    1.763v2.312h3.587l-.467 3.622h-3.12V24h6.116C23.404
    24 24 23.404 24 22.676V1.325C24 .596 23.404 0
    22.675 0z" />
    </svg>
);