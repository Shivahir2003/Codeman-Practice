const search =document.querySelector('.search');
const searchBox =document.querySelector('.search-box');
const searchBtn =document.querySelector('.search-btn');
const closeBtn =document.querySelector('.close-btn');

searchBtn.addEventListener('click', function(){
    if(search.classList.contains('active'))
    {
        searchBox.value = '';
    }
    else{
    search.classList.add('active');
    searchBox.focus();
    }
})

// searchBtn.addEventListener('mouseover', function(){
//     search.classList.add('active');
//     searchBox.focus();
// })

closeBtn.addEventListener('click', function(){
    search.classList.remove('active');
    searchBox.value = '';


})