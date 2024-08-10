import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgGhost = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={113.387}
    height={113.385}
    viewBox='0 0 30 30'
    {...props}
  >
    <g
      style={{
        opacity: 1,
        fill: '#546aae',
        fillOpacity: 1,
      }}
    >
      <path
        d='M320.95 217.79a15 15 0 0 0-15 15 15 15 0 0 0 15 15 15 15 0 0 0 15.001-15 15 15 0 0 0-15-15m0 5.57a9.43 9.43 0 0 1 9.43 9.43 9.43 9.43 0 0 1-1.733 5.439c-.386.843-.384 1.816 1.061 2.664-2.324.904-5.15 1.239-7.973 1.29a9 9 0 0 1-.784.036 9.43 9.43 0 0 1-9.429-9.429 9.43 9.43 0 0 1 9.429-9.429z'
        style={{
          opacity: 1,
          fill: '#546aae',
          fillOpacity: 1,
          strokeWidth: 0.283868,
        }}
        transform='translate(-305.95 -217.79)'
      />
      <path
        d='m325.065 229.246.003.11a2.114 2.114 0 0 1-2.115 2.114 2 2 0 0 1-.367-.033 2.114 2.114 0 0 0 2.11 2.005 2.114 2.114 0 0 0 2.115-2.114 2.114 2.114 0 0 0-1.746-2.082zM316.801 229.246l-.003.11a2.114 2.114 0 0 0 2.115 2.114 2 2 0 0 0 .366-.033 2.114 2.114 0 0 1-2.11 2.005 2.114 2.114 0 0 1-2.114-2.114 2.114 2.114 0 0 1 1.746-2.082z'
        style={{
          opacity: 1,
          fill: '#546aae',
          fillOpacity: 1,
          strokeWidth: 0.23877,
        }}
        transform='translate(-305.95 -217.79)'
      />
    </g>
  </svg>
);
const Memo = memo(SvgGhost);
export default Memo;
