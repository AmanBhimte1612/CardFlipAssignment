/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */


import { StatusBar, StyleSheet, useColorScheme, View } from 'react-native';
import BottomNav from './src/screens/BottomNav';



function App() {

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="black" />
      {/* <Navigation /> */}
      <BottomNav />
      {/* <CurvedLine /> */}
    </View>
  );
}




const styles = StyleSheet.create({
 
  container: {
    flex: 1,
    
  },
});

export default App;
