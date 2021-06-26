const baseUrl = 'https://60d5f912943aa60017768d3c.mockapi.io/api/v1/users';

export function getUsersList() {
  return fetch(baseUrl).then((responce) => responce.json())
   
}

export function getUserById(userId) {
  return fetch(
    `https://60d5f912943aa60017768d3c.mockapi.io/api/v1/users/${userId}`
  ).then((responce) => responce.json());
}

export function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(userData)
  });
}

export function deleteUser(userId) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'DELETE',
  })
}

export function updateUser(userId, userData) {
  return fetch(`${baseUrl}/${userId}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData)
  });
}

