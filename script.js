(function () {
  "use strict";

  // Menu em ecrãs pequenos
  var btn = document.querySelector(".menu-btn");
  var nav = document.getElementById("nav");
  btn.addEventListener("click", function () {
    var open = nav.classList.toggle("open");
    btn.setAttribute("aria-expanded", open);
  });
  nav.addEventListener("click", function () {
    nav.classList.remove("open");
    btn.setAttribute("aria-expanded", "false");
  });

  // Janelas de detalhe dos projectos
  document.querySelectorAll("[data-open]").forEach(function (el) {
    el.addEventListener("click", function () {
      var d = document.getElementById(el.getAttribute("data-open"));
      if (d && d.showModal) d.showModal();
    });
  });

  // Fechar: botão Fechar ou clique fora da janela
  document.querySelectorAll("dialog").forEach(function (d) {
    d.addEventListener("click", function (e) {
      if (e.target === d || e.target.hasAttribute("data-close")) d.close();
    });
  });

  // Ampliar capturas de ecrã
  var lb = document.getElementById("lightbox");
  var lbImg = lb.querySelector("img");
  document.querySelectorAll("[data-img]").forEach(function (b) {
    b.addEventListener("click", function () {
      var thumb = b.querySelector("img");
      lbImg.src = b.getAttribute("data-img");
      lbImg.alt = thumb ? thumb.alt : "";
      lb.showModal();
    });
  });

  // Ligações ainda sem URL real: avisam em vez de levar a lado nenhum
  var toast = document.getElementById("toast");
  var timer;
  document.querySelectorAll("a[data-ph]").forEach(function (a) {
    a.addEventListener("click", function (e) {
      e.preventDefault();
      toast.textContent = "Por preencher: " + a.getAttribute("data-ph");
      toast.classList.add("on");
      clearTimeout(timer);
      timer = setTimeout(function () { toast.classList.remove("on"); }, 2600);
    });
  });
})();
