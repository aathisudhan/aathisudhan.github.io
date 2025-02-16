document.addEventListener("DOMContentLoaded", function () {
    // Fetch the CSV file containing project details
    fetch("projects.csv")
        .then(response => response.text()) // Convert the response to text format
        .then(data => {
            const lines = data.split("\n").slice(1); // Split the file into lines and skip the header row
            const projectsDiv = document.getElementById("projects"); // Get the div where projects will be displayed
            projectsDiv.innerHTML = ""; // Clear any existing content in the div

            // Loop through each line in the CSV file (each project entry)
            lines.forEach(line => {
                const values = line.split("|"); // Split the line into individual values based on commas
                
                if (values.length < 4) return; // Skip if the row doesn't have enough values

                // Extract individual project details from the CSV row
                const title = values[0].trim();       // Project title
                const description = values[1].trim(); // Project description
                const date = values[2].trim();        // Upload date
                const image = values[3].trim();       // Image URL for the project

                // Create the HTML structure for each project
                const projectHTML = `
                    <div class="project-container">
                        <img src="${image}" class="project-image" alt="${title}">
                        <div class="project-details">
                            <div class="project-title">${title}</div>
                            <p>${description}</p>
                            <div class="project-date">Uploaded on ${date}</div>
                        </div>
                    </div>
                `;

                // Append the new project entry to the projects div
                projectsDiv.innerHTML += projectHTML;
            });
        })
        .catch(error => {
            // Handle errors if the CSV file fails to load
            console.error("Error loading CSV:", error);
            document.getElementById("projects").innerHTML = "Failed to load projects.";
        });
});
