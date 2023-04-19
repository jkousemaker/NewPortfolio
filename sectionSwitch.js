const sections = document.querySelectorAll("section");
const navButtons = document.querySelectorAll(".nav-link");

let running = false;

document.querySelector("main").addEventListener('wheel', function(event)
{
    let currentSectionId = getVisibleSection().id;
    let currentSectionNumber = currentSectionId.match(/(\d+)/)[0];
    let nextSectionId;
    let nextSectionNumber;
    
    if (event.deltaY < 0){
        nextSectionNumber = parseInt(currentSectionNumber) - 1;
        nextSectionId = "section" + nextSectionNumber;
        switchSection(nextSectionId);
    }
    else if (event.deltaY > 0){
        nextSectionNumber = parseInt(currentSectionNumber) + 1;
        nextSectionId = "section" + nextSectionNumber;
        switchSection(nextSectionId);     
    }
});

function switchSection(id) {
    if(running || !getVisibleSection() || !getNextSection(id)) {
        return;
    }
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
     .add( {
        targets: nextSection,
        duration: 0,
        translateY: nextTransform
     })
     .add( {
        targets: currentSection,
        translateY: currentTransform,
        easing: 'easeInOutQuad'
     })
     .add( {
        targets: nextSection,
        translateY: 'calc(0vh + 0px)',
        easing: 'easeInOutQuad'
     }, '-='+duration*0.8)
     

     setTimeout(() => {
        currentSection.classList.add("hidden");

        if(nextSection.id.match(/(\d+)/)[0] == sections.length) {
            anime({
                targets: 'footer',
                height: '3rem'
            });
        }

        running = false;
     }, duration)
     
}

function getVisibleSection() {
    let style;

    for(let i = 0; i < sections.length; i++) {
        style = getComputedStyle(sections[i]);
        if(style.display != "none") {
            return sections[i];
        }
    }

    return false;
}

function getNextSection(id) {
    for(let i = 0; i < sections.length; i++) {
        if(sections[i].id == id) {
            return sections[i];
        }
    }

    return false;
}

function getTransforms(currentSection, nextSection) {
    const headerHeight = document.querySelector("header").offsetHeight;
    const footerHeight = document.querySelector(".c-bottom").offsetHeight;

    let nextTransform;
    let currentTransform;

    if(currentSection.id.match(/(\d+)/)[0] < nextSection.id.match(/(\d+)/)[0]) {
        nextTransform = "calc(100vh - "+headerHeight+"px)";
        currentTransform = "calc(-100vh + "+footerHeight+"px)";
    } else {
        nextTransform = "calc(-100vh + "+footerHeight+"px)";
        currentTransform = "calc(100vh - "+headerHeight+"px)";
    }

    return [nextTransform, currentTransform];
}