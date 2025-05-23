gsap.from("header", {
    duration: 1,
    y: -100,
    opacity: 0,
    ease: "bounce.out"
  });
  
  gsap.from(".hero h2", {
    duration: 1,
    x: -100,
    opacity: 0,
    delay: 0.3
  });
  gsap.from(".hero p", {
    duration: 1,
    x: 100,
    opacity: 0,
    delay: 0.6
  });
  gsap.from(".btn", {
    duration: 1,
    scale: 0,
    opacity: 0,
    delay: 1
  });
  
  gsap.from(".card", {
    scrollTrigger: {
      trigger: ".cards",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2
  });
  
  gsap.from(".sell-form form", {
    scrollTrigger: {
      trigger: ".sell-form",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    scale: 0.8,
    duration: 1
  });
  
  gsap.from(".about img", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    x: -100,
    opacity: 0,
    duration: 1
  });
  
  gsap.from(".about-text", {
    scrollTrigger: {
      trigger: ".about",
      start: "top 85%",
      toggleActions: "play none none none"
    },
    x: 100,
    opacity: 0,
    duration: 1
  });
  
  gsap.from(".testimonial", {
    scrollTrigger: {
      trigger: ".testimonials",
      start: "top 80%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.3
  });
  
  gsap.from("footer", {
    scrollTrigger: {
      trigger: "footer",
      start: "top 90%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
  gsap.from("#sellBookForm", {
    scrollTrigger: {
      trigger: "#sellBookForm",
      start: "top 85%",
    },
    opacity: 0,
    y: 50,
    duration: 1
  });
