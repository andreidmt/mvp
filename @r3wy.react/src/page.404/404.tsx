import { Center, Heading } from "@chakra-ui/react"
import { FC } from "react"
import { Helmet } from "react-helmet"

type NotFoundPageProps = {}

export const NotFoundPage: FC<NotFoundPageProps> = () => (
  <>
    <Helmet>
      <title>404 Not Found</title>
    </Helmet>

    <Center width="100vw" height="100vh" backgroundColor="gray.50">
      <Heading as="h1" color="gray.500">
        404 Not Found :(
      </Heading>
    </Center>
  </>
)
