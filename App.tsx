import React from 'react';
import TabBarController from './src/screens/TabBarController';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {ThemeProvider, createTheme} from '@rneui/themed';
import {store} from './src/redux/store';
import {Provider} from 'react-redux';

const theme = createTheme({
  lightColors: {
    primary: '#5f9ea0',
  },
  darkColors: {
    primary: '#000000',
  },
  mode: 'light',
});

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <ThemeProvider theme={theme}>
          <TabBarController />
        </ThemeProvider>
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
