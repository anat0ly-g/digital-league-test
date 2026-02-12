const eraserSize = 30;

export function start(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.save();
    ctx.globalCompositeOperation = 'destination-out';
    erase(ctx, x, y);
}

export function erase(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.fillRect(x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize);
}

export function stop(ctx: CanvasRenderingContext2D) {
    ctx.restore();
}
