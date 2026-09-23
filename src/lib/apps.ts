export const getApi = async () => {
  try {
    const res = await fetch('http://localhost:3000/data.json')
    if (!res.ok) {
      throw new Error('Failed to fetch API data')
    }
    return await res.json()
  } catch (error) {
    console.error('Error fetching API data:', error)
    return null;
  }
}