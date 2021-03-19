// import * as React from "react"

// export function Logo(props: React.SVGProps<SVGSVGElement>) {
//   return (
//     <svg width="1em" height="1em" viewBox="0 0 499 65" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
//       <path
//         fillRule="evenodd"
//         clipRule="evenodd"
//         d="M365.941.004l-47.142 47.142 4.95 4.95 47.142-47.143-4.95-4.95zM36 .26h7v9h18v7H43v36h-7V27.04L11.2 51.85l-4.95-4.96 30.63-30.63H0v-7h36v-9zm214 9h-43v7h43v-7zm9 27.17h-52v7h52v-7zm51.31-27.17h24.88v7h-24.88v-7zm132.07 27h-7v.04h-8.94v7h8.94v10.96h-17.94v7h34.42v-7h-9.48v-18zm-312.78-27l-28.69 28.69.69.73 8.28 8.28-4.95 4.95-8.99-8.99-.01.01-4.95-4.95-.69-.72-7.94-7.94 4.95-4.95 8.64 8.65 16.76-16.76H72v-7h57.6zm156.36 27.08V27.4h-7v8.94h-8.94v7h8.94v17.78h7V43.34h10.05l-4.13 4.13 4.95 4.95 7.31-7.31-8.77-8.77h-9.41zM161.9 29.41L181.81 9.5l4.95 4.95-19.91 19.91 14.53 14.53-4.95 4.95-14.53-14.53-21.95 21.95-3.16 3.15h-9.9l15.66-15.65 14.4-14.4-19.61-19.61 4.95-4.95 19.61 19.61zm235.05-15.28l8.76-8.76-4.95-4.95-42.85 42.85h32.21l-5.49 5.49-15.65 15.65h9.9l3.15-3.15 17.99-17.99h14.96v-7h-18.03V14.13zm-7 22.14h-15.14l15.14-15.14v15.14zm89.58-26.96h18.5v32.22L485.87 53.7l.01.01-10.71 10.7h-9.9l3.11-3.1h-.01l22.66-22.66V16.31H461.7v9.08h-7V9.31h17.83V.37h7v8.94z"
//         fill="currentColor"
//       />
//     </svg>
//   )
// }

import * as React from "react"

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 48 1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>{"Rectangle 5"}</title>
      <path d="M0 0h48v1H0z" fill="#063855" fillRule="evenodd" />
    </svg>
  )
}

export default SvgComponent
