import Footer from "@/components/Footer";
import FrequentlyAskedQuestion from "@/components/FrequentlyAskedQuestion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WaitlistForm from "@/components/WaitlistForm";
import WhyYardCode from "@/components/WhyYardCode";
import YardCodeCard from "@/components/YardCodeCard";

export default function Home() {
  return (
    <div className="bg-[#F6F6F6] flex flex-col gap-8 transition-colors">
      <header className="bg-[#ffffff] text-[#0E1422] shadow">
        <Header />
      </header>
      <main className="container mx-auto px-4 py-8 flex flex-col gap-8">
        <section className="text-center mb-8">
          <Hero />
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md">
          <WaitlistForm />
        </section>
        <section className="bg-white p-6 rounded-lg shadow-md mt-8">
          <YardCodeCard />
        </section>
        <section className="mt-8">
          <WhyYardCode />
        </section>
        <section className="mt-8">
          <h3 className="sub_heading_2 !text-xl">Learn More</h3>
          <p className="sub_heading">
            Discover more about YardCode and its groundbreaking applications by
            visiting our{" "}
            <a
              href="https://rainigeria.com/blog/f/introducing-yardcode-for-nigerias-location-based-service"
              className="underline text-blue-700"
            >
              official blog
            </a>
            .
          </p>
        </section>
        <section className="mt-8">
          <FrequentlyAskedQuestion />
        </section>
      </main>
      <footer className=" py-4 bg-[#ffffff] text-[#0E1422]">
        <Footer />
      </footer>
    </div>
  );
}
