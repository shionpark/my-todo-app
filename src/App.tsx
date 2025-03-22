import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/GlobalStyles';
import theme from './styles/theme';

import { Todo } from './components';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Todo />
    </ThemeProvider>
  );
}

export default App;
