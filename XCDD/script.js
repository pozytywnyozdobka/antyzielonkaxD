function usuwanie() {
    let zielonki = document.getElementsByClassName("username green-profile ");
    if (zielonki.length > 0) {
        for (let i = 0; i < zielonki.length; i++) {
            zielonki[i].closest(".entry").style.display = "none"
            zielonki[i].closest(".entry ").style.display = "none"
        }
    }

    let posty = document.getElementsByClassName("wrapper")
    for (let i = 0; i < posty.length; i++) {
        let post = posty[i].textContent.replace(/\s/g, '')
        let u = () => { posty[i].closest(".entry ").style.display = "none" }
        if (post.includes("strumyk")) {
            u()
        }
        if (post.includes("discord")) {
           u()
        }
        if (post.includes("blazej")) {
            u()
        }
        
    }

}




const resizeObserver = new ResizeObserver(entries => {
        if (entries[0].contentRect.height > 200) {
            usuwanie()
        }

    }
)

var target = document.querySelector('.tag-page');

var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation.type);
    usuwanie()
  });
});

// configuration of the observer
var config = { attributes: true, childList: true, characterData: true };


observer.observe(target, config);

resizeObserver.observe(document.getElementsByClassName("main-content")[0])







