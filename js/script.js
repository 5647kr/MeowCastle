class MeowCastle {
  constructor() {
    const header = document.querySelector("header");
    this.navBtn = header.querySelectorAll(".navBtn button");
    this.navMenu = header.querySelector("nav");
    this.navCloseBtn = header.querySelector("nav .navHeader button");
    this.searchForm = header.querySelector(".searchForm");
    this.blindBg = document.querySelector(".blindBg")
  }

  mainPageEvent() {
    this.navMenuEvent();
  }

  navMenuEvent() {
    const menuBtn = this.navBtn[0];
    const searchBtn = this.navBtn[1];
    const closeBtn = this.navBtn[2];

    menuBtn.addEventListener("click", () => {
      this.blindBg.classList.add("active");
      this.navMenu.classList.add("active");
      searchBtn.disabled = true;
    })
    
    this.navCloseBtn.addEventListener("click", () => {
      this.blindBg.classList.remove("active");
      this.navMenu.classList.remove("active");
      searchBtn.disabled = false;
    })

    searchBtn.addEventListener("click", () => {
      searchBtn.style.display = "none"
      closeBtn.style.display = "block"
      this.searchForm.classList.add("active");
      this.blindBg.classList.add("active");
      menuBtn.disabled = true;
    })
    
    closeBtn.addEventListener("click", () => {
      searchBtn.style.display = "block"
      closeBtn.style.display = "none"
      this.searchForm.classList.remove("active");
      this.blindBg.classList.remove("active");
      menuBtn.disabled = false;
    })
  }
}

const meow = new MeowCastle();
meow.mainPageEvent()