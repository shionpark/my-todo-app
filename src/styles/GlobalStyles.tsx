import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle` 
${reset}

* {
	box-sizing: border-box;
}
    
body {
	font-family: 'Noto Sans KR', sans-serif;
    background-color: #F6F9F0;
}

ol, ul {
	list-style: none;
}

a{
	text-decoration: none;
	color: inherit;

	&:hover {
    	text-decoration: none;
		color: none;
	}
    
	&:active {
    	text-decoration: none;
		color: black;
	}
        
    &:visited {
    	text-decoration: none;
		color: black;
	}
        
	&:link {
    	text-decoration: none;
		color: black; 
	}
}

input:focus {
  outline: none;
}
`;

export default GlobalStyles;
