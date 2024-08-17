// const getSuspender = (promise) => {
//   let status = 'pending';
//   let response;

//   const suspender = promise.then(
//     (res) => {
//       status = 'success';
//       response = res;
//     },
//     (err) => {
//       status = 'error';
//       response = err;
//     },
//   );

//   console.log(response, suspender);

//   const read = () => {
//     switch (status) {
//       case 'pending':
//         throw suspender;
//       case 'error':
//         throw response;
//       default:
//         return response;
//     }
//   };

//   return { read };
// };

// export function fetchData(url, method = 'GET', data = {}) {
//   const token = '1';
//   const headers = {
//     'x-api-key': '1',
//     'Content-Type': 'application/json',
//     Authorization: `Bearer ${token}`,
//   };
//   const promise = fetch(url, {
//     method: method,
//     headers,
//     body: JSON.stringify(data)
//   })
//     .then((response) => response.json())
//     .then((json) => json);

//   return getSuspender(promise);
// }

export const makeRequest = async <T>(
  url: string,
  method: 'GET' | 'POST' | 'PUT' | 'DELETE' = 'GET',
  data: T | null = null,
  token: string | null = null,
): Promise<T | null> => {
  const options: RequestInit = {
    method,
    headers: {
      'x-api-key': '1',
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }), // Añade autorización si hay token
    },
    ...(data && method !== 'GET' && { body: JSON.stringify(data) }), // Añade el cuerpo si es necesario
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Retorna JSON si la respuesta tiene contenido, si no, retorna null
    return response.status !== 204 ? ((await response.json()) as T) : null;
  } catch (error) {
    console.error('Request failed:', error);
    throw error; // Relanzar error para manejo externo
  }
};
