const brushConfig = {
    strokeStyle: '#000000',
    lineWidth: 2,
    lineCap: 'round' as CanvasLineCap,
    lineJoin: 'round' as CanvasLineJoin,
};

export function start(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.save();

    ctx.strokeStyle = brushConfig.strokeStyle;
    ctx.lineWidth = brushConfig.lineWidth;
    ctx.lineCap = brushConfig.lineCap;
    ctx.lineJoin = brushConfig.lineJoin;

    ctx.beginPath();
    ctx.moveTo(x, y);
}

export function draw(ctx: CanvasRenderingContext2D, x: number, y: number) {
    ctx.lineTo(x, y);
    ctx.stroke();
}

export function stop(ctx: CanvasRenderingContext2D) {
    ctx.restore();
}
