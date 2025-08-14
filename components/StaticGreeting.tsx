// This will be statically generated at build time
export default function StaticGreeting() {
  console.log("StaticGreeting rendered"); // Only logs at build time
  return <p>This is a statically generated greeting. (SSG)</p>;
}
