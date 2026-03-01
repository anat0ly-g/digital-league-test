import type { CanvasOperationHandlers } from '../../../types/canvasTypes';

const eraserSize: number = 30;

export const erase: CanvasOperationHandlers = {
    start(ctx: CanvasRenderingContext2D, x: number, y: number) {
        ctx.save();
        ctx.globalCompositeOperation = 'destination-out';
        this.move(ctx, x, y);
    },
    move(ctx: CanvasRenderingContext2D, x: number, y: number) {
        ctx.fillRect(x - eraserSize / 2, y - eraserSize / 2, eraserSize, eraserSize);
    },
    end(ctx: CanvasRenderingContext2D) {
        ctx.restore();
    },
};
