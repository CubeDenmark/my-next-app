export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient background */}
      <div className="absolute inset-0 gradient-shift opacity-10" />

      {/* Floating geometric shapes */}
      <div
        className="absolute top-20 left-10 w-20 h-20 bg-accent/20 rounded-full blur-xl float-animation"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-secondary/20 rounded-lg blur-lg float-animation"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-40 left-1/4 w-24 h-24 bg-accent/15 rounded-full blur-2xl float-animation"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-20 right-1/3 w-18 h-18 bg-secondary/25 rounded-lg blur-xl float-animation"
        style={{ animationDelay: "1s" }}
      />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(99 102 241) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>
    </div>
  )
}
