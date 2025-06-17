/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import BottomNav from './src/screens/BottomNav';
// import { useFonts } from '@expo-google-fonts/odibee-sans';

function App() {
  // let [fontsLoaded] = useFonts({
  //       'Odibee Sans': require('@expo-google-fonts/odibee-sans'),
  //   });
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      {/* <Navigation /> */}
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
