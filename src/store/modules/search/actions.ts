export const searchAction = (search: string) => {
    return {
        type: 'SEARCH',
        payload: search,
    }
}