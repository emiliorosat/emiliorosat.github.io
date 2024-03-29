'use strict'

const menuLinks = document.querySelectorAll('.menu-item a[href^="#"]')

const htmlObserver = new IntersectionObserver(
    (elements) => {
        elements.forEach(element => {
            const id = element.target.getAttribute('id')
            const link = document.querySelector(`.menu-item a[href="#${id}"]`)
            
            if( element.isIntersecting)
            {
                document.querySelector(`.menu-item a.link-selected`)
                .classList.remove("link-selected")
                link.classList.add("link-selected")
            }

        });
    }, {rootMargin: "-50% 0px -50% 0px"}
)


menuLinks.forEach( (link)=>{
    
    const _hash = link.getAttribute("href")
    const element = document.querySelector(_hash)
    if(element){
        htmlObserver.observe(element)
    }
})


window.onscroll = function (){
    const scroll = document.documentElement.scrollTop || document.body.scrollTop
    console.log("scroll =>",scroll)
    if(scroll > 10){
       addFitSectionClass()
    }else{
        removeFitSectionClass()
    }
}







function addFitSectionClass()
{
    document.querySelectorAll("section")
        .forEach( function(e){
            e.classList.add("fit-section")
        })
}

function removeFitSectionClass()
{
    document.querySelectorAll("section")
        .forEach( function(e){
            e.classList.remove("fit-section")
        })
}
