// import Constants from 'expo-constants';
import { StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import RepositoryList from './RepositoryList'
import SignIn from './SignIn'
import AppBar from './AppBar'
import Text from './Text';
import RepositoryView from './RepositoryView'
import ReviewForm from './Review'
import SignUp from './SignUp'
import MyReviews from './MyReviews'
import DeletionPage from './DeletionPage'

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: "lightgray"
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar></AppBar>
      <Text>
        Rate Repository Application{"\n"} {"\n"}
      </Text>
      <Routes>
        <Route path="/" element={<RepositoryList />} exact />
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/signin" element={<SignIn />} exact />
        <Route path="/signup" element={<SignUp />} exact />
        <Route path="/review" element={<ReviewForm />} exact />
        <Route path="/:id" element={<RepositoryView />} exact />
        <Route path="/myreviews" element={<MyReviews />} exact />
        <Route path="/delete/:id" element={<DeletionPage />} exact />
      </Routes>
    </View>
  );
};

export default Main;
