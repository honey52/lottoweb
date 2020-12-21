import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import '../index.css';

const styles = theme => ({
    fab: {
        position:'fixed',
        bottom:'20px',
        right:'20px'
    },
})

class MakeBall extends React.Component {
    constructor() {
        super();
        this.state = {
            lottos: {},
            myBallList: {},
            ball1 : 0,
            ball2 : 0,
            ball3 : 0,
            ball4 : 0,
            ball5 : 0,
            ball6 : 0
        };
    }

    componentDidMount() {
    }

    render(){
        const{classes} = this.props;
        return(
            <div>
               번호 추출기 페이지
            </div>
        );
    }
}

export default withStyles(styles)(MakeBall);