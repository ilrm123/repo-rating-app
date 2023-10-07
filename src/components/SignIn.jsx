import { View, Pressable } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignIn from '../hooks/useSignIn'
import { useNavigate } from "react-router-native";

const initialValues = {
  username: '',
  password: '',
};

const validationSchema = yup.object().shape({
  username: yup.string()
    .required('Username is required'),
  password: yup.string()
    .required('Password is required'),
});

const LoginForm = ({ onSubmit }) => {
  return (
    <View>
      <FormikTextInput style={{ backgroundColor: "white" }} name="username" placeholder="Username" />
      <FormikTextInput style={{ backgroundColor: "white" }} name="password" placeholder="Password" secureTextEntry="true" />
      <Pressable onPress={onSubmit}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};

export const SignInContainer = ({ onSubmit }) => {



  return <View>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  </View>;
}

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
  
    try {
      const data = await signIn({ username, password });
      console.log(data.authenticate);
      navigate("/");
    } catch (e) {
      console.log(e);
    }
  };

  return <View>
    <SignInContainer onSubmit={onSubmit}></SignInContainer>
  </View>;
};

export default SignIn;
