(function() {
    "use strict";
  
    const select = (el, all = false) => {
        el = el.trim()
        if (all) {
          return [...document.querySelectorAll(el)]
        } else {
          return document.querySelector(el)
        }
    }

    const on = (type,el,listener,all=false) => {
        let selectEl = select(el,all)
        if (selectEl) {
            if (all) {
                selectEl.forEach(e => e.addEventListener(type,listener))
            } else {
                selectEl.addEventListener(type,listener)
            }
        }
    }

    /**
   * Easy on scroll event listener 
   */
    const onscroll = (el, listener) => {
        el.addEventListener('scroll', listener)
    }

  /**
   * Navbar links active state on scroll
   */
    let navbarlinks = select('#navbar .scrollto', true)
    const navbarlinksActive = () => {
        let position = window.scrollY + 200
        navbarlinks.forEach(navbarlink => {
            if (!navbarlink.hash) return
                let section = select(navbarlink.hash)
            if (!section) return
            if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
            navbarlink.classList.add('active')
            } else {
                navbarlink.classList.remove('active')
            }
        })
    }
    window.addEventListener('load', navbarlinksActive)
    onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
    const scrollto = (el) => {
        let elementPos = select(el).offsetTop
        window.scrollTo({
            top: elementPos,
            behavior: 'smooth'
        })
    }

    /**
    * Back to top button
    */
    let backtotop = select('.back-to-top')
    console.log(backtotop)
    if (backtotop) {
        const toggleBacktotop = () => {
            console.log(window.scrollY)
            if (window.scrollY > 100) {
                backtotop.classList.add('active')
                console.log("add")
            } else {
                backtotop.classList.remove('active')
            }
        }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
    }
    
    /**
     * Mobile nav toggle
    */
    on('click', '.mobile-nav-toggle', function(e) {
        select('body').classList.toggle('mobile-nav-active')
        this.classList.toggle('bi-list')
        this.classList.toggle('bi-x')
    })

  
    on('click', '.scrollto', function(e) {
        if (select(this.hash)) {
        e.preventDefault()

        let body = select('body')
        if (body.classList.contains('mobile-nav-active')) {
            body.classList.remove('mobile-nav-active')
            let navbarToggle = select('.mobile-nav-toggle')
            navbarToggle.classList.toggle('bi-list')
            navbarToggle.classList.toggle('bi-x')
        }
        scrollto(this.hash)
        }
    }, true)

    /**
     * Scroll with ofset on page load with hash links in the url
     */
    window.addEventListener('load', () => {
        if (window.location.hash) {
        if (select(window.location.hash)) {
            scrollto(window.location.hash)
        }
        }
    });

    var url = window.location.pathname;
    var filename = url.substring(url.lastIndexOf('/')+1);

    const downloadBtn = document.getElementById('download-btn')
    downloadBtn.addEventListener('click', downloadCv)

    function downloadCv() {
        var cvfileName = "";
        var cvUrl = "";
        if (filename === "Amelie.html"){
            cvfileName = 'nikeza_amelie.pdf';
            cvUrl = '../cv_assets/cv_files/nikeza_amelie.pdf';

        } else if (filename === "Hajar.html"){
            cvfileName = 'Hajar_DERFOUF.pdf';
            cvUrl = '../cv_assets/cv_files/Hajar_DERFOUF.pdf';
        } else {
            cvfileName = 'Peio_GIL.pdf';
            cvUrl = '../cv_assets/cv_files/Peio_GIL.pdf';
        }
        
        const a = document.createElement('a');
        a.href = cvUrl;
        a.download = cvfileName;
        a.click();
    }

    if (filename === "Amelie.html"){
        var typed = new Typed('.typed', {
            strings: ["big fan of Louis de funès","music lover","dog lover",""],
            typeSpeed: 50,
            backSpeed: 80,
            loop:true
        });
    } else if (filename === "Hajar.html"){
        var typed = new Typed('.typed', {
            strings: ["ukulele learner","big sushi lover",""],
            typeSpeed: 50,
            backSpeed: 80,
            loop:true
        });
    } else {
        var typed = new Typed('.typed', {
            strings: ["a big sushi lover","a fan of TFC","a world traveller"],
            typeSpeed: 50,
            backSpeed: 80,
            loop:true
        });
    };


})()