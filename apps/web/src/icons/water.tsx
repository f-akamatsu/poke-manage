import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgWater = (props: SVGProps<SVGSVGElement>) => (
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
        fill: '#4d91d7',
        fillOpacity: 1,
      }}
    >
      <path
        d='M369.809 20.287a15 15 0 0 0-15 15 15 15 0 0 0 15 15 15 15 0 0 0 15-15 15 15 0 0 0-15-15m0 5.616s7.323 7.4 7.323 11.445a7.323 7.323 0 0 1-7.323 7.323 7.323 7.323 0 0 1-7.324-7.323c0-4.045 7.324-11.445 7.324-11.445'
        style={{
          opacity: 1,
          fill: '#4d91d7',
          fillOpacity: 1,
          strokeWidth: 0.283868,
        }}
        transform='translate(-354.809 -20.287)'
      />
      <path
        d='M366.592 35.772a3.97 3.97 0 0 0-1.188 2.83 3.97 3.97 0 0 0 3.97 3.97 3.97 3.97 0 0 0 3.925-3.368 3.97 3.97 0 0 1-2.781 1.14 3.97 3.97 0 0 1-3.971-3.97 4 4 0 0 1 .045-.602'
        style={{
          opacity: 1,
          fill: '#4d91d7',
          fillOpacity: 1,
          strokeWidth: 0.0751507,
        }}
        transform='translate(-354.809 -20.287)'
      />
    </g>
  </svg>
);
const Memo = memo(SvgWater);
export default Memo;
