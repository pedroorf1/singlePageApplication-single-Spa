import StyCompts from "./styled"
const { CCard, Container } = StyCompts

export default function Card({ data }) {
  console.log(data)
  return (
    <Container key="0011001">
      {data.map((item, idx) => (
        <CCard key={idx}>
          <p>{item.name}</p>
          <hr />
          <img src={item.url} />
        </CCard>))
      }
    </Container>
  );

}
