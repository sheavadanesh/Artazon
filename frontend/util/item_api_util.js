
export const fetchItems = () => (
    $.ajax({
        url: '/api/items',
        method: 'GET'
    })
)

export const fetchItem = (itemId) => (
    $.ajax({
        url: `/api/items/${itemId}`,
        method: 'GET'
    })
)