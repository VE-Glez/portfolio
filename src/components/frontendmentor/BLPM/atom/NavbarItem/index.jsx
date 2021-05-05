import React, { useState } from 'react';
import { PropTypes } from 'prop-types';
import { Title, ListItem, Lista, Icon, SecondaryList } from './styles.js';
const NavbarItem = ({ groupTitle, items, iconsList }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked((pv) => !pv);
  };
  return (
    <>
      <Lista>
        {' '}
        {/*tabIndex="0" onBlur={() => setIsClicked(false)}> */}
        <Title onClick={handleClick}>
          {groupTitle}{' '}
          <picture>
            <source media='(min-width: 1440px)' srcSet={iconsList[1]} />
            <Icon
              isClicked={isClicked}
              src={iconsList[0]}
              alt={`${groupTitle} icon mobile`}
            />
          </picture>
        </Title>
        <SecondaryList isClicked={isClicked}>
          {items.map((item, i) => (
            <ListItem key={groupTitle + i}>{item}</ListItem>
          ))}
        </SecondaryList>
      </Lista>
    </>
  );
};

NavbarItem.propTypes = {
  groupTitle: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  iconsList: PropTypes.any.isRequired,
};

export default NavbarItem;
