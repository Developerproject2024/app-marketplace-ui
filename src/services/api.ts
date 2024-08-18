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
      ...(token && { Authorization: `Bearer ${token}` }),
    },
    ...(data && method !== 'GET' && { body: JSON.stringify(data) }),
  };

  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.status !== 204 ? ((await response.json()) as T) : null;
  } catch (error) {
    console.error('Request failed:', error);
    throw error;
  }
};
