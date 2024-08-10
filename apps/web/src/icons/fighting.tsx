import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgFighting = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={113.387}
    height={113.385}
    viewBox='0 0 30 30'
    {...props}
  >
    <path
      d='M78.174 90.146a15 15 0 0 0-15 15 15 15 0 0 0 15 15 15 15 0 0 0 15-15 15 15 0 0 0-15-15m-6.207 7.42h2.89v5.616h.969v-5.616h3.05v5.616h.97v-5.616h3.051v5.616h.97v-5.616h2.89v15.192h-14.79zm-2.523 4.78h1.634v10.412h-1.634l-2.313-5.206z'
      style={{
        opacity: 1,
        fill: '#ce406c',
        fillOpacity: 1,
        strokeWidth: 0.283868,
      }}
      transform='translate(-63.174 -90.146)'
    />
  </svg>
);
const Memo = memo(SvgFighting);
export default Memo;
