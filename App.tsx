import {Pressable, SafeAreaView, Text, TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';
import ShoppingItem from './components/ShoppingItem';
import {deleteIcon} from './common/Icons';

const App = (): JSX.Element => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {/* Heading */}
        <Text style={styles.heading}>Shopping List</Text>
        {/* no. of shopping alignItems */}
        <Text style={styles.itemsCount}>0</Text>
        {/* delete all */}
        <Pressable>{deleteIcon}</Pressable>
      </View>
      <ShoppingItem />
      <ShoppingItem />
      <ShoppingItem />
      <ShoppingItem />
      <ShoppingItem />
      <TextInput />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
  },
  heading: {
    fontSize: 30,
    fontWeight: '500',
    flex: 1,
  },
  itemsCount: {
    fontSize: 30,
    fontWeight: '500',
    marginRight: 20,
  },
});
