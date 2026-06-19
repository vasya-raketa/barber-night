import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

export default function MapaPage() {
  return (
    <main
      className="min-h-screen"
      style={{ paddingBottom: 'var(--nav-height, 96px)' }}
    >
      <Header />
      <img
        src="/mapa.png"
        alt="Mapa Barber Night S6"
        className="mx-auto block h-auto w-full max-w-content"
      />
      <Navbar />
    </main>
  );
}
