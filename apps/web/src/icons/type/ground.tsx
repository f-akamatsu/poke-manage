import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgGround = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={113.387}
    height={113.385}
    viewBox='0 0 30 30'
    {...props}
  >
    <path
      d='M164.577 13.801a15 15 0 0 0-15 15 15 15 0 0 0 15 15 15 15 0 0 0 15-15 15 15 0 0 0-15-15m-.816 7.485h7.073l4.915 13.887h-16.96zm-6.457 2.995h4l-3.9 10.892h-4z'
      style={{
        opacity: 1,
        fill: '#d77742',
        fillOpacity: 1,
        strokeWidth: 0.283868,
      }}
      transform='translate(-149.577 -13.801)'
    />
  </svg>
);
const Memo = memo(SvgGround);
export default Memo;
