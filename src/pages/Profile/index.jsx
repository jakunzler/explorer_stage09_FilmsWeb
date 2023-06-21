import { useState } from "react";

import { FiArrowLeft, FiUser, FiMail, FiLock, FiCamera } from 'react-icons/fi'

import { Container, Form, Avatar } from "./styles"

import { Link } from "react-router-dom"

import { Input } from "../../components/Input"

import { Button } from "../../components/Button"

import emptyImage from "../../assets/empty-profile.png"

export function Profile() {
    const { user, updateProfile } = { user: { name: "Avatar da Silva Sauro", email: "avatar@email.com" }};
    const [name, setName] = useState(user.name);
    const [email, setEmail] = useState(user.email);
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();
    const avatarUrl = emptyImage;
    const [avatar, setAvatar] = useState(avatarUrl);
    const [avatarFile, setAvatarFile] = useState(null);

    async function handleUpdate() {
        const user = {
            name,
            email,
            oldPassword: oldPassword,
            newPassword: newPassword
        };

        await updateProfile({
            user,
            avatarFile
        });
    };

    function handleChangeAvatar(event) {
        const file = event.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    };

    return (
        <Container >
            <header>
                <Link to="/">
                    <div>
                        <FiArrowLeft />
                        back                        
                    </div>

                </Link>
            </header>

            <Form>
                <Avatar>
                    <img 
                    src={avatar}
                    alt="Foto do usuário" />

                    <label htmlFor="avatar">
                        <FiCamera />

                        <input 
                        type="file" 
                        id="avatar"
                        onChange={ handleChangeAvatar }
                        />

                    </label>
                </Avatar>

                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                    value={name}
                    onChange={event => setName(event.target.value)}
                    />

                <Input
                    placeholder="E-mail"
                    type="text"
                    icon={FiMail}
                    value={email}
                    onChange={event => setEmail(event.target.value)}
                    />

                <Input
                    placeholder="Current password"
                    type="password"
                    icon={FiLock}
                    onChange={event => setOldPassword(event.target.value)}
                    />

                <Input
                    placeholder="New password"
                    type="password"
                    icon={FiLock}
                    onChange={event => setNewPassword(event.target.value)}
                    />

                <Button title="Save" onClick={ handleUpdate } />
            </Form>
        </Container >
    );
}