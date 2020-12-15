import React, { SFC } from 'react'
import {Box, Button, FormControl, TextField} from "@material-ui/core";

export interface ListItemProps {
}

// eslint-disable-next-line no-empty-pattern
export const ListItem = ({}: ListItemProps) => {
    return (
        <Box
            display="flex"
            className="list-item">
            <FormControl>
                <TextField
                    variant="outlined"
                    size="small"
                    label="Description"
                    multiline
                    rowsMax={Infinity}
                />
            </FormControl>
            <Box ml={1}><Button color="secondary" variant="contained">x</Button></Box>
        </Box>
    )
}
