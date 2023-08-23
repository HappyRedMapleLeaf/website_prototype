import './Home.css'
import handString from "../../resources/Hand"
import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'
import LongButton from '../../components/LongButton/LongButton'
import ChainAnimation from '../../components/ChainAnimation'

import LinkedInLogo from "../../images/longButtonIcons/linkedin1.png"
import GitHubLogo from "../../images/longButtonIcons/github1.png"
import EmailIcon from "../../images/longButtonIcons/mail.svg"
import ProjectsIcon from "../../images/longButtonIcons/projects.svg"
import YouTubeLogo from "../../images/longButtonIcons/youtube1.png"
import SourceCodeIcon from "../../images/longButtonIcons/code2.svg"
import LinksIcon from "../../images/longButtonIcons/link.svg"

function HomeContent () {
    return (
        <Body>
            <br/><br/><br/><hr />

            <ChainAnimation>
                <h2>
                    Hello!
                </h2>
                <p>
                    I'm Evan Li, a first-year university student from Scarborough, Ontario, Canada.
                </p>
                <p>
                    This website is for sharing more about my personal life and the stuff I do outside of school and work. For a more formal portfolio, check out my Linkedin and my GitHub profiles. Feel free to email me as well!
                    <br/><br/>
                </p>
                <LongButton img={LinkedInLogo} color="#300090" href="https://www.linkedin.com/in/evan-zc-li/" text={"LinkedIn"} />
                <LongButton img={GitHubLogo} color="#300080" href="https://github.com/HappyRedMapleLeaf" text={"GitHub"} />
                <LongButton img={EmailIcon} color="#300070" href="mailto:evan.li@live.ca" text={"Email"} />
            </ChainAnimation>

            <br/><br/><br/><hr />

            <ChainAnimation>
                <h2>
                    A Quick Introduction
                </h2>
                <p>
                    Having just graduated from Dr. Norman Bethune CI, I’m now heading into the University of Waterloo’s computer engineering program. Eventually, I hope to work with low-level software, and I’m especially interested in robotics. Perhaps my robotics addiction will go away soon, but I don’t think it will.
                </p>
                <p>
                    I also love the outdoors (engineering student touching grass? impossible) and I enjoy camping, fishing, snowboarding, and going on nice little walks or bike rides.
                </p>
                <p>
                    I spend a lot of my time working on a variety of personal projects, from woodworking to, well, website development. Check out a detailed timeline of my projects on the Projects page! Most of them aren't very significant or impressive, but I'm happy with them anyways. I also make music or art from time to time, but it's certainly not very good and I just do it for fun.
                    <br/><br/>
                </p>
                <LongButton img={ProjectsIcon} color="#300060" href={`/projects`} text={"Projects"} />
            </ChainAnimation>

            <br/><br/><br/><hr />

            <ChainAnimation>
                <h2>
                    What's Up With the Username?
                </h2>
                <p>
                    It’s a long story that I don't completely remember, but my fourth grade self needed a new name for my YouTube channel… that had about 2 videos on it. I guess I felt particularly Canadian that day, and I held on to the “Happy Red Maple Leaf” username ever since. I’ve also made some graphics over the years to serve as profile pictures, banners, etc.
                </p>
                <p>
                    Now, I occasionally use the YouTube channel to dump gaming videos or quick showcases on any project, big or small, that I end up finishing.
                    <br/><br/>
                </p>
                <LongButton img={YouTubeLogo} color="#300050" href={`https://www.youtube.com/channel/UCigegT9rDhBZYN9KvSeCE1Q`} text={"YouTube"} />
            </ChainAnimation>

            <br/><br/><br/><hr />

            <ChainAnimation>
                <h2>
                    Credits, Source Code, and More
                </h2>
                <p>
                    All the source code for this website is on my GitHub, as well as some credits and links I found helpful while building the site.
                    <br/><br/>
                </p>
                <LongButton img={SourceCodeIcon} color="#300040" href="https://github.com/HappyRedMapleLeaf/website_prototype" text={"Source Code"} />
                <LongButton img={LinksIcon} color="#300030" href="https://github.com/HappyRedMapleLeaf/website_prototype/blob/main/README.md" text={"Other Links"} />
            </ChainAnimation>
        </Body>
    )
}

export default function Home() {
    return (
    <>
        <Header text="Welcome!" rotationAxis="z" object={handString} debug={false} fov={Math.PI / 3.5} yTranslate={-0.5} zTranslate={1} />
        <HomeContent />
    </>
    )
}