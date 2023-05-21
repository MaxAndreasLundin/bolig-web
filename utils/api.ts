export const fetchData = async (url: string, method: string, body?: object) => {
  try {
    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    });

    return await response.json();
  } catch (error) {
    alert('fetch backend failed');
    console.log('fetch backend failed', error);
  }
};
