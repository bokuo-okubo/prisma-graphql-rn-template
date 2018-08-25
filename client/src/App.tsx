import * as React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

import { ChildComponent } from './ChildComponent'

const client = new ApolloClient({
  uri: "http://localhost:4000/"
});

export default class App extends React.Component<{}> {
  render() {
    const onPressButton = () => { alert('🤭🤭🤭') }

    return (
      <ApolloProvider client={client}>
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

          <ChildComponent />
        </View>
      </ApolloProvider>
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
