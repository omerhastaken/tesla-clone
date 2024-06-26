import React from 'react'
import styled from 'styled-components'
import Section from './Section'

function Home() {
  return (
    <Container>
    <Section
        title="METIN 1"
        description="..."
        leftBtnText="More Info"
        rightBtnText="Existing Inventory"
        />
    <Section 
    title="METIN 2"
    description="..."
    leftBtnText="Custom Order"
    rightBtnText="Existing Inventory"
    />
    <Section
    title="Model X"
    description="Order Online for Touchless Delivery"
    backgroundImg="model-x.jpg"
    leftBtnText="Custom Order"
    rightBtnText="Existing Inventory"
     />
    <Section
    title="Model Y"
    description="Order Online for Touchless Delivery"
    backgroundImg="model-y.jpg"
    leftBtnText="Custom Order"
    rightBtnText="Existing Inventory"
     />
    <Section
    title="Lowest Cost Solar Panels in America"
    description="Money Back Guarantee"
    backgroundImg="solar-panel.jpg"
    leftBtnText="Order Now"
    rightBtnText="Learn More"
     />
     <Section
    title="Solar for New Roofs"
    description="Solar Roof Cost Less Than a New Roof Plus Solar Systems"
    backgroundImg="solar-roof.jpg"
    leftBtnText="Order Now"
    rightBtnText="Learn More"
     />
     <Section
    title="Accessories"
    description=""
    backgroundImg="accessories.jpg"
    leftBtnText="Shop Now"
     />
    </Container>
  )
}

export default Home

const Container = styled.div`
    height; 100vh;
`