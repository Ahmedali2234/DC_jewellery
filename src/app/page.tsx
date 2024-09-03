import Image from "next/image";
import Navbar from "./component/Navbar"
import Section from "./component/Section"
import Sr from "./component/Sr"
import It from "./component/It"
import Ta from "./component/Ta"
import Er from "./component/Er"
import Fr from "./component/Fr"
function Home() {
  return (
    <div className="">



      <Navbar />
      <Sr />
      <Section />
      <Ta />
      <It />
      <Er />
      <Fr />
    </div>
  );
}
export default Home