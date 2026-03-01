import type { CanvasOperationHandlers, CanvasOperations } from '../../../types/canvasTypes';
import { draw } from './draw';
import { erase } from './erase';

export const canvasOperations: Record<CanvasOperations, CanvasOperationHandlers> = {
    draw: draw,
    erase: erase,
};
