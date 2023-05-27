import React from "react";
import HeroSlider, { Slide, Nav, OverlayContainer } from "hero-slider";
import Wrapper from "../Components/UI/Wrapper";
import Title from "../Components/UI/Title";
import Subtitle from "../Components/UI/Subtitle";

// Images
const bogliasco = "https://i.imgur.com/Gu5Cznz.jpg";
const countyClare = "https://i.imgur.com/idjXzVQ.jpg";
const craterRock = "https://i.imgur.com/8DYumaY.jpg";
const giauPass = "https://i.imgur.com/8IuucQZ.jpg";

export default function Hero() {
    return (
        <HeroSlider
            slidingAnimation="left_to_right"
            orientation="horizontal"
            initialSlide={1}
            onBeforeChange={(previousSlide, nextSlide) =>
                console.log("onBeforeChange", previousSlide, nextSlide)
            }
            onChange={(nextSlide) => console.log("onChange", nextSlide)}
            onAfterChange={(nextSlide) => console.log("onAfterChange", nextSlide)}
            style={{
                backgroundColor: "rgba(0, 0, 0, 0.33)",
                height: "100vh",
            }}
            settings={{
                slidingDuration: 250,
                slidingDelay: 100,
                shouldAutoplay: true,
                shouldDisplayButtons: true,
                autoplayDuration: 5000,
            }}
        >
            <OverlayContainer>
                <Wrapper>
                    <Title>Pasteleria Lilliam</Title>
                    <Subtitle>Comprometidos con la calidad, el dulce sabor en tu paladar</Subtitle>
                </Wrapper>
            </OverlayContainer>

            <Slide
                background={{
                    backgroundImage: giauPass,
                    backgroundAttachment: "fixed",
                }}
            />

            <Slide
                background={{
                    backgroundImage: bogliasco,
                    backgroundAttachment: "fixed",
                }}
            />

            <Slide
                background={{
                    backgroundImage: countyClare,
                    backgroundAttachment: "fixed",
                }}
            />

            <Slide
                background={{
                    backgroundImage: craterRock,
                    backgroundAttachment: "fixed",
                }}
            />

            <Nav />
        </HeroSlider>
    );
}
