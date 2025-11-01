const navElem = document.getElementById("page-nav")
const rootURL = ''
const navURL = ''
async function inject_navbar() {
    let res = await fetch(rootURL+navURL+'navbar.html')
    let resTxt = await res.text()
    navElem.innerHTML = resTxt
    const navCampaigns = document.getElementById("nav-campaigns")
    const navCharacters = document.getElementById("nav-characters")
    const navLogin = document.getElementById("nav-login")
    const navMain = document.getElementById("nav-homepage")
    const navCurrent = document.getElementById(currentPage) //defined in script tags on the page
    console.log(navCurrent)
    navCampaigns.href = rootURL+'campaigns.html'
    navCharacters.href = rootURL+'characters.html'
    navLogin.href = rootURL+'login.html'
    navCurrent.className = navCurrent.className+" current"
}
inject_navbar()