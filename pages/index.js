export const getStaticProps = async () => {
  const res = await fetch("https://public-api.tracker.gg/v2/csgo/standard/profile/{steam}/{76561198124927093}");
  const data = await res.json();
  console.log('my data', data)
  return {
    props:{
    }
  }
}

const weather = () => {
  console.log()
  return (
      <h1>This is a webpage to be hosted on AWS</h1>
  );
}
export default weather

