import React from 'react'

import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';

export default function DropdownBox({ rightIcon, name, leftIcon }) {
    return (
        <Dropdown>
            <MenuButton>{rightIcon} {name} {leftIcon}</MenuButton>
            <Menu>
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </Dropdown>
    )
}
