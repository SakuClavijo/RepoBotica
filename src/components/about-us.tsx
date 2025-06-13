import React from "react";
import { Image, Card, CardBody } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

export const AboutUs: React.FC = () => {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <motion.div 
            className="flex-1 space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Nuestra Historia de <span className="text-primary">Salud Natural</span>
            </h1>
            <p className="text-default-600 text-lg">
              La Botica del Abuelo Ruseel nació de la pasión por los remedios naturales y del compromiso con el bienestar holístico. Nuestro viaje comenzó con un objetivo simple: llevar el poder curativo de la naturaleza a la vida moderna.
            </p>
          </motion.div>
          <motion.div 
            className="flex-1"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image
              alt="About Us Hero"
              className="object-cover rounded-xl w-full max-w-xl mx-auto"
              src="/img/Abuelorusell.jpeg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our vision */}
      <section className="bg-content2 rounded-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
          </div>
            <p className="text-default-600">
              En LA BOTICA DEL ABUELO RUSSELL, visualizamos un futuro en el que somos reconocidos como la botica líder en Colombia, no solo por la calidad y seguridad de nuestros servicios farmacéuticos, sino también por nuestro compromiso con la innovación, la transparencia y la responsabilidad social. Aspiramos a ser un referente nacional en el cumplimiento estricto de la normatividad vigente, incluyendo la Resolución 2003 de 2014 y la Resolución 3100 de 2019, que garantizan la habilitación y la calidad en la prestación de servicios de salud. Queremos ser una organización que inspire confianza y tranquilidad, facilitando el acceso responsable y ético a medicamentos y asesoría farmacéutica, siempre respetando los derechos constitucionales de nuestros usuarios y promoviendo el desarrollo social y la salud pública. Nos proyectamos como un equipo humano unido, en constante aprendizaje y mejora, que se adapta a los cambios tecnológicos y científicos para ofrecer soluciones innovadoras y efectivas que contribuyan al bienestar integral de nuestra comunidad.
            </p>
             <h2 className="text-3xl font-bold mb-4">Nuestra Visión </h2>
          <div className="flex-1 flex justify-center">
            <Icon icon="hugeicons:leaf-01" className="text-primary text-8xl" />
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-content2 rounded-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            </div>
          <div className="flex-1 flex justify-center">
            <Icon icon="icon-park-outline:lotus" className="text-primary text-8xl" />
          </div>
            <h2 className="text-3xl font-bold mb-4">Nuestra Misión</h2>
            <p className="text-default-600">
              En LA BOTICA DEL ABUELO RUSSELL, el respeto es la base de todas nuestras acciones. Reconocemos y valoramos la dignidad de cada persona que llega a nosotros, tratando a todos con cortesía, empatía y consideración, sin importar su condición social, económica, cultural o de salud. Entendemos que cada usuario es un ser humano único con derechos fundamentales protegidos por nuestra Constitución, y nos comprometemos a garantizar un trato justo, inclusivo y libre de discriminación. Este valor guía nuestra interacción diaria, asegurando que cada persona se sienta escuchada, valorada y segura en nuestro espacio.
            </p>
        </div>
      </section>

       {/* Our Respect */}
      <section className="bg-content2 rounded-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
          </div>
            <p className="text-default-600">
              En LA BOTICA DEL ABUELO RUSSELL, visualizamos un futuro en el que somos reconocidos como la botica líder en Colombia, no solo por la calidad y seguridad de nuestros servicios farmacéuticos, sino también por nuestro compromiso con la innovación, la transparencia y la responsabilidad social. Aspiramos a ser un referente nacional en el cumplimiento estricto de la normatividad vigente, incluyendo la Resolución 2003 de 2014 y la Resolución 3100 de 2019, que garantizan la habilitación y la calidad en la prestación de servicios de salud. Queremos ser una organización que inspire confianza y tranquilidad, facilitando el acceso responsable y ético a medicamentos y asesoría farmacéutica, siempre respetando los derechos constitucionales de nuestros usuarios y promoviendo el desarrollo social y la salud pública. Nos proyectamos como un equipo humano unido, en constante aprendizaje y mejora, que se adapta a los cambios tecnológicos y científicos para ofrecer soluciones innovadoras y efectivas que contribuyan al bienestar integral de nuestra comunidad.
            </p>
             <h2 className="text-3xl font-bold mb-4">Respeto </h2>
          <div className="flex-1 flex justify-center">
            <Icon icon="hugeicons:eco-energy" className="text-primary text-8xl" />
          </div>
        </div>
      </section>

      {/* Our Responsabilidad */}
      <section className="bg-content2 rounded-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            </div>
          <div className="flex-1 flex justify-center">
            <Icon icon="hugeicons:water-energy" className="text-primary text-8xl" />
          </div>
            <h2 className="text-3xl font-bold mb-4">Responsabilidad</h2>
            <p className="text-default-600">
              Somos conscientes del impacto que tiene nuestro trabajo en la salud y la vida de las personas, por eso asumimos con total compromiso y seriedad la gestión de nuestros servicios farmacéuticos. Nos responsabilizamos de cumplir estrictamente con todas las normativas nacionales, como la Resolución 2200 de 2005 y la Resolución 3100 de 2019, para garantizar la seguridad, eficacia y calidad de los medicamentos y productos que ofrecemos. Nuestra responsabilidad también se extiende a la formación continua de nuestro equipo, la gestión adecuada de los recursos y la transparencia en todos nuestros procesos, siempre buscando proteger la salud pública y el bienestar de nuestra comunidad
            </p>
        </div>
      </section>

      {/* Our Transparencia */}
      <section className="bg-content2 rounded-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
          </div>
            <p className="text-default-600">
              En LA BOTICA DEL ABUELO RUSSELL, creemos que la confianza se construye con honestidad y claridad. Por eso, actuamos con total transparencia en todas nuestras operaciones, desde la adquisición y almacenamiento de medicamentos hasta la atención y asesoría a nuestros usuarios. Informamos de manera clara y completa sobre los productos y servicios que ofrecemos, sus beneficios y posibles riesgos, respetando siempre el derecho a la información de nuestros clientes. Esta transparencia nos permite fortalecer vínculos de confianza duraderos y cumplir con los principios constitucionales que exigen integridad y responsabilidad en el sector salud.
            </p>
             <h2 className="text-3xl font-bold mb-4">Transparencia</h2>
          <div className="flex-1 flex justify-center">
            <Icon icon="pajamas:nature" className="text-primary text-8xl" />
          </div>
        </div>
      </section>

      {/* Our Calidad */}
      <section className="bg-content2 rounded-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            </div>
          <div className="flex-1 flex justify-center">
            <Icon icon="streamline-freehand:cash-payment-pen-signature" className="text-primary text-8xl" />
          </div>
            <h2 className="text-3xl font-bold mb-4">Calidad</h2>
            <p className="text-default-600">
              Nos esforzamos constantemente por alcanzar y mantener los más altos estándares de calidad en todos los aspectos de nuestro servicio farmacéutico. Esto incluye la rigurosa selección y control de los medicamentos y productos que distribuimos, la capacitación continua de nuestro equipo, y la implementación de procesos eficientes y seguros, alineados con la Resolución 2200 de 2005 y la habilitación exigida por la Resolución 3100 de 2019. En LA BOTICA DEL ABUELO RUSSELL no solo cumplimos con la normatividad, sino que buscamos superar las expectativas de nuestros usuarios, garantizando que cada experiencia con nosotros sea sinónimo de confianza, seguridad y bienestar.
            </p>
        </div>
      </section>

      {/* Our Compromiso Social */}
      <section className="bg-content2 rounded-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
          </div>
            <p className="text-default-600">
              Nos sentimos profundamente comprometidos con el bienestar colectivo y el desarrollo sostenible de nuestra comunidad. Más allá de ofrecer medicamentos, en LA BOTICA DEL ABUELO RUSSELL promovemos la educación en salud, la prevención de enfermedades y el acceso equitativo a los servicios farmacéuticos, contribuyendo activamente a mejorar la calidad de vida de quienes nos rodean. Este compromiso social se fundamenta en los principios constitucionales de solidaridad y justicia social, que guían nuestra labor para construir una sociedad más saludable, inclusiva y equitativa.
            </p>
             <h2 className="text-3xl font-bold mb-4">Compromiso Social </h2>
          <div className="flex-1 flex justify-center">
            <Icon icon="medical-icon:i-social-services" className="text-primary text-8xl" />
          </div>
        </div>
      </section>

      {/* Our Innovación */}
      <section className="bg-content2 rounded-xl p-8 md:p-12">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            </div>
          <div className="flex-1 flex justify-center">
            <Icon icon="solar:hand-heart-outline" className="text-primary text-8xl" />
          </div>
            <h2 className="text-3xl font-bold mb-4">Calidad</h2>
            <p className="text-default-600">
              En un mundo en constante cambio, en LA BOTICA DEL ABUELO RUSSELL entendemos que la innovación es clave para seguir ofreciendo servicios farmacéuticos de excelencia. Estamos en constante búsqueda de nuevas tecnologías, metodologías y conocimientos científicos que nos permitan optimizar nuestros procesos y mejorar la atención a nuestros usuarios. Fomentamos una cultura de aprendizaje continuo y creatividad dentro de nuestro equipo, para adaptarnos a las nuevas necesidades del sector salud y ofrecer soluciones efectivas, seguras y modernas que contribuyan al bienestar integral de nuestra comunidad.
            </p>
        </div>
      </section>

      {/* Our Values */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestros valores fundamentales</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardBody className="text-center p-6">
                  <Icon icon={value.icon} className="text-primary text-4xl mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-default-600">{value.description}</p>
                </CardBody>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

     

      {/* Our Process */}
      <section className="bg-content2 rounded-xl p-8 md:p-12">
        <h2 className="text-3xl font-bold mb-8 text-center">Nuestros procesos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {index + 1}
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-default-600">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

const values = [
  {
    icon: "lucide:leaf",
    title: "Sostenibilidad",
    description: "Damos prioridad a las prácticas ecológicas en todos los aspectos de nuestro negocio."
  },
  {
    icon: "lucide:heart",
    title: "Bienestar",
    description: "Nuestros productos están diseñados para promover la salud y el bienestar holísticos."
  },
  {
    icon: "lucide:sparkles",
    title: "Calidad",
    description: "En nuestras fórmulas sólo utilizamos los mejores ingredientes ecológicos."
  }
];


const process = [
  {
    title: "Búsqueda de proveedores",
    description: "Seleccionamos cuidadosamente ingredientes ecológicos y de recolección sostenible."
  },
  {
    title: "Formulación",
    description: "Nuestros expertos combinan las recetas tradicionales con la investigación moderna."
  },
  {
    title: "Producción",
    description: "La fabricación en pequeños lotes garantiza la calidad y la frescura."
  },
  {
    title: "Pruebas",
    description: "Unas pruebas rigurosas garantizan la seguridad y la eficacia."
  }
];