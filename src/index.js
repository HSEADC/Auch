import './index.css'
import './resources/mustSOS.pdf'
import './resources/forestSOS.pdf'
import './resources/mountainSOS.pdf'
import './resources/riverSOS.pdf'

// FILTERING BY TAGS ON GALLERY PAGES
const cloudTags = document.getElementsByClassName("A_CloudTag")
let unfilteredItems = [...document.getElementsByClassName("link-card")] // REVIEW выгоднее было бы не сохранять вот так вот штучки, а работать в более JSONшкой системой
const container = document.querySelector(".W_CardBlock")

for (let i = 0; i < cloudTags.length; i++) { // REVIEW абстрагировать
    let currentCloudTag = cloudTags[i]
    let currentTag = currentCloudTag.dataset.tags
    currentCloudTag.addEventListener('click', () => {
        if (!currentCloudTag.classList.contains("active")) {
            untoggleAllCloudTags()
            currentCloudTag.classList.toggle("active");
            filterGalleryByTag(currentTag)
        } else {
            currentCloudTag.classList.toggle("active");
            restoreUnfilteredItems()
        }

    })
}

// empties the gallery content container (deletes all content cards)
function clearGalleryContainer() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

// this function filters out content items by a tag in input, deleting unrelated items
function filterGalleryByTag(tag) {

    // clear container before filtering, so only filtered cards can be added and displayed
    clearGalleryContainer()

    for (let i = 0; i < unfilteredItems.length; i++) {
        let currentItem = unfilteredItems[i].getElementsByTagName('div')[0]
        let contentItemTags = currentItem.dataset.tags.split(',')

        if (contentItemTags.includes(tag)) {
            container.appendChild(unfilteredItems[i])
        }
    }
}

// this function is toggled when a tag is clicked on second time in a row,
// so it reverses the filtering and sets gallery back to first state
function restoreUnfilteredItems() {
    clearGalleryContainer()
    for (let i = 0; i < unfilteredItems.length; i++) {
        container.appendChild(unfilteredItems[i])
    }
}

function untoggleAllCloudTags() {
    for (let i = 0; i < cloudTags.length; i++) {
        if (cloudTags[i].classList.contains("active")) {
            cloudTags[i].classList.toggle("active")
        }
    }
}





