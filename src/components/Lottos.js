import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Common from '../utills/Common';
import Ball from './Ball';
import '../index.css';
import './ball.css';


const getDataURL = "http://localhost:8080/millionD/json";
// const headers = new Header({
//     'Content-Type': 'application/json',
//     'credentials': 'include',
//     'Origin': 'localhost:3000',
//     'method': 'POST'
// })
class Lottos extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            lottos : {},
            totSellamnt: 0,
            returnValue: '',
            drwNoDate: '',
            firstWinamnt: 0,
            drwtNo6: 0,
            drwtNo4: 0,
            firstPrzwnerCo: 0,
            drwtNo5: 0,
            bnusNo: 0,
            firstAccumamnt: 0,
            drwNo: 0,
            drwtNo2: 0,
            drwtNo3: 0,
            drwtNo1: 0
        };
        this.drwNo = 942
    }

    _getLottoData(drwNo, callback) {
        fetch(`${getDataURL}?num=${drwNo}`).then(res => {
            if(res.status !== 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(
            lotto => {
                // this.setState({lotto: (lotto == null) ?{}:lotto});
                callback(lotto);
            }
        );
    }

    _getAllData() {
        fetch(`${Common.databaseURL}/lottos.json`).then(res => {
            if(res.status !== 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(lottos => {this.setState({lottos: (lottos == null) ? {} : lottos}); Common.lottos = lottos; console.log("get Lotto data by Lottos.js")});
    }

    componentDidMount() {
        if(typeof Common.lottos == "undefined" || Common.lottos == null) {
            this._getAllData();
        } else {
            this.setState({lottos:Common.lottos});
        }
    }

    _getData(drwNo) {
        fetch(`${Common.databaseURL}/lottos/${drwNo}.json`).then(res => {
            if(res.status !== 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(lotto => this.setState({lotto: (lotto == null) ?{}:lotto}));
    }

    _put(lotto, drwNo, contiYn) {
        return fetch(`${Common.databaseURL}/lottos/${drwNo}.json`,{
            method:'put',
            body:JSON.stringify(lotto)
        }).then(res => {
            if(res.status !== 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(data => {
            if(this.drwNo > 1 && contiYn === true){
                this.drwNo--;
                this.updateLottoNum();
                console.log(this.drwNo);
            } else {
                alert("end");
            }
        });
    }

    _delete(id) {
        return fetch(`${Common.databaseURL}/lottos/${id}.json`, {
            method: 'DELETE'
        }).then(res => {
            if(res.status !== 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(() => {
            let nextState = this.state.words;
            delete nextState[id];
            this.setState({words:nextState});
        });
    }

    updateLottoNum = (contiYn) => {
        this._getLottoData(this.drwNo, (lotto)=>{
            this._put(lotto, this.drwNo, contiYn);
        })
    }

    handleValueChange = (e) => {
        this.drwNo = e.target.value;
    }

    render(){
        return(
            <div>
                {/* <Button variant="contained" color="primary" onClick={() => this.updateLottoNum(false)}>업데이트</Button> */}
                {Object.keys(this.state.lottos).reverse().map(drwNo => {
                    const lotto = this.state.lottos[drwNo];
                    if(lotto != null) {
                        return (
                            <div key={drwNo}>
                            <Card>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        {lotto.drwNo} 회차
                                    </Typography>
                                    <Grid container>
                                        <Grid item xs={10}>
                                            <Grid container>
                                                <Grid item xs={2}>
                                                    <Ball drwtNo={lotto.drwtNo1}/>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Ball drwtNo={lotto.drwtNo2}/>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Ball drwtNo={lotto.drwtNo3}/>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Ball drwtNo={lotto.drwtNo4}/>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Ball drwtNo={lotto.drwtNo5}/>
                                                </Grid>
                                                <Grid item xs={2}>
                                                    <Ball drwtNo={lotto.drwtNo6}/>
                                                </Grid>                                                
                                            </Grid>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Typography  variant="h5" component="h2">+</Typography>
                                        </Grid>
                                        <Grid item xs={1}>
                                        <Ball drwtNo={lotto.bnusNo}/>
                                        </Grid>
                                    </Grid>
                                </CardContent>
                            </Card>
                            <br/>
                            </div>
                        );
                    }
                })}
            </div>
        )
    }
}

export default Lottos;