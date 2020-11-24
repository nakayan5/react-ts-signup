import React, {useState, useCallback} from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import {Theme} from '@material-ui/core/styles/createMuiTheme'
import withStyles, {WithStyles, StyleRules} from '@material-ui/core/styles/withStyles'
import createStyles from '@material-ui/core/styles/createStyles'
import HeaderMenus from './HeaderMenus'
import ClosableDrawer from './ClosableDrawer'

const useStyles = (theme: Theme): StyleRules => createStyles({
    root: {
        flexGrow: 1
    },
    menuBar: {
        backgroundColor: '#fff',
        color: '#444'
    },
    toolBar: {
        maxWidth: 1024,
        margin: '0 auto',
        width: '100%'
    },
    iconButtons: {
        margin: '0 0 0 auto'
    }
})


const Header: React.FC<WithStyles<typeof useStyles>> = ({classes}: WithStyles<typeof useStyles>) => {

    const [open, setOpen] = useState<boolean>(false)

    const handleDrawerToggle = useCallback(() => {
        // if (e.type === 'keword' && (e.key === 'Tab' || e.key === 'Shift')) {
        //     return;
        // }
        setOpen(!open)
    }, [setOpen, open])

    return (
        <div className={classes.root}>
            <AppBar className={classes.menuBar}>
                <Toolbar className={classes.toolBar}>
                    <div>header</div>
                    <div className={classes.iconButtons}>
                        <HeaderMenus handleDrawerToggle={handleDrawerToggle} />
                    </div>
                </Toolbar>
            </AppBar>
            <ClosableDrawer open={open} onClose={handleDrawerToggle} />
        </div>
    )
}

export default withStyles(useStyles)(Header);