import styled from "styled-components";
// import LogoImg from "../../assets/logo_romi_connect-e5022712.svg"
import LogoImg from "../../assets/LOGO-ROMI-PULSE-AZUL 1.svg"

const LogoContainer = styled.div`
`
const Logo = styled.img`
    /* width: 950px; */
    width: 550px;
    margin: 2rem 0
`
function LogoMain (){
    return(
        <LogoContainer>
            <Logo src={LogoImg}/>
        </LogoContainer>
    )
}
export default LogoMain