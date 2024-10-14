import styled from "styled-components";
import { NotificationsIcon } from "../../assets";

const HeaderDescription = styled.div`
    display:flex;
    gap: 10px;
    margin-left: auto;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    color: #FBFBFB;
    align-items: center;
`
const DescriptionVersion = styled.h2`
    padding: 0 .4em 0 0;
    margin: 0;
    color: #FFFFFF40; 
    font-size: 16px;
    font-weight:400;
    &:hover{
        color: var(--branco-suave);
        cursor: pointer;
    }
`
const DescriptionUser = styled.div`
    display: flex;
    align-items: center;
    gap: .5em;
    border-left: 1px solid #fbfbfb;
    padding-left: 1em;
    font-weight: 700;
    
`
const UserIcon = styled.h2`
    border: 2px solid #fbfbfb;
    padding: .4em;
    margin: 0;
    border-radius: 80%;
    background: #fbfbfb;
    color: #0067A6;
    font-weight: 700;
    cursor: pointer;
    font-size: 16px;
    height: 15px;
    
`
const UserName = styled.h2`
    margin: 0;
    font-size: 16px;
    cursor: pointer;
`

function HeaderDescripition(){
    return(
        <HeaderDescription>
                <DescriptionVersion>v_prod-b4ae026</DescriptionVersion>
                <img src={NotificationsIcon} className="img"/>
                <DescriptionUser className="user">
                    <UserIcon>CF</UserIcon>
                    <UserName>Caio Ferrareze</UserName>
                </DescriptionUser>
            </HeaderDescription>
    )
}

export default HeaderDescripition