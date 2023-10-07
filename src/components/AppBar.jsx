import { View, StyleSheet, Text, ScrollView, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { Link, useNavigate } from "react-router-native";
import { useQuery, gql } from '@apollo/client';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    paddingBottom: 10,
    backgroundColor: 'black'
    // ...
  },
  text: {
    color: 'white',
    paddingTop: 5,
    paddingLeft: 5,
    fontWeight: 'bold'
  }
});


const AppBar = () => {
  const user = useQuery(gql`{
      me {
        id
        username
      }
    }`
  )

  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();
  const navigate = useNavigate();

  if (JSON.stringify(user.data) == `{"me":null}`) {
    return <View style={styles.container}>
        <ScrollView horizontal="true">
          <Link to="/">
              <Text style={styles.text}>
                  Repositories
              </Text>
          </Link>
          <Link to="/signin">
              <Text style={styles.text}>
                  Sign in
              </Text>
          </Link>
          <Link to="/signup">
              <Text style={styles.text}>
                  Sign up
              </Text>
          </Link>
        </ScrollView>
      </View>;
  } else {
    return <View style={styles.container}>
        <ScrollView horizontal="true">
          <Link to="/">
              <Text style={styles.text}>
                  Repositories
              </Text>
          </Link>
          <Pressable onPress={() => {
            authStorage.removeAccessToken();
            apolloClient.resetStore();
            navigate("/")
          }}>
              <Text style={styles.text}>
                  Sign out
              </Text>
          </Pressable>
          <Link to="/review">
              <Text style={styles.text}>
                  Create a review
              </Text>
          </Link>
          <Link to="/myreviews">
              <Text style={styles.text}>
                  My reviews
              </Text>
          </Link>
        </ScrollView>
      </View>;
  }
};

export default AppBar;
