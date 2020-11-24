import React, {useCallback, useState} from 'react'
import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import IconButton from '@material-ui/core/IconButton'
import SearchIcon from '@material-ui/icons/Search'
import AddCircleIcon from '@material-ui/icons/AddCircle'
import HistoryIcon from '@material-ui/icons/History'
import PersonIcon from '@material-ui/icons/Person'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import TextInput from '../TextInput'
import {Theme} from '@material-ui/core/styles/createMuiTheme'
import withStyles, {WithStyles, StyleRules} from '@material-ui/core/styles/withStyles'
import createStyles from '@material-ui/core/styles/createStyles'

const useStyles = (theme: Theme): StyleRules => createStyles({
    drawer: {
        // [theme.breakpoints.up['sm']] :{
        //     flexShrink: 0,
        //     width: 256
        // }
    },
    toobar: {

    },
    drawerPaper: {
        width: 256
    },
    searchField: {
        alignItems: 'center',
        display: 'flex',
        marginLeft: 32
    }
})

interface ClosableDrawerProps extends WithStyles<typeof useStyles> {
    open: boolean;
    onClose: () => void;
}


const ClosableDrawer: React.FC<ClosableDrawerProps> = ({classes, open, onClose}: ClosableDrawerProps) => {

    const menus = [
        {label: 'マイページ', icon: <PersonIcon />, id: 'mypage'}
    ]

    return (
        <nav>
            <Drawer
                // container={container} 
                variant='temporary'
                anchor='right' open={open}
                onClose={onClose}
                classes={{paper: classes.drawerPaper}}
                ModalProps={{keepMounted: true}} 
            >
                <div> 
                    <List>
                        {menus.map(menu => (
                            <ListItem button key={menu.id}> 
                                <ListItemIcon>
                                    {menu.icon}
                                </ListItemIcon>
                                <ListItemText primary={menu.label} />
                            </ListItem>
                        ))}
                    </List>
                </div>
                
            </Drawer>
        </nav>
    )
}

export default withStyles(useStyles)(ClosableDrawer);