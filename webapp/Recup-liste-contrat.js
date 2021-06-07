window.onload = () => {
    const start = Date.now();
    //NAVBAR
    let navbar = document.createElement("nav")
    let navbarDiv = document.createElement("div")
    navbarDiv.className = "nav-wrapper"
    let logo = '<a href="#" class="brand-logo">Ayoub Brand</a>';
    navbarDiv.innerHTML = logo
    navbarDiv.innerHTML += '<ul id="nav-mobile" class="right hide-on-med-and-down"><li><a href="index.html">Accueil</a></li><li><a href="todos.html">Todos</a></li><li><a href="comments.html">Commentaire</a></li></ul>'
    navbar.append(navbarDiv)
    document.body.append(navbar)}