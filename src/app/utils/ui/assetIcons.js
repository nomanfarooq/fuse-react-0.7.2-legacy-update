import {encode} from 'base64-arraybuffer';

export const carOldColoredIcon = (size, color, angle) => {
    const svgString = encodeURIComponent(`
        <!--<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-name="Layer 2" viewBox="0 0 396.6 818.06">-->
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
            data-name="Layer 2" viewBox="0 0 396.6 818.06"
            width="${size}" height="${size}">
        <defs><radialGradient id="a" cx="-65974.75" cy="143.9" r="3723.64" fx="-65974.75" fy="143.9" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#828282"/><stop offset=".08" stop-color="#6f7070"/><stop offset=".23" stop-color="#515151"/><stop offset=".4" stop-color="#383938"/><stop offset=".57" stop-color="#272727"/><stop offset=".76" stop-color="#1d1d1d"/><stop offset=".99" stop-color="#1a1a1a"/></radialGradient><radialGradient xlink:href="#a" id="c" cy="515.18" r="3723.64" fy="515.18"/><radialGradient id="b" cx="-1041.92" cy="1506.39" r="14.61" fx="-1041.92" fy="1506.39" gradientTransform="matrix(-.55 0 0 .55 -283.28 -733.06)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#020202" stop-opacity="0"/><stop offset=".99" stop-color="#020202" stop-opacity=".2"/></radialGradient><radialGradient xlink:href="#b" id="e" cx="-721.46" cy="1466.99" r="14.61" fx="-721.46" fy="1466.99" gradientTransform="matrix(-.57 0 0 .57 -299.36 -754.45)"/><radialGradient xlink:href="#a" id="f" cx="1730.67" cy="378.93" r="1860.32" fx="1730.67" fy="378.93"/><radialGradient xlink:href="#a" id="g" cx="-209.35" cy="1030.1" r="14.86" fx="-209.35" fy="1030.1" gradientTransform="matrix(-38.31 0 0 63.98 -7662.76 -65606.48)"/><linearGradient id="d" x1="-58.43" x2="226.43" y1="433.63" y2="433.63" gradientTransform="matrix(1 0 0 -1 0 846.06)" gradientUnits="userSpaceOnUse"><stop offset=".14" stop-color="#e4ebef"/><stop offset="1" stop-color="${color}"/></linearGradient></defs>
        <g transform="rotate(${angle}, 198.3, 409.03)" data-name="Layer 1">
        <path d="M362.63 168.12c-6.27 0-11.61 4.07-13.54 9.7-.93-.13-1.87-.23-2.83-.23H53.12c-2.03 0-3.99.31-5.83.88-1.72-5.97-7.23-10.36-13.75-10.36-7.89 0-14.31 6.43-14.31 14.32v93.48c0 7.89 6.43 14.31 14.31 14.31 7.28 0 13.3-5.48 14.19-12.53 1.71.49 3.52.77 5.39.77h293.14c.77 0 1.53-.06 2.28-.14 1.15 6.74 7.03 11.9 14.09 11.9 7.89 0 14.32-6.43 14.32-14.31v-93.48c0-7.89-6.43-14.32-14.32-14.32Z" style="fill:url(#a)"/><path d="M362.63 539.43c-7.08 0-12.96 5.18-14.1 11.94-1.73-.5-3.55-.78-5.43-.78H49.96c-.82 0-1.62.07-2.42.16-1.38-6.46-7.13-11.32-13.99-11.32-7.89 0-14.31 6.43-14.31 14.31v93.63c0 7.89 6.43 14.31 14.31 14.31 6.54 0 12.06-4.42 13.76-10.42.87.12 1.75.2 2.65.2H343.1c1.95 0 3.83-.29 5.61-.83 1.49 6.32 7.16 11.05 13.92 11.05 7.89 0 14.32-6.43 14.32-14.31v-93.63c0-7.89-6.43-14.31-14.32-14.31Z" style="fill:url(#c)"/><path d="M113.88 17.09c5.4-4.09 12.42-7.3 20.16-9.06l2.63-.58c43.24-9.93 89.54-9.93 132.78 0l2.63.58c4.27 1.27 12.49 3.91 18.04 8l-62.59-5.07c-16.8-1.61-33.74-1.61-50.54 0l-62.96 6.13h-.15Z" style="fill:#232b34"/><path d="m267.87 12.44 1.73 2.06-152.36 1.57c-.4.02-34.19 2.12-61.92 63.83l302.51 13c-35.51-87.35-89.96-80.46-89.96-80.46Z" style="fill:#d42f2e"/><path d="M358.98 207.12s21.76-91.44-12.56-133.8c0 0-44.55-53.75-60.62-59.45 0 0-102.98-17.38-170.32 2.34 0 0-38.85 28.63-57.11 58.28 0 0-35.49 42.36-19.43 134.97v66.32S-2.24 295.2.1 316.97l36.52-10.22-2.34 381.82s-2.34 97.14 60.62 116.56c0 0 108.67 27.46 204.64 2.34 0 0 65.15-21.76 62.96-114.37l-4.53-389.86 37.69 16.07s10.23-27.46-36.52-44.55v-67.48l-.15-.15Z" style="fill:url(#d)"/><path d="M290.04 103.71c-.58-4.38-.88-7.01-.88-7.01.44 2.34.73 4.67.88 7.01Z" style="fill:url(#b)"/><path d="M110.81 90.27c.88-4.53 1.75-7.3 1.75-7.3-.58 2.48-1.17 4.97-1.75 7.3Z" style="fill:url(#e)"/><path d="m346.57 447.28-1.28-187.72c5.06-59.33-39.62-67.19-39.62-67.19-35.49-20.6-152.64-19.57-204.64-2.92-52 16.51-47.47 56.53-47.47 56.53l-6.72 197.34 1.61 192.08 16.36-26.59V372.4c19.62-10.88 59.31-30.71 143.15-33.23 60.17 1.07 112.1 28.81 120.66 33.61v239.98l16.36 26.58 1.7-192.15-.09.09Z" style="fill:url(#f)"/><path d="M75.46 699.66c3.42 19.03 12.53 33.77 23.92 39 20.36 9.75 55.53 22.59 98.4 22.83h1c46.85 0 84.58-15.69 103.81-25.45 8.12-4.04 14.38-14.74 16.95-28.3l1.85-21.16s-.85 78.48-1.42 79.43l-.28.48h-.43c-24.07 14.98-58.38 22.35-102.1 22.35-6.27 0-12.67 0-18.94-.48-6.27.24-12.53.48-18.94.48-43.72 0-78.03-7.37-102.1-22.12h-.43l-6.85-1.85c-.57-.95-3.42-79.19-3.42-79.19l8.85 13.74.14.24Z" style="fill:url(#g)"/></g></svg>
  `);
    return `data:image/svg+xml,${svgString}`;
};

