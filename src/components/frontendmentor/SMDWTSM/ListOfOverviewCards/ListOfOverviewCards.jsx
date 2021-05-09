import React from 'react';
import { Container } from '../ListOfFollowerCards/styles';
import OverviewCard from '../OverviewCard/OverviewCard';
import { overviewCardsData } from './data';

const ListOfOverviewCards = ({ className }) => {
  return (
    <Container className={className}>
      <h2>Overview - Today</h2>
      {overviewCardsData.map((card) => {
        return React.cloneElement(<OverviewCard {...card} />, { key: card.id });
      })}
    </Container>
  );
};

export default ListOfOverviewCards;
