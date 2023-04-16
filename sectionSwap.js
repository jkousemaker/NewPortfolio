const navButtons = document.querySelectorAll(".nav-link");
const sections = document.querySelectorAll("section");
const container = document.querySelector('main');

let running = false;
let currentSection = 0;

//nav buttons
for(let i = 0; i < navButtons.length; i++) {
    navButtons[i].addEventListener('click', (e) => {
        swapPage(i);
    })
}

//scroll function
window.addEventListener('wheel', function(event)
{
    if (event.deltaY < 0){
        swapPage(parseInt(currentSection - 1));
    }
    else if (event.deltaY > 0){
        swapPage(parseInt(currentSection + 1));
    }
});

/*Mobile Scrolling*/

var touchstartY = 0;
var touchendY = 0;

window.addEventListener('touchstart', function(event) {
    touchstartY = event.touches[0].clientY;
});

window.addEventListener('touchend', function(event) {
    touchendY = event.changedTouches[0].clientY;
    handleSwipe();
});

function handleSwipe() {
    var swipedDistance = touchendY - touchstartY;
    var minSwipeDistance = 50; // Minimum distance for a swipe to be detected

    if (swipedDistance < -minSwipeDistance) {
        // Swiped up
        swapPage(parseInt(currentSection + 1));
    } else if (swipedDistance > minSwipeDistance) {
        // Swiped down
        swapPage(parseInt(currentSection - 1));
    }
}

function swapPage(nextId) {
    if(running || nextId < 0 || nextId > (sections.length - 1) || currentSection == nextId) {
        return;
    }
    running = true;

    let oldTranslate;
    let newTranslate;

    const timeline = anime.timeline({
        duration: 350,
        easing: 'easeInOutCubic',
        direction: 'alternate',
    });

    const containerStyle = window.getComputedStyle(container);
    const containerPadding = parseFloat(containerStyle.paddingTop + containerStyle.paddingBottom);

    //checks if currentSection is bigger than next section with id of variable nextId
    if(currentSection < nextId) {
        oldTranslate = "calc(-100% - "+ containerPadding +"px)";
        newTranslate = "calc(100% + "+ containerPadding +"px)";
    } else {
        oldTranslate = "calc(100% + "+ containerPadding +"px)";
        newTranslate = "calc(-100% - "+ containerPadding +"px)";
    }

    console.log(oldTranslate);

    timeline
        .add({
            targets: sections[nextId],
            translateY: newTranslate,
        }, 0)
        .add({
            targets: navButtons[nextId],
            scale: 0.0,
            background: "#ffffff",
        }, 100)
        .add({
            targets: sections[currentSection],
            translateY: oldTranslate,
        }, 100)
        
        setTimeout(() => {
             sections[currentSection].classList.add("hidden");
             navButtons[currentSection].classList.remove("selected-nav");

                sections[nextId].classList.remove("hidden");
                navButtons[nextId].classList.add("selected-nav");

                currentSection = nextId;
            }, 350);
        
        console.log(currentSection, nextId);
        //duration * 2
        setTimeout(() => { 
            if(nextId == sections.length - 1) {
                document.querySelector("footer").classList.remove("disabled");
            } else {
                document.querySelector("footer").classList.add("disabled");
            }
            running = false; 
        }, 700);
}