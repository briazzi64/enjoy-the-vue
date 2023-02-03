export default async function getTodos() {
  const data = await fetch('https://jsonplaceholder.typicode.com/todos').then(
    (response) => response.json()
  );

  return data;
}
