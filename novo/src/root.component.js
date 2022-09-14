import * as React from 'react'

import { useStore } from "@platos/store";

export default function Root(props) {
  const state = useStore();
  return (<>
    <div class="main-content" style={{
      width: "100%",
      padding: "2em",
      minHeight: "50vh",
      backgroundColor: "#DDD",
      margin: 0,
    }}>
      <p>{props.name}</p>
      <button onClick={() => state.toggle()}>Mudar estado</button>
    </div>
  </>)
}