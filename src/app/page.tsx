import { FullHeightSlider } from "@/components/FullHeightSlider";
import { NavigationBar } from "@/components/NavigationBar";
import { SubscribeSection } from "@/components/SubscribeSection";
import { OurServices } from "@/components/OurServices";
import { AnimalFarmingSection } from "@/components/AnimalFarmingSection";
import { OurFuturePlans } from "@/components/OurFuturePlans";
import { ContactUsForm } from "@/components/ContactUsForm";
import { GoogleMapsSection } from "@/components/GoogleMapsSection";
import { Footer } from "@/components/Footer";

const slides = [
  {
    id: 1,
    title: "Welcome to Aryaaf",
    description:
      "Discover amazing experiences and create lasting memories with our innovative platform.",
    image: "/images/slider/1.jpg",
    backgroundColor: "#EFE9DE",
  },
  {
    id: 2,
    title: "Explore & Connect",
    description:
      "Connect with like-minded people and explore new opportunities in your community.",
    image: "/images/slider/2.jpg",
    backgroundColor: "#EFE9DE",
  },
  {
    id: 4,
    title: "Join Our Community",
    description:
      "Be part of something bigger. Join thousands of users who are already making a difference.",
    image: "/images/slider/3.jpg",
    backgroundColor: "#EFE9DE",
  },
];

export default function Home() {
  return (
    <div dir="rtl">
      <NavigationBar />
      <FullHeightSlider slides={slides} />
      <SubscribeSection />

      {/* Our Services Section */}
      <OurServices />

      {/* Animal Farming Section */}
      <AnimalFarmingSection />

      {/* Our Future Plans Section */}
      <OurFuturePlans />

      {/* Contact Us Form Section */}
      <ContactUsForm />

      {/* Google Maps Section */}
      <GoogleMapsSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
