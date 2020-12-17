import React, { Component, createRef } from 'react';
import './App.scss';

import { Container, Box } from '@material-ui/core';

import {
    ListItemsContainer as ListItems,
    ListControlsContainer as ListControls
} from './components/list-items';

import { ScrollToBottom } from './components/scroll-to-bottom';
import {isScrolledToBottom, scrollToBottom as scrollToBottomFunc} from './infrastructure/scroll-functions';

class App extends Component {
    listItems: any = null;

    state = {
        listIsScrolledToBottom: false
    }

    constructor(props: {}) {
        super(props);
        // @ts-ignore
        this.listItems = createRef<ListItems>()
    }

    componentDidMount () {
        const listItemsEl = document.querySelector('.list-items') as HTMLElement;
        if (listItemsEl) {
            listItemsEl.addEventListener('scroll', () => {
                if (isScrolledToBottom(listItemsEl)) {
                    console.log('scrolled to the bottom');
                    this.setState({
                        listIsScrolledToBottom: true
                    })
                } else {
                    this.setState({
                        listIsScrolledToBottom: false
                    })
                }
            })
        }
    }

    handleScrollToBottom = async () => {
        // We could use the store, but this is quick n' dirty and works fine for this case...
        if (window) {
            const listItemsEl = document.querySelector('.list-items') as HTMLElement;
            if (listItemsEl) scrollToBottomFunc(listItemsEl);
        }
    }

    render () {
        const { listIsScrolledToBottom } = this.state;
        return (
            <div className="App">
                <Container maxWidth="sm">
                    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column" style={{ minHeight: '300px', border: '1px solid grey'}}>
                        <Box display="flex" flexDirection="column" width="100%">
                            <Box display="flex" m={2}>
                                <ListControls
                                    onCreateListItemsCompleted={this.handleScrollToBottom}
                                />
                                {!listIsScrolledToBottom && (
                                <ScrollToBottom onClick={this.handleScrollToBottom} />
                                )}
                            </Box>
                            <ListItems />
                        </Box>
                    </Box>
                </Container>

            </div>
        );
    }
}

export default App;
