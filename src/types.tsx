export type HeaderTextProps = {
    text: string
}

export type CanvasProps = {
    rotationAxis: string,
    object: string
    debug: boolean,
    fov: number,
    yTranslate: number,
    zTranslate: number
}

export type HeaderProps = {
    rotationAxis: string,
    object: string
    debug: boolean,
    fov: number,
    yTranslate: number,
    zTranslate: number,
    text: string
}

export type ChildProp = {
    children: React.ReactNode
}

export type ProjectProp = {
    image: string,
    title: string,
    month: string,
    year: string,
    children: React.ReactNode
}