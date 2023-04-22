const sections = document.querySelectorAll("section");
const navButtons = document.querySelectorAll(".nav-link");

document.querySelector("main").addEventListener('wheel', function(event)
{
    if (event.deltaY < 0) handleSwitch("up");
    else if (event.deltaY > 0) handleSwitch("down");
    
});

// Add event listeners for touch events
let touchstartY = 0;
let touchendY = 0;

window.addEventListener('touchstart', (event) => {
    touchstartY = event.touches[0].clientY;
});

window.addEventListener('touchend', (event) => {
    touchendY = event.changedTouches[0].clientY;
    const swipedDistance = touchendY - touchstartY;
    const minSwipeDistance = 50;
    
    // Check swipe direction and trigger handleSwitch function
    if (swipedDistance < -minSwipeDistance) handleSwitch("down");
    else if (swipedDistance > minSwipeDistance) handleSwitch("up");
});

let scrolled = 0;
let timer;

function handleSwitch(direction) {
    let currentSection = getVisibleSection();
    let currentSectionId = currentSection.id;
    let nextSectionId;
    let nextSectionNumber;

    let currentDiv = currentSection;

    if(document.querySelector("#"+currentSectionId+" > .overflow-y-auto")) {
        currentDiv = document.querySelector("#"+currentSectionId+" > .overflow-y-auto");
    }

    let completedScroll = false;
    
    //Checks if element has been scrolled all the way and sets next section number based on direction of scroll
    if (direction == "up" && currentDiv.scrollTop === 0){
        nextSectionNumber = parseInt(currentSectionId.match(/(\d+)/)[0]) - 1;
        completedScroll = true;
    }
    else if (direction == "down" && currentDiv.scrollTop + currentDiv.clientHeight >= currentDiv.scrollHeight){
        nextSectionNumber = parseInt(currentSectionId.match(/(\d+)/)[0]) + 1;
        completedScroll = true;
    }

    nextSectionId = "section" + nextSectionNumber;

    if(completedScroll) switchSection(nextSectionId);    
}


let running = false;

function switchSection(id) {
    if(running || !getVisibleSection() || !getNextSection(id)) return;
    running = true;

    const currentSection = getVisibleSection();
    const nextSection = getNextSection(id);
    
    const transforms = getTransforms(currentSection, nextSection);
    const nextTransform = transforms[0];
    const currentTransform = transforms[1];
    
    nextSection.classList.remove("hidden");

    const duration = 500;

    let sectionTimeLine = anime.timeline({
        duration: duration,
     });
     
     sectionTimeLine
     //Puts next section into position for animation
     .add( {
        targets: nextSection,
        duration: 0,
        translateY: nextTransform
     }, 0)
     //Transforms current section out of viewport
     .add( {
        targets: currentSection,
        translateY: currentTransform,
        easing: 'easeInOutQuad',
     })
     .add( {
        targets: nextSection,
        translateY: 'calc(0vh + 0px)',
        easing: 'easeInOutQuad',
     }, '-='+duration*0.8)

     setTimeout(() => {
        currentSection.classList.add("hidden");

        let footerHeight;
        let easing;
        let duration;
        if(checkLastSection(nextSection)) {
            footerHeight = "3rem";
            easing = "easeOutBack";
            duration = 500;
        } else {
            footerHeight = "0";
            easing = "easeOutCubic";
            duration = 300;
        }

        anime( {
            targets: 'footer',
            height: footerHeight,
            easing: easing,
            duration: duration
        })

        running = false;
     }, duration)
     
}

function getVisibleSection() {
    let style;

    //Loops through all the sections to check which one is visible 
    for(let i = 0; i < sections.length; i++) {
        style = getComputedStyle(sections[i]);
        if(style.display != "none") {
            return sections[i];
        }
    }

    return false;
}

function getNextSection(id) {

    //Loops through all the sections to check which one is the next section
    for(let i = 0; i < sections.length; i++) {
        if(sections[i].id == id) {
            return sections[i];
        }
    }

    //Returns false if section doesn't exist preventing errors
    return false;
}

function getTransforms(currentSection, nextSection) {
    const headerHeight = document.querySelector("header").offsetHeight;
    const footerHeight = document.querySelector(".c-bottom").offsetHeight;

    let nextTransform;
    let currentTransform;

    //Checks if current section is before or after the next section and saves transform values in variables
    //Values make sure transform will be out of viewport
    if(currentSection.id.match(/(\d+)/)[0] < nextSection.id.match(/(\d+)/)[0]) {
        nextTransform = "calc(100vh - "+headerHeight+"px)";
        currentTransform = "calc(-100vh + "+footerHeight+"px)";
    } else {
        nextTransform = "calc(-100vh + "+footerHeight+"px)";
        currentTransform = "calc(100vh - "+headerHeight+"px)";
    }

    return [nextTransform, currentTransform];
}

function checkLastSection(nextSection) {

    //Checks if nextSection is last section
    if(nextSection.id.match(/(\d+)/)[0] == sections.length) {
        return true;
    }

    return false;
}
