import { View, Pressable } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik';
import * as yup from 'yup';
import useSignUp from '../hooks/useSignUp'
import useSignIn from '../hooks/useSignIn'
import { useNavigate } from "react-router-native";

const initialValues = {
    username: '',
    password: '',
    passwordConfirm: ''
  };
  
const validationSchema = yup.object().shape({
    username: yup.string()
    .required('Username is required')
    .min(5)
    .max(30),
    password: yup.string()
    .required('Password is required')
    .min(5)
    .max(50),
    passwordConfirm: yup.string()
    .oneOf([yup.ref('password'), null], "The passwords must match")
    .required('Password confirmation is required')
});

const SignUpForm = ({ onSubmit }) => {
    return (
    <View>
        <FormikTextInput style={{ backgroundColor: "white" }} name="username" placeholder="Username" />
        <FormikTextInput style={{ backgroundColor: "white" }} name="password" placeholder="Password" secureTextEntry="true" />
        <FormikTextInput style={{ backgroundColor: "white" }} name="passwordConfirm" placeholder="Password confirmation" secureTextEntry="true" />
        <Pressable onPress={onSubmit}>
        <Text>Sign up</Text>
        </Pressable>
    </View>
    );
};


const SignUp = () => {
    const [signUp] = useSignUp();
    const navigate = useNavigate();
    const [signIn] = useSignIn();

    const onSubmit = async (values) => {
        const { username, password } = values;
        
        try {
            const data = await signUp({ username, password });
            await signIn({ username, password })
            console.log(data);
            navigate("/");
        } catch (e) {
            console.log(e);
        }
    };

    return <View>
    <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
    {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
    </View>;
};

export default SignUp;
