import { ThemeProvider } from 'styled-components';

import Routes from './src/navigation';
import { theme } from './src/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
