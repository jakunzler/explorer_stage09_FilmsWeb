import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";

import { Container, Content } from "./styles";

import { Header } from "../../components/Header";

import { Button } from "../../components/Button";

import { Note } from "../../components/Note";

import { Section } from "../../components/Section";

export function Home() {
    return(
        <Container>
            <Header>

            </Header>

            <Content>
                <div>
                    <Button title="+ Add new" to="/create"/>                    
                </div>
                
                <Section title="My Movies" >
                    <Note 
                        key={String(1)}
                        data={
                            {
                                title: "Interestellar",
                                description: "Crop pests caused human civilization to regress to an agrarian society in an unknown future date. Cooper, a former NASA pilot, has a farm with his family. Murphy, Cooper's ten-year-old daughter, believes her room is haunted by a ghost that is trying to communicate with her. Father and daughter discover that the 'ghost' is an unknown intelligence that is sending encoded messages through gravitational radiation, leaving binary coordinates that lead them to a secret NASA facility led by Professor John Brand. The scientist reveals that a wormhole has been opened near Saturn, leading to planets that may offer survival conditions for the human species. The 'Lazarus missions' sent years before identified three potentially habitable planets orbiting the black hole Gargantua: Miller, Edmunds, and Mann - named after the astronauts who researched them. Brand recruits Cooper to pilot the spacecraft Endurance and retrieve the astronauts' data; if one of the planets proves habitable, humanity will relocate to it at the NASA facility, which is actually a massive space station. Cooper's departure devastates Murphy. In addition to Cooper, the Endurance crew consists of biologist Amelia, Brand's daughter; scientist Romilly, planetary physicist Doyle, and the robots TARS and CASE. They enter the wormhole and head towards Miller, but discover that the planet experiences significant temporal gravitational dilation due to its proximity to Gargantua: every hour on the surface equals seven years on Earth. They land on Miller and discover it to be inhospitable, as it is covered by a shallow ocean and plagued by massive waves. An incoming wave hits the crew while Amelia attempts to retrieve Miller's data, killing Doyle and delaying their departure. Upon returning to the Endurance, Cooper and Amelia realize that 23 years have passed.",
                                tags: [{id: 1, name: "drama"}, {id: 2, name: "sci-fi"}, {id: 3, name: "space"}]
                            }
                        }
                    />

                    <Note 
                        key={String(1)}
                        data={
                            {
                                title: "Interestellar",
                                description: "Crop pests caused human civilization to regress to an agrarian society in an unknown future date. Cooper, a former NASA pilot, has a farm with his family. Murphy, Cooper's ten-year-old daughter, believes her room is haunted by a ghost that is trying to communicate with her. Father and daughter discover that the 'ghost' is an unknown intelligence that is sending encoded messages through gravitational radiation, leaving binary coordinates that lead them to a secret NASA facility led by Professor John Brand. The scientist reveals that a wormhole has been opened near Saturn, leading to planets that may offer survival conditions for the human species. The 'Lazarus missions' sent years before identified three potentially habitable planets orbiting the black hole Gargantua: Miller, Edmunds, and Mann - named after the astronauts who researched them. Brand recruits Cooper to pilot the spacecraft Endurance and retrieve the astronauts' data; if one of the planets proves habitable, humanity will relocate to it at the NASA facility, which is actually a massive space station. Cooper's departure devastates Murphy. In addition to Cooper, the Endurance crew consists of biologist Amelia, Brand's daughter; scientist Romilly, planetary physicist Doyle, and the robots TARS and CASE. They enter the wormhole and head towards Miller, but discover that the planet experiences significant temporal gravitational dilation due to its proximity to Gargantua: every hour on the surface equals seven years on Earth. They land on Miller and discover it to be inhospitable, as it is covered by a shallow ocean and plagued by massive waves. An incoming wave hits the crew while Amelia attempts to retrieve Miller's data, killing Doyle and delaying their departure. Upon returning to the Endurance, Cooper and Amelia realize that 23 years have passed.",
                                tags: [{id: 1, name: "drama"}, {id: 2, name: "sci-fi"}, {id: 3, name: "space"}]
                            }
                    }
                    />
                    
                    <Note 
                            key={String(1)}
                            data={
                                {
                                    title: "Interestellar",
                                    description: "Crop pests caused human civilization to regress to an agrarian society in an unknown future date. Cooper, a former NASA pilot, has a farm with his family. Murphy, Cooper's ten-year-old daughter, believes her room is haunted by a ghost that is trying to communicate with her. Father and daughter discover that the 'ghost' is an unknown intelligence that is sending encoded messages through gravitational radiation, leaving binary coordinates that lead them to a secret NASA facility led by Professor John Brand. The scientist reveals that a wormhole has been opened near Saturn, leading to planets that may offer survival conditions for the human species. The 'Lazarus missions' sent years before identified three potentially habitable planets orbiting the black hole Gargantua: Miller, Edmunds, and Mann - named after the astronauts who researched them. Brand recruits Cooper to pilot the spacecraft Endurance and retrieve the astronauts' data; if one of the planets proves habitable, humanity will relocate to it at the NASA facility, which is actually a massive space station. Cooper's departure devastates Murphy. In addition to Cooper, the Endurance crew consists of biologist Amelia, Brand's daughter; scientist Romilly, planetary physicist Doyle, and the robots TARS and CASE. They enter the wormhole and head towards Miller, but discover that the planet experiences significant temporal gravitational dilation due to its proximity to Gargantua: every hour on the surface equals seven years on Earth. They land on Miller and discover it to be inhospitable, as it is covered by a shallow ocean and plagued by massive waves. An incoming wave hits the crew while Amelia attempts to retrieve Miller's data, killing Doyle and delaying their departure. Upon returning to the Endurance, Cooper and Amelia realize that 23 years have passed.",
                                    tags: [{id: 1, name: "drama"}, {id: 2, name: "sci-fi"}, {id: 3, name: "space"}]
                                }
                            }
                        />
                    
                    
                    <Note 
                            key={String(1)}
                            data={
                                {
                                    title: "Interestellar",
                                    description: "Crop pests caused human civilization to regress to an agrarian society in an unknown future date. Cooper, a former NASA pilot, has a farm with his family. Murphy, Cooper's ten-year-old daughter, believes her room is haunted by a ghost that is trying to communicate with her. Father and daughter discover that the 'ghost' is an unknown intelligence that is sending encoded messages through gravitational radiation, leaving binary coordinates that lead them to a secret NASA facility led by Professor John Brand. The scientist reveals that a wormhole has been opened near Saturn, leading to planets that may offer survival conditions for the human species. The 'Lazarus missions' sent years before identified three potentially habitable planets orbiting the black hole Gargantua: Miller, Edmunds, and Mann - named after the astronauts who researched them. Brand recruits Cooper to pilot the spacecraft Endurance and retrieve the astronauts' data; if one of the planets proves habitable, humanity will relocate to it at the NASA facility, which is actually a massive space station. Cooper's departure devastates Murphy. In addition to Cooper, the Endurance crew consists of biologist Amelia, Brand's daughter; scientist Romilly, planetary physicist Doyle, and the robots TARS and CASE. They enter the wormhole and head towards Miller, but discover that the planet experiences significant temporal gravitational dilation due to its proximity to Gargantua: every hour on the surface equals seven years on Earth. They land on Miller and discover it to be inhospitable, as it is covered by a shallow ocean and plagued by massive waves. An incoming wave hits the crew while Amelia attempts to retrieve Miller's data, killing Doyle and delaying their departure. Upon returning to the Endurance, Cooper and Amelia realize that 23 years have passed.",
                                    tags: [{id: 1, name: "drama"}, {id: 2, name: "sci-fi"}, {id: 3, name: "space"}],
                                    rate: 4
                                }
                            }
                        />
                    
                    <Note 
                            key={String(1)}
                            data={
                                {
                                    title: "Interestellar",
                                    description: "Crop pests caused human civilization to regress to an agrarian society in an unknown future date. Cooper, a former NASA pilot, has a farm with his family. Murphy, Cooper's ten-year-old daughter, believes her room is haunted by a ghost that is trying to communicate with her. Father and daughter discover that the 'ghost' is an unknown intelligence that is sending encoded messages through gravitational radiation, leaving binary coordinates that lead them to a secret NASA facility led by Professor John Brand. The scientist reveals that a wormhole has been opened near Saturn, leading to planets that may offer survival conditions for the human species. The 'Lazarus missions' sent years before identified three potentially habitable planets orbiting the black hole Gargantua: Miller, Edmunds, and Mann - named after the astronauts who researched them. Brand recruits Cooper to pilot the spacecraft Endurance and retrieve the astronauts' data; if one of the planets proves habitable, humanity will relocate to it at the NASA facility, which is actually a massive space station. Cooper's departure devastates Murphy. In addition to Cooper, the Endurance crew consists of biologist Amelia, Brand's daughter; scientist Romilly, planetary physicist Doyle, and the robots TARS and CASE. They enter the wormhole and head towards Miller, but discover that the planet experiences significant temporal gravitational dilation due to its proximity to Gargantua: every hour on the surface equals seven years on Earth. They land on Miller and discover it to be inhospitable, as it is covered by a shallow ocean and plagued by massive waves. An incoming wave hits the crew while Amelia attempts to retrieve Miller's data, killing Doyle and delaying their departure. Upon returning to the Endurance, Cooper and Amelia realize that 23 years have passed.",
                                    tags: [{id: 1, name: "drama"}, {id: 2, name: "sci-fi"}, {id: 3, name: "space"}]
                                }
                            }
                        />
                    
                </ Section>

            </Content>
        </Container>
    )
};