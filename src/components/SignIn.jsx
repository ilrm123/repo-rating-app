import { View, Pressable } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik';
import * as yup from 'yup';

const initialValues = {
  username: '',
  password: '',
};

const onSubmit = (values) => {
  console.log(values);
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

const SignIn = () => {
  return <View>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => <LoginForm onSubmit={handleSubmit} />}
    </Formik>
  </View>;
};

export default SignIn;
