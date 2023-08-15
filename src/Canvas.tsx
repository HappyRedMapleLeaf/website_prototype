import { useRef, useEffect, useCallback, useMemo } from 'react'
import handString from './Hand'

//https://stackoverflow.com/questions/60424853/html-canvas-with-react-hooks-and-typescript
//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
//https://www.datainfinities.com/68/get-the-mouse-position-coordinates-in-react
//https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
//https://www.youtube.com/watch?v=ih20l3pJoeU

//java has infected me im sorry you have to see this
//this entire 3d part is made with 'if it works it works' energy
class Vec {
    x: number
    y: number
    z: number

    constructor(d: number[], a = 0, b = 0, c = 0) {
        if (d.length === 3) {
            this.x = d[0]; this.y = d[1]; this.z = d[2];
        } else {
            this.x = a; this.y = b; this.z = c
        }
    }
}

class Triangle {
    p: Vec[] = []

    constructor(v: number[][], z: Vec[]) {
        if (z.length > 0) {
            this.p = z
        } else if (v.length === 3) {
            this.p.push(new Vec(v[0]))
            this.p.push(new Vec(v[1]))
            this.p.push(new Vec(v[2]))
        }
    }

    copy(): Triangle {
        //lmao
        return new Triangle([[this.p[0].x, this.p[0].y, this.p[0].z], 
                             [this.p[1].x, this.p[1].y, this.p[1].z],
                             [this.p[2].x, this.p[2].y, this.p[2].z]], [])
    }
}

function drawTri(t: Triangle, ctx: CanvasRenderingContext2D) {
    ctx.strokeStyle = '#0000FF33'
    ctx.lineWidth = 3
    let a = t.p[0]
    let b = t.p[1]
    let c = t.p[2]
    ctx.beginPath()
    ctx.moveTo(a.x, a.y)
    ctx.lineTo(b.x, b.y)
    ctx.lineTo(c.x, c.y)
    ctx.closePath()
    ctx.stroke()
    ctx.strokeStyle = '#BBBBBB'
    ctx.lineWidth = 1
    ctx.stroke()
}

function MatMultiply(m: number[][], i: Vec): Vec {
    let o = new Vec([])
    o.x = i.x * m[0][0] + i.y * m[0][1] + i.z * m[0][2] + m[0][3];
    o.y = i.x * m[1][0] + i.y * m[1][1] + i.z * m[1][2] + m[1][3];
    o.z = i.x * m[2][0] + i.y * m[2][1] + i.z * m[2][2] + m[2][3];
    let w = i.x * m[3][0] + i.y * m[3][1] + i.z * m[3][2] + m[3][3];

    if (w !== 0.0)
    {
        o.x /= w; o.y /= w; o.z /= w;
    }

    return o
}

function initMesh(): Triangle[] {
    let meshCube: Triangle[] = []

    //https://stackoverflow.com/questions/21711768/split-string-in-javascript-and-detect-line-break
    let lines = handString.split(/\r?\n|\r|\n/g)
    
    let vertices: number[][] = []

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i]
        
        if (line[0] === "v") {
            let coordinates: string[] = line.split(" ")
            vertices.push([+coordinates[1], +coordinates[2], +coordinates[3]])
        } else if (line[0] === "f") {
            let indices: string[] = line.split(" ")
            meshCube.push(new Triangle([vertices[+indices[1] - 1],
                                        vertices[+indices[2] - 1],
                                        vertices[+indices[3] - 1]], []))
        }
    }

    return meshCube
}

