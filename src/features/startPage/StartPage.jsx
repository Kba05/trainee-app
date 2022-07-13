import React from 'react'
import { Navbar } from "./Navbar";
import { Promo } from "./Promo";

export const StartPage = () => {
  return (
    <div className="h-screen">
      <div className="container">
        <header>
          <Navbar/>
        </header>
        <main>
          <Promo/>
        </main>
      </div>
  </div>
  )
}
