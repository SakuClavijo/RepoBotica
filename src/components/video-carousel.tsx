import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { Icon } from "@iconify/react";
import { motion, AnimatePresence } from "framer-motion";

interface Video {
  id: string;
  title: string;
}

export const VideoCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const videos: Video[] = [
    { id: "7D62AAv614A", title: "PODCAST DEL ABUELO RUSSEL" },
    { id: "d_f2Ab14c38", title: "TRADICIÓN Y NATURALEZA" },
    { id: "ntkmgNm0N-8", title: "BENEFICIOS DE LA MEDICINA NATURAL" },
    { id: "_ZoQ8cRFsFE", title: "NATURALEZA PARA SANAR CUERPO Y ALMA" },
    { id: "PuuAQaW8CXY", title: "HISTORIA | LA BOTICA DEL ABUELO RUSSELL" },
  ];

  const nextVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  };

  return (
    <div className="w-full max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4 text-center">Nuestros Videos Informativos</h2>
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="w-full aspect-video">
              <CardBody className="p-0">
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videos[currentIndex].id}`}
                  title={videos[currentIndex].title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </CardBody>
            </Card>
          </motion.div>
        </AnimatePresence>
        <Button
          isIconOnly
          className="absolute top-1/2 left-4 -translate-y-1/2"
          color="primary"
          variant="flat"
          onPress={prevVideo}
        >
          <Icon icon="lucide:chevron-left" className="text-xl" />
        </Button>
        <Button
          isIconOnly
          className="absolute top-1/2 right-4 -translate-y-1/2"
          color="primary"
          variant="flat"
          onPress={nextVideo}
        >
          <Icon icon="lucide:chevron-right" className="text-xl" />
        </Button>
      </div>
      <div className="mt-4 text-center">
        <h3 className="text-lg font-semibold">{videos[currentIndex].title}</h3>
        <p className="text-default-500 text-sm mt-1">
          Video {currentIndex + 1} of {videos.length}
        </p>
      </div>
    </div>
  );
};