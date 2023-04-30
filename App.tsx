import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './src/store';

import Routes from './src/navigation';
import { theme } from './src/theme';

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
        <StatusBar style='auto' />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
