import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function MapaPage() {
  return (
    <main className="min-h-screen pb-[120px]">
      <Header />
      <img
        src="/mapa.png"
        alt="Mapa Barber Night S6"
        className="block h-auto w-full max-w-content mx-auto"
      />
      <Navbar />
    </main>
  );
}
