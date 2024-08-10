import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgSteel = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={113.385}
    height={113.387}
    viewBox='0 0 30 30'
    {...props}
  >
    <g
      style={{
        fill: '#5b8f9e',
        fillOpacity: 1,
      }}
      transform='translate(-308.024 -346.763)'
    >
      <path
        d='M323.024 346.763a15 15 0 0 0-15 15 15 15 0 0 0 15 15 15 15 0 0 0 15-15 15 15 0 0 0-15-15m-5.113 6.146h10.225l5.112 8.854-5.112 8.855H317.91l-5.112-8.855z'
        style={{
          opacity: 1,
          fill: '#5b8f9e',
          fillOpacity: 1,
          strokeWidth: 0.283868,
        }}
      />
      <circle
        cx={323.023}
        cy={361.763}
        r={4.647}
        style={{
          opacity: 1,
          fill: '#5b8f9e',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.256091,
          strokeDasharray: 'none',
        }}
      />
    </g>
  </svg>
);
const Memo = memo(SvgSteel);
export default Memo;
