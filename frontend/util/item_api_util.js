
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

export const searchItem = (searchParams) => (
    $.ajax({
        url: '/api/items/search',
        method: 'GET',
        data: {
            search: {
                title: searchParams.title,
                artist: searchParams.artist,
                year: searchParams.year,
                style: searchParams.style,
                type: searchParams.type,
                page: searchParams.page
            }
        }
    })
)