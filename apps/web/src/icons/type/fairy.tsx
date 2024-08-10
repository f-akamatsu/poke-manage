import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgFairy = (props: SVGProps<SVGSVGElement>) => (
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
        fill: '#e990e3',
        fillOpacity: 1,
      }}
    >
      <path
        d='M371.636 346.429a15 15 0 0 0-15 15 15 15 0 0 0 15 15 15 15 0 0 0 15-15 15 15 0 0 0-15-15m0 3.737 2.96 5.411 4.09-1.198-1.198 4.09 5.411 2.96-5.411 2.96 1.198 4.09-4.09-1.198-2.96 5.412-2.96-5.412-4.09 1.198 1.198-4.09-5.412-2.96 5.412-2.96-1.199-4.09 4.091 1.198z'
        style={{
          opacity: 1,
          fill: '#e990e3',
          fillOpacity: 1,
          strokeWidth: 0.283868,
        }}
        transform='translate(-356.636 -346.429)'
      />
      <path
        d='m368.126 362.07-1.415-2.587-2.587-1.414 2.587-1.415 1.415-2.587 1.415 2.587 2.587 1.415-2.587 1.414z'
        style={{
          opacity: 1,
          fill: '#e990e3',
          fillOpacity: 1,
          stroke: 'none',
          strokeWidth: 0.264999,
          strokeDasharray: 'none',
        }}
        transform='translate(-353.126 -343.068)'
      />
    </g>
  </svg>
);
const Memo = memo(SvgFairy);
export default Memo;
