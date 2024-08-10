import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgNormal = (props: SVGProps<SVGSVGElement>) => (
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
        fill: '#9199a1',
        fillOpacity: 1,
      }}
      transform='translate(-257.314 -20.204)'
    >
      <path
        d='M272.314 20.204a15 15 0 0 0-15 15 15 15 0 0 0 15 15 15 15 0 0 0 15-15 15 15 0 0 0-15-15m0 5.585a9.415 9.415 0 0 1 9.415 9.415 9.415 9.415 0 0 1-9.415 9.414 9.415 9.415 0 0 1-9.415-9.414 9.415 9.415 0 0 1 9.415-9.415'
        style={{
          opacity: 1,
          fill: '#9199a1',
          fillOpacity: 1,
          strokeWidth: 0.283868,
        }}
      />
      <circle
        cx={272.314}
        cy={35.204}
        r={5.576}
        style={{
          opacity: 1,
          fill: '#9199a1',
          fillOpacity: 1,
          strokeWidth: 0.283042,
        }}
      />
    </g>
  </svg>
);
const Memo = memo(SvgNormal);
export default Memo;
