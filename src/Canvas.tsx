import { useRef, useEffect, useCallback, useState } from 'react';

//https://stackoverflow.com/questions/60424853/html-canvas-with-react-hooks-and-typescript
//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
//https://www.datainfinities.com/68/get-the-mouse-position-coordinates-in-react

type Coords = {
    x: number,
    y: number
}

const Canvas = () => {
    //const [target, setTarget] = useState(0);

    const [mouseCoords, setMouseCoords] = useState<Coords>({x: 0, y: 0});

    const canvasRef = useRef<HTMLCanvasElement>(null);

    const mouseMoveHandler = (event: MouseEvent) => {
        if (event.target) {

            if (canvasRef.current) {
                setMouseCoords({
                    //in final code only clientx is needed, no offset required
                    x: event.clientX - canvasRef.current.getBoundingClientRect().left,
                    y: event.clientY - canvasRef.current.getBoundingClientRect().top,
                });
            }
        }
    }

    function resizeCanvas(canvas: HTMLCanvasElement): void {
        const { width, height } = canvas.getBoundingClientRect()

        if (canvas.width !== width || canvas.height !== height) {
            const { devicePixelRatio:ratio=1 } = window
            const context = canvas.getContext('2d')
            if (context) {
                canvas.width = width * ratio
                canvas.height = height * ratio
                context.scale(ratio, ratio)
            }
        }
    }

    const draw = useCallback((canvas: HTMLCanvasElement) => {
        const ctx = canvas.getContext('2d')
        
        if (ctx) {
            resizeCanvas(canvas)
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            ctx.fillStyle = '#000000'
            ctx.beginPath()
            ctx.arc(mouseCoords.x, mouseCoords.y, 20, 0, 2*Math.PI)
            ctx.fill()
        }
    }, [mouseCoords])

    useEffect(() => {
        window.addEventListener('mousemove', mouseMoveHandler);

        let animationFrameId: number

        if (canvasRef.current) {
            const canvas = canvasRef.current

            const render = () => {
                draw(canvas)
                animationFrameId = window.requestAnimationFrame(render)
            }
            render()
        }

        return () => {
            window.removeEventListener('mousemove', mouseMoveHandler);
            window.cancelAnimationFrame(animationFrameId)
        }
    }, [draw])

    return (
        //for some reason having a 100vw x 100vh div with a 100% x 100% canvas in it makes the canvas resize properly when the browser zooms,
        //while just having a canvas that is 100vw x 100vh will keep the width of the page with the browser zooms. 
        <div className='CanvasContainer'>
            <canvas ref={canvasRef} className='Canvas' />
        </div>
    )
};

export default Canvas;