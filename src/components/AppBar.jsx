import { View, StyleSheet, Text, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { Link } from "react-router-native";

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
      </ScrollView>
    </View>;
};

export default AppBar;
