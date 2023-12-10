import { createGlobalStyle } from 'styled-components';
import NotoSansKrBold from '../fonts/NotoSansKR-Bold.ttf';
import NotoSansKrMedium from '../fonts/NotoSansKR-Medium.ttf';
import NotoSansKrRegular from '../fonts/NotoSansKR-Regular.ttf';

const GlobalStyle = createGlobalStyle`
@font-face {
        font-family: 'NotoSansKr-Bold';
        src: local('NotoSansKr-Bold'), local('NotoSansKr-Bold');
        font-style: normal;
        src: url(${NotoSansKrBold}) format('truetype');
  }
  @font-face {
        font-family: 'NotoSansKr-Medium';
        src: local('NotoSansKr-Medium'), local('NotoSansKr-Medium');
        font-style: normal;
        src: url(${NotoSansKrMedium}) format('truetype');
  }
  @font-face {
        font-family: 'NotoSansKr-Regular';
        src: local('NotoSansKr-Regular'), local('NotoSansKr-Regular');
        font-style: normal;
        src: url(${NotoSansKrRegular}) format('truetype');
  }

  html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
  body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  * {
		scroll-behavior: smooth;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: NotoSansKr-Regular;
  }
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
}
`;

export default GlobalStyle;
