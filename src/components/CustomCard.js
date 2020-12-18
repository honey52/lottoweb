import React from 'react';
import { fade, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Common from '../utills/Common';
import Button from '@material-ui/core/Button';
import InputBase from '@material-ui/core/InputBase';
import Typography from '@material-ui/core/Typography';
import SearchIcon from '@material-ui/icons/Search';
import { grey } from '@material-ui/core/colors';
import Grid from '@material-ui/core/Grid';
import Ball from './Ball';

const styles = theme => ({
    customCard : {
        backgroundColor : "#0081dc",
        position: "relative",
        padding: "20px"
    },
   
    cardTitle : {
        fontSize: "20px",
        color: "#fff",
        paddingBottom: "10px",
        paddingLeft: "5px",
        marginBottom: "20px",
        boxShadow: "#0074c5 0px 10px 10px -5px"
    },
    cardContents : {
        color: "#fff",
        textAlign: "center"
    },
    contsTitle : {
        fontSize: "25px"
    },
    leftBtn : {
        position: "absolute",
        left: '-15px',
        top: '70%'
    },
    rightBtn : {
        position: "absolute",
        right: '-15px',
        top: '70%'
    },

    bodyTitle:{
        backgroundColor: "#0062a7",
        padding: "10px 0",
        fontSize: "20px"
    },

    bodyContents:{
        backgroundColor: "#0081dc",
        fontSize: "20px",
        padding: "40px 0",
    },

    drwInfo : {
        boxShadow: "#0074c5 0px 0px 15px 5px",
        color: "#fff",
        textAlign: "center"
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: fade(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        float:'right',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      },
      searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        top: 0,
        left: 0
      },
      inputRoot: {
        color: 'inherit',
        width: '160px'
      },
      inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
          width: '20ch',
        },
        color: '#fff'
      },
})

class CustomCard extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            lottos : null,
            nowDrwtNo : 0,
            recentDrwNo : 0
        };
    }

    _getAllData() {
        fetch(`${Common.databaseURL}/lottos.json`).then(res => {
            if(res.status !== 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(lottos => {
            Common.lottos = lottos;
            this.setState({lottos: (lottos == null) ? {} : lottos});
            this.setState({nowDrwtNo:Common.lottos.length-1})
            this.setState({recentDrwNo:Common.lottos.length-1})
            console.log("get Lotto data by CustomCard.js");
        });
    }

    componentDidMount() {
        if(typeof Common.lottos == "undefined" || Common.lottos == null) {
            this._getAllData();
        } else {
            this.setState({lottos:Common.lottos});
            this.setState({nowDrwtNo:Common.lottos.length-1})
            this.setState({recentDrwNo:Common.lottos.length-1})
        }
    }

    handleDrwtResultNext = () => {
        let nowDrwtNo =  this.state.nowDrwtNo;
        nowDrwtNo++;
        if(this.state.recentDrwNo < nowDrwtNo){
            alert("다음 회차 정보가 없습니다.");
            return;
        }
        this.setState({nowDrwtNo:nowDrwtNo})
    }

    handleDrwtResultBack = () => {
        let nowDrwtNo =  this.state.nowDrwtNo;
        nowDrwtNo--;
        if(nowDrwtNo <= 0){
            alert("이전 회차 정보가 없습니다.");
            return;
        }
        this.setState({nowDrwtNo:nowDrwtNo})
    }

    handleDrwtResultBySearch = (searchNo) =>{
        if(isNaN(searchNo)) {
            return;            
        }
        if(searchNo > this.state.recentDrwNo || searchNo < 1) {
            return;
        }
        this.setState({nowDrwtNo:searchNo})
    }
    onChange = (e) => {
        this.handleDrwtResultBySearch(e.target.value);
    }

    render(){
        // const classes = useStyles();
        const {classes} = this.props;
        if(this.state.nowDrwtNo === 0){
            return (<Card></Card>)
        }
        const lotto = this.state.lottos[this.state.nowDrwtNo];
        return (
            <Card className={classes.customCard}>
              <CardContent>
                <div className={classes.cardTitle}>
                    <span>로또 6/45</span>
                    <span className={classes.search}>
                        <div className={classes.searchIcon}>
                            <SearchIcon/>
                        </div>
                        <InputBase onChange={this.onChange}
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        />
                    </span>
                </div>
                <Typography className={classes.cardContents}>
                    <span className={classes.contsTitle}>{lotto.drwNo}회 당첨 결과</span>
                </Typography>
                <Typography className={classes.cardContents}>
                    <span>[{lotto.drwNoDate}]</span>
                </Typography>
                <Grid container style={{ textAlign: "center", marginTop: "40px" }}>
                    <Grid item xs={10}>
                        <Grid container>
                            <Grid item xs={2}><Ball drwtNo={lotto.drwtNo1}/></Grid>
                            <Grid item xs={2}><Ball drwtNo={lotto.drwtNo2}/></Grid>
                            <Grid item xs={2}><Ball drwtNo={lotto.drwtNo3}/></Grid>
                            <Grid item xs={2}><Ball drwtNo={lotto.drwtNo4}/></Grid>
                            <Grid item xs={2}><Ball drwtNo={lotto.drwtNo5}/></Grid>
                            <Grid item xs={2}><Ball drwtNo={lotto.drwtNo6}/></Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1}><Typography  style={{ fontSize: 20, color: "#fff" }}>+</Typography></Grid>
                    <Grid item xs={1}><Ball drwtNo={lotto.bnusNo}/></Grid>
                </Grid>
              </CardContent>
              <CardContent>
                    <div className={classes.drwInfo}>
                        <div className={classes.bodyTitle}>
                            1등 당첨금
                        </div>
                        <div  className={classes.bodyContents}>
                            <span style={{fontSize:"30px"}}>{Math.floor(lotto.firstWinamnt/100000000)}억</span>
                                <span> (총 {Math.floor(lotto.firstAccumamnt/100000000)}억 / {lotto.firstPrzwnerCo}명)</span>
                        </div>
                    </div>
              </CardContent>
              <CardActions className={classes.leftBtn}>
                <Button size="small" onClick={this.handleDrwtResultBack}>
                    <ArrowBackIosIcon style={{ color: grey[50] }}/>
                </Button>
              </CardActions>
              <CardActions className={classes.rightBtn}>
                <Button size="small" onClick={this.handleDrwtResultNext}>
                    <ArrowForwardIosIcon style={{ color: grey[50] }}/>
                </Button>
              </CardActions>
            </Card>
          )
    }
}

export default withStyles(styles)(CustomCard);