import React, { Component } from 'react';
import './App.scss';

import { Container, Box, TextField, Button, FormControl } from '@material-ui/core'

import { ListItemsContainer as ListItems, ListControls } from './components/list-items'

function handleGenerateItems() {}
function handleReset() {}

class App extends Component {
    render () {
        return (
            <div className="App">
                <Container maxWidth="sm">
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" style={{ minHeight: '300px', border: '1px solid grey'}}>
                        <Box display="flex" style={{ background: "white" }} width="100%">
                            <Box display="flex" m={2}>
                                <ListControls
                                    onGenerateItems={handleGenerateItems}
                                    onReset={handleReset}
                                />
                            </Box>
                        </Box>
                        <Box display="flex" flexDirection="column" width="100%">
                            <ListItems />
                        </Box>
                    </Box>
                </Container>

            </div>
        );
    }
}

export default App;
