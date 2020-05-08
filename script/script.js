changeDisplay = () => {
    let x = document.getElementById("contact");
    let y = document.body;

    if (x.style.display === "none") {
        x.style.display = "block";
        y.style.overflow = "hidden";
    } 
    else {
        x.style.display = "none";
        y.style.overflow = "scroll";
    }
}