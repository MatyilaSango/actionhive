import { StatusBar } from 'expo-status-bar';
import Home from './src/components/Home/Home';
import { StyleSheet, View } from 'react-native';
import Header from './src/components/Header/Header';
import { Provider } from 'react-redux';
import { store } from './src/Store/app/store';
import { ToastProvider } from 'react-native-toast-notifications'

const styles = StyleSheet.create({
  container: {
    height: "100%",
  }
})

export default function App() {
  return (
    <Provider store={store}>
      <ToastProvider placement="bottom" duration={3000}>
        <View style={styles.container}>
          <Header />
          {/* <StatusBar style='auto'/> */}
          <Home />
      </View>
      </ToastProvider>
    </Provider>  
  );
}