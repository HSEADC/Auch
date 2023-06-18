import Airtable from 'airtable'

const token =
    'patDab5w4Sw8jz0nM.f55eead8b8b719b53aedd5c9350059c4fbd31a97c2c7211c748f5f810efeb7f0'

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: token
})

const base = Airtable.base('app4vbHwkWBHl7Tg0')

function getPostTeasers() {
    return new Promise((resolve, reject) => {
        const content = []

        base('Post Teasers')
            .select({ maxRecords: 100 })
            .firstPage()
            .then((result) => {
                result.forEach((record) => {
                    content.push({
                        id: record.id,
                        tags: record.fields['Tags'],
                        title: record.fields['Title'],
                        category: record.fields['Category'],
                        link: record.fields['Link'],
                        description: record.fields['Description']
                    })
                })
                resolve(content)
            })
    })
}

export { getPostTeasers }