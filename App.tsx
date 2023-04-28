import { ThemeProvider } from 'styled-components';

import Routes from './src/navigation';
import { theme } from './src/theme';
import { StatusBar } from 'expo-status-bar';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
      <StatusBar style='auto' />
    </ThemeProvider>
  );
};

export default App;
