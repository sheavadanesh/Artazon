
export const fetchItems = (searchTerm) => {
    debugger
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

export const searchItem = (keyword) => (
    $.ajax({
        url: '/api/items/search',
        method: 'GET',
        data: {
            // search: {
            //     title: searchParams.title,
            //     artist: searchParams.artist,
            //     year: searchParams.year,
            //     style: searchParams.style,
            //     type: searchParams.type
            // }
            keyword
        }
    })
)