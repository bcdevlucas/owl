import React from 'react';
import './App.css';

import { Container, Box, TextField, Button } from '@material-ui/core'

function App() {
  return (
    <div className="App">
        <Container maxWidth="sm">
            <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" style={{ minHeight: '300px', border: '1px solid grey'}}>
                <Box display="flex" style={{ background: "white" }}>
                    <TextField label="Number of Items" variant="outlined" />
                    <Button color="primary" variant="contained">Generate</Button>
                    <Button color="secondary" variant="contained">Reset</Button>
                </Box>
                <Box display="flex" flexDirection="column">
                    <Box display="flex">
                        <TextField label="Number of Items" variant="outlined" />
                        <Button color="secondary" variant="contained">x</Button>
                    </Box>
                    <Box display="flex">
                        <TextField label="Number of Items" variant="outlined" />
                        <Button color="secondary" variant="contained">x</Button>
                    </Box>
                    <Box display="flex">
                        <TextField label="Number of Items" variant="outlined" />
                        <Button color="secondary" variant="contained">x</Button>
                    </Box>
                    <Box display="flex">
                        <TextField label="Number of Items" variant="outlined" />
                        <Button color="secondary" variant="contained">x</Button>
                    </Box>
                </Box>

            </Box>

        </Container>

    </div>
  );
}

export default App;
