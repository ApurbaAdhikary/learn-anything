import axios from "redaxios"
import { useRouteData } from "solid-start/router"
import { createServerResource } from "solid-start/server"
import PageWrap from "~/components/PageWrap"
import Nav from "~/components/Nav"
// import e, {$infer} from '../../dbschema/edgeql-js';

export function routeData() {
  return createServerResource(async () => {
    // console.log(window, "is window defined?")
    // console.log("hello")
    // TODO: make it read from env var, for now localhost
    // Run server from `server` folder.
    const res = await axios.get("http://localhost:8080/links")
    if (res.data && res.data.links) return res.data.links
    return []
  })
}

export default function Recent() {
  const links = useRouteData<ReturnType<typeof routeData>>()
  console.log(links())

  return (
    <PageWrap>
      <Nav activePage={"Recent"} />
      <div>
        <ul>
          {/* {links()?.map((item) => (
            <li>{item}</li>
          ))} */}
        </ul>
      </div>
    </PageWrap>
  )
}
