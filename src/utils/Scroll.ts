// utils/Scroll.js
export default function scrollToSection(id : string) {
    const element = document.getElementById(id);
    if (element) {
        window.scrollTo({
            top: element.offsetTop - 80, // adjust for fixed navbar height if needed
            behavior: 'smooth',
        });
    }
}
  