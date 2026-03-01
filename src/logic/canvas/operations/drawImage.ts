export function drawImage(
    ctx: CanvasRenderingContext2D,
    width: number,
    height: number,
    img: HTMLImageElement,
) {
    ctx.drawImage(img, 0, 0, width, height);
}
