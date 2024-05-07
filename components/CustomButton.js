import React from "react";
import { Button } from "react-native-elements";

export const ButtonType = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
};

export default function CustomButton({ title, type, onPress }) {
  const isPrimary = type === ButtonType.PRIMARY;
  const buttonStyle = isPrimary ? styles.primaryButton : styles.secondaryButton;
  const titleStyle = isPrimary ? styles.primaryTitle : styles.secondaryTitle;

  return (
    <Button
      title={title}
      onPress={onPress}
      buttonStyle={buttonStyle}
      titleStyle={titleStyle}
    />
  );
}

const styles = {
  primaryButton: {
    width: 300,
    height: 40,
    backgroundColor: "#A58E72",
    borderRadius: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
  },
  primaryTitle: {
    color: "#F6EAD3",
    fontWeight: "bold",
    marginLeft: 10,
  },
  secondaryButton: {
    // insert styles
  },
  secondaryTitle: {
    // insert styles
  },
};
