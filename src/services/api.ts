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
    throw error;
  }
};
