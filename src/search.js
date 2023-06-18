import './search.css'
import { getPostTeasers } from './search_data.js'

let content

function getSearchRequest() {
    const url = new URL(window.location.href)
    const searchParams = new URLSearchParams(url.search)

    if (searchParams.has('request')) {
        return searchParams.get('request')
    }
}

function setSearchRequest(requestText) {
    const url = getPathFromUrl(window.location.href)
    window.location.href = url + '?request=' + requestText
}

function getPathFromUrl(url) {
    return url.split('?')[0]
}

function createContentCard(contentItemData) {
    const contentItem = document.createElement('div')
    contentItem.classList.add('O_ContentItem')
    //
    // const contentItemCover = document.createElement('img')
    // contentItemCover.classList.add('A_ContentItemCover')
    // contentItemCover.src = contentItemData.image
    //
    const contentItemTags = document.createElement('div')
    contentItemTags.classList.add('C_ContentItemTags')
    //
    contentItemData.tags.forEach((tag) => {
        const contentItemTag = document.createElement('div')
        contentItemTag.classList.add('A_ContentItemTag')
        contentItemTag.innerText = tag
        contentItemTags.appendChild(contentItemTag)
    })
    //
    const contentItemTitle = document.createElement('h2')
    contentItemTitle.classList.add('A_ContentItemTitle')

    const contentItemSpan = document.createElement('span')
    contentItemSpan.classList.add('Q_ContentItemSpan')
    contentItemSpan.innerHTML = `[${contentItemData.category.toUpperCase()[0]}] `

    contentItemTitle.innerText = contentItemData.title
    contentItemTitle.insertBefore(contentItemSpan, contentItemTitle.firstChild);
    //
    // const contentItemDescription = document.createElement('p')
    // contentItemDescription.classList.add('A_ContentItemDescription')
    // contentItemDescription.innerText = contentItemData.description
    //
    // contentItem.appendChild(contentItemCover)
    contentItem.appendChild(contentItemTitle)
    contentItem.appendChild(contentItemTags)
    // contentItem.appendChild(contentItemDescription)


    return contentItem
}

function renderCardsByIds(container, ids) {
    ids = [...new Set(ids)]

    ids.forEach((id) => {
        content.forEach((item) => {
            if (item.id === id) {
                // adding a link
                const link = document.createElement('a')
                link.style = "text-decoration: none"
                link.href = item.link
                link.appendChild(createContentCard(item))
                container.appendChild(link)
            }
        })
    })
}

function rerenderSearchedContent(requestText) {
    const contentItemsContainer = document.querySelector('.S_Content')
    contentItemsContainer.innerHTML = ''

    let contentItemIds = []

    content.forEach((contentItem) => {
        const nbspRegex = /[\u202F\u00A0]/gm
        const punctuationRegex = /[.,\/#!$%\^&\*;:{}=\-_`~()]/gm
        const numberRegex = /^\d/
        const tags = contentItem.tags.toString().toLowerCase().split(',')
        let { title, description } = contentItem

        title = title.replaceAll(nbspRegex, ' ')
        title = title.replaceAll(punctuationRegex, '').toLowerCase()
        description = description.replaceAll(nbspRegex, ' ')
        description = description.replaceAll(punctuationRegex, '').toLowerCase()

        requestText = requestText.toLowerCase()

        if (requestText.length >= 3 && !numberRegex.test(requestText)) {
            if (title.includes(requestText) || description.includes(requestText) || tags.includes(requestText)) {
                contentItemIds.push(contentItem.id)
            }
        } else if (!numberRegex.test(requestText)) {
            contentItemIds.push(contentItem.id)
        }
    })

    if (contentItemIds.length > 0) {
        renderCardsByIds(contentItemsContainer, contentItemIds)
    } else {
        renderNothingFound()
    }
}

function renderNothingFound() {
    const contentItemsContainer = document.querySelector('.S_Content')
    const A_NothingFound = document.createElement('p')
    A_NothingFound.classList.add('A_NothingFound')
    A_NothingFound.innerHTML = 'Не нашли, что искали? :(<br> <a class="A_LinkUp" href="mailto: dperednya@edu.hse.ru">Свяжитесь с нами!<a>'
    contentItemsContainer.appendChild(A_NothingFound)
}

function initSearch() {
    const O_Search = document.querySelector('.O_Search')
    const A_Input = O_Search.querySelector('.A_Input')
    const A_Button = O_Search.querySelector('.A_Button')
    let requestText = getSearchRequest()

    if (requestText != undefined) {
        A_Input.value = requestText

        if (content) {
            rerenderSearchedContent(requestText)

        }
    } else {
        A_Input.value = ''
    }


    A_Input.addEventListener('input', (e) => {

        requestText = e.target.value

        if (requestText.length >= 3) {

            A_Button.classList.remove('disabled')
        } else {
            A_Button.classList.add('disabled')
        }

        console.log(content)
    })

    A_Input.addEventListener('keydown', (e) => {
        requestText = e.target.value

        if (e.key === 'Enter') {
            setSearchRequest(requestText)
        }
    })

    A_Button.addEventListener('click', (e) => {
        if (!e.target.classList.contains('disabled')) {
            requestText = A_Input.value
            setSearchRequest(requestText)
            rerenderSearchedContent(requestText)
        }
    })
}

document.addEventListener('DOMContentLoaded', () => {
    getPostTeasers().then((data) => {
        content = data
        initSearch()
    })
})