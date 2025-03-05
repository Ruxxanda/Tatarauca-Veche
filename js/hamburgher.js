class Meniu {
    constructor() {
        this.meniuNav = document.querySelector("nav .lincuri");
        this.hamburgher = document.querySelector(".hamburgher");
        this.buton = document.createElement("i");
        this.buton.className = "icon-meniu";
        document.body.appendChild(this.buton);

        this.buton.addEventListener("click", (event) => this.toggleMeniu(event));
        document.addEventListener("click", (event) => this.inchideDacaExterior(event));
        
        this.verificaDimensiune();
        window.addEventListener("resize", () => this.verificaDimensiune());
    }

    verificaDimensiune() {
        if (window.innerWidth <= 768) {
            this.meniuNav.style.display = "none";
            this.buton.style.display = "block";
        } else {
            this.meniuNav.style.display = "flex";
            this.buton.style.display = "none";
            this.hamburgher.classList.remove("activ");
        }
    }

    toggleMeniu(event) {
        event.stopPropagation();
        this.hamburgher.classList.toggle("activ");
    }

    inchideDacaExterior(event) {
        if (!this.hamburgher.contains(event.target) && event.target !== this.buton) {
            this.hamburgher.classList.remove("activ");
        }
    }
}

new Meniu();
