import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgPoison = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={113.385}
    height={113.385}
    viewBox='0 0 30 30'
    {...props}
  >
    <path
      d='M121.205 89.755a15 15 0 0 0-15 15 15 15 0 0 0 15 15 15 15 0 0 0 15-15 15 15 0 0 0-15-15m0 5.868a9.738 7.758 0 0 1 9.738 7.758 9.738 7.758 0 0 1-3.063 5.643 2.546 3.515 0 0 1 .194 1.347 2.546 3.515 0 0 1-2.546 3.516 2.546 3.515 0 0 1-2.313-2.048 2.546 3.515 0 0 1-2.01 1.361 2.546 3.515 0 0 1-2.01-1.361 2.546 3.515 0 0 1-2.314 2.048 2.546 3.515 0 0 1-2.545-3.516 2.546 3.515 0 0 1 .196-1.346 9.738 7.758 0 0 1-3.065-5.644 9.738 7.758 0 0 1 9.738-7.758m0 2.814a6.206 4.944 0 0 0-6.206 4.944 6.206 4.944 0 0 0 6.206 4.945 6.206 4.944 0 0 0 6.206-4.945 6.206 4.944 0 0 0-6.206-4.944'
      style={{
        opacity: 1,
        fill: '#aa6ac8',
        fillOpacity: 1,
        strokeWidth: 0.283868,
      }}
      transform='translate(-106.205 -89.755)'
    />
  </svg>
);
const Memo = memo(SvgPoison);
export default Memo;
