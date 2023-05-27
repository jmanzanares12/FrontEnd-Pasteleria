import React from "react";
import HeroSlider, { Slide, Nav, Overlay } from "hero-slider";
import Wrapper from "../Components/UI/Wrapper";
import Title from "../Components/UI/Title";
import Subtitle from "../Components/UI/Subtitle";

// Images
import pastelchocolateImage from "../img/pastelchocolate.jpg";
import pastelfresaImage from "../img/pastelfresa.jpg";
import pastelcumpleañosImage from "../img/pastelcupleaños.jpg";
import tortasypudinesImage from "../img/tortasypudines.jpg";

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
                color: "white",
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
            <Overlay>
                <Wrapper>
                    <Title>Pastelería Lilliam</Title>
                    <Subtitle>Comprometidos con la calidad, el dulce sabor en tu paladar</Subtitle>
                </Wrapper>
            </Overlay>

            <Slide
                background={{
                    backgroundImage: `url(${pastelfresaImage})`,
                    backgroundAttachment: "fixed",
                }}
            />

            <Slide
                background={{
                    backgroundImage: `url(${pastelchocolateImage})`,
                    backgroundAttachment: "fixed",
                }}
            />

            <Slide
                background={{
                    backgroundImage: `url(${pastelcumpleañosImage})`,
                    backgroundAttachment: "fixed",
                }}
            />

            <Slide
                background={{
                    backgroundImage: `url(${tortasypudinesImage})`,
                    backgroundAttachment: "fixed",
                }}
            />
            <Nav />
        </HeroSlider>
    );
}
