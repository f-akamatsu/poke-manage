import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgDark = (props: SVGProps<SVGSVGElement>) => (
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
        fill: '#595365',
        fillOpacity: 1,
      }}
    >
      <path
        d='M274.066 346.497a15 15 0 0 0-15 15 15 15 0 0 0 15 15 15 15 0 0 0 15-15 15 15 0 0 0-15-15m0 5.429a9.57 9.57 0 0 1 9.57 9.571 9.57 9.57 0 0 1-9.57 9.571 9.57 9.57 0 0 1-9.572-9.57 9.57 9.57 0 0 1 9.572-9.572'
        style={{
          opacity: 1,
          fill: '#595365',
          fillOpacity: 1,
          strokeWidth: 0.283868,
        }}
        transform='translate(-259.066 -346.497)'
      />
      <path
        d='M274.066 353.726a7.8 7.8 0 0 0-2.451.4 7.77 7.77 0 0 1 5.308 7.371 7.77 7.77 0 0 1-5.314 7.368 7.8 7.8 0 0 0 2.457.404 7.77 7.77 0 0 0 7.772-7.772 7.77 7.77 0 0 0-7.772-7.771'
        style={{
          opacity: 1,
          fill: '#595365',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.246848,
          strokeDasharray: 'none',
        }}
        transform='translate(-259.066 -346.497)'
      />
    </g>
  </svg>
);
const Memo = memo(SvgDark);
export default Memo;
