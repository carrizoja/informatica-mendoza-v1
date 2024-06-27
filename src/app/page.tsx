import Banner from "@/components/Banner/Banner";
import CarouselBrands from "@/components/CarouselBrands/CarouselBrands";
import Testimonials from "@/components/Testimonials/Testimonials";
import RecommendedProducts from "@/components/RecommendedProducts/RecommendedProducts";
import BannerShipping from "@/components/BannerShipping/BannerShipping";


export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center p-10 gap-5">
      <h1 className="text-center text-5xl font-bold">
        Bienvenidos a Informática Mendoza
      </h1>
      <h2 className="text text-3xl">Productos y asesoramiento a tu medida</h2>
      <Banner />
      <CarouselBrands />
      <RecommendedProducts />
      <Testimonials />
      <BannerShipping />
    </section>
  );
}
