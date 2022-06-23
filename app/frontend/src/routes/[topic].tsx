import { RouteDataFunc } from "solid-start/router"
import PageWrap from "~/components/PageWrap"
import Nav from "~/components/Nav"

export const routeData: RouteDataFunc = props => {
  console.log(props.params.topic)
};

export default function Topic() {
  return (
    <PageWrap>
      <Nav activePage={""} />
      <div>Hello World!</div>
    </PageWrap>
  )
}
