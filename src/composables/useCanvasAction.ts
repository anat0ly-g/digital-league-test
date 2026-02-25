import { ref, watchEffect, type Ref } from 'vue';
import * as draw from '../logic/canvas/draw';
import * as erase from '../logic/canvas/erase';
import * as canvasUtils from '../logic/canvas/utils';
import { useCanvasStore } from '../store/canvasStore';

export type CanvasOperations = 'draw' | 'erase';
interface OperationSteps {
    start: typeof draw.start;
    action: typeof draw.draw;
    stop: typeof draw.stop;
}

const canvasOperations: Record<CanvasOperations, OperationSteps> = {
    draw: {
        start: draw.start,
        action: draw.draw,
        stop: draw.stop,
    },
    erase: {
        start: erase.start,
        action: erase.erase,
        stop: erase.stop,
    },
};

export function useCanvasAction(canvas: Ref<HTMLCanvasElement | null, HTMLCanvasElement | null>) {
    const canvasContext = ref<CanvasRenderingContext2D | null>(null);
    const isActingOnCanvas = ref(false);
    const modeStore = useCanvasStore();

    watchEffect(() => {
        if (!canvas.value) return;

        canvasUtils.resizeCanvas(canvas.value);

        canvasContext.value = canvas.value.getContext('2d');
    });

    function getCanvasCoords(event: MouseEvent) {
        if (!canvas.value) return { x: 0, y: 0 };

        return canvasUtils.getCanvasCoords(canvas.value, event.clientX, event.clientY);
    }

    function startAction(event: MouseEvent) {
        if (event.button !== 0) return;

        if (!canvasContext.value) return;

        event.preventDefault();
        isActingOnCanvas.value = true;

        const { x, y } = getCanvasCoords(event);
        canvasOperations[modeStore.mode].start(canvasContext.value, x, y);
    }

    function action(event: MouseEvent) {
        if (!isActingOnCanvas.value) return;

        if (!canvasContext.value) return;

        event.preventDefault();

        const { x, y } = getCanvasCoords(event);
        canvasOperations[modeStore.mode].action(canvasContext.value, x, y);
    }

    function stopAction() {
        if (!isActingOnCanvas.value) return;

        if (!canvasContext.value) return;

        canvasOperations[modeStore.mode].stop(canvasContext.value);
        isActingOnCanvas.value = false;
    }

    return { startAction, action, stopAction };
}
