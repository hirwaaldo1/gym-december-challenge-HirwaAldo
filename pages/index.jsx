import Image from "next/image";
import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";
import Head from "next/head";
import Hero from "../components/sections/Hero";
import News from "../components/sections/News";
import Blog from "../components/sections/Blog";
import Discover from "../components/sections/Discover";
import Select from "../components/ui/Select";
import Info from "../components/sections/Info";
import Customer from "../components/sections/Customer";
import Story from "../components/sections/Story";
import University from "../components/sections/University";
import Giving from "../components/sections/Giving";
import UnderFooter from "../components/sections/UnderFooter";
export default function Home() {
  return (
    <>
      <Head>
        <title>The Entrepreneurial University - TUM</title>
      </Head>
      <main>
        <Header />
        <Hero />
        <News />
        <Blog />
        <Discover />
        <Select />
        <Info
          img="/assets/images/csm_20211111_Presidential_student_Lunch_Garching_AE_Z_-1004_64e4d1584d.webp"
          right
          title="What drives us: President Thomas F. Hofmann about TUM"
          desc="Research and innovations for society, innovative teaching and
            continuing education: This is how we shape a sustainable future,
            relying on the intelligence of the entire university and working
            closely with global partners to do so."
          button="Learn more"
          colors="#3070B3"
          textColor="white"
          icons
        />
        <Customer />
        <Info
          img="/assets/images/csm_20220209_Neubau_EI_AH_672635_9c7fe2d24e.webp"
          right
          title="Schools and Research Centers"
          desc="They form the academic foundation of TUM: Our schools and departments, connected at disciplinary interfaces by integrative research institutes to create an organization that drives innovation."
          button="Organization"
          colors="#8F81EA"
          textColor="#072140"
          icons
        />
        <Story />
        <University />
        <Giving />
        <Footer />
        <UnderFooter />
      </main>
    </>
  );
}
