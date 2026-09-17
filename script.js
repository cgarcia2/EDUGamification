async function loadCreations() {
  const grid = document.getElementById("creations-grid");

  try {
    const response = await fetch("creations.json", { cache: "no-store" });

    if (!response.ok) {
      throw new Error("Unable to load creations catalog.");
    }

    const creations = await response.json();

    if (!Array.isArray(creations) || creations.length === 0) {
      grid.innerHTML = "<p>No creations have been added yet.</p>";
      return;
    }

    grid.innerHTML = creations
      .map(
        (creation) => `
          <article class="card">
            <span class="card__tag">${creation.category}</span>
            <h3>${creation.title}</h3>
            <p>${creation.description}</p>
            <a class="card__link" href="${creation.path}">Open experience →</a>
          </article>
        `,
      )
      .join("");
  } catch (error) {
    grid.innerHTML = `<p>${error.message}</p>`;
  }
}

loadCreations();
