const tags = document.getElementsByClassName('A_DescriptionTag')

function pickTag() {
    let tagText = ''
    for (let i = 0; i < tags.length; i++) {
        tags[i].addEventListener('click', () => {
            tagText = tags[i].getElementsByClassName('A_DescriptionTagText')[0].innerHTML
            document.location.href=`https://auch.adc.ac/search.html?request=${tagText}`
        })
    }
}

document.addEventListener('DOMContentLoaded', () => {
    pickTag()
})

export { pickTag }