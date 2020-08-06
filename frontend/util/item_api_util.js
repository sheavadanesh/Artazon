
export const fetchItems = (searchTerm) => {
    return (
        $.ajax({
            url: '/api/items',
            method: 'GET',
            data: { keyword: searchTerm }
        })
    )
}

export const fetchItem = (itemId) => (
    $.ajax({
        url: `/api/items/${itemId}`,
        method: 'GET'
    })
)