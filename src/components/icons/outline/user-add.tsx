import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function UserAddOutline({
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
        d="M18 9V12M18 12V15M18 12H21M18 12H15M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7ZM3 20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21H3V20Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
