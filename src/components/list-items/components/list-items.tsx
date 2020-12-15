import React from 'react'
import { Box, List } from '@material-ui/core';
import './list-items.scss'

import { ListItem } from './list-item';

export interface ListItemsProps {
    onRemoveItem: () => void;
    onDragItemStart: () => void;
    onDragItemEnd: () => void;
    items: any[];
}

export const ListItems = ({
        onRemoveItem,
        onDragItemStart,
        onDragItemEnd,
        items = []
    }: ListItemsProps) => {
    const listItems = items.map((item, idx) =>
        <Box key={idx} m={2}>
            <ListItem
                item={item}
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
