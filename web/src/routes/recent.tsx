import { useRouteData } from "solid-start/router"
import { createServerResource } from "solid-start/server"
import PageWrap from "~/components/PageWrap"
import Nav from "~/components/Nav"
import e, { $infer } from "../../dbschema/edgeql-js"
import { createClient } from "edgedb"

export const client = createClient()

const getLinks = e.select(e.Link, () => ({
  title: true,
  url: true,
}))

export type getLinks = $infer<typeof getLinks>

export function routeData() {
  return createServerResource(async () => {
    const links = await getLinks.run(client)
    return links
  })
}

export default function Recent() {
  const links = useRouteData<ReturnType<typeof routeData>>()

  return (
    <PageWrap>
      <Nav activePage={"Recent"} />
      <div>
        <ul>
          {links()?.map((link) => (
            <li>{link.title}</li>
          ))}
        </ul>
      </div>
    </PageWrap>
  )
}
