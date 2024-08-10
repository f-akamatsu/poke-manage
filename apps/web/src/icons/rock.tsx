import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgRock = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={113.385}
    height={113.385}
    viewBox='0 0 30 30'
    {...props}
  >
    <path
      d='M37.175 90.06a15 15 0 0 0-15 15 15 15 0 0 0 15 15 15 15 0 0 0 15-15 15 15 0 0 0-15-15m-3.425 7.638H43.85l-3.857 7.888-8.215 6.394-4.084-1.196-.686-5.886zm11.085.324 2.63 7.562-3.463 4.072-2.855-4.089zm-4.31 8.453 2.788 3.99-3.333 3.919-6.987-2.047z'
      style={{
        opacity: 1,
        fill: '#c8b68d',
        fillOpacity: 1,
        strokeWidth: 0.283868,
      }}
      transform='translate(-22.175 -90.06)'
    />
  </svg>
);
const Memo = memo(SvgRock);
export default Memo;
