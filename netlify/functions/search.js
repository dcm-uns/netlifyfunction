export async function handler(event, context) {
  const query = event.queryStringParameters.query?.toLowerCase() || "";

  // Base de datos ficticia
  const movies = [
    { title: "The Dark Knight", year: 2008, director: "Christopher Nolan" },
    { title: "The Matrix", year: 1999, director: "Lana Wachowski, Lilly Wachowski" },
    { title: "Interstellar", year: 2014, director: "Christopher Nolan" },
    { title: "Inception", year: 2010, director: "Christopher Nolan" },
    { title: "Django Unchained", year: 2012, director: "Quentin Tarantino" },
  ];

  // Filtrar
  const results = movies.filter(m =>
    m.title.toLowerCase().includes(query)
  );

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ results }),
  };
}

