import { Action } from 'redux';
import { IListItem } from './state';

export const GET_ITEMS = 'getItems';
export const LOAD_ITEMS = 'loadItems';
export const ADD_ITEM = 'addItem';
export const REMOVE_ITEM = 'removeItem';
export const REORDER_ITEM = 'reorderItem';

export interface IGetListItemsAction extends Action {
    type: typeof GET_ITEMS
}

export interface ILoadListItemsAction extends Action {
    type: typeof LOAD_ITEMS,
    items: IListItem[]
}

export interface IAddListItemAction extends Action {
    type: typeof ADD_ITEM
    item: IListItem
}

export interface IRemoveListItemAction extends Action {
    type: typeof REMOVE_ITEM
    item: IListItem
}

export interface IReorderListItemAction extends Action {
    type: typeof REORDER_ITEM
    item: IListItem,
    order: number
}

