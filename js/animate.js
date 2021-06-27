var movingLetters = document.querySelector('.icon');

anime.timeline({
    loop: true
})
    .add({
        targets: '.icon',
        borderRadius: '17.5%',
        easing: 'easeInOutQuad',
        delay: 500

    }).add({
        targets: '.icon',
        borderRadius: '50%',
        easing: 'easeInOutQuad',
        delay: 500
    }).add({
        targets: '.icon',
        borderRadius: '0%',
        easing: 'easeInOutQuad',
        delay: 500
    });