export const carColoredIconBk = (size, color, angle) => {
    const svgString = encodeURIComponent(`
 <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 23 48"
            width="${size}" height="${size}">
            <g transform="rotate(${angle}, 11.5, 24)"  filter="url(#shadowFilter)">
                <path d="M21.03 9.86439C20.6664 9.86439 20.3567 10.1032 20.2448 10.4335C20.1909 10.4259 20.1363 10.42 20.0807 10.42H3.08062C2.96289 10.42 2.84922 10.4382 2.74252 10.4717C2.64277 10.1214 2.32323 9.8638 1.94511 9.8638C1.48755 9.8638 1.11523 10.2411 1.11523 10.704V16.189C1.11523 16.652 1.48813 17.0287 1.94511 17.0287C2.3673 17.0287 2.71642 16.7071 2.76803 16.2935C2.8672 16.3222 2.97217 16.3386 3.08062 16.3386H20.0807C20.1253 16.3386 20.1694 16.3351 20.2129 16.3304C20.2796 16.7259 20.6206 17.0287 21.03 17.0287C21.4876 17.0287 21.8605 16.6514 21.8605 16.189V10.704C21.8605 10.2411 21.4876 9.8638 21.03 9.8638V9.86439Z" fill="url(#paint0_radial_1720_2659)"/>
<path d="M21.0299 31.6512C20.6193 31.6512 20.2783 31.9551 20.2122 32.3517C20.1119 32.3224 20.0063 32.306 19.8973 32.306H2.89727C2.84971 32.306 2.80332 32.3101 2.75692 32.3154C2.67689 31.9363 2.34343 31.6512 1.9456 31.6512C1.48804 31.6512 1.11572 32.0284 1.11572 32.4908V37.9846C1.11572 38.4475 1.48862 38.8242 1.9456 38.8242C2.32488 38.8242 2.645 38.5649 2.74358 38.2128C2.79404 38.2199 2.84507 38.2246 2.89727 38.2246H19.8973C20.0104 38.2246 20.1194 38.2075 20.2227 38.1759C20.3091 38.5467 20.6379 38.8242 21.0299 38.8242C21.4875 38.8242 21.8604 38.4469 21.8604 37.9846V32.4908C21.8604 32.0278 21.4875 31.6512 21.0299 31.6512Z" fill="#1A1A1A"/>
<path d="M6.604 1.00265C6.91717 0.762664 7.32428 0.574316 7.77314 0.471047L7.92566 0.437016C10.4333 -0.145631 13.1184 -0.145631 15.626 0.437016L15.7785 0.471047C16.0261 0.545565 16.5028 0.700468 16.8247 0.940451L13.1949 0.642966C12.2206 0.548499 11.2382 0.548499 10.2639 0.642966L6.6127 1.00265H6.604Z" fill="#232B34"/>
<path d="M15.5344 0.729796L15.6347 0.850667L6.79893 0.942788C6.77573 0.943961 4.81615 1.06718 3.20801 4.68804L20.7515 5.45082C18.6921 0.325523 15.5344 0.729796 15.5344 0.729796Z" fill="#D42F2E"/>
<path d="M20.8181 12.1527C20.8181 12.1527 22.08 6.78744 20.0897 4.30195C20.0897 4.30195 17.5061 1.14815 16.5742 0.813696C16.5742 0.813696 10.602 -0.206082 6.6968 0.950997C6.6968 0.950997 4.44377 2.63087 3.38482 4.3706C3.38482 4.3706 1.32665 6.85609 2.25802 12.29V16.1814C2.25802 16.1814 -0.130132 17.3208 0.00557182 18.5982L2.12347 17.9985L1.98777 40.402C1.98777 40.402 1.85207 46.1017 5.5033 47.2412C5.5033 47.2412 11.8054 48.8524 17.371 47.3785C17.371 47.3785 21.1492 46.1017 21.0222 40.6678L20.7595 17.7926L22.9453 18.7355C22.9453 18.7355 23.5385 17.1243 20.8274 16.1215V12.1621L20.8187 12.1533L20.8181 12.1527Z" fill="${color}"/>
<path d="M20.8181 12.1527C20.8181 12.1527 22.08 6.78744 20.0897 4.30195C20.0897 4.30195 17.5061 1.14815 16.5742 0.813696C16.5742 0.813696 10.602 -0.206082 6.6968 0.950997C6.6968 0.950997 4.44377 2.63087 3.38482 4.3706C3.38482 4.3706 1.32665 6.85609 2.25802 12.29V16.1814C2.25802 16.1814 -0.130132 17.3208 0.00557182 18.5982L2.12347 17.9985L1.98777 40.402C1.98777 40.402 1.85207 46.1017 5.5033 47.2412C5.5033 47.2412 11.8054 48.8524 17.371 47.3785C17.371 47.3785 21.1492 46.1017 21.0222 40.6678L20.7595 17.7926L22.9453 18.7355C22.9453 18.7355 23.5385 17.1243 20.8274 16.1215V12.1621L20.8187 12.1533L20.8181 12.1527Z" fill="url(#paint1_linear_1720_2659)"/>
<path d="M20.8181 12.1527C20.8181 12.1527 22.08 6.78744 20.0897 4.30195C20.0897 4.30195 17.5061 1.14815 16.5742 0.813696C16.5742 0.813696 10.602 -0.206082 6.6968 0.950997C6.6968 0.950997 4.44377 2.63087 3.38482 4.3706C3.38482 4.3706 1.32665 6.85609 2.25802 12.29V16.1814C2.25802 16.1814 -0.130132 17.3208 0.00557182 18.5982L2.12347 17.9985L1.98777 40.402C1.98777 40.402 1.85207 46.1017 5.5033 47.2412C5.5033 47.2412 11.8054 48.8524 17.371 47.3785C17.371 47.3785 21.1492 46.1017 21.0222 40.6678L20.7595 17.7926L22.9453 18.7355C22.9453 18.7355 23.5385 17.1243 20.8274 16.1215V12.1621L20.8181 12.1527Z" fill="url(#paint2_radial_1720_2659)"/>
<path d="M16.8289 44.2071C11.9343 45.2228 6.4064 44.1472 6.21793 44.1103C6.21445 44.1097 6.21097 44.1091 6.20749 44.1079C4.54077 43.6972 3.75671 42.4521 3.38903 41.3326C3.34032 41.1847 3.06717 41.2123 3.06601 41.3649C3.06601 41.3649 2.9448 45.3653 6.20749 46.1692C6.21097 46.1698 6.21387 46.171 6.21735 46.1716C6.4035 46.2085 11.9331 47.284 16.8283 46.2684C16.833 46.2672 16.837 46.2666 16.8417 46.2648C17.0081 46.2179 20.2134 45.2703 20.1026 41.5514V41.5497C20.1003 41.4012 19.8364 41.3701 19.7813 41.5115C18.9845 43.5669 16.9826 44.1637 16.8422 44.2036C16.8376 44.2047 16.833 44.2059 16.8277 44.2071H16.8289Z" fill="url(#paint3_linear_1720_2659)"/>
<path d="M16.8201 6.08511C16.7864 5.82811 16.769 5.6738 16.769 5.6738C16.7946 5.8111 16.8114 5.94781 16.8201 6.08511Z" fill="url(#paint4_radial_1720_2659)"/>
<path d="M6.42578 5.29649C6.47682 5.03069 6.52727 4.86816 6.52727 4.86816C6.49363 5.01368 6.45942 5.15978 6.42578 5.29649Z" fill="url(#paint5_radial_1720_2659)"/>
<path d="M20.5807 26.2442L20.503 15.2391C20.503 15.2326 20.503 15.2262 20.5036 15.2197C20.786 11.9644 18.428 11.3565 18.1317 11.2931C18.1108 11.2885 18.0911 11.2814 18.0726 11.2714C15.888 10.0792 8.8366 10.1431 5.69918 11.1159C2.54784 12.0847 2.50667 14.4558 2.50667 14.4558L2.41504 26.0119L2.50783 36.7653C2.50957 36.9607 2.74154 37.0599 2.8813 36.9243L4.03304 35.8071C4.07654 35.7649 4.10089 35.7068 4.10089 35.6458V27.1361V22.0032C4.10089 21.921 4.14497 21.8459 4.2163 21.8072C5.40805 21.1571 7.25977 20.0434 12.1787 19.9008C15.6131 19.9601 18.0992 21.4663 18.8102 21.8764C18.8792 21.9163 18.9216 21.9903 18.9216 22.0701V35.9239C18.9216 35.9855 18.9465 36.0442 18.9906 36.0859L20.1151 37.162C20.2548 37.2957 20.4856 37.1966 20.4874 37.0018L20.5854 26.2389L20.5802 26.2442H20.5807Z" fill="url(#paint6_linear_1720_2659)"/>
            </g>
           <defs>
                <filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/>
                    <feOffset dx="0" dy="0" result="offsetBlur"/>
                    <feFlood flood-color="${color}" flood-opacity="0.5"/>
                     <feComposite in2="offsetBlur" operator="in"/>
                    <feComposite in="SourceGraphic"/>
                    <feComponentTransfer result="opacityAdjusted">
                        <feFuncA type="linear" slope="0.3"/>
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode in="opacityAdjusted"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
<radialGradient id="paint0_radial_1720_2659" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3826.07 8.44327) scale(215.945 218.486)">
<stop stop-color="#828282"/>
<stop offset="0.08" stop-color="#6F7070"/>
<stop offset="0.23" stop-color="#515151"/>
<stop offset="0.4" stop-color="#383938"/>
<stop offset="0.57" stop-color="#272727"/>
<stop offset="0.76" stop-color="#1D1D1D"/>
<stop offset="0.99" stop-color="#1A1A1A"/>
</radialGradient>
<linearGradient id="paint1_linear_1720_2659" x1="3.76931" y1="24.1988" x2="20.2886" y2="24.1988" gradientUnits="userSpaceOnUse">
<stop stop-color="${color}" stop-opacity="0.1"/>
<stop offset="0.02" stop-color="#9ECD6D" stop-opacity="0.18"/>
<stop offset="0.06" stop-color="#B4D695" stop-opacity="0.28"/>
<stop offset="0.1" stop-color="#C5DEB6" stop-opacity="0.36"/>
<stop offset="0.14" stop-color="#D3E4D0" stop-opacity="0.42"/>
<stop offset="0.2" stop-color="#DCE8E1" stop-opacity="0.47"/>
<stop offset="0.27" stop-color="#E2EAEC" stop-opacity="0.49"/>
<stop offset="0.45" stop-color="#E4EBEF" stop-opacity="0.5"/>
<stop offset="0.58" stop-color="#E1EAEA" stop-opacity="0.49"/>
<stop offset="0.68" stop-color="#DAE6DC" stop-opacity="0.45"/>
<stop offset="0.77" stop-color="#CDE1C5" stop-opacity="0.4"/>
<stop offset="0.86" stop-color="#BCDAA4" stop-opacity="0.31"/>
<stop offset="0.93" stop-color="#A5D07B" stop-opacity="0.21"/>
<stop offset="1" stop-color="${color}" stop-opacity="0.1"/>
</linearGradient>
<radialGradient id="paint2_radial_1720_2659" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.4998 24.2841) scale(18.5148 20.2313)">
<stop stop-color="${color}" stop-opacity="0"/>
<stop offset="0.23" stop-color="${color}" stop-opacity="0.02"/>
<stop offset="0.43" stop-color="${color}" stop-opacity="0.07"/>
<stop offset="0.61" stop-color="${color}" stop-opacity="0.15"/>
<stop offset="0.78" stop-color="${color}" stop-opacity="0.28"/>
<stop offset="0.94" stop-color="${color}" stop-opacity="0.43"/>
<stop offset="1" stop-color="${color}" stop-opacity="0.5"/>
</radialGradient>
<linearGradient id="paint3_linear_1720_2659" x1="11.5863" y1="46.7031" x2="11.5863" y2="41.2346" gradientUnits="userSpaceOnUse">
<stop stop-color="#515151"/>
<stop offset="0.53" stop-color="#272727"/>
<stop offset="0.81" stop-color="#202020"/>
<stop offset="0.99" stop-color="#1A1A1A"/>
</linearGradient>
<radialGradient id="paint4_radial_1720_2659" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.808 5.60075) rotate(-180) scale(0.466005 0.471486)">
<stop stop-color="#020202" stop-opacity="0"/>
<stop offset="0.99" stop-color="#020202" stop-opacity="0.2"/>
</radialGradient>
<radialGradient id="paint5_radial_1720_2659" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.49102 4.79562) rotate(-180) scale(0.482948 0.488631)">
<stop stop-color="#020202" stop-opacity="0"/>
<stop offset="0.99" stop-color="#020202" stop-opacity="0.2"/>
</radialGradient>
<linearGradient id="paint6_linear_1720_2659" x1="11.5008" y1="37.2236" x2="11.5008" y2="10.3813" gradientUnits="userSpaceOnUse">
<stop stop-color="#515151"/>
<stop offset="0.53" stop-color="#272727"/>
<stop offset="0.81" stop-color="#202020"/>
<stop offset="0.99" stop-color="#1A1A1A"/>
</linearGradient>
</defs>
        </svg>
  `);
    return `data:image/svg+xml,${svgString}`;
};
export const carColoredIcon = (size, color, angle) => {
    const svgString = encodeURIComponent(`
 <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 23 48"
            width="${size}" height="${size}">
            <g transform="rotate(${angle}, 11.5, 24)" filter="url(#shadowFilter)">
<path d="M21.03 9.86436C20.6664 9.86436 20.3567 10.1032 20.2448 10.4335C20.1909 10.4259 20.1363 10.42 20.0807 10.42H3.08062C2.96289 10.42 2.84922 10.4382 2.74252 10.4716C2.64277 10.1214 2.32323 9.86377 1.94511 9.86377C1.48755 9.86377 1.11523 10.2411 1.11523 10.704V16.189C1.11523 16.6519 1.48813 17.0286 1.94511 17.0286C2.3673 17.0286 2.71642 16.7071 2.76803 16.2934C2.8672 16.3222 2.97217 16.3386 3.08062 16.3386H20.0807C20.1253 16.3386 20.1694 16.3351 20.2129 16.3304C20.2796 16.7259 20.6206 17.0286 21.03 17.0286C21.4876 17.0286 21.8605 16.6513 21.8605 16.189V10.704C21.8605 10.2411 21.4876 9.86377 21.03 9.86377V9.86436Z" fill="url(#paint0_radial_1724_2675)"/>
<path d="M21.0294 31.6511C20.6188 31.6511 20.2778 31.9551 20.2117 32.3517C20.1114 32.3224 20.0059 32.3059 19.8968 32.3059H2.89678C2.84922 32.3059 2.80283 32.31 2.75643 32.3153C2.6764 31.9363 2.34294 31.6511 1.94511 31.6511C1.48755 31.6511 1.11523 32.0284 1.11523 32.4908V37.9845C1.11523 38.4475 1.48813 38.8242 1.94511 38.8242C2.32439 38.8242 2.64451 38.5648 2.7431 38.2128C2.79355 38.2198 2.84458 38.2245 2.89678 38.2245H19.8968C20.0099 38.2245 20.1189 38.2075 20.2222 38.1758C20.3086 38.5467 20.6374 38.8242 21.0294 38.8242C21.487 38.8242 21.8599 38.4469 21.8599 37.9845V32.4908C21.8599 32.0278 21.487 31.6511 21.0294 31.6511Z" fill="#1A1A1A"/>
<path d="M6.60449 1.00262C6.91765 0.762634 7.32476 0.574286 7.77363 0.471017L7.92615 0.436985C10.4338 -0.145662 13.1188 -0.145662 15.6265 0.436985L15.779 0.471017C16.0266 0.545535 16.5033 0.700438 16.8252 0.94042L13.1954 0.642936C12.2211 0.548468 11.2387 0.548468 10.2644 0.642936L6.61319 1.00262H6.60449Z" fill="#232B34"/>
<path d="M15.5344 0.729796L15.6347 0.850667L6.79893 0.942788C6.77573 0.943961 4.81615 1.06718 3.20801 4.68804L20.7515 5.45082C18.6921 0.325523 15.5344 0.729796 15.5344 0.729796Z" fill="#D42F2E"/>
<path d="M20.8181 12.1527C20.8181 12.1527 22.08 6.78744 20.0897 4.30195C20.0897 4.30195 17.5061 1.14815 16.5742 0.813696C16.5742 0.813696 10.602 -0.206082 6.6968 0.950997C6.6968 0.950997 4.44377 2.63087 3.38482 4.3706C3.38482 4.3706 1.32665 6.85609 2.25802 12.29V16.1814C2.25802 16.1814 -0.130132 17.3208 0.00557182 18.5982L2.12347 17.9985L1.98777 40.402C1.98777 40.402 1.85207 46.1017 5.5033 47.2412C5.5033 47.2412 11.8054 48.8524 17.371 47.3785C17.371 47.3785 21.1492 46.1017 21.0222 40.6678L20.7595 17.7926L22.9453 18.7355C22.9453 18.7355 23.5385 17.1243 20.8274 16.1215V12.1621L20.8187 12.1533L20.8181 12.1527Z" fill="${color}"/>
<path d="M20.8181 12.1527C20.8181 12.1527 22.08 6.78744 20.0897 4.30195C20.0897 4.30195 17.5061 1.14815 16.5742 0.813696C16.5742 0.813696 10.602 -0.206082 6.6968 0.950997C6.6968 0.950997 4.44377 2.63087 3.38482 4.3706C3.38482 4.3706 1.32665 6.85609 2.25802 12.29V16.1814C2.25802 16.1814 -0.130132 17.3208 0.00557182 18.5982L2.12347 17.9985L1.98777 40.402C1.98777 40.402 1.85207 46.1017 5.5033 47.2412C5.5033 47.2412 11.8054 48.8524 17.371 47.3785C17.371 47.3785 21.1492 46.1017 21.0222 40.6678L20.7595 17.7926L22.9453 18.7355C22.9453 18.7355 23.5385 17.1243 20.8274 16.1215V12.1621L20.8187 12.1533L20.8181 12.1527Z" fill="url(#paint1_linear_1724_2675)"/>
<path d="M20.8181 12.1527C20.8181 12.1527 22.08 6.78744 20.0897 4.30195C20.0897 4.30195 17.5061 1.14815 16.5742 0.813696C16.5742 0.813696 10.602 -0.206082 6.6968 0.950997C6.6968 0.950997 4.44377 2.63087 3.38482 4.3706C3.38482 4.3706 1.32665 6.85609 2.25802 12.29V16.1814C2.25802 16.1814 -0.130132 17.3208 0.00557182 18.5982L2.12347 17.9985L1.98777 40.402C1.98777 40.402 1.85207 46.1017 5.5033 47.2412C5.5033 47.2412 11.8054 48.8524 17.371 47.3785C17.371 47.3785 21.1492 46.1017 21.0222 40.6678L20.7595 17.7926L22.9453 18.7355C22.9453 18.7355 23.5385 17.1243 20.8274 16.1215V12.1621L20.8181 12.1527Z" fill="url(#paint2_radial_1724_2675)"/>
<path d="M16.8289 44.2071C11.9343 45.2228 6.4064 44.1473 6.21793 44.1103C6.21445 44.1097 6.21097 44.1091 6.20749 44.108C4.54077 43.6972 3.75671 42.4521 3.38903 41.3326C3.34032 41.1848 3.06717 41.2123 3.06601 41.3649C3.06601 41.3649 2.9448 45.3654 6.20749 46.1692C6.21097 46.1698 6.21387 46.171 6.21735 46.1716C6.4035 46.2085 11.9331 47.2841 16.8283 46.2684C16.833 46.2672 16.837 46.2666 16.8417 46.2649C17.0081 46.2179 20.2134 45.2703 20.1026 41.5515V41.5497C20.1003 41.4013 19.8364 41.3702 19.7813 41.5116C18.9845 43.567 16.9826 44.1637 16.8422 44.2036C16.8376 44.2048 16.833 44.206 16.8277 44.2071H16.8289Z" fill="url(#paint3_linear_1724_2675)"/>
<path d="M16.8206 6.08514C16.7869 5.82814 16.7695 5.67383 16.7695 5.67383C16.795 5.81113 16.8119 5.94784 16.8206 6.08514Z" fill="url(#paint4_radial_1724_2675)"/>
<path d="M6.42578 5.29649C6.47682 5.03069 6.52727 4.86816 6.52727 4.86816C6.49363 5.01368 6.45942 5.15978 6.42578 5.29649Z" fill="url(#paint5_radial_1724_2675)"/>
<path d="M20.5807 26.2442L20.503 15.239C20.503 15.2326 20.503 15.2261 20.5036 15.2196C20.786 11.9643 18.428 11.3565 18.1317 11.2931C18.1108 11.2884 18.0911 11.2814 18.0726 11.2714C15.888 10.0791 8.8366 10.143 5.69918 11.1159C2.54784 12.0846 2.50667 14.4557 2.50667 14.4557L2.41504 26.0118L2.50783 36.7653C2.50957 36.9606 2.74154 37.0598 2.8813 36.9243L4.03304 35.8071C4.07654 35.7648 4.10089 35.7067 4.10089 35.6457V27.136V22.0031C4.10089 21.921 4.14497 21.8459 4.2163 21.8071C5.40805 21.157 7.25977 20.0434 12.1787 19.9008C15.6131 19.96 18.0992 21.4662 18.8102 21.8764C18.8792 21.9163 18.9216 21.9902 18.9216 22.07V35.9238C18.9216 35.9855 18.9465 36.0441 18.9906 36.0858L20.1151 37.1619C20.2548 37.2957 20.4856 37.1965 20.4874 37.0017L20.5854 26.2389L20.5802 26.2442H20.5807Z" fill="url(#paint6_linear_1724_2675)"/>
</g>
<defs>
<filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur in="SourceAlpha" stdDeviation="3" result="blur"/>
                    <feOffset dx="0" dy="0" result="offsetBlur"/>
                    <feFlood flood-color="${color}" flood-opacity="0.5"/>
                     <feComposite in2="offsetBlur" operator="in"/>
                    <feComposite in="SourceGraphic"/>
                    <feComponentTransfer result="opacityAdjusted">
                        <feFuncA type="linear" slope="0.3"/>
                    </feComponentTransfer>
                    <feMerge>
                        <feMergeNode in="opacityAdjusted"/>
                        <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                </filter>
<radialGradient id="paint0_radial_1724_2675" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(-3826.07 8.44324) scale(215.945 218.486)">
<stop stop-color="#828282"/>
<stop offset="0.08" stop-color="#6F7070"/>
<stop offset="0.23" stop-color="#515151"/>
<stop offset="0.4" stop-color="#383938"/>
<stop offset="0.57" stop-color="#272727"/>
<stop offset="0.76" stop-color="#1D1D1D"/>
<stop offset="0.99" stop-color="#1A1A1A"/>
</radialGradient>
<linearGradient id="paint1_linear_1724_2675" x1="3.76931" y1="24.1988" x2="20.2886" y2="24.1988" gradientUnits="userSpaceOnUse">
<stop stop-color="#DDDDDD" stop-opacity="0.1"/>
<stop offset="0.02" stop-color="#DCDCDC" stop-opacity="0.18"/>
<stop offset="0.06" stop-color="#DFDFDF" stop-opacity="0.28"/>
<stop offset="0.1" stop-color="#EAEAEA" stop-opacity="0.36"/>
<stop offset="0.14" stop-color="#ECECEC" stop-opacity="0.42"/>
<stop offset="0.2" stop-color="#EFEFEF" stop-opacity="0.47"/>
<stop offset="0.27" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.45" stop-color="#FAFAFA" stop-opacity="0.5"/>
<stop offset="0.58" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.68" stop-color="#EFEFEF" stop-opacity="0.45"/>
<stop offset="0.77" stop-color="#ECECEC" stop-opacity="0.4"/>
<stop offset="0.86" stop-color="#DFDFDF" stop-opacity="0.31"/>
<stop offset="0.93" stop-color="#DCDCDC" stop-opacity="0.21"/>
<stop offset="1" stop-color="#DDDDDD" stop-opacity="0.1"/>
</linearGradient>
<radialGradient id="paint2_radial_1724_2675" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.4998 24.2841) scale(18.5148 20.2313)">
<stop stop-color="${color}" stop-opacity="0"/>
<stop offset="0.23" stop-color="${color}" stop-opacity="0.02"/>
<stop offset="0.43" stop-color="${color}" stop-opacity="0.07"/>
<stop offset="0.61" stop-color="${color}" stop-opacity="0.15"/>
<stop offset="0.78" stop-color="${color}" stop-opacity="0.28"/>
<stop offset="0.94" stop-color="${color}" stop-opacity="0.43"/>
<stop offset="1" stop-color="${color}" stop-opacity="0.5"/>
</radialGradient>
<linearGradient id="paint3_linear_1724_2675" x1="11.5863" y1="46.7032" x2="11.5863" y2="41.2346" gradientUnits="userSpaceOnUse">
<stop stop-color="#515151"/>
<stop offset="0.53" stop-color="#272727"/>
<stop offset="0.81" stop-color="#202020"/>
<stop offset="0.99" stop-color="#1A1A1A"/>
</linearGradient>
<radialGradient id="paint4_radial_1724_2675" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.8085 5.60078) rotate(-180) scale(0.466005 0.471486)">
<stop stop-color="#020202" stop-opacity="0"/>
<stop offset="0.99" stop-color="#020202" stop-opacity="0.2"/>
</radialGradient>
<radialGradient id="paint5_radial_1724_2675" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(6.49102 4.79562) rotate(-180) scale(0.482948 0.488631)">
<stop stop-color="#020202" stop-opacity="0"/>
<stop offset="0.99" stop-color="#020202" stop-opacity="0.2"/>
</radialGradient>
<linearGradient id="paint6_linear_1724_2675" x1="11.5008" y1="37.2235" x2="11.5008" y2="10.3813" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
</defs>
</svg>

  `);
    return `data:image/svg+xml,${svgString}`;
};

