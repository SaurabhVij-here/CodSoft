const games = [
    // Array of game objects with details (name, image, description, etc.)
    // Example: { name: "Game Name", image: "image-url.jpg", description: "Game description..." }
];

const gamesContainer = document.querySelector(".games");

// Populate game cards
games.forEach((game) => {
    const gameCard = document.createElement("div");
    gameCard.classList.add("game-card");

    const gameImage = document.createElement("img");
    gameImage.src = game.image;
    gameImage.alt = game.name;

    const gameName = document.createElement("h3");
    gameName.textContent = game.name;

    const gameDescription = document.createElement("p");
    gameDescription.textContent = game.description;

    gameCard.appendChild(gameImage);
    gameCard.appendChild(gameName);
    gameCard.appendChild(gameDescription);

    gamesContainer.appendChild(gameCard);
});
