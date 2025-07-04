import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export const useGsapTitles = () => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger);

    const animate = () => {
      const titleLeft = gsap.utils.toArray<HTMLElement>('.section-title');
      const sloganLeft = gsap.utils.toArray<HTMLElement>('.section-slogan');

      titleLeft.map((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -200 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              end: 'top 50%',
              scrub: 1,
              markers: false,
            },
          }
        );
      });

      sloganLeft.map((item) => {
        gsap.fromTo(
          item,
          { opacity: 0, x: -100 },
          {
            opacity: 1,
            x: 0,
            scrollTrigger: {
              trigger: item,
              start: 'top 90%',
              end: 'top 50%',
              scrub: 1,
              markers: false,
            },
          }
        );
      });

      ScrollTrigger.refresh();
    };

    return { animate };
  }

  return { animate: () => {} };
};
