export default function Navigation(menu) {
    function handleHamburguer() {
        menu.classList.toggle("menu");
    }

    function handleWindow() {
        const widthScreenSize = window.innerWidth;
        const widthCondition = widthScreenSize <= 768;

        if(!widthCondition) {
            menu.classList.remove("menu");
        }
    }

    return {
        handleHamburguer, handleWindow
    }
}