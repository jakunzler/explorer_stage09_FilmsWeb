import { Container, Links, Content, Avatar } from './styles';

import { FiArrowLeft, FiClock } from 'react-icons/fi';

import { useState, useEffect } from 'react';

import { useParams, useNavigate, Link } from "react-router-dom";

import { Header } from '../../components/Header';

import { Section } from '../../components/Section';

import { Rate } from '../../components/Rate';

import { ButtonText } from '../../components/ButtonText';

import { Button } from '../../components/Button';

import { Tag } from '../../components/Tag';

import emptyImage from "../../assets/empty-profile.png";

export function Details() {
    const [data, setData] = useState(null);

    const params = useParams();
    const navigate = useNavigate();

    const user = { name: "Avatar da Silva Sauro"}
    const avatarUrl = user.avatar ? {} : emptyImage;

    function handleBack() {
        navigate(-1);
    }

    return (
        <Container>
            <Header />

            <main>
                <Content>

                    <header>
                        <Link to="/">
                            <div>
                                <FiArrowLeft />
                                back                        
                            </div>

                        </Link>
                    </header>

                    <Section title="Interestellar">
                        <div>
                            <Rate rate={3.2} />
                        </div>
                    </Section>

                    <div className="author">
                        <Avatar>
                            <img 
                                src={avatarUrl} 
                                alt={`Foto do usuário ${user.name}`}
                            />
                        </Avatar>

                        <span>Por {user.name}</span>

                        <FiClock  color="#FF859B"/>

                        <span>2023-06-22T 2:49Z</span>
                    </div>

                    <div>
                        {[{id: 1, name: "drama"}, {id: 2, name: "sci-fi"}, {id: 3, name: "space"}].map(tag => <Tag key={tag.id} title={tag.name} />)}
                    </div>

                    <p>Crop pests caused human civilization to regress to an agrarian society in an unknown future date. Cooper, a former NASA pilot, has a farm with his family. Murphy, Cooper's ten-year-old daughter, believes her room is haunted by a ghost that is trying to communicate with her. Father and daughter discover that the 'ghost' is an unknown intelligence that is sending encoded messages through gravitational radiation, leaving binary coordinates that lead them to a secret NASA facility led by Professor John Brand. The scientist reveals that a wormhole has been opened near Saturn, leading to planets that may offer survival conditions for the human species. The 'Lazarus missions' sent years before identified three potentially habitable planets orbiting the black hole Gargantua: Miller, Edmunds, and Mann - named after the astronauts who researched them. Brand recruits Cooper to pilot the spacecraft Endurance and retrieve the astronauts' data; if one of the planets proves habitable, humanity will relocate to it at the NASA facility, which is actually a massive space station. Cooper's departure devastates Murphy. In addition to Cooper, the Endurance crew consists of biologist Amelia, Brand's daughter; scientist Romilly, planetary physicist Doyle, and the robots TARS and CASE.</p>

                    <p>They enter the wormhole and head towards Miller, but discover that the planet experiences significant temporal gravitational dilation due to its proximity to Gargantua: every hour on the surface equals seven years on Earth. They land on Miller and discover it to be inhospitable, as it is covered by a shallow ocean and plagued by massive waves. An incoming wave hits the crew while Amelia attempts to retrieve Miller's data, killing Doyle and delaying their departure. Upon returning to the Endurance, Cooper and Amelia realize that 23 years have passed.</p>

                </Content>
            </main>
        </Container>
    )
}