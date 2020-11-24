import React from 'react'
// import {makeStyles} from '@material-ui/styles'
import Button from '@material-ui/core/Button'
import {Theme} from '@material-ui/core/styles/createMuiTheme'
import withStyles, {WithStyles, StyleRules} from '@material-ui/core/styles/withStyles'
import createStyles from '@material-ui/core/styles/createStyles'

const useStyles = (theme: Theme): StyleRules => createStyles({
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



interface PrimaryButtonProps extends WithStyles<typeof useStyles> {
    label: string;
    onClick: () => void;
}


const PrimaryButton: React.FC<PrimaryButtonProps> = ({classes, label, onClick}: PrimaryButtonProps) => {

    return (
        <Button className={classes.button} onClick={onClick}>
            {label}
        </Button>
    )
}

export default withStyles(useStyles)(PrimaryButton);