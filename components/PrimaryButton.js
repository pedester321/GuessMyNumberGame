import { StyleSheet, View, Text, Pressable } from "react-native";

function PrimaryButton({ children }) {
  function pressHandler() {}
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={pressHandler}
        android_ripple={{ color: "#640233" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: "#72063c",
    paddingVertical: 8,
    elevation: 2,
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },

  //IOS
  pressed: {
    opacity: 0.75,
  },
});
