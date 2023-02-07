import { useFonts, NunitoSans_400Regular, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from 'styled-components/native';

import theme from './src/theme'

export default function App() {
  const [ fontLoader ] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar style="dark" translucent />
      <Text>Open up App.tsx to start working on your app!</Text>
    </ThemeProvider>
  );
}
