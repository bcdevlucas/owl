import React, { Component } from 'react';
import { Box, Button, FormControl, TextField } from '@material-ui/core';
import { IListItem } from '../../../modules/list-items/state';

export interface ListItemProps {
    item: IListItem;
    onUpdate: (item: IListItem) => void;
    onRemove: (itemKey: string) => void;
    onDragStart: (itemKey: string) => void;
    onDragEnd: (itemKey: string) => void;
}

export class ListItem extends Component<ListItemProps> {
    static defaultProps = {
        onUpdate: (item: IListItem) => {},
        onRemove: (itemKey: string) => {},
        item: {} as IListItem
    }

    setOrder = (event: any) => {
        const { onUpdate, item } = this.props;
        const updatedItem = { ...item, order: event.target.value }
        onUpdate(updatedItem);
    }

    setDescription = (event: any) => {
        const { onUpdate, item } = this.props;
        const updatedItem = { ...item, description: event.target.value }
        onUpdate(updatedItem);
    }

    removeItem = () => {
        const { onRemove, item } = this.props;
        onRemove(item.id);
    }

    render () {
        const { item } = this.props;
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
                            onChange={this.setOrder}
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
                            onChange={this.setDescription}
                        />
                    </FormControl>
                </Box>
                <Box ml={1}>
                    <Button
                        color="secondary"
                        variant="contained"
                        onClick={this.removeItem}>
                        x
                    </Button>
                </Box>
            </Box>
        )
    }
}
