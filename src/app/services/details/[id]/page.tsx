import ServiceDatailsCard from "@/components/ServiceDatails";
import Container from "@/components/ui/container";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navHader";

const ServiceDatails = ({ params }: any) => {
  const { id } = params;

  return (
    <div>
      <Navbar />
      <Container>
        <ServiceDatailsCard id={id} />
      </Container>
      <Footer />
    </div>
  );
};

export default ServiceDatails;
