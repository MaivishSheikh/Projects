let bar = document.getElementById('bar')
let close = document.getElementById('close')
let nav = document.getElementById('nav')
function showing() {
    nav.classList.toggle('active')
}

let navlinks = document.querySelectorAll('.lks')

navlinks.forEach(links => {
    links.addEventListener('click', () => {
        links.classList.add('line')
        navlinks.forEach(otherLinks => {
            if(otherLinks == links) {
                otherLinks.classList.add('line')
            }
            if(otherLinks !== links) {
                otherLinks.classList.remove('line')
            }
        })
    })
})

const specials = document.querySelectorAll('.special');

specials.forEach(special => {
    special.addEventListener('click', () => {
        const target = special.dataset.target;
        const content = document.getElementById(target);
        special.classList.add('bgcolor');
        content.classList.add('visible');

        specials.forEach(otherSpecial => {
            const otherTarget = otherSpecial.dataset.target;
            const otherContent = document.getElementById(otherTarget);
            if(otherSpecial == special) {
                otherSpecial.classList.add('bgcolor')
                otherContent.classList.add('visible')
            }
            if (otherSpecial !== special) {
                otherSpecial.classList.remove('bgcolor');
                otherContent.classList.remove('visible');
            }
        });
    });
});