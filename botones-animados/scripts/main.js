import { getAvatar, getUser } from "./api-github.js";

const data = await getUser("Alvaro-Neyra");
console.log(data);

const avatar = await getAvatar("Alvaro-Neyra");
console.log(`Avatar url of the user Alvaro-Neyra: ${avatar}`)