export function screenResolutionVerify() {
    if (window.matchMedia("(display-mode: standalone)").matches) {
        return "pwa"
    }
    if (window.screen.width <= 578) {
        return "pwa";
    }
    return "web"
}
