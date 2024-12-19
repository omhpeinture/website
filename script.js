<script>
    window.addEventListener("scroll", function() {
        const header = document.getElementById("header");
        if (window.scrollY > 50) {  // Vous pouvez ajuster cette valeur
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
</script>

