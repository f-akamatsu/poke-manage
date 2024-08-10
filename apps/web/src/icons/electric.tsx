import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgElectric = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={113.387}
    height={113.387}
    viewBox='0 0 30 30'
    {...props}
  >
    <path
      d='M118.96 52.561a15 15 0 0 0-15 15 15 15 0 0 0 15 15 15 15 0 0 0 15-15 15 15 0 0 0-15-15m-4.468 7.415h7.486l3.371 10h-4.343l2.4 7.543-12.114-11.886h5.942z'
      style={{
        opacity: 1,
        fill: '#f5d337',
        fillOpacity: 1,
        strokeWidth: 0.283868,
      }}
      transform='translate(-103.96 -52.561)'
    />
  </svg>
);
const Memo = memo(SvgElectric);
export default Memo;
