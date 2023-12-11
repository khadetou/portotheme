import Providers from "@modules/providers"
import "styles/globals.css"
import { Poppins } from "next/font/google"
import Nav from "@modules/layout/templates/nav"

// If loading a variable font, you don't need to specify the font weight
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className="text-[62.5%] font-normal box-border"
      data-mode="dark"
    >
      <body
        className={`m-0 overflow-x-hidden ${poppins.variable} font-sans text-[1.4rem] leading-[1.6] text-[#666] bg-white`}
        style={{ overflowX: "hidden" }}
      >
        <Providers>
          <div className="page-wrapper relative">
            <Nav />
            <main className="relative block">{children}</main>
          </div>
        </Providers>
      </body>
    </html>
  )
}
