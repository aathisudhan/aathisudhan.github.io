document.addEventListener("DOMContentLoaded", function () {
    function showTab(tabId) {
        document.querySelectorAll(".content").forEach(div => {
            div.classList.remove("active");
        });

        const selectedTab = document.getElementById(tabId);
        if (selectedTab) {
            selectedTab.classList.add("active");
        }
    }

    document.querySelectorAll("nav a").forEach(link => {
        link.addEventListener("click", function () {
            const tabId = this.getAttribute("onclick").match(/'([^']+)'/)[1]; // Extract tab name
            showTab(tabId);
        });
    });

    showTab("home");
});
