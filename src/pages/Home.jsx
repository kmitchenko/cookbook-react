import Slider from "../shared/components/Slider";

function Home() {
  return (
    <>
      <Slider category="trending" type={null}></Slider>
      <Slider category="recepies" type="beverages"></Slider>
    </>
  );
}

export default Home;
