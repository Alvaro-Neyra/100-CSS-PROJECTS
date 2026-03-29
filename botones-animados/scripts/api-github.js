const API_GITHUB = 'https://api.github.com/users/'

// Arrow function
export const getUserArrow = async (username) => {
    const URL_TO_FETCH = `${API_GITHUB}${username}`;
    const res = await fetch(URL_TO_FETCH);
    return res.json();
}

// Normal function
export async function getUser(username) {
    const URL_TO_FETCH = `${API_GITHUB}${username}`;
    const res = await fetch(URL_TO_FETCH);
    return res.json();
}

// Function expression
export const getUserExpression = async function(username) {
    const URL_TO_FETCH = `${API_GITHUB}${username}`;
    const res = await fetch(URL_TO_FETCH);
    return res.json();
}

export const getAvatar = async (username) => {
    const response = await getUserArrow(username);
    return response["avatar_url"];
}