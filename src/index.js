import './index.css'
import $ from 'jquery'

// must AND WILL be replaced by vanilla js
$(document).ready(function() {
    $(".MainLink").click(function() {document.location.href="https://auch.adc.ac"});
    $(".ArticlesLink").click(function() {document.location.href="https://auch.adc.ac/articles.html"});
    $(".QuizesLink").click(function() {document.location.href="https://auch.adc.ac/quizes.html"});
    $(".CardsLink").click(function() {document.location.href="https://auch.adc.ac/cards.html"});

    $(".DesertLink").click(function() {document.location.href="https://auch.adc.ac/articles/desert.html"});
    $(".FireEscapeLink").click(function() {document.location.href="https://auch.adc.ac/quizes/fire_escape.html"});
    $(".BurnLink").click(function() {document.location.href="https://auch.adc.ac/cards/burn.html"});
    $(".Q_Logo").click(function() {document.location.href="https://auch.adc.ac"});
})

// implementation of filtering by tags on gallery pages
const cloudTags = document.getElementsByClassName("A_CloudTag")
let unfilteredItems = [...document.getElementsByClassName("M_ArticleCard")]
const container = document.querySelector(".W_CardBlock")

for (let i = 0; i < cloudTags.length; i++) {
    let currentCloudTag = cloudTags[i]
    let currentTag = currentCloudTag.dataset.tags
    cloudTags[i].addEventListener('click', () => {
        console.log(cloudTags[i].classList.contains("active"))
        if (!cloudTags[i].classList.contains("active")) {
            // untoggleAllCloudTags()
            cloudTags[i].classList.toggle("active");
            filterGalleryByTag(currentTag)
        } else {
            cloudTags[i].classList.toggle("active");
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
        let contentItemTags = unfilteredItems[i].dataset.tags.split(',')

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

// function untoggleAllCloudTags() {
//     for (let i = 0; i < cloudTags.length; i++) {
//         if (cloudTags[i].classList.contains("active")) {
//             cloudTags[i].classList.toggle("active")
//         }
//     }
// }