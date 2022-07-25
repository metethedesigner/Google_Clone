const searchBar = document.querySelector("#search-input")

searchBar.addEventListener("keydown", function(event){
    if(event.code == "Enter"){
        search()
    }
})

let search = () => {
    const input = searchBar.value;

    window.location.href = "https://www.google.com.tr/search?q=" + input + "&hl=tr&sxsrf=ALiCzsZ0x4QkYJRpw4O5Wq-sEqgE1r3Wrw%3A1658731245898&source=hp&ei=7TreYvLMM7urxc8Pybm_sAU&iflsig=AJiK0e8AAAAAYt5I_bVrdqD5wu2Kqm_dzRb6FORJn67H&ved=0ahUKEwiy9761t5P5AhW7VfEDHcncD1YQ4dUDCAY&uact=5&oq=" + input + "&gs_lcp=Cgdnd3Mtd2l6EAMyBwgAELEDEEMyBAgAEEMyCAguEIAEELEDMgQIABBDMggIABCABBCxAzIFCAAQgAQyBAgAEEMyBAgAEEMyBAgAEEMyBAgAEEM6BwgjEOoCECc6BAgjECc6CwgAEIAEELEDEIMBOhEILhCABBCxAxCDARDHARDRAzoOCC4QgAQQsQMQxwEQ0QM6FAguEIAEELEDEIMBEMcBENEDENQCOgoIABCxAxCDARBDOhMILhCxAxCDARDHARDRAxDUAhBDOggIABCxAxCDAToKCC4QxwEQ0QMQQzoFCC4QgARQ_gJYmQZgywloAXAAeACAAXCIAZwDkgEDMS4zmAEAoAEBsAEK&sclient=gws-wiz"
}