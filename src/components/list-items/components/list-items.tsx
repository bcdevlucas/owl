import React from 'react'
import { Box, List } from '@material-ui/core';
import './list-items.scss'

import { ListItem } from './list-item';

export interface ListItemsProps {
    onRemoveItem: () => void;
    onDragItemStart: () => void;
    onDragItemEnd: () => void;
}

export const ListItems = ({
        onRemoveItem,
        onDragItemStart,
        onDragItemEnd
    }: ListItemsProps) => {
    const numberOfItems = 100
    const items = Array.from(new Array(numberOfItems), (i) => ({
        description: 'Testing testing 123',
        order: i + 1
    }));

    const listItems = items.map((item) =>
        <Box key={item.order} m={2}>
            <ListItem
                onRemove={onRemoveItem}
                onDragStart={onDragItemStart}
                onDragEnd={onDragItemEnd}
            />
        </Box>
    );

    return (
        <div className="list-items">
            {listItems}
        </div>
    )
}
