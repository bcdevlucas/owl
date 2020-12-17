import {Component, createRef} from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';

import { ListItems } from '../components/list-items';

import {
    getListItems,
    addListItem,
    updateListItem,
    removeListItem,
    reorderListItem
} from '../../../modules/list-items/actions';

import { IListItem } from '../../../modules/list-items/state';

export interface ListItemsContainerStateProps {
    items: any[];
}
export interface ListItemsContainerDispatchProps {
    getListItems?: () => void;
    addListItem?: (item: IListItem) => void;
    updateListItem?: (item: IListItem) => void;
    removeListItem?: (key: string) => void;
    reorderListItem?: (key: string, order: any) => void;
}

export interface ListItemsContainerProps
    extends ListItemsContainerDispatchProps, ListItemsContainerStateProps {}


export class ListItemsContainer extends Component<ListItemsContainerProps> {
    static defaultProps = {
        items: [],
        getListItems: () => [],
        addListItem: () => {},
        updateListItem: (item: IListItem) => {},
        removeListItem: (key: string) => {},
        reorderListItem: (key: string, order: any) => {}
    }

    componentDidMount () {
        // Un-comment this to use generator for local development...
        /* const { getListItems } = this.props;
        if (getListItems) {
            getListItems();
        } */
    }

    handleRemoveItem = async (itemKey: string) => {
        const { removeListItem } = this.props;
        if (removeListItem) {
            removeListItem(itemKey);
        }
    }

    handleUpdateItem = async (item: IListItem) => {
        const { updateListItem } = this.props;
        if (updateListItem) {
            updateListItem(item);
        }
    }

    handleDragItemStart = async (itemKey: string) => {
    }

    handleDragItemEnd = async (itemKey: string) => {
    }

    render () {
        const { items = [] } = this.props;
        return (
            <ListItems
                items={items}
                onUpdateItem={this.handleUpdateItem}
                onRemoveItem={this.handleRemoveItem}
                onDragItemStart={this.handleDragItemStart}
                onDragItemEnd={this.handleDragItemEnd}
            />
        );
    }
}

export default connect<
    ListItemsContainerStateProps,
    ListItemsContainerDispatchProps,
    ListItemsContainerProps,
    RootState>(
    (state) => {
        const { listItems } = state
        return {
            items: listItems.items
        };
    },
    {
        getListItems,
        addListItem,
        updateListItem,
        removeListItem,
        reorderListItem
    }
)(ListItemsContainer);
