<script>
  document.addEventListener("DOMContentLoaded", function () {
    setTimeout(function () {
      let sections = document.querySelectorAll(".section, .contact-section");
      sections.forEach(function (s, i) {
        setTimeout(function () {
          s.style.opacity = 1;
          s.style.transform = "translateY(0)";
          s.style.transition = "opacity 0.8s, transform 0.8s";
        }, i * 160 + 400);
      });
    }, 100);
  });
</script>
