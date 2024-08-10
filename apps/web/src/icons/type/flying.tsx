import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgFlying = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={113.387}
    height={113.387}
    viewBox='0 0 30 30'
    {...props}
  >
    <path
      d='M93.745 173.46a15 15 0 0 0-15 15 15 15 0 0 0 15 15 15 15 0 0 0 15-15 15 15 0 0 0-15-15m10.395 6.438a6.5 6.5 0 0 1 .102 1.145 6.5 6.5 0 0 1-6.5 6.5h-4.067l.212.596h5.027a5.048 4.29 0 0 0 4.12-1.811 5.048 4.29 0 0 1 .08.755 5.048 4.29 0 0 1-5.05 4.29h-3.032l.23.65h3.386a3.485 2.831 0 0 0 2.845-1.195 3.485 2.831 0 0 1 .055.498 3.485 2.831 0 0 1-3.486 2.832H96.02l.24.675a1.743 1.416 0 0 0 .745-.486 1.743 1.416 0 0 1 .028.25 1.743 1.416 0 0 1-.505.995l.006.017a7.37 7.37 0 0 1-4.791 1.77 7.37 7.37 0 0 1-7.372-7.371 7.37 7.37 0 0 1 7.372-7.372l.197.003.002.004h6.894a6.5 6.5 0 0 0 5.305-2.745z'
      style={{
        opacity: 1,
        fill: '#8ba8dc',
        fillOpacity: 1,
        strokeWidth: 0.283868,
      }}
      transform='translate(-78.745 -173.46)'
    />
  </svg>
);
const Memo = memo(SvgFlying);
export default Memo;
