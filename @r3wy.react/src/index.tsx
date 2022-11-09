import { ChakraProvider } from "@chakra-ui/react"
import debug from "debug"
import { createRoot } from "react-dom/client"
import { Helmet } from "react-helmet"
import { BrowserRouter } from "react-router-dom"

import { AuthProvider } from "core.hooks/use-auth"

import { AppRoutes } from "./index.routes"

if (process.env["NODE_ENV"] !== "production") {
  debug.enable("@r3wy*")
}

const reactDomElm = document.getElementById("react-root")
const reactRoot = createRoot(reactDomElm!)

reactRoot.render(
  <>
    <Helmet titleTemplate="%s | R3wy" defaultTitle="R3wy" />

    <BrowserRouter>
      <AuthProvider>
        <ChakraProvider>
          <AppRoutes />
        </ChakraProvider>
      </AuthProvider>
    </BrowserRouter>
  </>
)
