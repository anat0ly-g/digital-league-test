import { clear } from '../logic/canvas/operations/clear';
import { drawImage } from '../logic/canvas/operations/drawImage';
import { useCanvasStore } from '../store/canvasStore';

export function useCanvasActions() {
    const canvasStore = useCanvasStore();

    function clearCanvas() {
        if (!canvasStore.canvasRef) return;

        if (!canvasStore.canvasContext) return;

        clear(canvasStore.canvasContext, canvasStore.canvasRef.width, canvasStore.canvasRef.height);

        canvasStore.saveHistoryState();
    }

    async function loadImage(file: File) {
        if (!canvasStore.canvasRef) return;

        if (!canvasStore.canvasContext) return;

        try {
            const img = await loadFile(file);
            drawImage(
                canvasStore.canvasContext,
                canvasStore.canvasRef.width,
                canvasStore.canvasRef.height,
                img,
            );

            canvasStore.saveHistoryState();
        } catch (error) {
            alert('Не удалось загрузить изображение');
        }
    }

    function loadFile(file: File): Promise<HTMLImageElement> {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();

            reader.onload = (event) => {
                const img = new Image();
                img.onload = () => resolve(img);
                img.onerror = reject;
                img.src = event.target?.result as string;
            };

            reader.onerror = reject;
            reader.readAsDataURL(file);
        });
    }

    function saveCanvasAsPNG() {
        if (!canvasStore.canvasRef) {
            alert('Не удалось скачать изображение');
            return;
        }

        try {
            const dataUrl = canvasStore.canvasRef.toDataURL('image/png');

            const link = document.createElement('a');
            link.download = 'canvasDrawing.png';
            link.href = dataUrl;

            link.click();
        } catch (error) {
            alert('Не удалось скачать изображение');
        }
    }

    return { clearCanvas, loadImage, saveCanvasAsPNG };
}
