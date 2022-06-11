interface Props {
  activePage: string
}

export default function Nav({ activePage }: Props) {
  return (
    <>
      <h1>{activePage}</h1>
      <div class="nav-line">
        {activePage !== "About" && (
          <a class="nav-link" href="/">
            About
          </a>
        )}
      </div>
    </>
  )
}
