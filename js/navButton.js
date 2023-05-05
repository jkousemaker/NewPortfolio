const navBut = document.querySelector(".c-navbut > button");
const navButIndicator = document.querySelector(".navbut-text");
const navButArrow = document.querySelector(".nav-arrow");

const linksContainer = document.querySelector(".nav-link-container")
const links = document.querySelectorAll(".nav-link");

let animeInstance;

const toggleNav = () => {
    document.body.dataset.nav = document.body.dataset.nav === "true" ? "false" : "true";
    let sleep = 100
    if (document.body.dataset.nav === "true") {
        console.log("pause");
        anime({
            targets: navButIndicator,
            duration: 1000,
            translateY: '-2.16',
            translateX: '57.16',
            rotate: '85',
            easing: 'easeInOutQuart'
        })
        tl = anime.timeline({
            targets: links,
            duration: 500, // Can be inherited
            delay: 0,
            endDelay: 0,
            easing: 'easeOutExpo', // Can be inherited
          });
          
          tl
          .add({
            // override the targets parameter
            targets: links[0],
            translateX: '-122',
            scale: 2.5,
            translateY: '0'
          }, sleep)
          .add({
            // override the targets parameter
            targets: links[1],
            translateX: '-65',
            translateY: '-102',
            scale: 2.5,
            rotate: '327'
          }, sleep * 2)
          .add({
            // override the targets parameter
            targets: links[2],
            translateX: '65',
            translateY: '-102',
            scale: 2.5,
            rotate: '-327'
          }, sleep * 3)
          .add({
            // override the targets parameter
            targets: links[3],
            translateX: '122',
            scale: 2.5,
            translateY: '0'
          }, sleep * 4);
        animeInstance.pause();
    } else {
        anime({
            targets: navButIndicator,
            duration: 1000,
            translateY: '0',
            translateX: '0',
            rotate: '0',
            easing: 'easeInOutQuart'
        })
        sleep = 0;
        tl.reverse();
        tl.play();
        setTimeout(() => {
            animeInstance.restart();
            animeInstance.play();
         }, 1000)
    }
};

animeInstance = anime({
    targets: navButIndicator,
    duration: 14000,
    translateY: [-51, -36, 0, 36, 51, 37, 0, -20],
    translateX: [0, 38, 51, 36, 0, -37, -51, 0],
    rotate: [0, 44, 88, 132, 177, 222, 267, 359],
    easing:'easeInOutQuad',
    loop: true,
    autoplay: true,
    delay: 10000
});


/*document.onmousemove= mouseCoordinates;


function mouseCoordinates(event){

    if(document.body.dataset.nav != "true") {
        return;
    }

    const arrowRect = navButArrow.getBoundingClientRect();
    const arrowCenterX = arrowRect.left + arrowRect.width / 2;
    const arrowCenterY = arrowRect.top + arrowRect.height / 2;
    const deltaX = event.clientX - arrowCenterX;
    const deltaY = event.clientY - arrowCenterY;
    const distance = Math.sqrt(deltaX ** 2 + deltaY ** 2);
    const scale = Math.min(distance / 100, 1);
    const scaledDeltaX = deltaX * scale;
    const scaledDeltaY = deltaY * scale;
    const angleInRadians = Math.atan2(scaledDeltaY, scaledDeltaX);
    const angleInDegrees = angleInRadians * 180 / Math.PI;

    navButArrow.style.transform = `translate(${scaledDeltaX}px, ${scaledDeltaY}px) rotate(${angleInDegrees}deg)`;
}
*/