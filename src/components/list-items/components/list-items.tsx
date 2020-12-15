import React from 'react'
import {Box, List} from '@material-ui/core';
import './list-items.scss'

import { ListItem } from './list-item';

export interface ListItemsProps {
}

// eslint-disable-next-line no-empty-pattern
export const ListItems = ({}: ListItemsProps) => {
    const numberOfItems = 50
    const items = Array.from(new Array(numberOfItems), (i) => ({
        description: 'Testing testing 123',
        order: i + 1
    }));

    const listItems = items.map((item) =>
        <Box key={item.order} m={2}><ListItem /></Box>
    );

    return (
        <div className="list-items">
            {listItems}
        </div>
    )
}
