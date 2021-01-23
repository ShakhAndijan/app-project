import React from 'react'
import{
Container,
FormWrap,
Icon,
FormContent,
Form,
FormH1,
FormLabel,
FormInput,
FormButton,
Text
} from './SigninElements'


const Signin = () => {
    return (
        <>
            <Container>
                <FormWrap>
                    <Icon to="/">
                        Shakh
                    </Icon>
                    <FormContent>
                        <Form action="#">
                            <FormH1>
                                Sign in to your account
                            </FormH1>
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' reuqired/>
                            <FormLabel htmlFor='for' >Password</FormLabel>
                            <FormInput type='password' />
                            <FormButton type='submit' >Continue</FormButton>
                            <Text>Forgot password</Text>
                        </Form>
                    </FormContent>
                </FormWrap>
            </Container>
        </>
    )
}

export default Signin
