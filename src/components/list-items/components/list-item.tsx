import React from 'react'
import { Box, Button, FormControl, TextField } from '@material-ui/core';

export interface ListItemProps {
    onRemove: () => void;
    onDragStart: () => void;
    onDragEnd: () => void;
}

export const ListItem = ({ onRemove = () => {} }: ListItemProps) => {
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
            <Box ml={1}>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={onRemove}>
                    x
                </Button>
            </Box>
        </Box>
    )
}
