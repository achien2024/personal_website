/* Set the width of the sidebar to 250px (show it) */
function toggleNav()
{
    var sidenav = document.getElementById("myLinks");
    if (sidenav.style.width == "250px")
    {
        closeNav();
    }
    else 
    {
        openNav();
    }
}

function openNav() {
    document.getElementById("myLinks").style.width = "250px";
}
  
/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
    document.getElementById("myLinks").style.width = "0";
}