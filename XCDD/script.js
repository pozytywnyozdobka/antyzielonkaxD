let zakazane = [
    "strumyk",
    "discord",
    "dsc",
    
]
console.log("#gra sz?")
function usuwanie() {

    let zielonki = document.getElementsByClassName("green-profile")
    if (zielonki.length > 0) {
        for (let i = 0; i < zielonki.length; i++) {
            if (typeof(zielonki[i].closest(".entry")) != 'undefined' && zielonki[i].closest(".entry") != null) {
            zielonki[i].closest(".entry").style.display = "none"
            }

        }
    }

    let posty = document.getElementsByClassName("wrapper")
    for (let i = 0; i < posty.length; i++) {
        if (typeof(posty[i].closest(".entry")) != 'undefined' && posty[i].closest(".entry") != null) {
        let post = posty[i].textContent.replace(/\s/g, '')
        let u = () => { posty[i].closest(".entry ").style.display = "none" }
        zakazane.forEach((xd) => {
            if (post.indexOf(xd) !== -1) {

                u();
            }
        })
    }
        
    }

}

document.addEventListener("load", usuwanie())




const resizeObserver = new ResizeObserver(entries => {
        usuwanie()

    }
)




resizeObserver.observe(document.getElementsByClassName("main-content")[0])







