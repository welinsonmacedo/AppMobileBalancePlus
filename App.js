
import { StyleSheet, Text, View } from 'react-native';
import RouteService from './src/navigation/RouteService';

export default function App() {

  return <RouteService />
   
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
