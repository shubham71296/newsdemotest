import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  contentContainer: {
    padding: 10,
    backgroundColor: "#d9d9d9",
  },
  innerContentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  contentImage: {
    width: 190,
    height: 190,
    alignItems: "center",
    margin: 5,
    justifyContent: "center",
    resizeMode: "stretch",
  },
  MainContainer: {
    justifyContent: "center",
    alignSelf: "center",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
  },
  welcome: {
    fontSize: 15,
    textAlign: "center",
    position: "absolute",
    color: "white",
    width: 170,
    height: 100,
    paddingLeft: 5,
    paddingRight: 20,
    fontWeight: "bold",
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5,
  },
});
