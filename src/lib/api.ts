// Simple API wrapper using fetch instead of axios
const baseURL = 'http://localhost:3001';

export const api = {
  get: async (url: string) => {
    const response = await fetch(`${baseURL}${url}`, {
      credentials: 'include',
    });
    return {
      data: await response.json(),
      status: response.status,
    };
  },
  
  post: async (url: string, data?: any) => {
    const response = await fetch(`${baseURL}${url}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: data ? JSON.stringify(data) : undefined,
    });
    return {
      data: await response.json(),
      status: response.status,
    };
  },
};
