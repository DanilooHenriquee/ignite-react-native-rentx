import React from 'react';

import { StatusBar } from 'react-native';
import { Button } from '../../components/Button';
import { useTheme } from 'styled-components';

import { Input } from '../../components/Input';
import { PasswordInput } from '../../components/PasswordInput';

import {
    Container,
    Header,
    Title,
    SubTitle,
    Form,
    Footer
} from './styles';



export function SignIn() {

    const theme = useTheme();

    return (
        <Container>
            <StatusBar
                barStyle="dark-content"
                backgroundColor="transparent"
                translucent
            />
            <Header>
                <Title>
                    Estamos{'\n'}quase lá.
                </Title>
                <SubTitle>
                    Faça seu login para começar{'\n'}
                    uma experiência incrível.
                </SubTitle>
            </Header>

            <Form>
                <Input 
                    iconName="mail"
                    placeholder="E-mail"
                    keyboardType="email-address"
                    autoCorrect={false}
                    autoCapitalize="none"
                />

                <PasswordInput
                    iconName="lock"
                    placeholder="Senha"
                />
            </Form>

            <Footer>
                <Button 
                    title="Login"
                    onPress={() => {}}
                    enabled={false}
                    loading={false}
                />

                <Button 
                    title="Criar conta gratuita"
                    color={theme.colors.background_secondary}
                    light
                    onPress={() => {}}
                    enabled={true}
                    loading={false}
                />
            </Footer>
        </Container>
    );
}