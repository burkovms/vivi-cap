import { useRouter } from 'vue-router';

export function useScrollAnchor() {
  const router = useRouter();

  function scrollAnchor(anchor: string) {
    const element = document.getElementById(anchor);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset - 0;
      window.scrollTo({ top: y, behavior: 'smooth' });
    } else {
      router.push({ path: '/', hash: `#${anchor}` });
    }
  }

  return { scrollAnchor };
}
