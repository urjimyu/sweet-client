import type { SVGProps } from 'react';
const SvgBgImg = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    fill='none'
    viewBox='0 0 375 375'
    {...props}
  >
    <path fill='url(#bg-img_svg__a)' d='M0 0h375v375H0z' />
    <defs>
      <pattern id='bg-img_svg__a' width={1} height={1} patternContentUnits='objectBoundingBox'>
        <use xlinkHref='#bg-img_svg__b' transform='scale(.00052)' />
      </pattern>
      <image
        id='bg-img_svg__b'
        width={1920}
        height={1920}
        data-name='giftroom_bg_new_4-1.png'
      />
    </defs>
  </svg>
);
export default SvgBgImg;