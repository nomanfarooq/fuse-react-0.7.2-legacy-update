export function adjustZoom() {
    const screenWidth = window.innerWidth;
    if (screenWidth > 768 && screenWidth < 1440) {
        document.body.style.zoom = "75%";
        document.documentElement.style.width = "100%";
        document.body.style.overflowX = "hidden";
    }
}
