import React, { useState } from 'react';
import NavbarItem from '../../atom/NavbarItem';
import iconHamburger from '@frontendmentorAssets/BLPM/icon-hamburger.svg';
import iconClose from '@frontendmentorAssets/BLPM/icon-close.svg';
import { MenuWrapper, Logo, Nav, Links, Buttons, Icon } from './styles';

const NavigationBar = ({ className, info, iconsList, logo }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MenuWrapper className={className}>
      <Logo src={logo} alt='Blogr Logo' />
      <Nav isOpen={isOpen}>
        <Links>
          {info.map((item, i) => {
            return (
              <NavbarItem
                key={`${item.title}` + i}
                groupTitle={item.title}
                items={item.items}
                iconsList={iconsList}
              />
            );
          })}
        </Links>

        <Buttons>
          <button className='login'>Login</button>
          <button className='signUp'>Sign Up</button>
        </Buttons>
      </Nav>
      <Icon
        src={isOpen ? iconClose : iconHamburger}
        alt='menu icon'
        onClick={handleClick}
      />
    </MenuWrapper>
  );
};

export default NavigationBar;
