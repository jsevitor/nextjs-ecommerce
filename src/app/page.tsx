import HeroBanner from "@/components/HeroBanner";
import Header from "@/components/Header";
import SectionTitle from "@/components/SectionTitle";
import ProductGrid from "@/components/ProductGrid";
import BannerCallToAction from "@/components/BannerCallToAction";
import Button from "@/components/Button";
import CategoryGrid from "@/components/CategoryGrid";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Header />
      <HeroBanner />
      <SectionTitle
        title="NOVA COLEÇÃO"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque culpa placeat itaque fugit recusandae veniam cumque deserunt, minus nisi iste dolores!"
      />
      <ProductGrid />
      <BannerCallToAction />
      <CategoryGrid />
      <Footer />
    </main>
  );
}
