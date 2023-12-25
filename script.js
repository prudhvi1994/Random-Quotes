const api = 'https://dummyjson.com/quotes/random'
const showQuote= document.getElementById("quote")
const showAuthor= document.getElementById ("author")

showAuthor.classList.add('author-box')

async function getQuote(url){
    await fetch(url)
    .then(data => data.json())
    .then (item=>{
        showQuote.innerText= '" '+item.quote+' "'
        showAuthor.innerText= item.author
        showAuthor.classList.remove('author-box')
    })

}
getQuote(api)