const btnmenu = document.querySelector(".btn-menu")        
        const navlinks = document.querySelector(".nav-links")             
        const root = document.querySelector("root");

        btnmenu.addEventListener('click',()=>{                        
        navlinks.classList.toggle('responsive-menu')
        root.style.overflowY = "hidden"
        })