import Footer from "../components/layout/Footer";
import Header from "../components/layout/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="h-[100vh] text-center">
        <p className="text-3xl font-semibold text-black">Body</p>
      </div>
      <Footer />
    </main>
  );
}
