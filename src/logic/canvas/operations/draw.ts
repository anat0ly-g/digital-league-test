import type { BrushConfig, CanvasOperationHandlers } from '../../../types/canvasTypes';

const brushConfig: BrushConfig = {
    strokeStyle: '#000000',
    lineWidth: 2,
    lineCap: 'round',
    lineJoin: 'round',
};

export const draw: CanvasOperationHandlers = {
    start(ctx: CanvasRenderingContext2D, x: number, y: number) {
        ctx.save();

        ctx.strokeStyle = brushConfig.strokeStyle;
        ctx.lineWidth = brushConfig.lineWidth;
        ctx.lineCap = brushConfig.lineCap;
        ctx.lineJoin = brushConfig.lineJoin;

        ctx.beginPath();
        ctx.moveTo(x, y);
    },
    move(ctx: CanvasRenderingContext2D, x: number, y: number) {
        ctx.lineTo(x, y);
        ctx.stroke();
    },
    end(ctx: CanvasRenderingContext2D) {
        ctx.restore();
    },
};
