import * as React from 'react';
import type { SVGProps } from 'react';
import { memo } from 'react';
const SvgPsychic = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlSpace='preserve'
    width={113.387}
    height={113.387}
    viewBox='0 0 30 30'
    {...props}
  >
    <path
      d='M162.29 132.205a15 15 0 0 0-15 15 15 15 0 0 0 15 15 15 15 0 0 0 15.001-15 15 15 0 0 0-15-15m.027 6.348q.2-.002.398.004c3.707.116 7.414 2.983 7.966 6.574.51 3.315-1.938 7.238-5.742 7.625-2.928.297-6.09-1.876-6.276-4.799-.067-1.044.47-2.241 1.173-3.044a3.93 3.93 0 0 1 3.088-1.335 3.4 3.4 0 0 1 2.159.863c.595.533 1.003 1.446.7 2.349-.22.66-.589.916-1.152 1.157-.282.12-.673.232-1.154.09s-.847-.588-.96-.97c-.157-.525.178-1.068.747-1.212q.176-.006.345.04c-.016-.015.005-.02-.016-.038a1.47 1.47 0 0 0-.756-.306c-.555-.02-.983.197-1.337.602s-.563.995-.53 1.518c.107 1.678 1.674 2.764 3.478 2.58 2.505-.254 3.608-2.508 3.258-4.785-.451-2.934-2.834-4.519-5.965-4.047-3.851.58-6.01 3.837-5.331 7.336.808 4.17 5.061 6.26 9.516 5.477a10 10 0 0 0 1.05-.245c1.457-.313 1.607.989.535 1.337q-.639.188-1.299.303c-5.587.982-11.193-1.189-12.222-6.496-.88-4.542 2.03-9.713 7.13-10.481q.6-.09 1.197-.097'
      style={{
        opacity: 1,
        fill: '#fa707c',
        fillOpacity: 1,
        strokeWidth: 0.283868,
      }}
      transform='translate(-147.29 -132.205)'
    />
  </svg>
);
const Memo = memo(SvgPsychic);
export default Memo;
