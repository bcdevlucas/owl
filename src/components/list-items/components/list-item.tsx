import React from 'react'
import { Box, Button, FormControl, TextField } from '@material-ui/core';
import { IListItem } from '../../../modules/list-items/state'

export interface ListItemProps {
    item: IListItem;
    onRemove: (itemKey: string) => void;
    onDragStart: (itemKey: string) => void;
    onDragEnd: (itemKey: string) => void;
}

export const ListItem = ({ onRemove = (itemKey: string) => {}, item }: ListItemProps) => {
    const removeItem = () => {
        onRemove(item.id);
    }
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
                    onClick={removeItem}>
                    x
                </Button>
            </Box>
        </Box>
    )
}
