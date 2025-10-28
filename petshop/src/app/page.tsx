import { About } from "./_components/about";
import { Header } from "./_components/header";
import { Services } from "./_components/services";

export default function Home(){
  return(
    <main>
      <Header />
      <About />
      <Services />
    </main>
  )
}