export const truckColoredIcon = (size, color, angle) => {
    const svgString = encodeURIComponent(`
        <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 22 48"
            width="${size}" height="${size}">
            <g clip-path="url(#clip0_1734_2638)" transform="rotate(${angle}, 11, 24)" filter="url(#shadowFilter)">
<path d="M19.1183 6.00511C18.8092 6.00511 18.5452 6.21166 18.4504 6.49601C18.4043 6.48929 18.3583 6.48449 18.3104 6.48449H3.84883C3.74832 6.48449 3.65157 6.49986 3.56139 6.52964C3.4759 6.22703 3.20443 6.00511 2.88316 6.00511C2.49426 6.00511 2.17676 6.33078 2.17676 6.72946V11.4617C2.17676 11.8614 2.49426 12.1861 2.88316 12.1861C3.242 12.1861 3.53978 11.9084 3.58299 11.552C3.66753 11.577 3.75678 11.5905 3.84883 11.5905H18.3104C18.348 11.5905 18.3856 11.5876 18.4222 11.5828C18.4795 11.9238 18.7688 12.1851 19.1173 12.1851C19.5062 12.1851 19.8237 11.8594 19.8237 11.4608V6.7285C19.8237 6.32886 19.5062 6.00415 19.1173 6.00415L19.1183 6.00511Z" fill="#2C3422"/>
<path d="M18.2169 3.64577H3.78355C3.002 3.64577 2.52855 2.78213 2.94657 2.11926C3.63043 1.0337 4.8394 0.311279 6.21839 0.311279H6.27006V2.5362H15.7286V0.311279H15.7802C17.1592 0.311279 18.3691 1.0337 19.0539 2.12023C19.4719 2.78309 18.9985 3.64673 18.2169 3.64673V3.64577Z" fill="#D42F2E"/>
<path d="M21.7464 10.3445H20.8342C20.8389 10.3243 20.8427 10.3032 20.8427 10.2811C20.8427 10.1379 20.7262 10.0217 20.5834 10.0217H19.0203V10.0198H2.94586V10.0217H1.41375C1.27096 10.0217 1.15448 10.1379 1.15448 10.2811C1.15448 10.3032 1.15824 10.3233 1.16294 10.3445H0.253629C0.114603 10.3445 0 10.4569 0 10.5981V10.7874C0 10.9267 0.112724 11.041 0.253629 11.041H2.05909C2.19812 11.041 2.31272 10.9286 2.31272 10.7874V10.5981C2.31272 10.5779 2.30991 10.5597 2.30521 10.5405H3.10461C3.11025 10.5405 3.11588 10.5395 3.12246 10.5385H18.8747C18.8804 10.5385 18.886 10.5405 18.8926 10.5405H19.692C19.6873 10.5587 19.6845 10.5779 19.6845 10.5981V10.7893C19.6845 10.9295 19.7981 11.0429 19.9381 11.0429H21.7454C21.8854 11.0429 21.9991 10.9295 21.9991 10.7893V10.5981C21.9991 10.4578 21.8854 10.3445 21.7454 10.3445H21.7464Z" fill="${color}"/>
<path d="M6.40154 0.722396H15.597C17.6505 0.722396 19.3169 2.39205 19.3169 4.44884V19.3047C19.3169 20.4431 18.3945 21.3653 17.2597 21.3653H4.73886C3.60222 21.3653 2.68164 20.4412 2.68164 19.3047V4.44788C2.68164 2.39108 4.34808 0.721436 6.40154 0.721436V0.722396Z" fill="${color}"/>
<path d="M6.40154 0.722396H15.597C17.6505 0.722396 19.3169 2.39205 19.3169 4.44884V19.3047C19.3169 20.4431 18.3945 21.3653 17.2597 21.3653H4.73886C3.60222 21.3653 2.68164 20.4412 2.68164 19.3047V4.44788C2.68164 2.39108 4.34808 0.721436 6.40154 0.721436V0.722396Z" fill="url(#paint0_linear_1734_2638)"/>
<path d="M6.40154 0.722396H15.597C17.6505 0.722396 19.3169 2.39205 19.3169 4.44884V19.3047C19.3169 20.4431 18.3945 21.3653 17.2597 21.3653H4.73886C3.60222 21.3653 2.68164 20.4412 2.68164 19.3047V4.44788C2.68164 2.39108 4.34808 0.721436 6.40154 0.721436V0.722396Z" fill="url(#paint1_radial_1734_2638)"/>
<path d="M6.95931 7.27905H15.0398C16.8875 7.27905 18.3858 8.78251 18.3858 10.6308V13.4629H3.61328V10.6308C3.61328 8.77962 5.11345 7.27905 6.95931 7.27905Z" fill="#212121"/>
<path d="M6.48275 10.797H15.5185C17.107 10.797 18.3958 12.0881 18.3958 13.679V18.1577C18.3958 19.2961 17.4734 20.2183 16.3386 20.2183H5.66268C4.52605 20.2183 3.60547 19.2941 3.60547 18.1577V13.679C3.60547 12.0881 4.89428 10.797 6.48275 10.797Z" fill="${color}"/>
<path d="M6.48275 10.797H15.5185C17.107 10.797 18.3958 12.0881 18.3958 13.679V18.1577C18.3958 19.2961 17.4734 20.2183 16.3386 20.2183H5.66268C4.52605 20.2183 3.60547 19.2941 3.60547 18.1577V13.679C3.60547 12.0881 4.89428 10.797 6.48275 10.797Z" fill="url(#paint2_linear_1734_2638)"/>
<path d="M6.48275 10.797H15.5185C17.107 10.797 18.3958 12.0881 18.3958 13.679V18.1577C18.3958 19.2961 17.4734 20.2183 16.3386 20.2183H5.66268C4.52605 20.2183 3.60547 19.2941 3.60547 18.1577V13.679C3.60547 12.0881 4.89428 10.797 6.48275 10.797Z" fill="url(#paint3_radial_1734_2638)"/>
<path d="M6.67711 0H15.324C15.6039 0 15.8331 0.229601 15.8331 0.510117V0.722426H6.16797V0.510117C6.16797 0.229601 6.39717 0 6.67711 0Z" fill="#232B34"/>
<path d="M17.3189 14.8232H4.68158C3.06023 14.8232 1.74512 16.1403 1.74512 17.7648V45.0585C1.74512 46.683 3.05929 48.0001 4.68158 48.0001H17.3189C18.9402 48.0001 20.2554 46.683 20.2554 45.0585V17.7648C20.2554 16.1403 18.9412 14.8232 17.3189 14.8232Z" fill="${color}"/>
<path d="M17.3189 14.8232H4.68158C3.06023 14.8232 1.74512 16.1403 1.74512 17.7648V45.0585C1.74512 46.683 3.05929 48.0001 4.68158 48.0001H17.3189C18.9402 48.0001 20.2554 46.683 20.2554 45.0585V17.7648C20.2554 16.1403 18.9412 14.8232 17.3189 14.8232Z" fill="url(#paint4_linear_1734_2638)"/>
<path d="M17.3189 14.8231H4.68158C3.06023 14.8231 1.74512 16.1402 1.74512 17.7647V45.0584C1.74512 46.6829 3.05929 47.9999 4.68158 47.9999H17.3189C18.9402 47.9999 20.2554 46.6829 20.2554 45.0584V17.7647C20.2554 16.1402 18.9412 14.8231 17.3189 14.8231Z" fill="url(#paint5_radial_1734_2638)"/>
<path d="M17.3189 14.8232H4.68158C3.06023 14.8232 1.74512 16.1403 1.74512 17.7648V45.0585C1.74512 46.683 3.05929 48.0001 4.68158 48.0001H17.3189C18.9402 48.0001 20.2554 46.683 20.2554 45.0585V17.7648C20.2554 16.1403 18.9412 14.8232 17.3189 14.8232Z" fill="url(#paint6_radial_1734_2638)"/>
</g>
<defs>
<linearGradient id="paint0_linear_1734_2638" x1="5.40785" y1="11.0432" x2="17.3557" y2="11.0432" gradientUnits="userSpaceOnUse">
<stop stop-color="#DDDDDD" stop-opacity="0.1"/>
<stop offset="0.02" stop-color="#DCDCDC" stop-opacity="0.18"/>
<stop offset="0.06" stop-color="#DFDFDF" stop-opacity="0.28"/>
<stop offset="0.1" stop-color="#EAEAEA" stop-opacity="0.36"/>
<stop offset="0.14" stop-color="#ECECEC" stop-opacity="0.42"/>
<stop offset="0.2" stop-color="#EFEFEF" stop-opacity="0.47"/>
<stop offset="0.27" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.45" stop-color="#FAFAFA" stop-opacity="0.5"/>
<stop offset="0.58" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.68" stop-color="#EFEFEF" stop-opacity="0.45"/>
<stop offset="0.77" stop-color="#ECECEC" stop-opacity="0.4"/>
<stop offset="0.86" stop-color="#DFDFDF" stop-opacity="0.31"/>
<stop offset="0.93" stop-color="#DCDCDC" stop-opacity="0.21"/>
<stop offset="1" stop-color="#DDDDDD" stop-opacity="0.1"/>
</linearGradient>
<radialGradient id="paint1_radial_1734_2638" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(10.999 11.0802) scale(13.3911 8.774)">
<stop stop-color="${color}" stop-opacity="0"/>
<stop offset="0.23" stop-color="${color}" stop-opacity="0.02"/>
<stop offset="0.43" stop-color="${color}" stop-opacity="0.07"/>
<stop offset="0.61" stop-color="${color}" stop-opacity="0.15"/>
<stop offset="0.78" stop-color="${color}" stop-opacity="0.28"/>
<stop offset="0.94" stop-color="${color}" stop-opacity="0.43"/>
<stop offset="1" stop-color="${color}" stop-opacity="0.5"/>
</radialGradient>
<linearGradient id="paint2_linear_1734_2638" x1="6.02933" y1="15.5076" x2="16.6521" y2="15.5076" gradientUnits="userSpaceOnUse">
<stop stop-color="#DDDDDD" stop-opacity="0.1"/>
<stop offset="0.02" stop-color="#DCDCDC" stop-opacity="0.18"/>
<stop offset="0.06" stop-color="#DFDFDF" stop-opacity="0.28"/>
<stop offset="0.1" stop-color="#EAEAEA" stop-opacity="0.36"/>
<stop offset="0.14" stop-color="#ECECEC" stop-opacity="0.42"/>
<stop offset="0.2" stop-color="#EFEFEF" stop-opacity="0.47"/>
<stop offset="0.27" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.45" stop-color="#FAFAFA" stop-opacity="0.5"/>
<stop offset="0.58" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.68" stop-color="#EFEFEF" stop-opacity="0.45"/>
<stop offset="0.77" stop-color="#ECECEC" stop-opacity="0.4"/>
<stop offset="0.86" stop-color="#DFDFDF" stop-opacity="0.31"/>
<stop offset="0.93" stop-color="#DCDCDC" stop-opacity="0.21"/>
<stop offset="1" stop-color="#DDDDDD" stop-opacity="0.1"/>
</linearGradient>
<radialGradient id="paint3_radial_1734_2638" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.0004 15.5245) scale(11.906 4.00422)">
<stop stop-color="${color}" stop-opacity="0"/>
<stop offset="0.23" stop-color="${color}" stop-opacity="0.02"/>
<stop offset="0.43" stop-color="${color}" stop-opacity="0.07"/>
<stop offset="0.61" stop-color="${color}" stop-opacity="0.15"/>
<stop offset="0.78" stop-color="${color}" stop-opacity="0.28"/>
<stop offset="0.94" stop-color="${color}" stop-opacity="0.43"/>
<stop offset="1" stop-color="${color}" stop-opacity="0.5"/>
</radialGradient>
<linearGradient id="paint4_linear_1734_2638" x1="4.7786" y1="31.4114" x2="18.0731" y2="31.4114" gradientUnits="userSpaceOnUse">
<stop stop-color="#DDDDDD" stop-opacity="0.1"/>
<stop offset="0.02" stop-color="#DCDCDC" stop-opacity="0.18"/>
<stop offset="0.06" stop-color="#DFDFDF" stop-opacity="0.28"/>
<stop offset="0.1" stop-color="#EAEAEA" stop-opacity="0.36"/>
<stop offset="0.14" stop-color="#ECECEC" stop-opacity="0.42"/>
<stop offset="0.2" stop-color="#EFEFEF" stop-opacity="0.47"/>
<stop offset="0.27" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.45" stop-color="#FAFAFA" stop-opacity="0.5"/>
<stop offset="0.58" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.68" stop-color="#EFEFEF" stop-opacity="0.45"/>
<stop offset="0.77" stop-color="#ECECEC" stop-opacity="0.4"/>
<stop offset="0.86" stop-color="#DFDFDF" stop-opacity="0.31"/>
<stop offset="0.93" stop-color="#DCDCDC" stop-opacity="0.21"/>
<stop offset="1" stop-color="#DDDDDD" stop-opacity="0.1"/>
</linearGradient>
<radialGradient id="paint5_radial_1734_2638" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31.4707) scale(14.9005 14.1007)">
<stop stop-color="${color}" stop-opacity="0"/>
<stop offset="0.23" stop-color="${color}" stop-opacity="0.02"/>
<stop offset="0.43" stop-color="${color}" stop-opacity="0.07"/>
<stop offset="0.61" stop-color="${color}" stop-opacity="0.15"/>
<stop offset="0.78" stop-color="${color}" stop-opacity="0.28"/>
<stop offset="0.94" stop-color="${color}" stop-opacity="0.43"/>
<stop offset="1" stop-color="${color}" stop-opacity="0.5"/>
</radialGradient>
<radialGradient id="paint6_radial_1734_2638" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11 31.4709) scale(14.9005 14.1007)">
<stop stop-color="${color}" stop-opacity="0"/>
<stop offset="0.23" stop-color="${color}" stop-opacity="0.02"/>
<stop offset="0.43" stop-color="${color}" stop-opacity="0.07"/>
<stop offset="0.61" stop-color="${color}" stop-opacity="0.15"/>
<stop offset="0.78" stop-color="${color}" stop-opacity="0.28"/>
<stop offset="0.94" stop-color="${color}" stop-opacity="0.43"/>
<stop offset="1" stop-color="${color}" stop-opacity="0.5"/>
</radialGradient>
<clipPath id="clip0_1734_2638">
<rect width="22" height="48" fill="white"/>
</clipPath>
</defs>
</svg>
  `);
    return `data:image/svg+xml,${svgString}`;
};

