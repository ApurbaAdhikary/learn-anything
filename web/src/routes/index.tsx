import Nav from "~/components/Nav"
import PageWrap from "~/components/PageWrap"

export default function Home() {
  return (
    <PageWrap>
      <Nav activePage={"About"} />
      <div>
        Hello! This will be the new location for Learn Anything. The code for it
        is <a href="https://github.com/learn-anything/learn-anything">here</a>.
        Can read about the idea{" "}
        <a href="https://wiki.nikiv.dev/ideas/learn-anything">here</a>. For now
        check the <a href="https://learn-anything.xyz">old site</a>.
      </div>
    </PageWrap>
  )
}
