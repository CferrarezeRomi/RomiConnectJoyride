import styled from "styled-components"
import Cards from "../cards"
import LogoMain from "./logo"

const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

function Main (){
    return(
        <MainContainer>
            <LogoMain/>
            <Cards/>
        </MainContainer>
    )
}
export default Main