import React from 'react';
import {  Route, Routes } from "react-router";
import Nav from './Components/Nav';
import Homepage from './Routes/Homepage';
import BookingPage from './Routes/BookingPage';
import styled from 'styled-components';
function App() {
  return (
    <Container >
    <Nav/>
    <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path="/booking" element={<BookingPage />}></Route>
     </Routes>
    </Container>
  );
}

export default App;

const Container = styled.div`
width:100%;
height:auto;
display: grid;
grid-template-columns: repeat(12, 1fr); /* 12 columns of equal width */
grid-template-rows: repeat(22, 1fr);
grid-gap: 10px; /* space between columns */

`