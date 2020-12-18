import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import Link from '@material-ui/core/Link';
import { withStyles } from '@material-ui/core/styles';
import {grey} from '@material-ui/core/colors';
import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';
import Toolbar from '@material-ui/core/Toolbar';
import MenuItem from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SvgIcon from '@material-ui/core/SvgIcon';
import Typography from '@material-ui/core/Typography';
import '../index.css';

const styles = {
    root: {
        flexGrow:1,
    },
    menuFream: {
        backgroundColor: "#0062a7"
    },
    menuButton: {
        
    },

    menuList: {
        margin: '5px 10px 10px 10px'
    },

    menuTitle : {
        display: 'flex',
        margin: 'auto'
    },

    homeIcon : {
        display: 'flex',
        float: 'left'
    }
};

function HomeIcon(props) {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
};

class AppShell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            toggle: false
        };
    }
    handleDrawerToggle = () => this.setState({toggle:!this.state.toggle})
    render(){   
        const{classes} = this.props;
        return (
            <div>
                <div className={classes.root}>
                    <AppBar position="static" className={classes.menuFream}>
                        <Toolbar>
                            <MenuItem className={classes.menuButton} color="inherit" onClick={this.handleDrawerToggle}>
                                <MenuIcon/>
                            </MenuItem>
                            <Typography variant="h6" className={classes.menuTitle}>
                                MillionD
                            </Typography>
                            <MenuItem className={classes.homeIcon}>
                                <Link component={RouterLink} to="/">
                                <HomeIcon style={{color:grey[50]}}/>
                                </Link>
                            </MenuItem>
                        </Toolbar>
                    </AppBar>
                    <Drawer open={this.state.toggle}>
                        <MenuItem className={classes.menuList} onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/">
                                홈 화면
                            </Link>
                        </MenuItem>
                        <MenuItem className={classes.menuList} onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/texts">
                                텍스트 관리
                            </Link>
                        </MenuItem>
                        <MenuItem className={classes.menuList} onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/words">
                                단어 관리
                            </Link>
                        </MenuItem>
                        <MenuItem className={classes.menuList} onClick={this.handleDrawerToggle}>
                            <Link component={RouterLink} to="/lottos">
                                로또 관리
                            </Link>
                        </MenuItem>
                    </Drawer>
                </div>
                <div id="content" style={{margin:'auto', marginTop:'20px'}}>
                    {React.cloneElement(this.props.children)}
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(AppShell);