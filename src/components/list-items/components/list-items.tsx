import React from 'react'
import { Box } from '@material-ui/core';
import './list-items.scss'

import { ListItem } from './list-item';

export interface ListItemsProps {
}

// eslint-disable-next-line no-empty-pattern
export const ListItems = ({}: ListItemsProps) => {
    return (
        <div className="list-items">
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
            <Box m={2}><ListItem /></Box>
        </div>
    )
}
