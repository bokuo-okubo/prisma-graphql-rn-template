import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

export default class App extends React.Component<{}> {
  render() {
    const onPressButton = () => { alert('🤭🤭🤭') }
    return (
      <View style={styles.container}>
        <Text>This is Prisma, GraphQL, ReactNative template App!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>

        <Button
          onPress={onPressButton}
          title="Nothing will happen"
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
