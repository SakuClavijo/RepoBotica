import React from "react";
import { Button, Link } from "@heroui/react";
import { Icon } from "@iconify/react";
import { VideoCarousel } from "./video-carousel";

export const Blog: React.FC = () => {
  const handleDownload = () => {
    // Replace with actual file URL
    const fileUrl = 'https://docs.google.com/spreadsheets/d/1xSOwPcU-ERhgafNclur9SIIiaCYhxJXR/edit?usp=sharing&ouid=114227310314126218122&rtpof=true&sd=true';
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = 'La_Botica_Price_List.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-4xl font-bold mb-4">Nuestro Blog</h1>
        <p className="text-default-600 mb-8">
          Descubra lo último en bienestar natural, consejos de boticario e información sobre productos.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Aprende mas de Nostros</h2>
        <VideoCarousel />
      </section>

      <section className="bg-content2 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Responde a nuestra encuesta</h2>
        <p className="text-default-600 mb-4">
          Agradecemos sus comentarios. Ayúdenos a mejorar nuestros productos y servicios respondiendo a nuestra breve encuesta.
        </p>
        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSei5qTxLpBw9C8WqkugLa9fgeZKgUb7lVdbLFE9vemr3kpFUQ/viewform?usp=header" // Replace with actual survey link
          isExternal
          showAnchorIcon
          color="primary"
        >
          Inicia la Encuesta
        </Link>
      </section>

      <section className="bg-content3 rounded-xl p-8">
        <h2 className="text-2xl font-semibold mb-4">Descargue nuestra lista de precios¡Valoramos sus comentarios! Ayúdenos a mejorar nuestros productos y servicios respondiendo a nuestra breve encuesta.</h2>
        <p className="text-default-600 mb-4">
          Obtenga nuestro último catálogo de productos con información detallada sobre precios.
        </p>
        <Button
          color="primary"
          endContent={<Icon icon="lucide:download" />}
          onPress={handleDownload}
        >
          Descargar Lista de Precios
        </Button>
      </section>
    </div>
  );
};