export const trailerColoredIcon = (size, color, angle) => {
    const svgString = encodeURIComponent(`
<svg width="${size}" height="${size}" viewBox="0 0 16 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="2"/>
        <feFlood flood-color="${color}" flood-opacity="0.5"/>
        <feComposite operator="in" in2="SourceAlpha"/>
        <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>
<radialGradient id="paint0_radial_1745_2640" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.99573 5.68577) scale(8.58565 3.80719)">
<stop stop-color="${color}" stop-opacity="0"/>
<stop offset="0.23" stop-color="${color}" stop-opacity="0.02"/>
<stop offset="0.43" stop-color="${color}" stop-opacity="0.07"/>
<stop offset="0.61" stop-color="${color}" stop-opacity="0.15"/>
<stop offset="0.78" stop-color="${color}" stop-opacity="0.28"/>
<stop offset="0.94" stop-color="${color}" stop-opacity="0.43"/>
<stop offset="1" stop-color="${color}" stop-opacity="0.5"/>
</radialGradient>
<radialGradient id="paint1_radial_1745_2640" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(7.99985 5.51963) scale(8.04984 4.67519)">
<stop stop-color="${color}" stop-opacity="0"/>
<stop offset="0.23" stop-color="${color}" stop-opacity="0.02"/>
<stop offset="0.43" stop-color="${color}" stop-opacity="0.07"/>
<stop offset="0.61" stop-color="${color}" stop-opacity="0.15"/>
<stop offset="0.78" stop-color="${color}" stop-opacity="0.28"/>
<stop offset="0.94" stop-color="${color}" stop-opacity="0.43"/>
<stop offset="1" stop-color="${color}" stop-opacity="0.5"/>
</radialGradient>
<linearGradient id="paint2_linear_1745_2640" x1="4.63882" y1="5.99992" x2="11.821" y2="5.99992" gradientUnits="userSpaceOnUse">
<stop stop-color="#DDDDDD" stop-opacity="0.1"/>
<stop offset="0.02" stop-color="#DCDCDC" stop-opacity="0.18"/>
<stop offset="0.06" stop-color="#DFDFDF" stop-opacity="0.28"/>
<stop offset="0.1" stop-color="#EAEAEA" stop-opacity="0.36"/>
<stop offset="0.14" stop-color="#ECECEC" stop-opacity="0.42"/>
<stop offset="0.2" stop-color="#EFEFEF" stop-opacity="0.47"/>
<stop offset="0.27" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.45" stop-color="#FAFAFA" stop-opacity="0.5"/>
<stop offset="0.58" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.68" stop-color="#EFEFEF" stop-opacity="0.45"/>
<stop offset="0.77" stop-color="#ECECEC" stop-opacity="0.4"/>
<stop offset="0.86" stop-color="#DFDFDF" stop-opacity="0.31"/>
<stop offset="0.93" stop-color="#DCDCDC" stop-opacity="0.21"/>
<stop offset="1" stop-color="#DDDDDD" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint3_linear_1745_2640" x1="14.1471" y1="7.27254" x2="14.1471" y2="3.09569" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint4_linear_1745_2640" x1="1.83478" y1="7.27254" x2="1.83478" y2="3.09569" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint5_linear_1745_2640" x1="7.9985" y1="0.789083" x2="7.9985" y2="0.294798" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<radialGradient id="paint6_radial_1745_2640" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(8.08781 30.3501) scale(10.2779 15.0567)">
<stop stop-color="${color}" stop-opacity="0"/>
<stop offset="0.23" stop-color="${color}" stop-opacity="0.02"/>
<stop offset="0.43" stop-color="${color}" stop-opacity="0.07"/>
<stop offset="0.61" stop-color="${color}" stop-opacity="0.15"/>
<stop offset="0.78" stop-color="${color}" stop-opacity="0.28"/>
<stop offset="0.94" stop-color="${color}" stop-opacity="0.43"/>
<stop offset="1" stop-color="${color}" stop-opacity="0.5"/>
</radialGradient>
<linearGradient id="paint7_linear_1745_2640" x1="3.79651" y1="30.2866" x2="12.9666" y2="30.2866" gradientUnits="userSpaceOnUse">
<stop stop-color="#DDDDDD" stop-opacity="0.1"/>
<stop offset="0.02" stop-color="#DCDCDC" stop-opacity="0.18"/>
<stop offset="0.06" stop-color="#DFDFDF" stop-opacity="0.28"/>
<stop offset="0.1" stop-color="#EAEAEA" stop-opacity="0.36"/>
<stop offset="0.14" stop-color="#ECECEC" stop-opacity="0.42"/>
<stop offset="0.2" stop-color="#EFEFEF" stop-opacity="0.47"/>
<stop offset="0.27" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.45" stop-color="#FAFAFA" stop-opacity="0.5"/>
<stop offset="0.58" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.68" stop-color="#EFEFEF" stop-opacity="0.45"/>
<stop offset="0.77" stop-color="#ECECEC" stop-opacity="0.4"/>
<stop offset="0.86" stop-color="#DFDFDF" stop-opacity="0.31"/>
<stop offset="0.93" stop-color="#DCDCDC" stop-opacity="0.21"/>
<stop offset="1" stop-color="#DDDDDD" stop-opacity="0.1"/>
</linearGradient>
<clipPath id="clip0_1745_2640">
<rect width="16" height="48" fill="white"/>
</clipPath>
</defs>
<g transform="rotate(${angle}, 8, 24)" filter="url(#shadowFilter)" clip-path="url(#clip0_1741_2614)">
 <path d="M15.0499 14.1694H14.6743V14.1636H1.38884L0.950095 14.1665C0.792273 14.1665 0.666016 14.2821 0.666016 14.4266V17.5368C0.666016 17.6813 0.792273 17.797 0.950095 17.797H2.62301V17.7883H13.377V17.7999H15.0499C15.2077 17.7999 15.334 17.6842 15.334 17.5397V14.4295C15.334 14.285 15.2077 14.1694 15.0499 14.1694Z" fill="#1C1C1C"/>
        <path d="M15.0499 18.6525H14.6743V18.6467H1.38884L0.950095 18.6496C0.792273 18.6496 0.666016 18.7652 0.666016 18.9098V22.02C0.666016 22.1645 0.792273 22.2801 0.950095 22.2801H2.62301V22.2714H13.377V22.283H15.0499C15.2077 22.283 15.334 22.1674 15.334 22.0229V18.9127C15.334 18.7681 15.2077 18.6525 15.0499 18.6525Z" fill="#1C1C1C"/>
        <path d="M15.0499 34.2266H14.6743V34.2208H1.38884L0.950095 34.2237C0.792273 34.2237 0.666016 34.3393 0.666016 34.4839V37.5941C0.666016 37.7386 0.792273 37.8542 0.950095 37.8542H2.62301V37.8455H13.377V37.8571H15.0499C15.2077 37.8571 15.334 37.7415 15.334 37.597V34.4868C15.334 34.3422 15.2077 34.2266 15.0499 34.2266Z" fill="#1C1C1C"/>
        <path d="M15.0499 38.4555H14.6743V38.4497H1.38884L0.950095 38.4526C0.792273 38.4526 0.666016 38.5682 0.666016 38.7127V41.8229C0.666016 41.9675 0.792273 42.0831 0.950095 42.0831H2.62301V42.0744H13.377V42.086H15.0499C15.2077 42.086 15.334 41.9704 15.334 41.8258V38.7156C15.334 38.5711 15.2077 38.4555 15.0499 38.4555Z" fill="#1C1C1C"/>
        <path d="M14.4753 6.37065H13.5631V6.36487H2.43975V6.37065H1.52438C1.37287 6.37065 1.25293 6.48338 1.25293 6.61923V9.75256C1.25293 9.8913 1.37603 10.0011 1.52438 10.0011H14.4784C14.6299 10.0011 14.7499 9.88841 14.7499 9.75256V6.61923C14.7499 6.48049 14.6268 6.37065 14.4784 6.37065H14.4753Z" fill="#1C1C1C"/>
        <path d="M15.839 2.02333H15.2551C15.2551 2.02333 15.2645 2.00021 15.2645 1.98576C15.2645 1.90193 15.192 1.83545 15.1004 1.83545H14.0241H1.98224H0.902742C0.811205 1.83545 0.738607 1.90193 0.738607 1.98576C0.738607 1.99732 0.741764 2.00888 0.748076 2.02333H0.160978C0.0725981 2.02333 0 2.08982 0 2.17075V2.28059C0 2.36152 0.0725981 2.42801 0.160978 2.42801H1.31308C1.40146 2.42801 1.47406 2.36152 1.47406 2.28059V2.17075C1.47406 2.17075 1.4709 2.14763 1.46775 2.13606H1.98224H14.0209H14.5354C14.5354 2.13606 14.5291 2.15919 14.5291 2.17075V2.28059C14.5291 2.36152 14.6017 2.42801 14.6901 2.42801H15.8422C15.9306 2.42801 16.0032 2.36152 16.0032 2.28059V2.17075C16.0032 2.08982 15.9306 2.02333 15.8422 2.02333H15.839Z" fill="${color}"/>
        <path d="M12.5906 2.06097H3.26016C2.75513 2.06097 2.44895 1.55224 2.72041 1.15913C3.16231 0.517436 3.94195 0.0925293 4.83522 0.0925293H4.86994V1.40772H10.984V0.0925293H11.0187C11.9088 0.0925293 12.6916 0.520326 13.1335 1.16202C13.405 1.55224 13.0988 2.06386 12.5938 2.06386L12.5906 2.06097Z" fill="#D42F2E"/>
        <path d="M1.59984 10.348V2.71417C1.59984 1.70248 2.27847 0.835327 3.23803 0.474012C3.54736 0.358391 3.8851 0.2948 4.23862 0.2948H11.7573C12.1108 0.2948 12.4485 0.358391 12.7579 0.474012C13.7206 0.835327 14.3992 1.70248 14.3992 2.71417V10.3509C14.3992 10.7325 14.0615 11.0446 13.6417 11.0446H2.35423C1.93758 11.0446 1.59668 10.7354 1.59668 10.3509L1.59984 10.348Z" fill="${color}"/>
        <path d="M12.7037 10.1458H3.29437C2.94717 10.1458 2.66309 9.88561 2.66309 9.56765V3.20561C2.66309 2.09276 3.65105 1.19092 4.86313 1.19092H11.1287C12.3439 1.19092 13.3287 2.09565 13.3287 3.20561V9.57054C13.3287 9.8885 13.0446 10.1486 12.6974 10.1486L12.7037 10.1458Z" fill="url(#paint0_radial_1745_2640)"/>
        <path d="M12.414 10.9965H3.59189C3.26635 10.9965 3 10.677 3 10.2865V2.47402C3 1.10745 3.92631 0 5.06274 0H10.9373C12.0766 0 13 1.111 13 2.47402V10.2901C13 10.6805 12.7336 11 12.4081 11L12.414 10.9965Z" fill="url(#paint1_radial_1745_2640)"/>
        <path d="M12.414 10.9968H3.59189C3.26635 10.9968 3 10.7064 3 10.3514V3.24911C3 2.00678 3.92631 1 5.06274 1H10.9373C12.0766 1 13 2.01 13 3.24911V10.3546C13 10.7096 12.7336 11 12.4081 11L12.414 10.9968Z" fill="url(#paint2_linear_1745_2640)"/>
        <path d="M3.55371 12.6084H12.4454V11.0417H3.55371V12.6084Z" fill="#1C1C1C"/>
        <path d="M13.8945 6.87072V3.49749C13.8945 3.27492 14.0902 3.0957 14.3333 3.0957H14.3996V7.27251H14.3333C14.0902 7.27251 13.8945 7.09329 13.8945 6.87072Z" fill="url(#paint3_linear_1745_2640)"/>
        <path d="M1.59961 7.27251V3.0957H1.63117C1.87422 3.0957 2.06992 3.27492 2.06992 3.49749V6.87072C2.06992 7.09329 1.87422 7.27251 1.63117 7.27251H1.59961Z" fill="url(#paint4_linear_1745_2640)"/>
        <path d="M4.99286 0H10.7976C10.9743 0 11.1195 0.132964 11.1195 0.294833C11.1195 0.456702 10.9743 0.589666 10.7976 0.589666H4.99286C4.81609 0.589666 4.6709 0.456702 4.6709 0.294833C4.6709 0.132964 4.81609 0 4.99286 0Z" fill="#3D4850"/>
        <path d="M3.23828 0.474012C3.54761 0.358391 3.88535 0.2948 4.23887 0.2948H11.7575C12.111 0.2948 12.4488 0.358391 12.7581 0.474012C11.3756 0.673458 9.74371 0.789079 7.99819 0.789079C6.25268 0.789079 4.6208 0.673458 3.23828 0.474012Z" fill="url(#paint5_linear_1745_2640)"/>
        <path d="M2.94143 12.5737H13.2314C13.9164 12.5737 14.4719 13.0825 14.4719 13.7097V46.3726C14.4719 47.2715 13.6765 48 12.6948 48H3.48118C2.49952 48 1.7041 47.2715 1.7041 46.3726V13.7097C1.7041 13.0825 2.25964 12.5737 2.94458 12.5737H2.94143Z" fill="${color}"/>
        <path d="M2.94143 12.5737H13.2314C13.9164 12.5737 14.4719 13.0825 14.4719 13.7097V46.3726C14.4719 47.2715 13.6765 48 12.6948 48H3.48118C2.49952 48 1.7041 47.2715 1.7041 46.3726V13.7097C1.7041 13.0825 2.25964 12.5737 2.94458 12.5737H2.94143Z" fill="url(#paint6_radial_1745_2640)"/>
        <path d="M2.94143 12.5737H13.2314C13.9164 12.5737 14.4719 13.0825 14.4719 13.7097V46.3726C14.4719 47.2715 13.6765 48 12.6948 48H3.48118C2.49952 48 1.7041 47.2715 1.7041 46.3726V13.7097C1.7041 13.0825 2.25964 12.5737 2.94458 12.5737H2.94143Z" fill="url(#paint7_linear_1745_2640)"/>   
        </g>
</svg>
  `);
    return `data:image/svg+xml,${svgString}`;
};

