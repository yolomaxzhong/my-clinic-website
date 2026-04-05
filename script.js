const clinicConfig = {
  bookingEmail: "appointments@maxzhongclinic.com",
  externalBookingUrl: ""
};

const yearNode = document.getElementById("year");
const nav = document.getElementById("site-nav");
const navToggle = document.querySelector(".nav-toggle");
const form = document.getElementById("booking-form");
const formStatus = document.getElementById("form-status");
const schedulerLink = document.getElementById("external-booking-link");

if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

if (nav && navToggle) {
  navToggle.addEventListener("click", () => {
    const isOpen = nav.dataset.open === "true";
    nav.dataset.open = isOpen ? "false" : "true";
    navToggle.setAttribute("aria-expanded", isOpen ? "false" : "true");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      nav.dataset.open = "false";
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (schedulerLink && clinicConfig.externalBookingUrl.trim()) {
  schedulerLink.href = clinicConfig.externalBookingUrl.trim();
  schedulerLink.classList.remove("hidden");
}

if (form && formStatus) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      formStatus.textContent = "Please complete all required fields.";
      return;
    }

    const data = new FormData(form);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const service = String(data.get("service") || "").trim();
    const date = String(data.get("date") || "").trim();
    const notes = String(data.get("notes") || "").trim();

    const subject = `Booking Request - ${name}`;
    const lines = [
      "New appointment request",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Requested Service: ${service}`,
      `Preferred Date: ${date}`,
      "",
      "Notes:",
      notes || "N/A"
    ];

    const body = lines.join("\n");
    const to = encodeURIComponent(clinicConfig.bookingEmail);
    const mailtoLink = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    formStatus.textContent = "Opening your email app to send the booking request...";
    window.location.href = mailtoLink;
  });
}

const revealItems = Array.from(document.querySelectorAll(".reveal"));

if ("IntersectionObserver" in window && revealItems.length > 0) {
  const observer = new IntersectionObserver(
    (entries, io) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.14 }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 35, 210)}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
