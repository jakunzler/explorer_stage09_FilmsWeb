import { Container, Brand, Search, Profile, Logout, Avatar } from "./styles";
import { Input } from "../Input";
import emptyImage from "../../assets/empty-profile.png";

export function Header() {
    let { signOut, user } = {};

    user = { name: "Avatar da Silva Sauro"}
    const avatarUrl = user.avatar ? {} : emptyImage;


    return(
        <Container>
            <Brand to="/">
                <h1>RocketMovies</h1>
            </Brand>

            <Search>
                <Input 
                    placeholder="Enter the title of the movie"
                    onChange={(event) => setSearch(event.target.value)}
                />
            </Search>

            <Profile>
                <div>
                    <strong>{user.name}</strong>
                    <Logout onClick={ signOut }>
                        logout
                    </Logout>
                </div>

                <Avatar to="/profile">
                    <img 
                        src={avatarUrl} 
                        alt={`Foto do usuário ${user.name}`}
                    />

                </Avatar>
            </Profile>
        </Container>
    )
}