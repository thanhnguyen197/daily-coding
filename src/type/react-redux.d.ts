export type Action = {
    type: string,
    payload: Record<any, any>
}

export type Layouts = {
    value: number;
}

export type RootState = {
    layouts: Layouts
}