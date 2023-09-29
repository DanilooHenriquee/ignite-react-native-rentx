import { PropsWithChildren } from 'react';
import { FlatList } from 'react-native';

import { RFValue } from 'react-native-responsive-fontsize';
import { RectButton } from 'react-native-gesture-handler';

import { CarDTO } from '../../dtos/CarDTO';

import styled from 'styled-components/native';

interface Props {}

export const Container = styled.View`
    flex: 1;

    background-color: ${({ theme }) => theme.colors.background_primary };
`;

export const Header = styled.View`
    width: 100%;
    height: 113px;

    background-color: ${({ theme }) => theme.colors.header };
    
    justify-content: flex-end;
    padding: 32px 24px;
`;

export const HeaderContent = styled.View`
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const TotalCars = styled.Text`
    font-size: ${RFValue(15)}px;
    font-family: ${({ theme }) => theme.fonts.primary_400};

    color: ${({ theme }) => theme.colors.text };
`;

export const CarList = styled(FlatList as new () => FlatList<CarDTO>).attrs({
    contentContainerStyle: {
        padding: 24
    },
    showsVerticalScrollIndicator: false
})``;

export const MyCarsButton = styled(RectButton)<PropsWithChildren<Props>>`
    width: 60px;
    height: 60px;

    border-radius: 30px;

    justify-content: center;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.main };

    position: absolute;
    bottom: 13px;
    right: 22px;
`;