import solid from "solid-start"
import netlify from "solid-start-netlify"
import { devtoolsPlugin } from "@solid-devtools/babel-plugin"

export default {
  plugins: [
    devtoolsPlugin(),
    solid({
      adapter: netlify()
    })
  ]
}
