const folderGroup = document.querySelector(".folder");

folderGroup.addEventListener('mouseover', function() {
    folderAnimation(true);
});

folderGroup.addEventListener('mouseout', function() {
    folderAnimation(false);
});

function folderAnimation(closed) {
    let folderValue = 'M7,89.5c-3,0-5.2-2.2-6.5-6.6l0.1-52c-0.3-1.7-0.1-3.3,0.7-4.5c1.2-2,3.3-3.2,5.6-3.2h146.2c2.3,0,4.5,1.2,5.6,3.2c0.7,1.2,1,2.8,0.7,4.4l0.1,52.1c-1.3,4.4-3.5,6.6-6.5,6.6H7z';
    if(closed) {
        folderValue = 'M7,89.5c-3,0-5.2-2.2-6.5-6.7l-6.8-36.7c-0.3-1.6-0.1-3.2,0.7-4.4c1.2-2,3.3-3.2,5.6-3.2h160c2.3,0,4.5,1.2,5.6,3.2c0.7,1.2,1,2.8,0.7,4.4l-6.8,36.8c-1.3,4.4-3.5,6.6-6.5,6.6H7z';
    }

    anime({
        targets: '.foldable-folder',
        d: [
            { value: folderValue},
        ],
        easing: 'easeInOutCubic',
        duration: 150,
        });
}