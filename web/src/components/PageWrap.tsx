import Footer from "./Footer"

export default function PageWrap({ children }) {
  return (
    <article class="p-5 md:p-0 container w-full mx-auto prose prose-sm md:prose dark:prose-dark mt-5">
      {children}
      {/* <Footer /> */}
    </article>
  )
}
