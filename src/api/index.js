//https://developer.mozilla.org/es/docs/Web/API/Fetch_API/Using_Fetch#enviando_datos_json

const API_URL = 'http://localhost:3001';

// READ
export function read() {
  return fetch(`${API_URL}/items`).then((response) => response.json());
}

// CREATE
export function create(data) {
  return fetch(`${API_URL}/items`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

//UPDATE
export function update(id, data) {
  return fetch(`${API_URL}/items/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
}

// DELETE

export function remove(id) {
  return fetch(`${API_URL}/items/${id}`, {
    method: 'DELETE',
  }).then((response) => response.json());
}
