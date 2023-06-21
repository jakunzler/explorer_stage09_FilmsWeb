import { useState } from 'react';
import { Container, Form, Background } from './styles';
import { FiMail, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';

import { Input} from '../../components/Input';
import { Button} from '../../components/Button';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { signIn } = {};

    function handleSignIn() {
        signIn({
            email,
            password
        });
    };

    return (
        <Container>
            <Form>
                
                <h1>RocketMovies</h1>
                <p>Save and manage your favorite movies.</p>

                <h2>Please, login!</h2>

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input
                    placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={e => setPassword(e.target.value)}
                />

                <Button title="Entrar" onClick={ handleSignIn } />

                <Link to="/register">
                    Sign up
                </Link>

            </Form>
            
            <Background />

        </Container>
    );
}