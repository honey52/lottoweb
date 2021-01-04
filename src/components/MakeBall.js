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
        // 아이피 정보 + 암호화 텍스트 -> 암호화 -> 개인 아이디
        // 내 정보 가져오기
        // 내 옵션 가져오기 -> 디스플레이
        // N회차(최대 10회차) 선택시 디스플레이
        // 옵션 : n회차 n번 반복 숫자 포함, 보너스 숫자 포함, 번호별 확률 적용, 이전 당첨번호 제외
        // 
    }

    fsfe(){
        const crypto = require('crypto');
        const password = 'abc123';
        const secret = process.env.REACT_APP_SECRET_KEY;
        const hashed = crypto.createHmac('sha256', secret).update(password).digest('hex');
        console.log(hashed);



        var connect = require('connect');
        var http = require('http');
        var net = require('net');
        
        var app = connect();
        
        // require request-ip and register it as middleware
        var requestIp = require('request-ip');
        
        // you can override which attirbute the ip will be set on by
        // passing in an options object with an attributeName
        app.use(requestIp.mw({ attributeName : 'myCustomAttributeName' }))
        
        // respond to all requests
        app.use(function(req, res) {
        
            // use our custom attributeName that we registered in the middleware
            var ip = req.myCustomAttributeName;
            console.log(ip);
        
            // https://nodejs.org/api/net.html#net_net_isip_input
            var ipType = net.isIP(ip); // returns 0 for invalid, 4 for IPv4, and 6 for IPv6
            res.end('Hello, your ip address is ' + ip + ' and is of type IPv' + ipType + '\n');
        });
        
        //create node.js http server and listen on port
        http.createServer(app).listen(3000);
        
        // test it locally from the command line
        // > curl -X GET localhost:3000 # Hello, your ip address is ::1 and is of type IPv6


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