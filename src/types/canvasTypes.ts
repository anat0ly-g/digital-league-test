export interface BrushConfig {
    strokeStyle: string;
    lineWidth: number;
    lineCap: CanvasLineCap;
    lineJoin: CanvasLineJoin;
}

export type CanvasOperations = 'draw' | 'erase';

export interface CanvasOperationHandlers {
    start: (ctx: CanvasRenderingContext2D, x: number, y: number) => void;
    move: (ctx: CanvasRenderingContext2D, x: number, y: number) => void;
    end: (ctx: CanvasRenderingContext2D) => void;
}
