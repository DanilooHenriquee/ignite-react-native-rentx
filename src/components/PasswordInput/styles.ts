import { RFValue } from 'react-native-responsive-fontsize';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
    flex-direction: row;
`;

export const IconContainer = styled.View`
    height: 56px;
    width: 55px;
    justify-content: center;
    align-items: center;    

    background-color: ${({theme}) => theme.colors.background_secondary};
`

export const InputText = styled(TextInput)`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background_secondary};
    color: ${({theme}) => theme.colors.text};
    font-family: ${({theme}) => theme.fonts.primary_400};
    font-size: ${RFValue(15)}px;
    margin-left: 2px;

    padding: 0 23px;
`;