const myFonts = document.getElementById('my fonts');
const buyFonts = document.getElementById('buy fonts');

const buyFontsCard = document.getElementById("buy-fonts-card")
const myFontsCard = document.getElementById("my-fonts-card")

myFonts.addEventListener('click', () => {
    myFonts.classList.add("navbar__tab--active")
    buyFonts.classList.remove("navbar__tab--active")
    myFontsCard.classList.add('card--active')
    buyFontsCard.classList.remove('buy-fonts-card--active')

})

buyFonts.addEventListener('click', () => {
    buyFonts.classList.add("navbar__tab--active")
    myFonts.classList.remove("navbar__tab--active")
    myFontsCard.classList.remove('card--active')
    buyFontsCard.classList.add('buy-fonts-card--active')
})


const findBestMatch = (k, arr) => {
    return arr.reduce((acc, curr) => {
        return Math.abs(curr - k) < Math.abs(acc - k) ? curr : acc;
    });
}

console.log(findBestMatch(4, [20, 8, 11, 15, 25, 9]));
