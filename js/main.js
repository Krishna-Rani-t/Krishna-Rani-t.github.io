// Mobile menu
(function () {
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle("open", open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.textContent = open ? "Close" : "Menu";
  }

  toggle.addEventListener("click", function () {
    setOpen(!nav.classList.contains("open"));
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && nav.classList.contains("open")) {
      setOpen(false);
      toggle.focus();
    }
  });
})();

// Copy buttons (used for the BibTeX entry on the research page)
document.querySelectorAll("[data-copy]").forEach(function (btn) {
  var original = btn.textContent;
  btn.addEventListener("click", function () {
    var target = document.getElementById(btn.getAttribute("data-copy"));
    if (!target) return;
    var text = target.textContent.trim();
    var done = function (msg) {
      btn.textContent = msg;
      setTimeout(function () { btn.textContent = original; }, 2200);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        function () { done("Copied"); },
        function () { done("Select the text to copy"); }
      );
    } else {
      done("Select the text to copy");
    }
  });
});
