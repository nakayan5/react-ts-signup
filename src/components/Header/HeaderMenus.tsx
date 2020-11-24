import React, {ChangeEvent, useEffect} from 'react'
import IconButton from '@material-ui/core/IconButton'
// import Badge from '@material-ui/core/Badge'
// import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
// import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import MenuIcon from '@material-ui/icons/Menu'


interface HeaderMenusProps {
    handleDrawerToggle: () => void
}


const HeaderMenus: React.FC<HeaderMenusProps> = ({handleDrawerToggle}) => {

    return (
        <>
            {/* <IconButton>
                <FavoriteBorderIcon />
            </IconButton> */}
            <IconButton onClick={handleDrawerToggle}>
                <MenuIcon />
            </IconButton>
        </>
    )
}

export default HeaderMenus;