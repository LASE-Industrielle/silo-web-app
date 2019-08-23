import React from 'react'

export const BackButton = ({ fill = '#000', height = 24, width = 24 }) => {
  return (
    <svg fill={fill} height={height} width={width} viewBox={'0 0 24 24'}>
      <g transform="translate(0 -68.914)">
        <g transform="translate(0 68.914)">
          <path className="b"
                d="M6.513,13.715.2,7.475a.666.666,0,0,1,0-.95L6.513.285a.994.994,0,0,1,1.394,0,.967.967,0,0,1,0,1.377L2.506,7l5.4,5.337a.967.967,0,0,1,0,1.377.994.994,0,0,1-1.394,0"
                transform="translate(0 5)"/>
        </g>
      </g>
    </svg>
  )
}
