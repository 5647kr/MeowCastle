class MeowCastle {
  constructor() {
    const header = document.querySelector("header");
    this.navBtn = header.querySelectorAll(".navBtn button");
    this.navMenu = header.querySelector("nav");
    this.navCloseBtn = header.querySelector("nav .navHeader button");
    this.searchForm = header.querySelector(".searchForm");
    this.blindBg = document.querySelector(".blindBg");

    const main = document.querySelector("main");
    
    this.productSection = main.querySelector(".productSection")

    this.faqSection = main.querySelector(".faqSection");
    this.formBtn = this.faqSection.querySelectorAll(".formBtnWrap button");
    this.faqForm = this.faqSection.querySelectorAll("form");
  }

  mainPageEvent() {
    this.navMenuEvent();
    this.faqFormEvent();
    this.faqFormValidate();
    this.productEvent(".left", "left");
    this.productEvent(".right", "right");
  }

  navMenuEvent() {
    const menuBtn = this.navBtn[0];
    const searchBtn = this.navBtn[1];
    const closeBtn = this.navBtn[2];

    menuBtn.addEventListener("click", () => {
      this.blindBg.classList.add("active");
      this.navMenu.classList.add("active");
      searchBtn.disabled = true;
      document.body.style.overflow = "hidden"
    })
    
    this.navCloseBtn.addEventListener("click", () => {
      this.blindBg.classList.remove("active");
      this.navMenu.classList.remove("active");
      searchBtn.disabled = false;
      document.body.style.overflow = "initial"
    })
    
    searchBtn.addEventListener("click", () => {
      searchBtn.style.display = "none"
      closeBtn.style.display = "block"
      this.searchForm.classList.add("active");
      this.blindBg.classList.add("active");
      this.blindBg.classList.add("search");
      menuBtn.disabled = true;
      document.body.style.overflow = "hidden"
    })
    
    closeBtn.addEventListener("click", () => {
      searchBtn.style.display = "block"
      closeBtn.style.display = "none"
      this.searchForm.classList.remove("active");
      this.blindBg.classList.remove("active");
      this.blindBg.classList.remove("search");
      menuBtn.disabled = false;
      document.body.style.overflow = "initial"
    })
  }

  productEvent(targetEl, direction) {
    const target = this.productSection.querySelector(targetEl);
    const firstLi = target.querySelector("li");
    let slideWidth = 0;
    
    if (window.innerWidth < 481) {
      slideWidth = firstLi.offsetWidth + 20;
    } else if (481 <= window.innerWidth && window.innerWidth <= 768) {
      slideWidth = firstLi.offsetWidth + 40;
    } else if (769 <= window.innerWidth && window.innerWidth <= 1024) {
      slideWidth = firstLi.offsetWidth + 40;
    } else if (1025 <= window.innerWidth && window.innerWidth <= 1460) {
      slideWidth = firstLi.offsetWidth + 60;
    } else {
      slideWidth = firstLi.offsetWidth + 60;
    }

    const animation = target.animate([
      {left: direction === "left" ? `-${slideWidth}px` : `${slideWidth}px`}
    ], {
      duration: 4000,
      easing: "linear"

    })

    animation.onfinish = () => {
      if(direction === "left") {
        target.appendChild(firstLi)
      } else {
        const lastLi = target.querySelector("li:last-child");
        target.insertBefore(lastLi, target.firstChild);
      }
      this.productEvent(targetEl, direction);
    }
  }



  faqFormEvent() {
    const reserveBtn = this.formBtn[0]
    const inquiryBtn = this.formBtn[1]
    const reserveForm = this.faqForm[0]
    const inquiryForm = this.faqForm[1]

    reserveBtn.addEventListener("click", () => {
      inquiryBtn.classList.remove("active");
      reserveBtn.classList.add("active")
      inquiryForm.classList.remove("active");
      reserveForm.classList.add("active");
    })

    inquiryBtn.addEventListener("click", () => {
      reserveBtn.classList.remove("active");
      inquiryBtn.classList.add("active");
      reserveForm.classList.remove("active");
      inquiryForm.classList.add("active");
    })
  }

  faqFormValidate() {
    const reserveForm = this.faqSection.querySelector(".reserveForm");
    const inquiryForm = this.faqSection.querySelector(".inquiryForm");
  
    const reserveInput = reserveForm.querySelectorAll("input");
    const inquiryInput = inquiryForm.querySelectorAll("input");
    const inquiryTxt = inquiryForm.querySelector("textarea");
  
    const reserveBtn = reserveForm.querySelector("button");
    const inquiryBtn = inquiryForm.querySelector("button");
  
    const checkInputs = (inputs) => {
      return Array.from(inputs).every(input => input.value.trim() !== "");
    };
  
    reserveInput.forEach((input) => {
      if(input.type === "tel") {
        input.addEventListener("input", () => {
          input.value = input.value.replace(/[^0-9]/g, "");
        })
      }

      input.addEventListener("input", () => {
        if (checkInputs(reserveInput)) {
          reserveBtn.classList.add("active");
          reserveBtn.disabled = false;
        } else {
          reserveBtn.classList.remove("active");
          reserveBtn.disabled = true;
        }
      });
    });
  
    inquiryInput.forEach((input) => {
      if(input.type === "tel") {
        input.addEventListener("input", () => {
          input.value = input.value.replace(/[^0-9]/g, "");
        })
      }
      
      input.addEventListener("input", () => {
        if (checkInputs(inquiryInput) && inquiryTxt.value.trim() !== "") {
          inquiryBtn.classList.add("active");
          inquiryBtn.disabled = false;
        } else {
          inquiryBtn.classList.remove("active");
          inquiryBtn.disabled = true;
        }
      });
    });
  
    inquiryTxt.addEventListener("input", () => {
      if (checkInputs(inquiryInput) && inquiryTxt.value.trim() !== "") {
        inquiryBtn.classList.add("active");
        inquiryBtn.disabled = false;
      } else {
        inquiryBtn.classList.remove("active");
        inquiryBtn.disabled = true;
      }
    });
  }
  
}

const meow = new MeowCastle();
meow.mainPageEvent()