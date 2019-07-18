import React             from 'react';
import Icon              from 'Assets/icon.jsx';
import { ToggleDrawer }  from '../../Elements/Drawer';
import MenuDrawer        from '../../../Containers/Drawer/menu-drawer.jsx';
import 'Sass/app/_common/drawer/drawer.scss';

const ToggleMenuDrawer = () => (
    <ToggleDrawer
        alignment='left'
        icon={<Icon icon='IconHamburger' />}
        icon_class='header__menu-toggle'
    >
        <MenuDrawer />
    </ToggleDrawer>
);

export default ToggleMenuDrawer;