export const pickupColoredIcon = (size, color, angle) => {
    const svgString = encodeURIComponent(`
<svg width="${size}" height="${size}" viewBox="0 0 24 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter id="shadowFilter" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur in="SourceAlpha" stdDeviation="3"/>
        <feOffset dx="2" dy="2"/>
        <feFlood flood-color="${color}" flood-opacity="0.5"/>
        <feComposite operator="in" in2="SourceAlpha"/>
        <feMerge>
            <feMergeNode/>
            <feMergeNode in="SourceGraphic"/>
        </feMerge>
    </filter>
<radialGradient id="paint0_radial_1737_2689" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.1043 24.4859) scale(14.952 20.0574)">
<stop stop-color="${color}" stop-opacity="0"/>
<stop offset="0.23" stop-color="${color}" stop-opacity="0.02"/>
<stop offset="0.43" stop-color="${color}" stop-opacity="0.07"/>
<stop offset="0.61" stop-color="${color}" stop-opacity="0.15"/>
<stop offset="0.78" stop-color="${color}" stop-opacity="0.28"/>
<stop offset="0.94" stop-color="${color}" stop-opacity="0.43"/>
<stop offset="1" stop-color="${color}" stop-opacity="0.5"/>
</radialGradient>
<linearGradient id="paint1_linear_1737_2689" x1="5.86137" y1="24.4012" x2="19.2019" y2="24.4012" gradientUnits="userSpaceOnUse">
<stop stop-color="#DDDDDD" stop-opacity="0.1"/>
<stop offset="0.02" stop-color="#DCDCDC" stop-opacity="0.18"/>
<stop offset="0.06" stop-color="#DFDFDF" stop-opacity="0.28"/>
<stop offset="0.1" stop-color="#EAEAEA" stop-opacity="0.36"/>
<stop offset="0.14" stop-color="#ECECEC" stop-opacity="0.42"/>
<stop offset="0.2" stop-color="#EFEFEF" stop-opacity="0.47"/>
<stop offset="0.27" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.45" stop-color="#FAFAFA" stop-opacity="0.5"/>
<stop offset="0.58" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.68" stop-color="#EFEFEF" stop-opacity="0.45"/>
<stop offset="0.77" stop-color="#ECECEC" stop-opacity="0.4"/>
<stop offset="0.86" stop-color="#DFDFDF" stop-opacity="0.31"/>
<stop offset="0.93" stop-color="#DCDCDC" stop-opacity="0.21"/>
<stop offset="1" stop-color="#DDDDDD" stop-opacity="0.1"/>
</linearGradient>
<radialGradient id="paint2_radial_1737_2689" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.0943 24.3645) scale(11.576 4.35291)">
<stop stop-color="${color}" stop-opacity="0"/>
<stop offset="0.23" stop-color="${color}" stop-opacity="0.02"/>
<stop offset="0.43" stop-color="${color}" stop-opacity="0.07"/>
<stop offset="0.61" stop-color="${color}" stop-opacity="0.15"/>
<stop offset="0.78" stop-color="${color}" stop-opacity="0.28"/>
<stop offset="0.94" stop-color="${color}" stop-opacity="0.43"/>
<stop offset="1" stop-color="${color}" stop-opacity="0.5"/>
</radialGradient>
<linearGradient id="paint3_linear_1737_2689" x1="7.26099" y1="24.3461" x2="17.5894" y2="24.3461" gradientUnits="userSpaceOnUse">
<stop stop-color="#DDDDDD" stop-opacity="0.1"/>
<stop offset="0.02" stop-color="#DCDCDC" stop-opacity="0.18"/>
<stop offset="0.06" stop-color="#DFDFDF" stop-opacity="0.28"/>
<stop offset="0.1" stop-color="#EAEAEA" stop-opacity="0.36"/>
<stop offset="0.14" stop-color="#ECECEC" stop-opacity="0.42"/>
<stop offset="0.2" stop-color="#EFEFEF" stop-opacity="0.47"/>
<stop offset="0.27" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.45" stop-color="#FAFAFA" stop-opacity="0.5"/>
<stop offset="0.58" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.68" stop-color="#EFEFEF" stop-opacity="0.45"/>
<stop offset="0.77" stop-color="#ECECEC" stop-opacity="0.4"/>
<stop offset="0.86" stop-color="#DFDFDF" stop-opacity="0.31"/>
<stop offset="0.93" stop-color="#DCDCDC" stop-opacity="0.21"/>
<stop offset="1" stop-color="#DDDDDD" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint4_linear_1737_2689" x1="6.48662" y1="38.626" x2="18.6941" y2="38.626" gradientUnits="userSpaceOnUse">
<stop stop-color="#DDDDDD" stop-opacity="0.1"/>
<stop offset="0.02" stop-color="#DCDCDC" stop-opacity="0.18"/>
<stop offset="0.06" stop-color="#DFDFDF" stop-opacity="0.28"/>
<stop offset="0.1" stop-color="#EAEAEA" stop-opacity="0.36"/>
<stop offset="0.14" stop-color="#ECECEC" stop-opacity="0.42"/>
<stop offset="0.2" stop-color="#EFEFEF" stop-opacity="0.47"/>
<stop offset="0.27" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.45" stop-color="#FAFAFA" stop-opacity="0.5"/>
<stop offset="0.58" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.68" stop-color="#EFEFEF" stop-opacity="0.45"/>
<stop offset="0.77" stop-color="#ECECEC" stop-opacity="0.4"/>
<stop offset="0.86" stop-color="#DFDFDF" stop-opacity="0.31"/>
<stop offset="0.93" stop-color="#DCDCDC" stop-opacity="0.21"/>
<stop offset="1" stop-color="#DDDDDD" stop-opacity="0.1"/>
</linearGradient>
<radialGradient id="paint5_radial_1737_2689" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(12.1993 38.6553) scale(13.6821 6.94577)">
<stop stop-color="${color}" stop-opacity="0"/>
<stop offset="0.23" stop-color="${color}" stop-opacity="0.02"/>
<stop offset="0.43" stop-color="${color}" stop-opacity="0.07"/>
<stop offset="0.61" stop-color="${color}" stop-opacity="0.15"/>
<stop offset="0.78" stop-color="${color}" stop-opacity="0.28"/>
<stop offset="0.94" stop-color="${color}" stop-opacity="0.43"/>
<stop offset="1" stop-color="${color}" stop-opacity="0.5"/>
</radialGradient>
<linearGradient id="paint6_linear_1737_2689" x1="12.0042" y1="19.711" x2="12.0042" y2="13.8072" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint7_linear_1737_2689" x1="4.23106" y1="25.5812" x2="4.23106" y2="17.3344" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint8_linear_1737_2689" x1="19.8894" y1="25.4115" x2="19.8894" y2="17.1567" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint9_linear_1737_2689" x1="4.28524" y1="30.0377" x2="4.28524" y2="26.2183" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint10_linear_1737_2689" x1="19.9343" y1="29.8555" x2="19.9343" y2="26.0486" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint11_linear_1737_2689" x1="12.5004" y1="30" x2="12.5004" y2="29" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint12_linear_1737_2689" x1="4.39614" y1="39.2877" x2="5.75133" y2="39.2877" gradientUnits="userSpaceOnUse">
<stop stop-color="#DDDDDD" stop-opacity="0.1"/>
<stop offset="0.02" stop-color="#DCDCDC" stop-opacity="0.18"/>
<stop offset="0.06" stop-color="#DFDFDF" stop-opacity="0.28"/>
<stop offset="0.1" stop-color="#EAEAEA" stop-opacity="0.36"/>
<stop offset="0.14" stop-color="#ECECEC" stop-opacity="0.42"/>
<stop offset="0.2" stop-color="#EFEFEF" stop-opacity="0.47"/>
<stop offset="0.27" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.45" stop-color="#FAFAFA" stop-opacity="0.5"/>
<stop offset="0.58" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.68" stop-color="#EFEFEF" stop-opacity="0.45"/>
<stop offset="0.77" stop-color="#ECECEC" stop-opacity="0.4"/>
<stop offset="0.86" stop-color="#DFDFDF" stop-opacity="0.31"/>
<stop offset="0.93" stop-color="#DCDCDC" stop-opacity="0.21"/>
<stop offset="1" stop-color="#DDDDDD" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint13_linear_1737_2689" x1="18.7575" y1="39.1231" x2="20.1127" y2="39.1231" gradientUnits="userSpaceOnUse">
<stop stop-color="#DDDDDD" stop-opacity="0.1"/>
<stop offset="0.02" stop-color="#DCDCDC" stop-opacity="0.18"/>
<stop offset="0.06" stop-color="#DFDFDF" stop-opacity="0.28"/>
<stop offset="0.1" stop-color="#EAEAEA" stop-opacity="0.36"/>
<stop offset="0.14" stop-color="#ECECEC" stop-opacity="0.42"/>
<stop offset="0.2" stop-color="#EFEFEF" stop-opacity="0.47"/>
<stop offset="0.27" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.45" stop-color="#FAFAFA" stop-opacity="0.5"/>
<stop offset="0.58" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.68" stop-color="#EFEFEF" stop-opacity="0.45"/>
<stop offset="0.77" stop-color="#ECECEC" stop-opacity="0.4"/>
<stop offset="0.86" stop-color="#DFDFDF" stop-opacity="0.31"/>
<stop offset="0.93" stop-color="#DCDCDC" stop-opacity="0.21"/>
<stop offset="1" stop-color="#DDDDDD" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint14_linear_1737_2689" x1="12.053" y1="26.794" x2="12.053" y2="21.6472" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<clipPath id="clip0_1737_2689">
<rect width="24" height="48" fill="white"/>
</clipPath>
 
</defs>
 <g transform="rotate(${angle}, 14, 24)" filter="url(#shadowFilter)" clip-path="url(#clip0_1737_2689)">
<path d="M23.9187 17.6544C23.796 17.3779 23.5438 17.1466 23.2041 17.0033L21.4922 16.2769L21.3479 16.2191L21.1253 16.1274L21.0957 12.7277H21.2843V12.7252L21.5024 12.7227C21.6183 12.7227 21.7103 12.6171 21.7092 12.4889L21.6478 5.60285C21.6478 5.47465 21.5524 5.37285 21.4365 5.37411L20.8549 5.38039L20.7038 3.72266C20.697 3.62212 20.68 3.52283 20.6561 3.4248L20.6345 3.32928C20.5584 3.01382 20.4062 2.72602 20.2006 2.49728C20.1824 2.45329 20.1619 2.4093 20.137 2.36657C19.4451 1.15375 18.2239 0.348136 16.829 0.348136H16.7892C16.6779 0.140762 16.4734 0 16.2394 0H7.75583C7.52182 0 7.3162 0.140762 7.20374 0.348136H7.16284C5.77126 0.348136 4.5478 1.15375 3.85485 2.36657C3.84235 2.38919 3.83327 2.41181 3.82191 2.43444C3.75716 2.48471 3.69468 2.53875 3.6356 2.59908C3.51519 2.72099 3.41181 2.86301 3.33002 3.01634C3.32775 3.01885 3.32775 3.02137 3.32775 3.02137C3.24823 3.17344 3.18575 3.34059 3.14713 3.51403L3.12555 3.60955C3.10396 3.70758 3.08919 3.80687 3.08238 3.90741L2.97105 5.42312H2.74953V5.4269L2.40874 5.43067C2.29287 5.43067 2.20085 5.53624 2.20199 5.66443L2.26333 12.553C2.26333 12.6812 2.35876 12.783 2.47463 12.7817L2.85518 12.778L2.88358 16.0494L2.61549 16.1651V16.1688L2.47463 16.2292L0.777461 16.992C0.438937 17.1441 0.191292 17.3804 0.0731491 17.6594C-0.0518094 17.9522 -0.0177298 18.269 0.167436 18.5429L0.174252 18.553C0.18334 18.5668 0.202652 18.5718 0.221963 18.5668L2.33717 17.9183C2.50984 17.863 2.62571 17.7348 2.62571 17.594L2.62117 16.9581L2.89267 16.9543L3.05625 35.4872H2.9915V35.491L2.6507 35.4948C2.53483 35.4948 2.44282 35.6003 2.44395 35.7285L2.5053 42.6171C2.5053 42.7453 2.60072 42.8471 2.71659 42.8458L3.12214 42.8421L3.15281 46.3008C3.15963 47.2509 3.86167 48.0088 4.7182 48L19.8564 47.8379C20.7152 47.8303 21.4002 47.0536 21.3922 46.106L21.3627 42.7918H21.5263V42.7893L21.7444 42.7868C21.8602 42.7868 21.9523 42.6812 21.9511 42.553L21.8898 35.6669C21.8898 35.5387 21.7944 35.4369 21.6785 35.4382L21.2968 35.442L21.1343 17.0096L21.3559 17.0071L21.3604 17.6431C21.3604 17.7838 21.4808 17.9095 21.6558 17.9598L23.7835 18.563C23.8028 18.5681 23.8221 18.563 23.8312 18.5492L23.838 18.5392C24.0186 18.2627 24.047 17.9434 23.9175 17.6531L23.9187 17.6544ZM16.7767 0.805614V0.811898C16.7097 0.808127 16.6427 0.805614 16.5745 0.805614H7.41503C7.34801 0.805614 7.28099 0.808127 7.2151 0.811898V0.805614H16.7756H16.7767Z" fill="white"/>
<path d="M23.9188 17.6544C23.7961 17.3779 23.5439 17.1467 23.2043 17.0034L21.4923 16.277L21.3481 16.2192L20.7131 15.9603V16.1073L3.24385 16.003V15.8987H3.24271V15.8949L2.99507 16.0017H2.97803V16.0093L2.61451 16.1664V16.1701L2.47365 16.2305L0.776485 16.9933C0.43796 17.1454 0.190315 17.3817 0.0721726 17.6607C-0.052786 17.9535 -0.0187064 18.2703 0.16646 18.5442L0.173275 18.5543C0.182363 18.5681 0.201675 18.5732 0.220987 18.5681L2.33619 17.9196C2.50886 17.8643 2.62474 17.7361 2.62474 17.5954L2.62019 16.9594L3.25294 16.9519V16.9154L20.7221 16.972V17.0172L21.3549 17.0097L21.3594 17.6456C21.3594 17.7864 21.4798 17.9121 21.6548 17.9623L23.7825 18.5656C23.8018 18.5706 23.8211 18.5656 23.8302 18.5518L23.837 18.5417C24.0176 18.2652 24.046 17.946 23.9165 17.6557L23.9188 17.6544Z" fill="${color}"/>
<path d="M21.6499 5.60412C21.6499 5.47592 21.5545 5.37412 21.4386 5.37538L20.6116 5.38418L4.63853 5.41937C4.61808 5.41182 4.5965 5.4068 4.57378 5.40805L3.19356 5.42314H2.75166V5.42816L2.41086 5.43193C2.29499 5.43193 2.20298 5.53751 2.20411 5.6657L2.26546 12.5543C2.26546 12.6825 2.36088 12.7843 2.47675 12.783L4.6408 12.7591C4.67716 12.7591 4.71124 12.7466 4.74077 12.729H19.2587C19.2848 12.7415 19.3121 12.7478 19.3416 12.7478L21.0365 12.729H21.2864V12.7264L21.5045 12.7239C21.6204 12.7239 21.7124 12.6184 21.7113 12.4902L21.6499 5.60412Z" fill="#1C1C1C"/>
<path d="M21.8902 35.6683C21.8902 35.5401 21.7948 35.4383 21.6789 35.4395L20.8519 35.4483L4.87877 35.4835C4.85832 35.476 4.83674 35.4709 4.81402 35.4722L3.43379 35.4873H2.99189V35.4923L2.6511 35.4961C2.53523 35.4961 2.44321 35.6017 2.44435 35.7298L2.50569 42.6184C2.50569 42.7466 2.60111 42.8484 2.71698 42.8472L4.88104 42.8233C4.91739 42.8233 4.95147 42.8107 4.98101 42.7931H19.4989C19.525 42.8057 19.5523 42.812 19.5819 42.812L21.2767 42.7931H21.5267V42.7906L21.7448 42.7881C21.8606 42.7881 21.9527 42.6825 21.9515 42.5543L21.8902 35.6683Z" fill="#1C1C1C"/>
<path d="M19.2925 4.07207H4.70187C3.91122 4.07207 3.43525 3.10935 3.85556 2.36658C4.54851 1.15376 5.77197 0.348145 7.16356 0.348145H7.21695V2.83285H16.7774V0.348145H16.8308C18.2247 0.348145 19.447 1.15376 20.1388 2.36658C20.5591 3.10558 20.0831 4.07207 19.2925 4.07207Z" fill="#D42F2E"/>
<path d="M7.75187 0H16.2377C16.591 0 16.8795 0.319229 16.8795 0.710096V0.805614H7.1123V0.710096C7.1123 0.319229 7.40085 0 7.75414 0H7.75187Z" fill="#232B34"/>
<path d="M21.0565 8.12268L21.0497 8.13022C21.0451 7.67525 21.0236 7.2228 20.9827 6.77161L20.927 6.14697L20.7055 3.72385C20.6987 3.6233 20.6816 3.52402 20.6578 3.42599L20.6362 3.33047C20.5521 2.97982 20.3738 2.6631 20.1318 2.42305C20 2.29235 19.8501 2.18677 19.6899 2.10885C19.5377 2.03219 19.3718 1.98317 19.2037 1.96306C18.5176 1.24668 17.594 0.805542 16.5773 0.805542H7.41784C6.33525 0.805542 5.35716 1.30575 4.6608 2.10634L4.58128 2.11639C4.22799 2.16164 3.89855 2.33131 3.63841 2.59775C3.518 2.71966 3.41462 2.86168 3.33283 3.01501C3.33056 3.01752 3.33056 3.02004 3.33056 3.02004C3.25104 3.17211 3.18856 3.33927 3.14994 3.51271L3.12836 3.60822C3.10677 3.70625 3.092 3.80554 3.08519 3.90609L2.90684 6.33173L2.8614 6.95636C2.82732 7.40881 2.81369 7.86126 2.81823 8.31497L3.15221 46.2982C3.15903 47.2484 3.86107 48.0062 4.7176 47.9974L19.8558 47.8353C20.7146 47.8277 21.3996 47.051 21.3916 46.1034L21.0576 8.12016L21.0565 8.12268Z" fill="${color}"/>
<path d="M21.0565 8.1228L21.0497 8.13034C21.0451 7.67537 21.0236 7.22292 20.9827 6.77173L20.927 6.1471L20.7055 3.72397C20.6987 3.62343 20.6816 3.52414 20.6578 3.42611L20.6362 3.33059C20.5521 2.97994 20.3738 2.66323 20.1318 2.42318C20 2.29247 19.8501 2.1869 19.6899 2.10897C19.5377 2.03231 19.3718 1.98329 19.2037 1.96318C18.5176 1.2468 17.594 0.805664 16.5773 0.805664H7.41784C6.33525 0.805664 5.35716 1.30587 4.6608 2.10646L4.58128 2.11651C4.22799 2.16176 3.89855 2.33143 3.63841 2.59787C3.518 2.71978 3.41462 2.8618 3.33283 3.01513C3.33056 3.01765 3.33056 3.02016 3.33056 3.02016C3.25104 3.17223 3.18856 3.33939 3.14994 3.51283L3.12836 3.60834C3.10677 3.70638 3.092 3.80566 3.08519 3.90621L2.90684 6.33185L2.8614 6.95648C2.82732 7.40893 2.81369 7.86138 2.81823 8.31509L3.15221 46.2983C3.15903 47.2485 3.86107 48.0063 4.7176 47.9975L19.8558 47.8354C20.7146 47.8279 21.3996 47.0512 21.3916 46.1035L21.0576 8.12028L21.0565 8.1228Z" fill="url(#paint0_radial_1737_2689)"/>
<path d="M21.0565 8.1228L21.0497 8.13034C21.0451 7.67537 21.0236 7.22292 20.9827 6.77173L20.927 6.1471L20.7055 3.72397C20.6987 3.62343 20.6816 3.52414 20.6578 3.42611L20.6362 3.33059C20.5521 2.97994 20.3738 2.66323 20.1318 2.42318C20 2.29247 19.8501 2.1869 19.6899 2.10897C19.5377 2.03231 19.3718 1.98329 19.2037 1.96318C18.5176 1.2468 17.594 0.805664 16.5773 0.805664H7.41784C6.33525 0.805664 5.35716 1.30587 4.6608 2.10646L4.58128 2.11651C4.22799 2.16176 3.89855 2.33143 3.63841 2.59787C3.518 2.71978 3.41462 2.8618 3.33283 3.01513C3.33056 3.01765 3.33056 3.02016 3.33056 3.02016C3.25104 3.17223 3.18856 3.33939 3.14994 3.51283L3.12836 3.60834C3.10677 3.70638 3.092 3.80566 3.08519 3.90621L2.90684 6.33185L2.8614 6.95648C2.82732 7.40893 2.81369 7.86138 2.81823 8.31509L3.15221 46.2983C3.15903 47.2485 3.86107 48.0063 4.7176 47.9975L19.8558 47.8354C20.7146 47.8279 21.3996 47.0512 21.3916 46.1035L21.0576 8.12028L21.0565 8.1228Z" fill="url(#paint1_linear_1737_2689)"/>
<path d="M18.4191 19.2253H5.76992C5.29185 19.2253 4.9043 19.6541 4.9043 20.183V28.5094C4.9043 29.0383 5.29185 29.4671 5.76992 29.4671H18.4191C18.8972 29.4671 19.2848 29.0383 19.2848 28.5094V20.183C19.2848 19.6541 18.8972 19.2253 18.4191 19.2253Z" fill="url(#paint2_radial_1737_2689)"/>
<path d="M18.4191 19.2253H5.76992C5.29185 19.2253 4.9043 19.6541 4.9043 20.183V28.5094C4.9043 29.0383 5.29185 29.4671 5.76992 29.4671H18.4191C18.8972 29.4671 19.2848 29.0383 19.2848 28.5094V20.183C19.2848 19.6541 18.8972 19.2253 18.4191 19.2253Z" fill="url(#paint3_linear_1737_2689)"/>
<path d="M20.566 30.4562L20.6978 44.9371C20.7069 45.8747 20.073 46.6439 19.279 46.6514L5.28247 46.7972C4.49182 46.8048 3.84203 46.0519 3.83295 45.1131L3.70117 30.6322L20.566 30.4575V30.455V30.4562Z" fill="url(#paint4_linear_1737_2689)"/>
<path d="M20.566 30.4562L20.6978 44.9371C20.7069 45.8747 20.073 46.6439 19.279 46.6514L5.28247 46.7972C4.49182 46.8048 3.84203 46.0519 3.83295 45.1131L3.70117 30.6322L20.566 30.4575V30.455V30.4562Z" fill="url(#paint5_radial_1737_2689)"/>
<path d="M19.9902 15.9803C19.6051 16.7922 19.4392 17.6078 19.0791 18.4323C18.7236 19.2253 17.9659 19.6765 17.1945 19.5785C17.0378 19.5597 16.8821 19.5408 16.7254 19.5257C16.3891 19.488 16.0517 19.4541 15.7155 19.4277C15.1838 19.3824 14.6533 19.3485 14.1217 19.3234C13.4412 19.2945 12.763 19.2806 12.0848 19.2894C11.6759 19.2945 11.2647 19.3033 10.8568 19.3209C10.4286 19.3372 10.0014 19.3636 9.57091 19.395C8.75073 19.4566 7.92941 19.5433 7.10695 19.6615C7.03198 19.6715 6.96041 19.6828 6.88544 19.6929C6.1141 19.8073 5.34958 19.3711 4.98152 18.5869C4.98152 18.5819 4.97698 18.5793 4.97698 18.5731C4.60437 17.7587 4.42375 16.9505 4.02729 16.1525C3.70467 15.5039 4.08977 14.6845 4.80885 14.5412C5.56088 14.4005 6.30381 14.2773 7.03993 14.1768C7.97485 14.0486 8.89841 13.953 9.81628 13.8927C10.6126 13.8399 11.4033 13.8098 12.1962 13.8073C12.6097 13.8073 13.0254 13.8073 13.4389 13.8211C13.8354 13.8311 14.2319 13.8475 14.6295 13.8713C15.2838 13.9091 15.9427 13.9644 16.6061 14.0335C17.1184 14.0863 17.6353 14.1529 18.1567 14.227C18.4839 14.2723 18.811 14.3251 19.1405 14.3791C19.153 14.3791 19.1643 14.3816 19.1791 14.3841C19.9004 14.5123 20.2992 15.323 19.989 15.9803H19.9913H19.9902Z" fill="url(#paint6_linear_1737_2689)"/>
<path d="M4.77175 25.5711L3.76186 25.5811C3.70392 25.5811 3.65621 25.5384 3.65621 25.4831L3.58691 17.4345C3.58691 17.3251 3.74822 17.2962 3.79139 17.3943L4.7797 19.6339C4.81151 19.7055 4.82741 19.7835 4.82741 19.8601L4.87512 25.4693C4.87512 25.522 4.82968 25.5673 4.76948 25.5673L4.77175 25.5698V25.5711Z" fill="url(#paint7_linear_1737_2689)"/>
<path d="M19.4082 25.4114L20.4181 25.4013C20.4761 25.4013 20.5238 25.3561 20.5238 25.3033L20.4545 17.2547C20.4545 17.1454 20.2909 17.119 20.25 17.2195L19.3003 19.478C19.2685 19.5496 19.2549 19.6263 19.2549 19.7042L19.3026 25.3134C19.3026 25.3662 19.3503 25.4114 19.4105 25.4114H19.4082Z" fill="url(#paint8_linear_1737_2689)"/>
<path d="M4.88443 26.2522L4.90829 29.0561L3.69619 30.0377L3.66211 26.266C3.66211 26.2472 3.70755 26.2321 3.76776 26.2283L4.77765 26.2183C4.83558 26.2183 4.8833 26.2321 4.8833 26.2535L4.88443 26.2522Z" fill="url(#paint9_linear_1737_2689)"/>
<path d="M20.5278 26.0838L20.5619 29.8555L19.3305 28.9003L19.3066 26.0963C19.3066 26.0775 19.3544 26.0624 19.4123 26.0586L20.4222 26.0486C20.4801 26.0486 20.5278 26.0624 20.5278 26.0838Z" fill="url(#paint10_linear_1737_2689)"/>
<path d="M18.9731 29.9977L6.02439 30C5.99833 30 5.99123 29.9557 6.01255 29.9359L7.07857 29.0093C7.07857 29.0093 7.08805 29.0047 7.09279 29.0023L17.9947 29C17.9947 29 18.0065 29 18.0089 29.0047L18.9896 29.9324C19.011 29.9522 18.9968 29.9965 18.9707 29.9965L18.9731 29.9977Z" fill="url(#paint11_linear_1737_2689)"/>
<path d="M5.91585 35.9484L5.97379 42.5982C5.97379 42.7918 5.7091 42.9489 5.3774 42.9552L4.15167 42.969L4.08691 35.6204L5.31264 35.6066C5.64435 35.6041 5.91358 35.7562 5.91585 35.9497V35.9484Z" fill="url(#paint12_linear_1737_2689)"/>
<path d="M18.5062 42.4625L18.4482 35.8127C18.4482 35.6192 18.7129 35.4621 19.0446 35.4558L20.2704 35.442L20.3351 42.7905L19.1094 42.8043C18.7777 42.8068 18.5085 42.656 18.5062 42.4612V42.4625Z" fill="url(#paint13_linear_1737_2689)"/>
<path d="M16.4626 21.6473L7.60074 21.7428C7.18952 21.7478 6.85781 22.1211 6.86235 22.5748L6.89075 25.977C6.89529 26.4319 7.23155 26.7989 7.64277 26.7939L16.5046 26.6984C16.9158 26.6933 17.2475 26.3201 17.243 25.8664L17.2146 22.4642C17.2101 22.0092 16.8738 21.6422 16.4626 21.6473Z" fill="url(#paint14_linear_1737_2689)"/>
</g>
</svg>
  `);
    return `data:image/svg+xml,${svgString}`;
};

