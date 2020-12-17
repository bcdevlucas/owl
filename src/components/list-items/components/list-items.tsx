import React, { Component } from 'react';
import { Box } from '@material-ui/core';
import './list-items.scss';

import { ListItem } from './list-item';
import { IListItem } from '../../../modules/list-items/state';

export interface ListItemsProps {
    onUpdateItem: (item: IListItem) => void;
    onRemoveItem: (itemKey: string) => void;
    onDragItemStart: (itemKey: string) => void;
    onDragItemEnd: (itemKey: string) => void;
    items: any[];
}

export class ListItems extends Component<ListItemsProps> {
    render() {
        const {
            onUpdateItem,
            onRemoveItem,
            onDragItemStart,
            onDragItemEnd,
            items = []
        } = this.props;

        const listItems = items.map((item, idx) =>
            <Box key={idx} m={2}>
                <ListItem
                    item={item}
                    onUpdate={onUpdateItem}
                    onRemove={onRemoveItem}
                    onDragStart={onDragItemStart}
                    onDragEnd={onDragItemEnd}
                />
            </Box>
        );

        return (
            <div className='list-items'>
                {listItems}
            </div>
        );
    }
}
