import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgIce = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={113.387}
    height={113.385}
    viewBox='0 0 30 30'
    {...props}
  >
    <path
      d='M36.852 51.915a15 15 0 0 0-15 15 15 15 0 0 0 15 15 15 15 0 0 0 15-15 15 15 0 0 0-15-15m-5.933 4.724 2.808 1.622 2.808 1.62v6.486l-2.808-1.621-2.808-1.622 2.808-1.621-2.808 1.62v-3.241zm11.865 0v6.485l-2.808-1.621 2.808 1.621-2.808 1.622-2.808 1.62v-6.484l2.808-1.621zm-12.181 7.033 2.808 1.621 2.808 1.621-2.808 1.622-2.808 1.621-2.808-1.621-2.808-1.622 2.808-1.62zm12.497 0 2.808 1.621 2.808 1.621-2.808 1.622-2.808 1.621-2.808-1.621-2.807-1.622 2.807-1.62zm-6.565 3.79v6.486l-2.808 1.62-2.808 1.622v-6.485l2.808-1.621zm.633 0 2.808 1.622 2.808 1.62v6.486l-2.808-1.621-2.808-1.621v-3.243z'
      style={{
        opacity: 1,
        fill: '#70cdbf',
        fillOpacity: 1,
        strokeWidth: 0.283868,
      }}
      transform='translate(-21.851 -51.915)'
    />
  </svg>
);
const Memo = memo(SvgIce);
export default Memo;
