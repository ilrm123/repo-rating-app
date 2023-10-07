import { FlatList, View, StyleSheet } from 'react-native';
import RepositoryItem from './RepositoryItem'
import useRepositories from '../hooks/useRepositories';
import { Picker } from '@react-native-picker/picker'
import { useState } from 'react';
import TextInput from './TextInput';
import Text from './Text';
import { useDebounce } from 'use-debounce'


const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  input: {
    backgroundColor: "white",
    borderColor: "black",
    borderWidth: 1
  }
});

const ItemSeparator = () => <View style={styles.separator} />;


export const RepositoryListContainer = ({ repositories }) => {

  // Get the nodes from the edges array
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <View>
      <FlatList
        data={repositoryNodes}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({item}) => (
          <RepositoryItem repo={item}>
          </RepositoryItem>
        )}
      />
    </View>
  );

};

const RepositoryList = () => {
  const [order, setOrder] = useState("latest")
  const [text, onChangeText] = useState("")
  const [value] = useDebounce(text, 500);

  var by = "CREATED_AT"
  var direction = "DESC"

  if (order == "highest") {
    by = "RATING_AVERAGE"
    direction = "DESC"
  } else if (order == "lowest") {
    by = "RATING_AVERAGE"
    direction = "ASC"
  }

  const { repositories } = useRepositories(by, direction, value);

  return (
    <View>
      <Picker selectedValue={order} onValueChange={(itemValue) => setOrder(itemValue)}>
        <Picker.Item label="Latest repositories" value="latest" />
        <Picker.Item label="Highest rated repositories" value="highest" />
        <Picker.Item label="Lowest rated repositories" value="lowest" />
      </Picker>
      <Text>Filter by name:</Text>
      <TextInput style={styles.input} onChangeText={onChangeText} value={text}/>
      <RepositoryListContainer repositories={repositories} />
    </View>
  );
};

export default RepositoryList;