export const busColoredIcon = (size, color, angle) => {
    const svgString = encodeURIComponent(`
    <svg width="${size}" height="${size}" viewBox="0 0 22 48" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1735_2660)" transform="rotate(${angle}, 11, 24)" filter="url(#shadowFilter)">
<path d="M21.3489 -0.000188683H20.6094C20.2503 -0.000188683 19.9583 0.257448 19.9583 0.574176V0.870418H20.7433V1.93012C20.7433 2.17515 20.6344 2.40521 20.4379 2.57933L20.1851 2.8023L1.92295 2.89842L1.56033 2.57854C1.36294 2.40442 1.25487 2.17515 1.25487 1.92933V0.869631H2.04263V0.573388H2.04084C2.04084 0.25666 1.74878 -0.000976562 1.38974 -0.000976562H0.651104C0.292059 -0.000188683 0 0.257448 0 0.574176V0.870418H0.786863V1.68509C0.786863 2.28545 0.94495 2.61951 1.22897 2.87163L2.26502 3.78557L2.59638 3.49327L2.29182 3.2246L19.8118 3.13242L19.4027 3.49327L19.7341 3.78557L20.7701 2.87163C21.0542 2.61951 21.2122 2.28545 21.2122 1.68509V0.870418H22.0009V0.574176C22.0009 0.257448 21.7088 -0.000188683 21.3498 -0.000188683H21.3489Z" fill="#232B34"/>
<path d="M19.1389 2.17774C19.1389 2.02805 19.0898 1.88938 19.0058 1.7712C18.7638 1.2512 18.185 0.88562 17.508 0.88562C17.0025 0.88562 16.5515 1.08968 16.255 1.40877H5.83818C5.54166 1.08889 5.09062 0.88562 4.5851 0.88562C3.87951 0.88562 3.28199 1.28271 3.0596 1.83738C3.00244 1.9398 2.9685 2.05483 2.9685 2.17774C2.9685 2.19114 2.97029 2.20453 2.97118 2.21714C2.9685 2.24944 2.96582 2.28174 2.96582 2.31405C2.96582 3.10429 3.69016 3.74247 4.5851 3.74247C5.2228 3.74247 5.7712 3.41708 6.03557 2.94593H16.0567C16.321 3.41787 16.8703 3.74247 17.508 3.74247C18.4039 3.74247 19.1273 3.10193 19.1273 2.31405C19.1273 2.30932 19.1273 2.30459 19.1273 2.29986C19.1345 2.25968 19.1398 2.2195 19.1398 2.17774H19.1389Z" fill="#D42F2E"/>
<path d="M20.799 4.6658C20.7829 3.04198 19.4575 1.6758 17.6819 1.33701C17.4452 1.05652 17.0701 0.884766 16.6655 0.884766H5.43061C5.02244 0.884766 4.64553 1.05731 4.40885 1.34095C2.63953 1.68446 1.3141 3.0475 1.2998 4.66738V46.6566C1.2998 47.398 1.98038 47.9984 2.81905 47.9984H19.278C20.1184 47.9984 20.799 47.398 20.799 46.6566V4.6658Z" fill="${color}"/>
<path d="M20.799 4.6658C20.7829 3.04198 19.4575 1.6758 17.6819 1.33701C17.4452 1.05652 17.0701 0.884766 16.6655 0.884766H5.43061C5.02244 0.884766 4.64553 1.05731 4.40885 1.34095C2.63953 1.68446 1.3141 3.0475 1.2998 4.66738V46.6566C1.2998 47.398 1.98038 47.9984 2.81905 47.9984H19.278C20.1184 47.9984 20.799 47.398 20.799 46.6566V4.6658Z" fill="url(#paint0_linear_1735_2660)"/>
<path d="M20.799 4.6658C20.7829 3.04198 19.4575 1.6758 17.6819 1.33701C17.4452 1.05652 17.0701 0.884766 16.6655 0.884766H5.43061C5.02244 0.884766 4.64553 1.05731 4.40885 1.34095C2.63953 1.68446 1.3141 3.0475 1.2998 4.66738V46.6566C1.2998 47.398 1.98038 47.9984 2.81905 47.9984H19.278C20.1184 47.9984 20.799 47.398 20.799 46.6566V4.6658Z" fill="url(#paint1_radial_1735_2660)"/>
<path d="M4.41064 1.928C4.64732 1.64436 5.02423 1.47181 5.4324 1.47181H16.6673C17.0719 1.47181 17.4461 1.642 17.6837 1.92406C19.4575 2.26363 20.7847 3.62982 20.8008 5.25285V4.66824C20.7847 3.04442 19.4593 1.67824 17.6837 1.33945C17.447 1.05896 17.0719 0.887207 16.6673 0.887207H5.43061C5.02244 0.887207 4.64553 1.05975 4.40885 1.34339C2.63953 1.68848 1.3141 3.05072 1.2998 4.67061V5.25521C1.31588 3.63533 2.64131 2.2723 4.41064 1.928Z" fill="#232B34"/>
<path opacity="0.5" d="M19.5236 4.20093L19.3539 4.7753C18.6993 6.99397 18.3617 9.27567 18.3474 11.5692C18.292 21.2971 18.1402 45.3338 18.1384 48H3.95698C3.95698 46.2808 3.80336 21.4555 3.74798 11.5621C3.73637 9.2733 3.39876 6.99554 2.74766 4.78002L2.57617 4.20015L3.70064 2.56293C3.91589 2.48257 5.11271 2.39275 5.34582 2.34863C5.58429 2.06499 5.95763 1.89087 6.36758 1.89087H15.7304C16.1368 1.89087 16.5119 2.06341 16.7468 2.34311C16.9639 2.38487 18.2268 2.47154 18.4295 2.54481L19.5263 4.20015H19.5245L19.5236 4.20093Z" fill="url(#paint2_linear_1735_2660)"/>
<path d="M2.89296 8.21044L2.85188 8.05838L1.88281 4.56177V8.07492H1.88371V11.9931C1.88371 12.1152 1.95873 12.2278 2.08109 12.2854L2.90368 12.6769C3.02247 12.7344 3.16627 12.658 3.16627 12.5391V11.102C3.16627 11.102 3.21003 9.30402 2.89207 8.21123L2.89296 8.21044Z" fill="url(#paint3_linear_1735_2660)"/>
<path d="M3.16732 20.3422V21.7817C3.16732 21.8999 3.02353 21.9763 2.90474 21.9196L2.08215 21.528C1.95979 21.4705 1.88477 21.3578 1.88477 21.2357V13.0425C1.88477 12.9243 2.02856 12.8479 2.14735 12.9054L2.96637 13.2954C3.08694 13.3529 3.16197 13.4625 3.16554 13.5822C3.17536 13.9651 3.16911 20.3446 3.16911 20.3446L3.16732 20.343V20.3422Z" fill="url(#paint4_linear_1735_2660)"/>
<path d="M3.16732 29.5826V31.022C3.16732 31.1402 3.02353 31.2166 2.90474 31.1599L2.08215 30.7683C1.95979 30.7108 1.88477 30.5974 1.88477 30.476V22.2829C1.88477 22.1647 2.02856 22.0883 2.14735 22.1458L2.96637 22.5358C3.08694 22.5933 3.16197 22.7028 3.16554 22.8226C3.17536 23.2055 3.16911 29.5849 3.16911 29.5849L3.16732 29.5834V29.5826Z" fill="url(#paint5_linear_1735_2660)"/>
<path d="M3.16732 38.8251V40.2646C3.16732 40.3828 3.02353 40.4592 2.90474 40.4025L2.08215 40.0109C1.95979 39.9534 1.88477 39.8399 1.88477 39.7186V31.5254C1.88477 31.4072 2.02856 31.3308 2.14735 31.3883L2.96637 31.7783C3.08694 31.8358 3.16197 31.9454 3.16554 32.0659C3.17536 32.4488 3.16911 38.8283 3.16911 38.8283L3.16732 38.8267V38.8251Z" fill="url(#paint6_linear_1735_2660)"/>
<path d="M3.16732 44.984V46.4235C3.16732 46.5416 3.02353 46.6181 2.90474 46.5613L2.08215 46.1698C1.95979 46.1123 1.88477 45.9996 1.88477 45.8775V40.7468C1.88477 40.6286 2.02856 40.5522 2.14735 40.6097L2.96637 40.9997C3.08694 41.0572 3.16197 41.1667 3.16554 41.2873C3.17536 41.6702 3.16911 44.9872 3.16911 44.9872L3.16732 44.9856V44.984Z" fill="url(#paint7_linear_1735_2660)"/>
<path d="M20.2106 4.56104L19.246 8.05528L19.2049 8.21049C18.887 9.30328 18.9308 11.1012 18.9308 11.1012V12.5383C18.9308 12.6565 19.0745 12.7329 19.1933 12.6762L20.0159 12.2846C20.1383 12.2271 20.2133 12.1137 20.2133 11.9923V8.05607L20.2115 4.56182L20.2106 4.56104Z" fill="url(#paint8_linear_1735_2660)"/>
<path d="M18.9286 20.3422V21.7817C18.9286 21.8999 19.0723 21.9763 19.1911 21.9196L20.0137 21.528C20.1361 21.4705 20.2111 21.3578 20.2111 21.2357V13.0425C20.2111 12.9243 20.0673 12.8479 19.9485 12.9054L19.1295 13.2954C19.0089 13.3529 18.9339 13.4625 18.9303 13.5822C18.9205 13.9651 18.9268 20.3446 18.9268 20.3446L18.9286 20.343V20.3422Z" fill="url(#paint9_linear_1735_2660)"/>
<path d="M18.9286 29.5826V31.022C18.9286 31.1402 19.0723 31.2166 19.1911 31.1599L20.0137 30.7683C20.1361 30.7108 20.2111 30.5974 20.2111 30.476V22.2829C20.2111 22.1647 20.0673 22.0883 19.9485 22.1458L19.1295 22.5358C19.0089 22.5933 18.9339 22.7028 18.9303 22.8226C18.9205 23.2055 18.9268 29.5849 18.9268 29.5849L18.9286 29.5834V29.5826Z" fill="url(#paint10_linear_1735_2660)"/>
<path d="M18.9292 40.263C18.9292 40.3812 19.073 40.4576 19.1918 40.4009L20.0143 40.0093C20.1367 39.9518 20.2117 39.8383 20.2117 39.717V31.5238C20.2117 31.4057 20.0679 31.3292 19.9491 31.3867L19.1301 31.7767C19.0096 31.8343 18.931 31.9438 18.9292 32.0635C18.9193 32.4464 18.9292 40.2654 18.9292 40.2654V40.2638V40.263Z" fill="url(#paint11_linear_1735_2660)"/>
<path d="M18.9286 44.984V46.4235C18.9286 46.5416 19.0723 46.6181 19.1911 46.5613L20.0137 46.1698C20.1361 46.1123 20.2111 45.9996 20.2111 45.8775V40.7468C20.2111 40.6286 20.0673 40.5522 19.9485 40.6097L19.1295 40.9997C19.0089 41.0572 18.9339 41.1667 18.9303 41.2873C18.9205 41.6702 18.9268 44.9872 18.9268 44.9872L18.9286 44.9856V44.984Z" fill="url(#paint12_linear_1735_2660)"/>
<path d="M7.91562 36.749C7.74592 36.749 7.59766 36.6529 7.59766 36.5458V26.6248C7.59766 26.5168 7.74592 26.4215 7.91562 26.4215H14.1793C14.349 26.4215 14.4972 26.5176 14.4972 26.6248V36.5458C14.4972 36.6537 14.349 36.749 14.1793 36.749H7.91562Z" fill="url(#paint13_linear_1735_2660)"/>
<path d="M7.91562 14.6656C7.74592 14.6656 7.59766 14.5695 7.59766 14.4623V12.2437C7.59766 12.1357 7.74592 12.0404 7.91562 12.0404H14.1793C14.349 12.0404 14.4972 12.1365 14.4972 12.2437V14.4623C14.4972 14.5703 14.349 14.6656 14.1793 14.6656H7.91562Z" fill="url(#paint14_linear_1735_2660)"/>
<path d="M7.91562 8.28378C7.74592 8.28378 7.59766 8.18766 7.59766 8.08051V5.86184C7.59766 5.7539 7.74592 5.65857 7.91562 5.65857H14.1793C14.349 5.65857 14.4972 5.7539 14.4972 5.86184V8.08051C14.4972 8.18845 14.349 8.28378 14.1793 8.28378H7.91562Z" fill="url(#paint15_linear_1735_2660)"/>
<path d="M11.0472 45.8002C10.923 45.8002 10.8203 45.8908 10.8203 46.0004V46.5274C10.8203 46.6141 10.8855 46.6874 10.9739 46.7134V47.3886C10.9739 47.4233 11.0052 47.4532 11.0472 47.4532C11.0891 47.4532 11.1204 47.4256 11.1204 47.3886V46.7134C11.2088 46.6858 11.274 46.6141 11.274 46.5274V46.0004C11.274 45.8908 11.1713 45.8002 11.0472 45.8002Z" fill="#232B34"/>
</g>
<defs>
<linearGradient id="paint0_linear_1735_2660" x1="4.49536" y1="24.4412" x2="18.5001" y2="24.4412" gradientUnits="userSpaceOnUse">
<stop stop-color="#DDDDDD" stop-opacity="0.1"/>
<stop offset="0.02" stop-color="#DCDCDC" stop-opacity="0.18"/>
<stop offset="0.06" stop-color="#DFDFDF" stop-opacity="0.28"/>
<stop offset="0.1" stop-color="#EAEAEA" stop-opacity="0.36"/>
<stop offset="0.14" stop-color="#ECECEC" stop-opacity="0.42"/>
<stop offset="0.2" stop-color="#EFEFEF" stop-opacity="0.47"/>
<stop offset="0.27" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.45" stop-color="#FAFAFA" stop-opacity="0.5"/>
<stop offset="0.58" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.68" stop-color="#EFEFEF" stop-opacity="0.45"/>
<stop offset="0.77" stop-color="#ECECEC" stop-opacity="0.4"/>
<stop offset="0.86" stop-color="#DFDFDF" stop-opacity="0.31"/>
<stop offset="0.93" stop-color="#DCDCDC" stop-opacity="0.21"/>
<stop offset="1" stop-color="#DDDDDD" stop-opacity="0.1"/>
</linearGradient>
<radialGradient id="paint1_radial_1735_2660" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(11.0491 24.5257) scale(15.6965 20.0241)">
<stop stop-color="${color}" stop-opacity="0"/>
<stop offset="0.23" stop-color="${color}" stop-opacity="0.02"/>
<stop offset="0.43" stop-color="${color}" stop-opacity="0.07"/>
<stop offset="0.61" stop-color="${color}" stop-opacity="0.15"/>
<stop offset="0.78" stop-color="${color}" stop-opacity="0.28"/>
<stop offset="0.94" stop-color="${color}" stop-opacity="0.43"/>
<stop offset="1" stop-color="${color}" stop-opacity="0.5"/>
</radialGradient>
<linearGradient id="paint2_linear_1735_2660" x1="5.35399" y1="24.945" x2="17.528" y2="24.945" gradientUnits="userSpaceOnUse">
<stop stop-color="#DDDDDD" stop-opacity="0.1"/>
<stop offset="0.02" stop-color="#DCDCDC" stop-opacity="0.18"/>
<stop offset="0.06" stop-color="#DFDFDF" stop-opacity="0.28"/>
<stop offset="0.1" stop-color="#EAEAEA" stop-opacity="0.36"/>
<stop offset="0.14" stop-color="#ECECEC" stop-opacity="0.42"/>
<stop offset="0.2" stop-color="#EFEFEF" stop-opacity="0.47"/>
<stop offset="0.27" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.45" stop-color="#FAFAFA" stop-opacity="0.5"/>
<stop offset="0.58" stop-color="#FCFCFC" stop-opacity="0.49"/>
<stop offset="0.68" stop-color="#EFEFEF" stop-opacity="0.45"/>
<stop offset="0.77" stop-color="#ECECEC" stop-opacity="0.4"/>
<stop offset="0.86" stop-color="#DFDFDF" stop-opacity="0.31"/>
<stop offset="0.93" stop-color="#DCDCDC" stop-opacity="0.21"/>
<stop offset="1" stop-color="#DDDDDD" stop-opacity="0.1"/>
</linearGradient>
<linearGradient id="paint3_linear_1735_2660" x1="2.5256" y1="12.6965" x2="2.5256" y2="4.56174" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint4_linear_1735_2660" x1="2.52796" y1="21.9388" x2="2.52796" y2="12.8858" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint5_linear_1735_2660" x1="2.52796" y1="31.1791" x2="2.52796" y2="22.1262" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint6_linear_1735_2660" x1="2.52796" y1="40.4217" x2="2.52796" y2="31.3687" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint7_linear_1735_2660" x1="2.52796" y1="46.5805" x2="2.52796" y2="40.5901" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint8_linear_1735_2660" x1="19.5711" y1="12.6954" x2="19.5711" y2="4.56101" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint9_linear_1735_2660" x1="19.568" y1="21.9388" x2="19.568" y2="12.8858" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint10_linear_1735_2660" x1="19.568" y1="31.1791" x2="19.568" y2="22.1262" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint11_linear_1735_2660" x1="19.5683" y1="40.4201" x2="19.5683" y2="31.3672" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint12_linear_1735_2660" x1="19.568" y1="46.5805" x2="19.568" y2="40.5901" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint13_linear_1735_2660" x1="11.0477" y1="36.7491" x2="11.0477" y2="26.4215" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint14_linear_1735_2660" x1="11.0477" y1="14.6656" x2="11.0477" y2="12.0404" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<linearGradient id="paint15_linear_1735_2660" x1="11.0477" y1="8.28381" x2="11.0477" y2="5.65856" gradientUnits="userSpaceOnUse">
<stop offset="0.00999999" stop-color="#1A1A1A"/>
<stop offset="0.19" stop-color="#202020"/>
<stop offset="0.47" stop-color="#272727"/>
<stop offset="1" stop-color="#515151"/>
</linearGradient>
<clipPath id="clip0_1735_2660">
<rect width="22" height="48" fill="white"/>
</clipPath>
</defs>
</svg>

  `);
    return `data:image/svg+xml,${svgString}`;
};
