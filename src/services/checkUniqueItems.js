export const checkUniqueItems = (items) => {
    const uniqueItems = new Set()

    items.forEach(item => {
        uniqueItems.add(JSON.stringify(item))
    })

    const newItems = []

    uniqueItems.forEach(item => {
        newItems.push(JSON.parse(item))
    })

    return newItems
}