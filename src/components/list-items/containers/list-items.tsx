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



export interface ListItemsContainerStateProps {
    items: any[];
}
export interface ListItemsContainerDispatchProps {
    getListItems?: () => void;
    addListItem?: (item: IListItem) => void;
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
        removeListItem: (key: string) => {},
        reorderListItem: (key: string, order: any) => {}
    }

    componentDidMount () {
        const { getListItems } = this.props;
        if (getListItems) {
            // alert('Get items');
            getListItems()
        }
    }

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
        const { items = [] } = this.props;
        return (
            <ListItems
                items={items}
                onRemoveItem={this.handleRemoveItem}
                onDragItemStart={this.handleDragItemStart}
                onDragItemEnd={this.handleDragItemEnd}
            />
        )
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
        removeListItem,
        reorderListItem
    }
)(ListItemsContainer);
