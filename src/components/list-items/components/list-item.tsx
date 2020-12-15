import React from 'react'
import { Box, Button, FormControl, TextField } from '@material-ui/core';
import { IListItem } from '../../../modules/list-items/state'

export interface ListItemProps {
    item: IListItem;
    onRemove: () => void;
    onDragStart: () => void;
    onDragEnd: () => void;
}

export const ListItem = ({ onRemove = () => {}, item }: ListItemProps) => {
    return (
        <Box
            display="flex"
            className="list-item">
            <Box width={"5rem"}>
                <FormControl>
                    <TextField
                        variant="outlined"
                        size="small"
                        label="Order"
                        value={item.order}

                    />
                </FormControl>
            </Box>
            <Box ml={1}>
                <FormControl>
                    <TextField
                        variant="outlined"
                        size="small"
                        label="Description"
                        value={item.description}
                        multiline
                        rowsMax={Infinity}
                    />
                </FormControl>
            </Box>
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
