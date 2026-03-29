import { getAvatar } from "./api-github.js";

async function cargarImagenInicial() {
    const img = document.getElementById("avatar-image");
    const data = await getAvatar("Alvaro-Neyra");

    if (data && img) {
        console.log(`avatar url: ${data}`)
        img.src = data;
    }
}

cargarImagenInicial();