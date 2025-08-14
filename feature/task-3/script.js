document.addEventListener("DOMContentLoaded", async () => {
    const timeline = document.getElementById("timeline");
    const modal = document.getElementById("modal");
    const modalContent = modal.querySelector(".modal-content");

    try {
        const response = await fetch("./data/events.json");
        const events = await response.json();

        events.forEach(event => {
            // Create event marker
            const marker = document.createElement("div");
            marker.classList.add("event");

            marker.innerHTML = `
                <div class="event-year">${event.year}</div>
                <img src="${event.imageURL}" alt="${event.title}">
                 <h3>${event.title}</h3>
            `;

            // Open modal on click
            marker.addEventListener("click", () => {
                modalContent.innerHTML = `
                    <span class="close">&times;</span>
                    <h2>${event.title}</h2>
                    <p><strong>Year: </strong>${event.year}</p>
                    <img src="${event.imageURL}" alt="${event.title}">
                    <p>${event.description}</p>
                    <p><em>Category:</em> ${event.category}</p>
                `;
                modal.hidden = false;
                document.body.style.overflow = "hidden"; 
            });

            timeline.appendChild(marker);
        });

    } catch (error) {
        console.error("Error loading events:", error);
    }

    
    // Close modal on close button or outside click
     modal.addEventListener("click", e => {
        if (e.target === modal || e.target.classList.contains("close")) {
            modal.hidden = true;
            document.body.style.overflow = "";
        }
    });
});
