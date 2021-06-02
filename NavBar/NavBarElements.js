import styled from 'styled-components'
import {Link as LinkR }from 'react-router-dom'
import {Link as LinkS} from 'react-scroll'
export const Nav = styled.nav`
    background: #000;
    height : 80px;
    //margin-top: -80px;
    display: flex;
    jsutify-content: center;
    align-items: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media screen and (max-width: 60px){
        transition: 0.8s all ease;
    }
`
export const NavBarContainer = styled.div
` display : flex;
justify-content: space-between;
height: 80px;
z-index: 1;
width: 100%
padding:  24px;
max-width: 1100px;
`

export const NavLogo = styled(LinkR)`
color: red;
justify-self: flec-start;
cursor: pointer;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-left: 24px;
font-weight: bold;
text-decoration:none;

`;

export const MobileIcon = styled.div`
display: none;
@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color:  #fff;
}
`

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;
margin-right: -22px;

@media screen and(max-width: 768px){
    display: none;
}
`

export const NavItem = styled.li`
color: #fff;
height: 80px;
text-align: right;
//position: absolute;
//right : 0;
`

export const NavLinks = styled(LinkS)`
color = red;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active{
    border-bottom: 3px solid #01bf71;
}
`;

