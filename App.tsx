import { StyleSheet, Text, View } from 'react-native'
import NavigationScreen from './src/Navigation/navigationScreen'
import { Provider } from 'react-redux'
import Store from './src/Store/store'

const App = () => {


  console.error = () => { };
  console.warn = () => { };
  // console.log = () => { };
  console.info = () => { };


  return (
    <Provider store={Store}>
      <NavigationScreen />
    </Provider>
  )


}

export default App

const styles = StyleSheet.create({})