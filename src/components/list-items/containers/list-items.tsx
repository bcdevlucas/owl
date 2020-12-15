import { Component } from 'react'
import { connect } from 'react-redux'

import { RootState } from '../../../store'

import { ListItems } from '../components/list-items'

import {
    getListItems,
    addListItem,
    removeListItem,
    reorderListItem
} from '../../../modules/list-items/actions'

import { IListItem } from '../../../modules/list-items/state';

export interface ListItemsContainerProps {
    getListItems?: () => void;
    addListItem?: (item: IListItem) => void;
    removeListItem?: (key: string) => void;
    reorderListItem?: (key: string, order: any) => void;
}

export interface ListItemsContainerState {

}

export class ListItemsContainer extends Component<ListItemsContainerProps, ListItemsContainerState> {
    handleRemoveItem = async () => {
        const { removeListItem } = this.props;
        if (removeListItem) {
            removeListItem('asdf-test-key')
        }
        alert('Remove item');
    }

    handleDragItemStart = async () => {
    }

    handleDragItemEnd = async () => {
    }

    render () {
        return (
            <ListItems
                onRemoveItem={this.handleRemoveItem}
                onDragItemStart={this.handleDragItemStart}
                onDragItemEnd={this.handleDragItemEnd}
            />
        )
    }
}

export interface ListItemsContainerStateProps {}
export interface ListItemsContainerDispatchProps {
    getListItems: () => void;
    addListItem: () => void;
    removeListItem: () => void;
    reorderListItem: () => void;
}

export default connect<
    ListItemsContainerStateProps,
    ListItemsContainerDispatchProps,
    ListItemsContainerProps,
    RootState>(
    // eslint-disable-next-line no-empty-pattern
    (state, {}) => {
        return {};
    },
    {
        getListItems,
        addListItem,
        removeListItem,
        reorderListItem
    }
)(ListItemsContainer);
