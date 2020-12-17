import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import '../index.css';

class Home extends React.Component {
    render(){
        return(
            <Card>
                <CardContent>
                    Lotto 번호 자동 추출기 프로젝트
                </CardContent>
            </Card>
        );
    }
}

export default Home;