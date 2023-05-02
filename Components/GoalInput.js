import { StyleSheet, View, TextInput, Button } from "react-native";

const GoalInput = (props) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="your course goal!"
        onChangeText={props.goalInputHandler}
      />
      <Button title="Add Goal!" onPress={props.addGoalHandler} />
    </View>
  );
};

export default GoalInput;
const styles = StyleSheet.create({
  textInput: {
    borderWidth: 1,
    borderEndColor: "#cccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
  },
});
