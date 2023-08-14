import { useRef, useEffect, useCallback, useState } from 'react';

//https://stackoverflow.com/questions/60424853/html-canvas-with-react-hooks-and-typescript
//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
//https://www.datainfinities.com/68/get-the-mouse-position-coordinates-in-react
//https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio

type Coords = {
    x: number,
    y: number
}

const Canvas = () => {
    //const [target, setTarget] = useState(0);

    const [mouseCoords, setMouseCoords] = useState<Coords>({x: 0, y: 0});

    const canvasRef = useRef<HTMLCanvasElement>(null)

    const draw = useCallback((canvas: HTMLCanvasElement) => {
        const ctx = canvas.getContext('2d')
        
        if (ctx) {
            //resize canvas, scales based on device pixel ratio and browser zoom
            //runs every frame which is probably bad but the alternative is
            //resizing whever 1) site loads 2) onResize 3) devicepixeldensity changes (browser zoom or other)
            //which is such a massive pain (code for i cant get it to work) so i'll just sacrifice a bit of performance here
            const ratio = window.devicePixelRatio
            const { width, height } = canvas.getBoundingClientRect()
            canvas.width = width * ratio
            canvas.height = height * ratio
            ctx.scale(ratio, ratio)

            ctx.shadowBlur = 15;
            ctx.shadowColor = '#2222ff';

            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            ctx.fillStyle = '#FFFFFF'
            ctx.beginPath()
            ctx.arc(mouseCoords.x, mouseCoords.y, 20, 0, 2*Math.PI)
            ctx.fill()
        }
    }, [mouseCoords])

    function mouseMoveHandler(event: MouseEvent): void {
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

    useEffect(() => {
        if (canvasRef.current) {    // lazy to stick everything under a null check but mehhh...
                                    // if canvasRef was null there'd be bigger issues
                                    // to worry about than the code not running

            const canvas = canvasRef.current

            let animationFrameId: number

            window.addEventListener('mousemove', mouseMoveHandler);

            const render = () => {
                draw(canvas)
                animationFrameId = window.requestAnimationFrame(render)
            }
            render()

            return () => {
                window.removeEventListener('mousemove', mouseMoveHandler);
                window.cancelAnimationFrame(animationFrameId)
            }
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