const Canvas = () => {
    const fov = Math.PI / 3.5
    const f = 1 / Math.tan(fov / 2)
    let rotationAxis = "z"
    const maxAngle = Math.PI / 3

    const meshCube = useMemo(() => initMesh(), [])

    const mouseX = useRef(0)
    const currentAngle = useRef(0)
    const lastRun = useRef(0)
    const frameCounter = useRef(0)
    const fpsDraw = useRef(0)

    const canvasRef = useRef<HTMLCanvasElement>(null)

    const draw = useCallback((canvas: HTMLCanvasElement) => {
        let frameDuration = (performance.now() - lastRun.current) / 1000
        let fps = Math.round((1 / frameDuration) * 10 ** 2) / 10 ** 2
        lastRun.current = performance.now()
        
        frameCounter.current += 1
        if (frameCounter.current >= 5) {
            fpsDraw.current = fps
            frameCounter.current = 0
        }


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

            // LAGGGGG
            // ctx.shadowBlur = 5;
            // ctx.shadowColor = '#2222ff';
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            // ctx.strokeStyle = '#22CCCC'
            // ctx.lineWidth = 1

            const a = height / width
            const matProj = [[a*f, 0, 0, 0],
                             [0  , f, 0, 0],
                             [0  , 0, 1, 0],
                             [0  , 0, 1, 0]]

            let matRot = [[0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 0, 0, 0]]
            
            const targetAngle = (mouseX.current * 2 / width - 1) * maxAngle + Math.PI

            if (frameDuration > 1) {
                frameDuration = 1
            }
            currentAngle.current = currentAngle.current + (targetAngle - currentAngle.current) * frameDuration * 2

            if (rotationAxis === "z") {
                //rotate about z (wave)
                matRot[0][0] = +Math.cos(currentAngle.current);
                matRot[1][0] = +Math.sin(currentAngle.current);
                matRot[0][1] = -Math.sin(currentAngle.current);
                matRot[1][1] = +Math.cos(currentAngle.current);
                matRot[2][2] = 1;
                matRot[3][3] = 1;
            } else {
                //rotate about y (horizontally)
                matRot[0][0] = +Math.cos(currentAngle.current);
                matRot[0][2] = +Math.sin(currentAngle.current);
                matRot[2][0] = -Math.sin(currentAngle.current);
                matRot[2][2] = +Math.cos(currentAngle.current);
                matRot[1][1] = 1;
                matRot[3][3] = 1;
            }

            for (let i = 0; i < meshCube.length; i++) {
                let triRotated = new Triangle([], [MatMultiply(matRot, meshCube[i].p[0]),
                                                   MatMultiply(matRot, meshCube[i].p[1]),
                                                   MatMultiply(matRot, meshCube[i].p[2])])

                let triTranslated = triRotated.copy()
                triTranslated.p[0].z += 1
                triTranslated.p[1].z += 1
                triTranslated.p[2].z += 1
                triTranslated.p[0].y += 0.5
                triTranslated.p[1].y += 0.5
                triTranslated.p[2].y += 0.5

                let triProjected = new Triangle([], [MatMultiply(matProj, triTranslated.p[0]),
                                                     MatMultiply(matProj, triTranslated.p[1]),
                                                     MatMultiply(matProj, triTranslated.p[2])])
             
                //https://stackoverflow.com/questions/7389069/how-can-i-make-console-log-show-the-current-state-of-an-object
                //as usual, i hate javascript
                //console.log(JSON.parse(JSON.stringify(triProjected)))

                triProjected.p[0].x += 1.0; triProjected.p[0].y += 1.0;
                triProjected.p[1].x += 1.0; triProjected.p[1].y += 1.0;
                triProjected.p[2].x += 1.0; triProjected.p[2].y += 1.0;
                triProjected.p[0].x *= 0.5 * width;
                triProjected.p[0].y *= 0.5 * height;
                triProjected.p[1].x *= 0.5 * width;
                triProjected.p[1].y *= 0.5 * height;
                triProjected.p[2].x *= 0.5 * width;
                triProjected.p[2].y *= 0.5 * height;

                drawTri(triProjected, ctx)
            }

            // ctx.fillStyle = "#FFFFFF"
            // ctx.font = "16px Consolas"
            // ctx.fillText("framerate: " + fpsDraw.current, 0, 16)
        }
    }, [mouseX, meshCube, f, maxAngle, rotationAxis])

    useEffect(() => {
        if (canvasRef.current) {    // lazy to stick everything under a null check but mehhh...
                                    // if canvasRef was null there'd be bigger issues
                                    // to worry about than the code not running

            const canvas = canvasRef.current

            let animationFrameId: number

            const mouseMoveHandler = (event: MouseEvent) => {
                if (event.target) {
                    mouseX.current = event.clientX
                }
            }

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