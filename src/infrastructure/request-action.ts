export interface RequestActionState<T> {
    isBusy?: boolean;
    error?: string;
    data?: T;
}


