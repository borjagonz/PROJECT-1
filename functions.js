
const button_top = document.getElementById("button_top")
    button_top.addEventListener('click', () => {
        window.scrollTo(0, 0)
    })

window.onscroll = () => {
    if (window.scrollY < 300){
        button_top.classList.remove("button-top-on")
    } else {
        button_top.classList.add("button-top-on")
    }
    console.log(window.scrollY)
}

window.onload = () => {
    button_top.classList.remove("button-top-on")
}

const nav = document.querySelector("#nav");
const open = document.querySelector("#open");
const close = document.querySelector("#close");
const button_contact = document.querySelector("#button_contact")

open.addEventListener("click", () => {
    nav.classList.add("visible");
})

close.addEventListener("click", () => {
    nav.classList.remove("visible");
})

open.addEventListener("click", () => {
    button_contact.classList.add("visible");
})

close.addEventListener("click", () => {
    button_contact.classList.add("visible");
})

window.addEventListener('load', () => {
    const apiUrl = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects'; 

    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        const projects = data.slice(0, 3);

        const mainProject = projects.find(p => p.uuid === "1");
        if (!mainProject) {
          alert("Main project with uuid 1 not found.");
          return;
        }

          document.getElementById("main-project").innerHTML = `
          <h3>${mainProject.name}</h3>
          <p>${mainProject.description}</p>
          <p>${mainProject.content}</p>
          <img src="${mainProject.image}" alt="Project Image" width="200">
          <p>Completed on: ${mainProject.completed_on}</p>
        `;

        
        const others = data.filter(p => p.uuid !== "1");
        if (others.length < 3) {
          alert("Not enough other projects to display.");
          return;
        }

        const shuffled = others.sort(() => 0.5 - Math.random());
        const selected = shuffled.slice(0, 3);
        const otherContainer = document.getElementById("other-projects");
        selected.forEach(project => {
          const div = document.createElement("div");
          div.innerHTML = `
            <h4>${project.name}</h4>
            <p>${project.description}</p>
            <img src="${project.image}" alt="Other Project Image" width="150">
          `;
          otherContainer.appendChild(div);
        });
      })
      .catch(error => {
        console.error('API error:', error);
        alert("Failed to load projects.");
      });

    
    document.getElementById("contact_form").addEventListener("submit", function(e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim().toLowerCase();
      const email = document.getElementById("email").value.trim();

      if (name === "ironhack") {
        alert("You cannot be Ironhack, because I am Ironhack.");
        return;
      }

      alert("Form submitted successfully!");
      });
  });