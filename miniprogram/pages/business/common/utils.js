function buildList(quote) {
    return quote.contents.map(content => {
        return {
            title: content.title,
            subtitle: content.subtitle,
            category: quote.category,
            desc: quote.desc,
        }
    })
}

module.exports = {
    buildList: buildList
}