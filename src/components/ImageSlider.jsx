import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    overflow-x: hidden; 
`;

const Slide = styled.div`
    height: 100%;
    width: 100vw;
    flex-shrink: 0;
    background-position: center center;
    background-size: cover;
    transition: 750ms all ease-in-out;

`;


const ImageSlider = ({ 
    images = [], 
    autoPlay = true,
    autoPlayTime = 30000,
    children,
    ...props }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        
        const timer = setTimeout(() => {
            const newSlideIndex = currentSlide >= images.length -1 ? 0 : currentSlide + 1
            setCurrentSlide(newSlideIndex)
        }, autoPlayTime);

        return () => clearTimeout(timer)

    }, [currentSlide])
    return (
        <Wrapper { ...props }>
            
                {
                    images.map((imageUrl, index) =>(
                        <Slide key = { index } style = {{backgroundImage: `url(${imageUrl})`, marginLeft: index === 0  ? `-${currentSlide * 100}%` : undefined }}>
                        </Slide>
                    ))
                }
            
        </Wrapper>
    )
}

export default ImageSlider
