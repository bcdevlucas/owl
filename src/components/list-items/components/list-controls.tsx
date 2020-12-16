import React, { useState } from 'react';
import { Box, Button, FormControl, TextField } from '@material-ui/core';

export interface ListControlsProps {
    onGenerateItems: () => void;
    onReset: () => void;
}

export const ListControls = ({ onGenerateItems, onReset }: ListControlsProps) => {
    return (
        <>
            <FormControl>
                <TextField id="item-count" variant="outlined" size="small" label="Number of Items" />
            </FormControl>
            <Box ml={1}>
                <Button
                    color="primary"
                    variant="contained"
                    onClick={onGenerateItems}
                >
                    Generate
                </Button>
            </Box>
            <Box ml={1}>
                <Button
                    color="secondary"
                    variant="contained"
                    onClick={onReset}
                >
                    Reset
                </Button>
            </Box>
        </>
    )
}
