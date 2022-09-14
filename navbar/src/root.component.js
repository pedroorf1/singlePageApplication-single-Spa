import { navigateToUrl } from "single-spa";

import { useStore } from "@platos/store";

export default function Root(props) {
  const state = useStore()
  return <section style={
    {
      width: "100%",
      height: "100px",
      padding: "1em"
    }}>
    {props.name}
    <h1>Atual status da store: {JSON.stringify(state.loading)}</h1>
  </section >;
}
