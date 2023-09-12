import { View, Image, StyleSheet } from 'react-native';
import Text from './Text';

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

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={props.repo.ownerAvatarUrl}></Image>
            <Text text="main">
                {props.repo.fullName}{"\n"}
                {props.repo.description}{"\n"}
                <Text style={{ backgroundColor: "lightblue" }}>{props.repo.language}</Text>{"\n"}
                Stars: {starString}{" "}
                Forks: {forkString}{" "}
                Reviews: {props.repo.reviewCount}{" "}
                Rating: {props.repo.ratingAverage}{" "}
            </Text>
        </View>
    )
}

export default RepositoryItem;
