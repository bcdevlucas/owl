import { Component } from 'react'

import { ListItems } from '../components/list-items'

export interface ListItemsContainerProps {

}

export interface ListItemsContainerState {

}

class ListItemsContainer extends Component<ListItemsContainerProps, ListItemsContainerState> {
    handleRemoveItem = async () => {
    }

    handleDragItemStart = async () => {
    }

    handleDragItemEnd = async () => {
    }

    render() {
        return (
            <ListItems
                onRemoveItem={this.handleRemoveItem}
                onDragItemStart={this.handleDragItemStart}
                onDragItemEnd={this.handleDragItemEnd}
            />
        )
    }
}

export default ListItemsContainer
