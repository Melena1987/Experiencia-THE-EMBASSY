import React from 'react';
import GalleryRibbon from './GalleryRibbon';
import { useI18n } from '../context/I18nContext';

const hqImages = [
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_015_400x400.jpg?alt=media&token=2d4244b8-f480-4ff3-adc1-dfc165edaa3a", alt: "View of The Embassy basketball court from above" },
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_025_400x400.jpg?alt=media&token=0734f083-4749-4a46-9f88-f6ee7bfd0f53", alt: "State-of-the-art gym facilities at The Embassy" },
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_019_400x400.jpg?alt=media&token=6bf0b512-e239-4863-af3c-3455d7c77f7a", alt: "Recovery and therapy area at The Embassy" },
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_036_400x400.jpg?alt=media&token=e35e2655-a8cb-4db4-b527-54e76095b763", alt: "Players training on the basketball court" },
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_031_400x400.jpg?alt=media&token=1484f778-a8dd-4cff-9e23-780295ae2092", alt: "Detailed shot of The Embassy training equipment" },
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_030_400x400.jpg?alt=media&token=23ced551-732f-4253-b49f-5d07c3fd78d5", alt: "Another angle of the professional basketball court" },
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1761950147664_TheEmbassyTC-imagen_050_400x400.jpg?alt=media&token=91bbf74f-6cad-4f7c-9bfb-8c020278973a", alt: "Lounge area at The Embassy training center" }
];

const playersImages = [
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_17_400x400.jpg?alt=media&token=0d3eb2f2-cd14-4556-b34b-26d74e0fb9b5", alt: "Professional basketball player during a drill" },
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_2_400x400.jpg?alt=media&token=b778b075-0e9d-4570-90c0-305816fb9013", alt: "Athlete using advanced training technology" },
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_7_400x400.jpg?alt=media&token=4b14dd46-2afb-442d-a587-268ec616f7b1", alt: "Player practicing shooting form" },
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_6_400x400.jpg?alt=media&token=8d895be0-7f9e-4d48-9dc0-eb985e4f1e9d", alt: "Intense basketball training session" },
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_11_400x400.jpg?alt=media&token=a8551539-61ab-49f6-819e-d44b1c62a66e", alt: "Close-up of a player dribbling" },
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_22_400x400.jpg?alt=media&token=1e65a61c-36af-4c7c-a97f-13f42e262162", alt: "Team strategy session at The Embassy" },
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_8_400x400.jpg?alt=media&token=99c6d5be-eb4d-44df-b53a-23e82f94d2c7", alt: "Athlete in the middle of a workout" },
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_5_400x400.jpg?alt=media&token=981772f4-a9e7-4d52-ab38-811224ca1157", alt: "Player jumping for a shot" },
    { src: "https://firebasestorage.googleapis.com/v0/b/galeriaoficialapp.firebasestorage.app/o/users%2FI5KZz4BuUEfxcoAvSCAWllkQtwt1%2Fphotos%2F1757441458744_THE_EMBASSY_FUENGIROLA_NBA_19_400x400.jpg?alt=media&token=86997450-50f8-4c5e-b6fd-90884f131c75", alt: "Group of players training together" }
];


const IntroductionSection: React.FC = () => {
  const { t } = useI18n();

  return (
    <section id="philosophy" className="pt-20 md:pt-32 pb-10 md:pb-16 bg-[#0a0a0a]">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="relative inline-block scroll-animate fade-in">
            <h2 className="text-4xl md:text-5xl font-black uppercase text-white tracking-wider">{t('introduction.title')}</h2>
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 h-1 w-24 bg-[#d17609]"></div>
          </div>
          <div className="mt-12 max-w-4xl mx-auto scroll-animate slide-in-up delay-1">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              {t('introduction.paragraph')}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-16 space-y-4">
          <GalleryRibbon images={hqImages} />
          <GalleryRibbon images={playersImages} reverse={true} />
      </div>
    </section>
  );
};

export default IntroductionSection;