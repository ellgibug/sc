import * as React from "react";

function SvgTip(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={14}
      height={14}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 13.667A6.667 6.667 0 117 .334a6.667 6.667 0 010 13.333zm0-1.334A5.333 5.333 0 107 1.667a5.333 5.333 0 000 10.666zm-.667-8.666h1.334V5H6.333V3.667zm0 2.666h1.334v4H6.333v-4z"
        fill="#222"
      />
    </svg>
  );
}

export default SvgTip;
