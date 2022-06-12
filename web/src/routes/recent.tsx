import axios from "axios"
import { useRouteData } from "solid-start/router"
import { createServerResource } from "solid-start/server"
import PageWrap from "~/components/PageWrap"
import Nav from "~/components/Nav"

export function routeData() {
  return createServerResource(async () => {
    const res = await axios.get("https://learn-anything-353016.ew.r.appspot.com/links")

    if (res.data && res.data.links) return res.data.links

    return []
  })
}

export default function Recent() {
  const links = useRouteData<ReturnType<typeof routeData>>()

  return (
    <PageWrap>
      <Nav activePage={"Recent"} />
      <div>
        <ul>
          {links()?.map((item) => <li>{item}</li>)}
        </ul>
      </div>
    </PageWrap>
  )
}
