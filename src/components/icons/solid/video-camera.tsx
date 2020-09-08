import React from 'react'

type Props = {
  className?: string
  style?: React.CSSProperties
}

export default function VideoCameraSolid({
  className = 'w-6 h-6',
  style,
  ...restProps
}: Props) {
  return (
    <svg
      className={className}
      style={style}
      {...restProps}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M2 6C2 4.89543 2.89543 4 4 4H10C11.1046 4 12 4.89543 12 6V14C12 15.1046 11.1046 16 10 16H4C2.89543 16 2 15.1046 2 14V6Z"
        fill="currentColor"
      />
      <path
        d="M14.5528 7.10557C14.214 7.27497 14 7.62123 14 8V12C14 12.3788 14.214 12.725 14.5528 12.8944L16.5528 13.8944C16.8628 14.0494 17.2309 14.0329 17.5257 13.8507C17.8205 13.6684 18 13.3466 18 13V7C18 6.65342 17.8205 6.33156 17.5257 6.14935C17.2309 5.96714 16.8628 5.95058 16.5528 6.10557L14.5528 7.10557Z"
        fill="currentColor"
      />
    </svg>
  )
}
