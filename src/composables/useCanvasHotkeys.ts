import { onMounted, onUnmounted } from 'vue';
import { useCanvasStore } from '../store/canvasStore';

export function useCanvasHotkeys() {
    const canvasStore = useCanvasStore();

    function handleKeyDown(event: KeyboardEvent) {
        if (event.ctrlKey && !event.shiftKey && event.key.toLowerCase() == 'z') {
            event.preventDefault();
            canvasStore.undo();
        }

        if (event.ctrlKey && event.shiftKey && event.key.toLowerCase() == 'z') {
            event.preventDefault();
            canvasStore.redo();
        }
    }

    onMounted(() => {
        window.addEventListener('keydown', handleKeyDown);
    });

    onUnmounted(() => {
        window.removeEventListener('keydown', handleKeyDown);
    });
}
