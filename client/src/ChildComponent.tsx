import * as React from 'react';
import {
  Text,
  View
} from 'react-native';

import { Query } from "react-apollo";
import gql from "graphql-tag";

interface Feed {
  id?: string,
  title?: string,
  text?: string
}

const ChildComponent = () => (
  <Query
    query={gql`
     query getFeed {
       feed {
         id
         title
         text
       }
     }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <View><Text>Loading...</Text></View>;
      if (error) return <View>Error :(</View>;

      console.log(data)
      return data.feed.map((fd: Feed) => (
        <View key={fd.id} style={{marginBottom: '20px'}}>
          <Text>id: {fd.id}</Text>
          <Text>title: {fd.title}</Text>
          <Text>text: {fd.text}</Text>
        </View>
      ));
    }}
  </Query>
);

export { ChildComponent }
