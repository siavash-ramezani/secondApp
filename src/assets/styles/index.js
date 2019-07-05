import EstyleSheet from "react-native-extended-stylesheet";

export const form = EstyleSheet.create({
  form: {
    padding: 20
  },
  item: {
    borderRadius: 5,
    marginBottom: 10,
    paddingRight: 10,
    paddingLeft: 10
  },
  input: {
    fontFamily: "$IS",
    fontSize: 14,
    textAlign: "right"
  },
  submitButton: {
    borderRadius: 5,
    backgroundColor: "#34495b"
  },
  submitText: {
    color: "white",
    fontFamily: "$IS",
    fontSize: 16
  },
  error: {
    fontFamily: "$IS",
    textAlign: "right",
    fontSize: 12,
    color: "#ed2f2f",
    marginBottom: 15
  }
});

export const index = EstyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#34495b"
  },
  splashText: {
    fontSize: 18,
    marginBottom: 15,
    fontFamily: "$IS",
    color: "white"
  }
});
export default (styles = {
  index
});
