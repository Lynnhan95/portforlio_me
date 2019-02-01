window.setTimeout(function(){
    load.classList.remove('active')
},1000)

window.onscroll = function(){
    if( window.scrollY >0 ){
        topNavBar.classList.add('sticky')
    }else{
        topNavBar.classList.remove('sticky')
    }
}
let menuTrigger = document.getElementsByClassName('menuTrigger')
let slideTrigger = document.getElementsByClassName('submenu')
let projectTrigger = menuTrigger[0].children[1].children

console.log(projectTrigger)

menuTrigger[0].onmouseenter = function(x){
    submenu.classList.add('active');
    for(let i=0; i< projectTrigger.length; i++){
        projectTrigger[i].onmouseenter = function(){
            projectTrigger[i].classList.add('active')
        }
        projectTrigger[i].onmouseleave = function(){
            projectTrigger[i].classList.remove('active')
        }
    }
  
}
menuTrigger[0].onmouseleave = function(){
    submenu.classList.remove('active');
   
}
let aTags = document.querySelectorAll('nav.menu > ul > li >a ')
for(let i=0; i< aTags.length; i++){
    aTags[i].onclick = function(x){
        x.preventDefault()
        let cur = x.currentTarget
        let curHref = cur.getAttribute('href')
        
        let element = document.querySelector(curHref)
        // let rect = element.getBoundingClientRect()
        var posY = element.offsetTop;
        window.scrollTo(0,posY- 90)
        
    }
}
portfolio1.onclick= function(){
  portfolioBar.className = 'bar state-1'
}
portfolio2.onclick= function(){
  portfolioBar.className = 'bar state-2'
}
portfolio3.onclick= function(){
  portfolioBar.className = 'bar state-3'
}