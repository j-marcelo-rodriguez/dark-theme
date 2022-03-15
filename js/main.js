var lightTheme = document.getElementsByTagName('link')[1]
var logoLight = document.getElementById('dark-light')
var btn1 = document.getElementById('light-theme')

btn1.addEventListener('click', function () {
    lightTheme.setAttribute('href', 'css/light-theme.css')
    logoLight.setAttribute('src', 'img/LogoMakr-8MxZFY.png')
})


// var darkTheme = document.getElementsByTagName('link')[1]
// var logoDark = document.getElementById('dark-light')
var btn2 = document.getElementById('dark-theme')

btn2.addEventListener('click', function () {
    lightTheme.setAttribute('href', 'css/dark-theme.css')
    logoLight.setAttribute('src', 'img/LogoDark.png')
})
