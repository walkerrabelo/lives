import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';

import Alunos from '../Alunos';

const Home = () => {
    return (
        <div>
            <AppBar position="static" color="transparent">
                <Toolbar>
                    <Button className="appbar-buttons" variant="contained" color="primary">Alunos</Button>
                    <Button className="appbar-buttons" variant="contained" color="primary">Frequência</Button>
                </Toolbar>
            </AppBar>
            <Alunos/>
        </div>
      )
}

export default Home