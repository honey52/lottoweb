import React from 'react';
import CustomCard from './CustomCard';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import {Link as RouterLink} from 'react-router-dom';
import ButtonBase from '@material-ui/core/ButtonBase';
import '../index.css';
// Link button
// TotalInfo(slide) Component
// google ADs
// copyRight

const styles = (theme) => ({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: '#fff',
      background: '#0074c5',
      width: '100%',
      fontSize: '20px'
    },
    paperNoBtn:{
        padding: theme.spacing(2),
        textAlign: 'center',
        color: '#fff',
        background: '#0074c5',
        fontSize: '20px'
    },
    container: {
        // padding: theme.spacing(5),
        marginTop : theme.spacing(1),
    },
    linkBtn: {
        width: '100%'
    }
  });

class Home extends React.Component {
    render(){
        const{classes} = this.props;
        return(
            <div className={classes.root}>
                <CustomCard/>
                <Grid container spacing={1} className={classes.container}>
                    <Grid item xs={6}>
                        <ButtonBase className={classes.linkBtn} component={RouterLink} to="/makeBall">
                            <Paper className={classes.paper}>
                                로또번호 추출기
                            </Paper>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6}>
                        <ButtonBase className={classes.linkBtn} component={RouterLink} to="/lottos">
                            <Paper className={classes.paper}>
                                로또당첨 정보
                            </Paper>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6}>
                        <ButtonBase className={classes.linkBtn}  component={RouterLink} to="/myBall">
                            <Paper className={classes.paper}>
                                내 번호 관리
                            </Paper>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={6}>
                        <ButtonBase className={classes.linkBtn} component={RouterLink} to="/withDrawal">
                            <Paper className={classes.paper}>
                                당첨금 지급 안내
                            </Paper>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12}>
                        <ButtonBase className={classes.linkBtn}>
                            <Paper className={classes.paper}>
                                광고 Google ADs
                            </Paper>
                        </ButtonBase>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.paperNoBtn}>
                             CopyRight
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Home);