import { View, Pressable } from 'react-native';
import Text from './Text';
import FormikTextInput from './FormikTextInput'
import { Formik } from 'formik';
import * as yup from 'yup';
import useReview from '../hooks/useReview'
import { useNavigate } from "react-router-native";

const initialValues = {
  ownerName: '',
  repositoryName: '',
  rating: '',
  text: ''
};

const validationSchema = yup.object().shape({
    ownerName: yup.string()
        .required('Repository owner name is required'),
    repositoryName: yup.string()
        .required('Repository name is required'),
    rating: yup.number()
        .required('Rating is required')
        .min(0)
        .max(100),
    text: yup.string()
    
});

const ReviewForm = ({ onSubmit }) => {

    return (
        <View>
        <FormikTextInput style={{ backgroundColor: "white" }} name="ownerName" placeholder="Repository owner name" />
        <FormikTextInput style={{ backgroundColor: "white" }} name="repositoryName" placeholder="Repository name" />
        <FormikTextInput style={{ backgroundColor: "white" }} name="rating" placeholder="Rating between 0 and 100" />
        <FormikTextInput style={{ backgroundColor: "white" }} name="text" placeholder="Review" />
        <Pressable onPress={onSubmit}>
            <Text>Create a review</Text>
        </Pressable>
        </View>
    );
};

const Review = () => {
    const [review] = useReview();
    const navigate = useNavigate();
  
    const onSubmit = async (values) => {
      const { ownerName, rating, repositoryName, text } = values;
      const intRating = parseInt(rating)
      
      try {
        const data = await review({ ownerName, rating: intRating, repositoryName, text });
        navigate(`/${data.createReview.repositoryId}`);
      } catch (e) {
        console.log(e);
      }
    };
  
    return <View>
      <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
      {({ handleSubmit }) => <ReviewForm onSubmit={handleSubmit} />}
      </Formik>
    </View>;
  };

export default Review;