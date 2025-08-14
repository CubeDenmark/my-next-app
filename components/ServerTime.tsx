export const dynamic = 'force-dynamic'; // enable SSR

export default async function ServerTime() {
  console.log("ServerTime rendered on server"); // Logs on each request
  const now = new Date().toLocaleTimeString();
  return <p>Server-rendered time: {now}</p>;
}
