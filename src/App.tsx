import React, { Component } from 'react';
import './App.scss';

import { Container, Box } from '@material-ui/core';

import {
    ListItemsContainer as ListItems,
    ListControlsContainer as ListControls
} from './components/list-items';

class App extends Component {
    render () {
        return (
            <div className="App">
                <Container maxWidth="sm">
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" style={{ minHeight: '300px', border: '1px solid grey'}}>
                        <Box display="flex" flexDirection="column" width="100%">
                            <Box display="flex" m={2}>
                                <ListControls />
                            </Box>
                            <ListItems />
                        </Box>
                    </Box>
                </Container>

            </div>
        );
    }
}

export default App;
