const year = document.querySelector("[data-year]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const navLinks = [...document.querySelectorAll(".nav-menu a")];
const copyButton = document.querySelector("[data-copy-email]");
const copyStatus = document.querySelector("[data-copy-status]");

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if ("IntersectionObserver" in window && navLinks.length > 0) {
  const linksById = new Map(
    navLinks
      .map((link) => [link.getAttribute("href")?.replace("#", ""), link])
      .filter(([id]) => Boolean(id))
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const link = linksById.get(entry.target.id);
        if (!link || !entry.isIntersecting) return;

        navLinks.forEach((item) => item.classList.remove("is-active"));
        link.classList.add("is-active");
      });
    },
    { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 }
  );

  linksById.forEach((_, id) => {
    const section = document.getElementById(id);
    if (section) observer.observe(section);
  });
}

if (copyButton && copyStatus) {
  copyButton.addEventListener("click", async () => {
    const email = copyButton.dataset.copyEmail;
    if (!email) return;

    try {
      await navigator.clipboard.writeText(email);
      copyStatus.textContent = "이메일 주소를 복사했습니다.";
    } catch {
      copyStatus.textContent = "복사하지 못했습니다. 주소를 직접 선택해 주세요.";
    }
  });
}
