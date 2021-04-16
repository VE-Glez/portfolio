import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import NavigationLinks from './NavigationLinks';

export default function TemporaryDrawer({ isOpen, setIsOpen }) {
  return (
    <Drawer anchor='left' open={isOpen} onClose={() => setIsOpen(false)}>
      <NavigationLinks
        key='temporalDrawerNavlinks'
        device='mobile'
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </Drawer>
  );
}
