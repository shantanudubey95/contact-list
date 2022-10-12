import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { selectContactPhone } from 'react-native-select-contact';

export default function App() {
  const [selectcontact, setContact] = React.useState('');

  function getPhoneNumber() {
    return selectContactPhone().then((selection) => {
      if (!selection) {
        return null;
      }

      const { contact, selectedPhone } = selection;
      console.log(
        `Selected ${selectedPhone.type} phone number ${selectedPhone.number} from ${contact.name}`
      );
      setContact(selectedPhone.number);
      return selectedPhone.number;
    });
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
      <Text>Selected Contact is {selectcontact}</Text>
      <Button title="Import contacts" onPress={() => getPhoneNumber()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
