import { About } from "./_components/about";
import { Header } from "./_components/header";
import { Services } from "./_components/services";
import { Testimonials } from "./_components/testimonials";

export default function Home(){
  return(
    <main>
      <Header />
      <About />
      <Services />
      <Testimonials />
    </main>
  )
}