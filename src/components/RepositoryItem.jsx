import { View, Image, StyleSheet, Pressable } from 'react-native';
import Text from './Text';
import { useNavigate } from "react-router-native";

const styles = StyleSheet.create({
    logo: {
      width: 50,
      height: 50,
    },
    container: {
        backgroundColor: "white"
    }
  });

const RepositoryItem = (props) => {
    var starString = ""
    var forkString = ""

    if (props.repo.stargazersCount >= 1000) {
        const stars = props.repo.stargazersCount / 1000

        starString = stars.toFixed(1).toString().concat("k")
    } else {
        starString = props.repo.stargazersCount.toString()
    }

    if (props.repo.forksCount >= 1000) {
        const forks = props.repo.forksCount / 1000

        forkString = forks.toFixed(1).toString().concat("k")
    } else {
        forkString = props.repo.forksCount.toString()
    }

    const navigate = useNavigate();

    return (
        <View testID="repositoryItem" style={styles.container}>
            <Pressable onPress={() => {navigate(props.repo.id)}}>
                <Image style={styles.logo} source={props.repo.ownerAvatarUrl}></Image>
                <Text text="main">
                    <Text>{props.repo.fullName}{"\n"}</Text>
                    <Text>{props.repo.description}{"\n"}</Text>
                    <Text style={{ backgroundColor: "lightblue" }}>{props.repo.language}</Text>{"\n"}
                    <Text>Stars: {starString}{" "}</Text>
                    <Text>Forks: {forkString}{" "}</Text>
                    <Text>Reviews: {props.repo.reviewCount}{" "}</Text>
                    <Text>Rating: {props.repo.ratingAverage}{" "}</Text>
                </Text>
            </Pressable>
        </View>
    )
}

export default RepositoryItem;
