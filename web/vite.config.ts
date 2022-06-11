import solid from "solid-start"
import netlify from "solid-start-netlify"

export default {
  plugins: [
    solid({
      adapter: netlify()
    })
  ]
}
