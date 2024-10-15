import styled from "styled-components"
import ImgFab from "../../assets/Logo_fabrica.svg"
import ImgRent from "../../assets/Logo_locacao.svg"

interface CardProps {
    image: React.ReactNode; 
    title: string;
    text: string;
    color: string;
    className?: string;
}
const CardLinkContainer = styled.a`
    text-decoration: none;
    color: #000000;
    font-family: "Roboto", sans-serif;
    transition: transform 0.6s ease;
    &:hover{
        transform: scale(1.05);
    }    
`
const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    border: 2px;
    top: 295px;
    left: 882px;
`
const CardImgContaider = styled.div<{color?: string}>`
    padding: 1em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 0.5px solid #27272766;
    border-radius: 4px;
    width: 24.5em;
    height: 6em;
    border-radius: 4px 4px 0px 0px;
    background: ${(props)=> props.color};
`
const CardDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1em;
    background-color: #FFFFFF;
    height: 6em;
    width: 24.5em;
    justify-content: center;
    gap: 5px;
    border-left:0.5px solid #27272766; 
    border-right: 0.5px solid #27272766;
    border-bottom: 0.5px solid #27272766;
    border-radius: 0 0 4px 4px;
`
const CardDescriptionTitle = styled.h2`
    color: #0067A6;
    font-size: 24px;
    font-weight: 700;
    margin: 0;
`
const CardDescriptionContext = styled.p`
    margin: 0;
    font-size:12px;
`
export const cardData = [
    {   
        image: <img src={ImgFab} alt="Logo_Fabrica" />,
        title: "Fábrica",
        text: "Visualize painéis, indicadores e os dados de suas máquinas.",
        color: "linear-gradient(rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.333)) rgb(0, 103, 166);",
        className: "card-fabrica"
    },
    {   image: <img src={ImgRent} alt="Logo_Locacao" />,
        title: "Locação",
        text: "Monitore a utilização e informações relevantes do aluguel.",
        color: "linear-gradient(180deg, #00AE06 0%, #0D6E10 100%) 0% 0% no-repeat padding-box;",
        className: "card-locacao"
    }
]
function Card ({image, title, text, color, className}: CardProps) {
    return (
            <CardLinkContainer className={`${className}`}>
                <CardContainer>
                    <CardImgContaider color={`${color}`}>
                        {image}
                    </CardImgContaider>
                    <CardDescriptionContainer>
                        <CardDescriptionTitle>{title}</CardDescriptionTitle>
                        <CardDescriptionContext>{text}</CardDescriptionContext>
                    </CardDescriptionContainer>
                </CardContainer>
            </CardLinkContainer>
    )
}
export default Card