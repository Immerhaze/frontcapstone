import React from 'react';
import styled from 'styled-components';

function Footer() {
  const Footer_Info=[
    {title:'Navigation',Links:['Home', 'About', 'Menu', 'Reservations', 'Order Online', 'Login']},
    {title:'Contact',Links:['Adress', 'Phone Number', 'E-mail']},
    {title:'Social Media',Links:['Instagram','Facebook']}
  ]
  return (
    <Container>
       {Footer_Info.map((item)=> {
                return(
                <Card key={item.title}>
                   <Title>
                    <span>{item.title}</span>
                   </Title>
                   <Links>
                    <span>{item.Links}</span>
                   </Links>
                </Card>
                )
            })}
      <p>Copyright Little Lemon</p>
      <p>All rights reserved</p>
    </Container>
  );
}

export default Footer;
const Container = styled.div`
grid-column:1/13;
grid-row:20/23;
background:#495E57;
`
const Card = styled.div`
background:red;
width:100%;
`

const Title = styled.div`
grid-column:1/13;
grid-row:20/23;
background:#495E57;
`
const Links = styled.div`
grid-column:1/13;
grid-row:20/23;
background:#495E57;
`

