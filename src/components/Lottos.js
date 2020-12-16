import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
// import Header from '../Header';
import Common from '../utills/Common';
import Ball from './Ball';
import '../index.css';
import './ball.css';


const getDataURL = "http://localhost:8080/millionD/json";
let tmpDrwNo;

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
        this.drwNo = 0
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
        }).then(lottos => this.setState({lottos: (lottos == null) ?{}:lottos}));
    }

    componentDidMount() {
        this._getAllData();
    }

    _getData(drwNo) {
        fetch(`${Common.databaseURL}/lottos/${drwNo}.json`).then(res => {
            if(res.status !== 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(lotto => this.setState({lotto: (lotto == null) ?{}:lotto}));
    }

    _put(lotto, drwNo) {
        return fetch(`${Common.databaseURL}/lottos/${drwNo}.json`,{
            method:'put',
            body:JSON.stringify(lotto)
        }).then(res => {
            if(res.status != 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(data => {
            if(this.drwNo > 1){
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
            if(res.status != 200){
                throw new Error(res.statusText);
            }
            return res.json();
        }).then(() => {
            let nextState = this.state.words;
            delete nextState[id];
            this.setState({words:nextState});
        });
    }

    updateLottoNum = () => {
        this._getLottoData(this.drwNo, (lotto)=>{
            this._put(lotto, this.drwNo);
        })
    }

    handleValueChange = (e) => {
        this.drwNo = e.target.value;
    }

    render(){
        return(
            <div>
                {Object.keys(this.state.lottos).slice(0).reverse().map(drwNo => {
                    const lotto = this.state.lottos[drwNo];
                    if(lotto != null) {;
                        return (
                            <div>
                            <Card key={lotto.drwNo}>
                                <CardContent>
                                    <Typography color="textSecondary" gutterBottom>
                                        회차: {lotto.drwNo} 회차
                                    </Typography>
                                    <Grid container>
                                        <Grid item xs={9}>
                                            <Ball drwNum={lotto.drwtNo1}/>
                                            <Ball drwNum={lotto.drwtNo2}/>
                                            <Ball drwNum={lotto.drwtNo3}/>
                                            <Ball drwNum={lotto.drwtNo4}/>
                                            <Ball drwNum={lotto.drwtNo5}/>
                                            <Ball drwNum={lotto.drwtNo6}/>
                                        </Grid>
                                        <Grid item xs={1}>
                                            <Typography  variant="h5" component="h2">+</Typography>
                                        </Grid>
                                        <Grid item xs={2}>
                                            <Typography  variant="h5" component="h2">{lotto.bnusNo}</Typography>
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
            
            // <Card>
            //     <CardContent>
            //         <Grid container>
            //             <Grid item xs={9}>
            //                 <div></div>
            //             </Grid>
            //             <Grid item xs={1}>
            //                 <span>+</span>
            //             </Grid>
            //             <Grid item xs={2}>
            //                 <Button variant="contained" color="primary" onClick={() => this.updateLottoNum()}>업데이트</Button>
            //             </Grid>
            //         </Grid>
            //     </CardContent>
            // </Card>
        );
    }
}

export default Lottos;