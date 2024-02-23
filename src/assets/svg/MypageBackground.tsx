import type { SVGProps } from 'react';
const SvgMypageBackground = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    fill='none'
    viewBox='0 0 375 293'
    {...props}
  >
    <path fill='url(#mypage_background_svg__a)' d='M0 0h375v293H0z' />
    <path fill='url(#mypage_background_svg__b)' d='M0 171h375v122H0z' />
    <defs>
      <linearGradient
        id='mypage_background_svg__b'
        x1={187.5}
        x2={187.5}
        y1={171}
        y2={293}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#fff' stopOpacity={0} />
        <stop offset={0.79} stopColor='#fff' />
      </linearGradient>
      <pattern
        id='mypage_background_svg__a'
        width={1}
        height={1}
        patternContentUnits='objectBoundingBox'
      >
        <use xlinkHref='#mypage_background_svg__c' transform='scale(.00052 .00067)' />
      </pattern>
      <image
        id='mypage_background_svg__c'
        width={1920}
        height={1500}
      />
    </defs>
  </svg>
);
export default SvgMypageBackground;