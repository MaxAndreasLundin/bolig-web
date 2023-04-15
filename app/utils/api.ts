export const fetchData = async (url: string, method: string, body?: object) => {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Please log in to search for apartment');
    return;
  }
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    const result = await response.json();
    return result;
  } catch (error) {
    alert('fetch backend failed');
    console.log('fetch backend failed', error);
  }
};