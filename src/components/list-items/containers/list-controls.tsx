import { Component, createRef } from 'react';
import { connect } from 'react-redux';

import { RootState } from '../../../store';

import { ListControls } from '../components/list-controls';

import {
    createListItems,
    resetListItems
} from '../../../modules/list-items/actions';

export interface ListControlsContainerStateProps {
}

export interface ListControlsContainerDispatchProps {
    createListItems?: (count: number) => void;
    resetListItems?: () => void;
}

export interface ListControlsContainerProps
    extends ListControlsContainerDispatchProps, ListControlsContainerStateProps {}


export class ListControlsContainer extends Component<ListControlsContainerProps> {
    static defaultProps = {
        createListItems: (count: number) => {},
        resetListItems: () => {}
    }

    controls: any = null;

    constructor(props: ListControlsContainerProps) {
        super(props);
        this.controls = createRef<ListControls>()
    }


    handleCreateItems = async () => {
        const { createListItems } = this.props;
        if (createListItems) {
            const controls = this.controls.current
            createListItems(controls.getNumberOfItems());
        }
    }

    handleResetItems = async () => {
        const { resetListItems } = this.props;
        if (resetListItems) {
            resetListItems();
        }
    }

    render () {
        return (
            <ListControls
                ref={this.controls}
                onGenerateItems={this.handleCreateItems}
                onReset={this.handleResetItems}
            />
        )
    }
}

export default connect<
    ListControlsContainerStateProps,
    ListControlsContainerDispatchProps,
    ListControlsContainerProps,
    RootState>(
    (state) => {
        return {}
    },
    {
        createListItems,
        resetListItems
    }
)(ListControlsContainer);
