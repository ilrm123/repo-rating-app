import { View, Pressable } from 'react-native';
import Text from './Text';
import { useNavigate, useParams } from "react-router-native";
import useDeleteReview from '../hooks/useDeleteReview'


const DeletionPage = () => {
    let { id } = useParams();

    const [deletereview] = useDeleteReview();
    const navigate = useNavigate();

    const deletion = async (id) => {
        
        try {
            await deletereview({ id });
            
            navigate("/myreviews");
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <View>
            <Text>Are you sure you want to delete this review?</Text>
            <Text style={{ color: "red", fontWeight: "bold" }}><Pressable onPress={() => {deletion(id)}}>DELETE</Pressable></Text>
            <Text style={{ color: "blue", fontWeight: "bold" }}><Pressable onPress={() => {navigate("/")}}>CANCEL</Pressable></Text>
        </View>
    )
}

export default DeletionPage;