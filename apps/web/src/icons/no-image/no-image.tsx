import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgNoImage = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' {...props}>
    <g fillRule='evenodd'>
      <path
        fill='#141414'
        d='M7 0h2v1h6v2h-1v1h-1v1h1v2h-1v1h1v1h1v1h1v1h-1v1h-2v1h1v2h-1v1h-3v-1H6v1H3v-1H2v-2h1v-1H1v-1H0v-1h1V9h1V8h1V7H2V5h1V4H2V3H1V1h6zM2 3h1v1h1v1H3v2h3v1h4V7h3V5h-1V4h1V3h1V2h-2v1h-1V2h-1v1H9V1H7v2H6V2H5v1H4V2H2zm3 1h1v1h1v1H5zm5 0h1v2H9V5h1zM3 9h1V8H3zH2v1H1v1h2zm2 0h1V8H5zH4v3h1v1h1v1h4v-1h1v-1h1V9h-1v1h-1v1H6v-1H5zm5 0h1V8h-1zH6v1h4zm2 0h1V8h-1zm1 2h2v-1h-1V9h-1zM3 15h3v-1H4v-1H3zm7 0h3v-2h-1v1h-2z'
        className='no-image_svg__c0'
      />
      <path
        fill='#eeb088'
        d='M5 2h1v1h4V2h1v1h1v2h1v2h-3v1H9V7H7v1H6V7H3V5h1V3h1zm0 4h6V4h-1v1H6V4H5zM2 9h1v2H1v-1h1zm2 0h1v1h1v1H5v1H4zm7 0h1v3h-1v-1h-1v-1h1zm2 0h1v1h1v1h-2zM3 13h1v1h1v1H4v-1H3zm9 0h1v1h-1v1h-1v-1h1z'
        className='no-image_svg__c1'
      />
      <path
        fill='#f5f5f5'
        d='M7 1h2v2H7zM2 2h2v2H3V3H2zm10 0h2v1h-1v1h-1zM7 5h2v1H7zm0 2h2v1H7zM3 8h1v1H3zm2 0h1v1h4V8h1v1h-1v1H6V9H5zm7 0h1v1h-1zm-7 3h6v2h-1v1h1v1h-1v-1H6v1H5v-1h1v-1H5zm-2 3h1v1H3zm9 0h1v1h-1z'
        className='no-image_svg__c2'
      />
    </g>
  </svg>
);
const Memo = memo(SvgNoImage);
export default Memo;
