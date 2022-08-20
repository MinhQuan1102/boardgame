import React, { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context";

const Subcart = () => {
  const {isSubcartOpen, location} = useGlobalContext()
  const container = useRef(null)
  useEffect(() => {
    const subcart = container.current
    const {center, bottom} = location
    subcart.style.left = `${center}px`
    subcart.style.top = `${bottom}px`
  }, [location])
  return (
    <aside className={`${isSubcartOpen ? 'submenu show' : 'submenu'}`} ref={container}>
      <section>
        <h4>hello</h4>
      </section>
    </aside>
  )
}

export default Subcart