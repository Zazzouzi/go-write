import React from 'react';
import { Button } from 'react-native-elements';

export const ButtonType = {
    PRIMARY: 'primary',
    SECONDARY: 'secondary',
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
			// insert styles
    },
    primaryTitle: {
			// insert styles
    },
    secondaryButton: {
			// insert styles
    },
    secondaryTitle: {
			// insert styles
    },
};