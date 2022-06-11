import solid from "solid-start"
import netlify from "start-netlify"

export default {
  plugins: [
    solid({
      adapter: netlify()
    })
  ]
}
