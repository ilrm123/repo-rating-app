import useRepository from '../hooks/useRepository';
import useReviews from '../hooks/useReviews'
import { useParams } from 'react-router-native';
import { View, Image, StyleSheet, Pressable, FlatList } from 'react-native';
import Text from './Text';
import * as Linking from 'expo-linking';

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

const RepositoryView = () => {
    let { id } = useParams();

    const repo = useRepository(id);
    const reviews = useReviews(id);

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={repo.repository.ownerAvatarUrl}></Image>
            <Text text="main">
                <Text>{repo.repository.fullName}{"\n"}</Text>
                <Text>{repo.repository.description}{"\n"}</Text>
                <Text style={{ backgroundColor: "lightblue" }}>{repo.repository.language}</Text>{"\n"}
                <Text>Stars: {repo.repository.stargazersCount}{" "}</Text>
                <Text>Forks: {repo.repository.forksCount}{" "}</Text>
                <Text>Reviews: {repo.repository.reviewCount}{" "}</Text>
                <Text>Rating: {repo.repository.ratingAverage}{"\n"}</Text>
                <Text><Pressable style={{ color: "blue", fontWeight: "bold", textDecorationLine: "underline", fontSize: 20 }} onPress={() => {Linking.openURL(repo.repository.url)}}>Open in GitHub</Pressable></Text>
            </Text>
            <br></br>
            <FlatList
                data={reviews.reviews}
                ItemSeparatorComponent={ItemSeparator}
                renderItem={({item}) => (
                    <View>
                        <Text style={{ color: "blue", fontWeight: "bold", fontSize: 20 }}>{" "}{item.node.rating}</Text>
                        <Text style={{ fontWeight: "bold", fontSize: 17 }}>{item.node.user.username}</Text>
                        <Text style={{ color: "darkgrey" }}>{item.node.createdAt.slice(0, 10)}</Text>
                        <Text>{item.node.text}</Text>
                    </View>
                )}
                />
        </View>
    )
}

export default RepositoryView;
