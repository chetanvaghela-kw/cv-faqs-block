document.addEventListener("DOMContentLoaded", () => {
    // Iterate over each FAQ section container
    document.querySelectorAll(".cv-faqs-block-faq-section").forEach((FAQsContainer) => {
      const accordionToggles = FAQsContainer.querySelectorAll(".cv-faqs-block-faq-item-heading");
  
      accordionToggles.forEach((toggle, i) => {
        // Open the first accordion by default
        if (i === 0) {
          const content = FAQsContainer.querySelector(`#cv-faqs-accordion-content-${toggle.dataset.index}`);
          const svgIcon = toggle.querySelector(".toggle-icon-svg");
          toggle.setAttribute("aria-expanded", "true");
          content.classList.add("expanded");
          content.style.maxHeight = `${content.scrollHeight}px`;
          svgIcon.classList.add("cv-rotate-180");
        }
  
        // Add click event listener to each toggle
        toggle.addEventListener("click", () => {
          const index = toggle.dataset.index; // Get the index
          const svgIcon = toggle.querySelector(".toggle-icon-svg");
          const content = FAQsContainer.querySelector(`#cv-faqs-accordion-content-${index}`); // Find the content
  
          if (!content) {
            console.error(`Accordion content with ID #cv-faqs-accordion-content-${index} not found.`);
            return;
          }
  
          const isExpanded = toggle.getAttribute("aria-expanded") === "true";
  
          // Close all other accordions within the same FAQ block
          accordionToggles.forEach((otherToggle) => {
            const otherIndex = otherToggle.dataset.index;
            const otherContent = FAQsContainer.querySelector(`#cv-faqs-accordion-content-${otherIndex}`);
            const otherIcon = otherToggle.querySelector(".toggle-icon-svg");
  
            if (otherContent && otherIcon) {
              otherToggle.setAttribute("aria-expanded", "false");
              otherContent.classList.remove("expanded");
              otherContent.style.maxHeight = "0";
              otherIcon.classList.remove("cv-rotate-180");
            }
          });
  
          // Toggle the current accordion
          toggle.setAttribute("aria-expanded", !isExpanded);
          content.classList.toggle("expanded");
  
          if (!isExpanded) {
            content.style.maxHeight = `${content.scrollHeight}px`;
            svgIcon.classList.add("cv-rotate-180");
          } else {
            content.style.maxHeight = "0";
            svgIcon.classList.remove("cv-rotate-180");
          }
        });
      });
    });
  });