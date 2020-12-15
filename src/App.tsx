import React from 'react';
import './App.scss';

import { Container, Box, TextField, Button, FormControl } from '@material-ui/core'

import { ListItems } from './components/list-items'

function App() {
  return (
    <div className="App">
        <Container maxWidth="sm">
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" style={{ minHeight: '300px', border: '1px solid grey'}}>
                <Box display="flex" style={{ background: "white" }} width="100%">
                    <Box display="flex" m={2}>
                        <FormControl>
                            <TextField id="item-count" variant="outlined" size="small" label="Number of Items" />
                        </FormControl>
                        <Box ml={1}>
                            <Button color="primary" variant="contained">Generate</Button>
                        </Box>
                        <Box ml={1}>
                            <Button color="secondary" variant="contained">Reset</Button>
                        </Box>

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

export default App;
