import styled from "styled-components";
import Card from "./card";
import { cardData } from "./card";

const CardsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1em;
`;

function Cards() {
  return (
    <CardsContainer className="cards-container"> 
      {cardData.map((card) => (
        <Card
          key={card.title} 
          image={card.image}
          title={card.title}
          text={card.text}
          color={card.color}
          className={card.className}
        />
      ))}
    </CardsContainer>
  );
}

export default Cards;