export function resizeCanvas(canvas: HTMLCanvasElement) {
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
}

export function getCanvasCoords(canvas: HTMLCanvasElement, mouseX: number, mouseY: number) {
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;

    return {
        x: (mouseX - rect.left) * scaleX,
        y: (mouseY - rect.top) * scaleY,
    };
}
