import useUserReviews from '../hooks/useUserReviews'
import { View, StyleSheet, FlatList, Pressable } from 'react-native';
import Text from './Text';
import { useNavigate } from "react-router-native";


const styles = StyleSheet.create({
    logo: {
      width: 50,
      height: 50,
    },
    container: {
        backgroundColor: "white"
    },
    separator: {
        height: 30,
      },
  });

  
const ItemSeparator = () => <View style={styles.separator} />;

const MyReviews = () => {
    
    const reviews = useUserReviews();
    const navigate = useNavigate();
    

    return (
        <View style={styles.container}>
            <FlatList
                data={reviews.reviews}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({item}) => (
                    <View>
                        <Text style={{ color: "blue", fontWeight: "bold", fontSize: 20 }}>{" "}{item.node.rating}</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 17 }}>{item.node.repository.fullName}</Text>
                        <Text style={{ color: "darkgrey" }}>{item.node.createdAt.slice(0, 10)}</Text>
                        <Text>{item.node.text}</Text>
                        <Text style={{ color: "blue", fontWeight: "bold" }}>
                            <Pressable onPress={() => {navigate(`/${item.node.repositoryId}`)}}>View repository</Pressable>
                        </Text>
                        <Text style={{ color: "red", fontWeight: "bold" }}>
                            <Pressable onPress={() => {navigate(`/delete/${item.node.id}`)}}>Delete review</Pressable>
                        </Text>
                    </View>
                )}
                />
        </View>
    )
}

export default MyReviews;
