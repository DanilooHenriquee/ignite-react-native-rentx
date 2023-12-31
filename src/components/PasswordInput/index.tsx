import React, { useState } from 'react';
import { Feather } from '@expo/vector-icons';
import { useTheme } from 'styled-components';

import { TextInputProps } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import {
    Container,
    InputText,
    IconContainer
} from './styles';

interface Props extends TextInputProps {
    iconName: React.ComponentProps<typeof Feather>['name']
}

export function PasswordInput({
    iconName,
    ...rest
}: Props) {
    const [isPasswordVisible, setIsPasswordVisible] = useState(true);

    const theme = useTheme();

    function handlePasswordVisibityChange() {
        setIsPasswordVisible(state => !state);
    }

    return (
        <Container>
            <IconContainer>
                <Feather 
                    name={iconName}
                    size={24}
                    color={theme.colors.text_detail}
                />
            </IconContainer>

            <InputText 
                secureTextEntry={isPasswordVisible}
                {...rest}
            />

            <BorderlessButton onPress={handlePasswordVisibityChange}>
                <IconContainer>
                    <Feather 
                        name={isPasswordVisible ? "eye" : "eye-off"}
                        size={24}
                        color={theme.colors.text_detail}
                    />
                </IconContainer>
            </BorderlessButton>
        </Container>
    );
}