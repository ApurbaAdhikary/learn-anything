export default function Footer() {
  return (
    <>
      <div
        style={{
          display: "block",
          height: "1px",
          border: 0,
          "border-top": "1px solid #ccc",
          margin: "1em 0",
          padding: 0,
        }}
      ></div>
      <div class="flex flex-col text-2xl items-center gap-3 md:grid md:grid-flow-col">
        <a href="https://twitter.com/learnanything|">Twitter</a>
        <a href="https://github.com/learn-anything">GitHub</a>
      </div>
    </>
  )
}
