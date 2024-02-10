import axios from "axios";

const api_url = "http://localhost:8080/characters";

export async function saveCharacter(game) {
    return await axios.post(api_url, game)
}

export async function getAllCharacters(page = 0, size = 10) {
    return await axios.get(`${api_url}?page=${page}&size=${size}`)
}

export async function getCharacter(id) {
    return await axios.get(`${api_url}/${id}`)
}

export async function updateCharacter(game) {
    return await axios.post(api_url, game)
}

export async function updateCharacterImage(formData) {
    return await axios.put(`${api_url}/image`, formData)
}

export async function deleteCharacter(id) {
    return await axios.delete(`${api_url}/${id}`)
}