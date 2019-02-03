window.setTimeout(function(){
    load.classList.remove('active')
},1000)

window.onscroll = function(){
    if( window.scrollY >0 ){
        topNavBar.classList.add('sticky')
    }else{
        topNavBar.classList.remove('sticky')
    }

    let specialTags = document.querySelectorAll('div[data-x]')
    var minIndex = 0
// console.log(specialTags)
for(let i =0; i< specialTags.length;i++){
    specialTags[i].classList.remove('active')
}
for(let i =0; i< specialTags.length;i++){
    // specialTags[i].classList.add('active')
    
   if(Math.abs(specialTags[i].offsetTop-window.scrollY) < Math.abs(specialTags[minIndex].offsetTop - window.scrollY)){
       minIndex = i;
   }
}
    // console.log(minIndex)
    // specialTags[minIndex].classList.add('active')
    let id = specialTags[minIndex].id 
    // console.log(id)
    let targetA = document.querySelector('a[href="#' + id + '"]')
    let li = targetA.parentNode 
    // console.log(li)
    let childrens = li.parentNode.children
    for(var i =0; i<childrens.length;i++){
        childrens[i].classList.remove('active')
    }
    li.classList.add('active')


}

let menuTrigger = document.getElementsByClassName('menuTrigger')
let slideTrigger = document.getElementsByClassName('submenu')
let projectTrigger = menuTrigger[0].children[1].children


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
        // console.log(element)
        // let rect = element.getBoundingClientRect()
        let posY = element.offsetTop;

        let n = 25 //动几次
        let duration = 500 / n  //每次动的时间
        let currentTop = window.scrollY
        let targetTop = posY- 90
        let s = targetTop - currentTop
        
        // Setup the animation loop.
function animate(time) {
    requestAnimationFrame(animate);
    TWEEN.update(time);
}
requestAnimationFrame(animate);

var coords = { y: currentTop }; // Start at (0, 0)
let t = Math.abs((s/100) * 300)
if(t > 500){
    t = 500
}
var tween = new TWEEN.Tween(coords) // Create a new tween that modifies 'coords'.
        .to({ y: targetTop }, t) // Move to (300, 200) in 1 second.
        .easing(TWEEN.Easing.Quadratic.In) // Use an easing function to make the animation smooth.
        .onUpdate(function() { // Called after tween.js updates 'coords'.
         window.scrollTo(0,coords.y)
        })
        .start(); // Start the tween immediately.
        
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