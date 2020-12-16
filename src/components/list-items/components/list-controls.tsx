import React, { Component } from 'react';
import { Box, Button, FormControl, TextField } from '@material-ui/core';

export interface ListControlsProps {
    onGenerateItems: () => void;
    onReset: () => void;
}

export interface ListControlsState {
    numberOfItems: number;
}

export class ListControls extends Component<ListControlsProps, ListControlsState> {
    state: ListControlsState = {
        numberOfItems: 5
    }

    setNumberOfItems = (event: any) => {
        this.setState({ numberOfItems: Number(event.target.value) });
    }

    getNumberOfItems = (): number => {
        return this.state.numberOfItems;
    }

    render () {
        const { onGenerateItems, onReset } = this.props;
        const { numberOfItems } = this.state;
        return (
            <>
                <FormControl>
                    <TextField id="item-count" variant="outlined" size="small" label="Number of Items" value={numberOfItems} onChange={this.setNumberOfItems} />
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
}
