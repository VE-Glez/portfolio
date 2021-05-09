import React from 'react';
import FollowerCard from '../FollowerCard/FollowerCard';
import data from './data';
import { Container } from './styles';
export default function ListOfFollowerCards() {
  return (
    <Container>
      {data.map((item) =>
        React.cloneElement(<FollowerCard {...item} />, { key: item.socialName })
      )}
    </Container>
  );
}
