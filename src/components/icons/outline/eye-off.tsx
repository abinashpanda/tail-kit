import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function EyeOffOutline({
  className = 'w-6 h-6',
  style,
  ...restProps
}: Props) {
  return (
    <svg
      className={className}
      style={style}
      {...restProps}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M13.8749 18.8246C13.2677 18.9398 12.6411 19 12.0005 19C7.52281 19 3.73251 16.0571 2.45825 12C2.80515 10.8955 3.33851 9.87361 4.02143 8.97118M9.87868 9.87868C10.4216 9.33579 11.1716 9 12 9C13.6569 9 15 10.3431 15 12C15 12.8284 14.6642 13.5784 14.1213 14.1213M9.87868 9.87868L14.1213 14.1213M9.87868 9.87868L6.58916 6.58916M14.1213 14.1213L17.4112 17.4112M3 3L6.58916 6.58916M6.58916 6.58916C8.14898 5.58354 10.0066 5 12.0004 5C16.4781 5 20.2684 7.94291 21.5426 12C20.8357 14.2507 19.3545 16.1585 17.4112 17.4112M17.4112 17.4112L21 21"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
