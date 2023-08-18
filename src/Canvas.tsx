import { useRef, useEffect, useCallback, useMemo } from 'react'

//https://stackoverflow.com/questions/60424853/html-canvas-with-react-hooks-and-typescript
//https://medium.com/@pdx.lucasm/canvas-with-react-js-32e133c05258
//https://www.datainfinities.com/68/get-the-mouse-position-coordinates-in-react
//https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio
//https://www.youtube.com/watch?v=ih20l3pJoeU
//https://sketchfab.com/3d-models/hand-low-poly-d6c802a74a174c8c805deb20186d1877

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

    scale(a: number, b: number, c: number) {
        this.x *= a
        this.y *= b
        this.z *= c
    }

    translate(a: number, b: number, c: number) {
        this.x += a
        this.y += b
        this.z += c
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

    scale(a: number, b: number, c: number) {
        this.p[0].scale(a, b, c)
        this.p[1].scale(a, b, c)
        this.p[2].scale(a, b, c)
    }

    translate(a: number, b: number, c: number) {
        this.p[0].translate(a, b, c)
        this.p[1].translate(a, b, c)
        this.p[2].translate(a, b, c)
    }

    multiply(mat: number[][]) {
        this.p[0] = matMultiply(mat, this.p[0])
        this.p[1] = matMultiply(mat, this.p[1])
        this.p[2] = matMultiply(mat, this.p[2])
    }
}

function drawTri(t: Triangle, ctx: CanvasRenderingContext2D) {
    let a = t.p[0]
    let b = t.p[1]
    let c = t.p[2]
    ctx.beginPath()
    ctx.moveTo(a.x, a.y)
    ctx.lineTo(b.x, b.y)
    ctx.lineTo(c.x, c.y)
    ctx.closePath()
    ctx.stroke()
}

function matMultiply(m: number[][], i: Vec): Vec {
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

function initMesh(object: string): Triangle[] {
    let meshCube: Triangle[] = []

    //https://stackoverflow.com/questions/21711768/split-string-in-javascript-and-detect-line-break
    let lines = object.split(/\r?\n|\r|\n/g)
    
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

type CanvasProps = {
    rotationAxis: string,
    object: string
    debug: boolean,
    fov: number,
    yTranslate: number,
    zTranslate: number
}

const Canvas = ({rotationAxis, object, debug, fov, yTranslate, zTranslate}: CanvasProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const meshCube = useMemo(() => initMesh(object), [object])

    const f = 1 / Math.tan(fov / 2)
    const maxAngle = Math.PI / 3
    
    const mouseX = useRef(-1)
    const currentAngle = useRef(-maxAngle)
    const lastRun = useRef(0)
    const frameCounter = useRef(0)
    const fpsDraw = useRef(0)

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

            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            ctx.strokeStyle = '#22BBBB'
            ctx.lineWidth = 1

            const a = height / width
            const matProj = [[a*f, 0, 0, 0],
                             [0  , f, 0, 0],
                             [0  , 0, 1, 0],
                             [0  , 0, 1, 0]]

            let matRot = [[0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 0, 0, 0],
                          [0, 0, 0, 0]]

            if (mouseX.current === -1) {
                // page load offset
                // make it center for mobile but 3/4 for desktop for a wave
                mouseX.current = width / 2
            }
            const targetAngle = (mouseX.current * 2 / width - 1) * maxAngle

            if (frameDuration > 1) {
                // fixes a glitch where the hand spins like f*kn crazy after tabbing out for a while
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
                // baaaare bones 3d render, no culling, no clipping, no z normalization
                // could still be optimized quite a lot i bet but whatever
                let tri = meshCube[i].copy()
                tri.multiply(matRot)
                tri.translate(0.01, yTranslate, zTranslate)
                tri.multiply(matProj)
                tri.scale(-1, -1, 1) //+x is left and +y is up for +z to be out of the camera. on the screen, +x is right and +y is down, so flip x and y
                tri.translate(1, 1, 0)
                tri.scale(0.5 * width, 0.5 * height, 1)

                //https://stackoverflow.com/questions/7389069/how-can-i-make-console-log-show-the-current-state-of-an-object
                //as usual, i hate javascript
                //console.log(JSON.parse(JSON.stringify(tri)))
                drawTri(tri, ctx)
            }

            if (debug) {
                console.log("spam")
                ctx.fillStyle = "#FFFFFF"
                ctx.font = "16px Consolas"
                ctx.fillText("framerate: " + fpsDraw.current, 0, 16)
            }
        }
    }, [mouseX, meshCube, f, maxAngle, rotationAxis, debug])

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