import React from 'react'
// import {makeStyles} from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import {Theme} from '@material-ui/core/styles/createMuiTheme'
import withStyles, {WithStyles, StyleRules} from '@material-ui/core/styles/withStyles'
import createStyles from '@material-ui/core/styles/createStyles'

const styles = (theme: Theme): StyleRules => createStyles({
    button: {
        backgroundColor: '#4dd0e1',
        color: '0001',
        heigth: 48,
        fontSize: 16,
        marginButton: 16,
        width: 256,
        "&:hover": {
            backgroundColor: theme.palette.primary.light,
        }
    }
})

interface PrimaryButtonProps extends WithStyles<typeof styles> {
  label: string;
}




const PrimaryButton: React.FC<PrimaryButtonProps> = ({}) => {

    return (
        <Button>
            ボタン
        </Button>
    )
}

export default withStyles(styles)(PrimaryButton);