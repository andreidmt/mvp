import { FC } from "react"
import { Routes, Route } from "react-router-dom"

import { NotFoundPage } from "./page.404/404"
import { AuthReturnPage } from "./page.auth-return/auth-return"
import { ProductsDetailsPage } from "./page.products-details/products-details"
import { ProductsListPage } from "./page.products-list/products-list"
import { GuestRoute } from "./route.guest/guest"

// import { SignedinRoute } from "./route.signedin/signedin"

type AppRoutesProps = {}

export const AppRoutes: FC<AppRoutesProps> = () => (
  <Routes>
    {/* any type */}
    <Route
      path="/"
      element={
        <GuestRoute>
          <ProductsListPage />
        </GuestRoute>
      }
    />

    <Route
      path="/products/:id"
      element={
        <GuestRoute>
          <ProductsDetailsPage />
        </GuestRoute>
      }
    />

    {/* only un-authenticated */}
    <Route
      path="/auth/oauth-return"
      element={
        <GuestRoute isExclusive={true}>
          <AuthReturnPage />
        </GuestRoute>
      }
    />

    {/* only authenticated */}
    {
      // <Route
      //   path="/profile"
      //   element={
      //     <SignedinRoute>
      //       <ProfilePage />
      //     </SignedinRoute>
      //   }
      // />
    }

    {/* nothing else matched */}
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
)
