var showNavbar = document.getElementById("show-navbar");
var container = document.getElementById("container");
var navBar = document.getElementById("left-menu");

/**
 * Fontion permettant de cacher et d'afficher le menu de navigation
 */
function updateNavBar()
{
    if(container.classList.contains("reduced"))
    {
        container.classList.remove("reduced");
        navBar.classList.remove("reduced");

        showNavbar.innerHTML = `<i class="fa fa-bars"></i>`;
    }
    else
    {
        container.classList.add("reduced");
        navBar.classList.add("reduced");
        showNavbar.innerHTML = `<i class="fa fa-times"></i>`;
    }
}

function updateContents()
{   
    $("#show-payment-statut").click(() => {
        $("#payment-content").slideToggle();
    })

    $("#show-filters").click(() => {
        $("#filters-content").slideToggle();
    })

    $("#show-search").click(() => {
        $("#search-content").slideToggle();
    })

    var dropDownMenu = document.getElementsByClassName("nav-dropdown-menu");
    for(let i = 0; i < dropDownMenu.length; i++)
    {
        let elt = dropDownMenu[i];
        elt.addEventListener("click", (e) => {
            if(elt.classList.contains("active")) elt.classList.remove("active");
            else elt.classList.add("active");
        })
    }

    /*$(".nav-dropdown-menu").click(() => {
        $(this).toggleClass("active");
    })*/
}

showNavbar.addEventListener("click", (e) => {
    e.preventDefault();
    updateNavBar();
});

updateContents();