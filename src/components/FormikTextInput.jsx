import { StyleSheet, View } from 'react-native';
import { useField } from 'formik';

import TextInput from './TextInput';
import Text from './Text';

const styles = StyleSheet.create({
  errorText: {
    marginTop: 5,
    color: "red"
  },
  errorBorder: {
    borderColor: "red",
    borderWidth: 2
  },
  normalBorder: {
    borderColor: "gray",
    borderWidth: 1
  }
});

const FormikTextInput = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  const showError = meta.touched && meta.error;

  var borderStyle = styles.normalBorder
  
  if (showError) {
    borderStyle = styles.errorBorder
  }

  return (
    <>
      <View style={borderStyle}>
        <TextInput
          onChangeText={value => helpers.setValue(value)}
          onBlur={() => helpers.setTouched(true)}
          value={field.value}
          error={showError}
          {...props}
        />
      </View>
      {showError && <Text style={styles.errorText}>{meta.error}</Text>}
    </>
  );
};

export default FormikTextInput;
