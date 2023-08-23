import './FixedEmbed.css'

type EmbedProp = {
    src: string,
}

export default function FixedEmbed({src}: EmbedProp) {
    return (
        <div className="FixedEmbed">
           <iframe src={src} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </div>
    )
}