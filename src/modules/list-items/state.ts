export interface IListItem {
    id: string;
    description: string;
    order: string;
}

export interface IListItemsState {
    readonly items: IListItem[]
}

export const initialListItemsState: IListItemsState = {
    items: []
};
