import styled from 'styled-components';
import bgimage from '../../img/bg.png';

export const StyledTetrisWrapper = styled.div`
width: 100vw;
height: 100vh;
background: url(${bgimage}) #000;
background-size: cover;
overflow: hidden;
`

export const StyledTetris = styled.div`
display: flex;
align-items: flex-start;
padding: 40px;
margin: 0 auto;
max-width: 900px;

aside {
    width: 100 %;
    display: block;
    max-width: 200px;
    padding: 0 20px;
}
`
