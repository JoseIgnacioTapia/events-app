export async function getAllEvents() {
  const response = await fetch(
    'https://nextjs-course-b59c9-default-rtdb.firebaseio.com/events.js',
    {
      method: 'GET',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.45 Safari/537.36',
      },
    }
  );
  const data = await response.json();

  const events = [];

  for (const key in data) {
    events.push({
      id: key,
      ...data[key],
    });
  }

  return events;
}

export async function getFeaturedEvents() {
  const allEvents = await getAllEvents();
  return allEvents.filter(event => event.isFeatured);
}

export function getEventId(id) {
  const allEvents = await getAllEvents();
  return allEvents.find(event => event.id === id);
}
