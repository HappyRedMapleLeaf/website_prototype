import './Projects.css'
import robotString from "../../resources/Robot"
import Header from '../../components/Header/Header'
import Body from '../../components/Body/Body'
import LongButton from '../../components/LongButton/LongButton'
import ChainAnimation from '../../components/ChainAnimation'
import Project from '../../components/Project/Project'
import FixedEmbed from '../../components/FixedEmbed/FixedEmbed'

import HomeIcon from "../../images/longButtonIcons/home.svg"
import devlogo from "../../images/longButtonIcons/devlogo.png"
import instalogo from "../../images/longButtonIcons/instalogo.png"

import keylock from "../../images/projects/keylock.jpg"
import ssacard from "../../images/projects/ssacard.png"
import ssa1 from "../../images/projects/ssa1.jpg"
import ssa2 from "../../images/projects/ssa2.jpg"

import devcard from "../../images/projects/devcard.jpg"
import dev1 from "../../images/projects/dev1.png"
import dev2 from "../../images/projects/dev2.jpg"

import fscard from "../../images/projects/fscard.jpg"
import fs1 from "../../images/projects/fs1.jpg"
import fs2 from "../../images/projects/fs2.jpg"

import ppbcard from "../../images/projects/ppbcard.png"
import guncard from "../../images/projects/guncard.png"
import lockcard from "../../images/projects/lockcard.png"
import hangcard from "../../images/projects/hangcard.jpg"
import sitecard from "../../images/projects/sitecard.png"
import progresscard from "../../images/projects/progresscard.png"

import site1 from "../../images/projects/site1.png"
import site2 from "../../images/projects/site2.png"


function ProjectsContent() {
    return (
        <Body>
            <ChainAnimation>
                <p>
                    These are some side projects I've completed over the years.
                    <br /><br />
                </p>
                <LongButton img={HomeIcon} color="#300070" href={`/`} text={"Back to Homepage"} />
            </ChainAnimation>
            <br />
            <br />
            <br />
            <Project image={progresscard} title="In Progress" month="Now" year="">
                <h2>What I'm Working On</h2>
                <br />
                <p>a) Restoring a 9th grade mouse trap car I made with a friend in tech class, which has been sitting in said friend’s basement for 3 years</p>
                <br />
                <p>b) Learning about web servers and making some kind of primitive remote access software for fun</p>
                <br />
                <p>c) Making a shoe attachment that turns it into a wirelessly controlled retractable roller skate</p>
                <br />
            </Project>
            <Project image={sitecard} title="This Website!" month="Aug" year="2023">
                <h2>This Website!</h2>
                <br />
                <p>This was a “three birds with one stone” project where I learned about React.js, TypeScript, and web development, made a portfolio for myself with links to my other profiles, and got to show off a bit to my friends.</p>
                <br />
                <p>I’ve built simple websites before, but for this one I put emphasis on: compatibility, having tested my website on 6 different browsers; user experience, ensuring accessibility and ease of navigation on all devices; performance, optimizing my “DIY” 3D wireframe render; and good code practise (who am I kidding, it’s still bad), adding some comments and making sure the code is reusable and repairable.</p>
                <br />
                <p>Below left: the 3D model rendered on the top of this page. Below right: an old testing version of this website</p>
                <br />
                <img width="48%" style={{marginRight: "4%"}} src={site1} alt="Robot model at the top of the page" />
                <img width="48%" src={site2} alt="Old version of the website" />
                <br />
                <br />
            </Project>
            <Project image={hangcard} title="Hangboard" month="Jul" year="2023">
                <h2>Homemade Hangboard</h2>
                <br />
                <p>This was a quick one-week project where I made two hangboards from pine wood and some old tools. I was getting into climbing around this time, and I wanted a way to train in the comfort of my own home.</p>
                <br />
                <p>It didn’t go perfectly, with some holes being slanted and with my wall being slightly broken after a failed mounting attempt, but it was a relaxing project to start my summer off with. I also got some practice with design and CAD, and I got a lot better at basic woodworking.</p>
                <br />
                <FixedEmbed src="https://www.youtube.com/embed/3is3RLBoPuQ" />
                <br />
            </Project>
            <Project image={devcard} title="Devolotics" month="Apr" year="2023">
                <h2>FIRST Tech Challenge</h2>
                <br />
                <p>I was the captain of FIRST Tech Challenge team 19498 Devolotics for two years since its formation, leading the mechanical design and programming of our approximately 0.5x0.5x0.5m large robots over two seasons.</p>
                <br />
                <p>In my second year, after over 10,000 combined hours from our team, we became one of two Ontario teams to qualify to the World Championships in Houston, Texas. I’d say that this is by far my proudest achievement to date. Devolotics forever! Some pictures are below.</p>
                <br />
                <LongButton img={devlogo} color="#502290" href={`https://devolotics.github.io/`} text={"Our Website"} />
                <img width="48%" style={{marginRight: "4%"}} src={dev1} alt="Our Robot" />
                <img width="48%" src={dev2} alt="When we discovered that we qualified!" />
                <br />
                <br />
            </Project>
            <Project image={ssacard} title="SSA Non-Profit" month="Sep" year="2022">
                <h2>Scarborough STEM Alliance</h2>
                <br />
                <p>My robotics team (see above) wanted to inspire our community with robotics, so as a group effort, we founded the Scarborough STEM Alliance (or SSA), a non-profit organization that has now reached thousands of youth through robotics and programming workshops at schools, libraries, and community centres.</p>
                <br />
                <p>Working with teachers, volunteers, other organizations, and even the government, I think we’ve significantly changed a few lives through our work, just like robotics has changed mine.</p>
                <br />
                <LongButton img={instalogo} color="#502290" href={`https://www.instagram.com/scarborough.stem.alliance/`} text={"SSA Instagram"} />
                <img width="48%" style={{marginRight: "4%"}} src={ssa1} alt="Workshop at Forest Manor Public School" />
                <img width="48%" src={ssa2} alt="Workshop at Toronto Public Library" />
                <br />
                <br />
            </Project>
            <Project image={keylock} title="LEGO Key Lock" month="Apr" year="2022">
                <h2>LEGO Key Lock</h2>
                <br />
                <p>Continuing my obsession with locks (see the LEGO Combo Lock below), I made a horrible-looking but functional key lock with LEGO. I didn’t have many parts to work with, but I’m still quite happy with how well it worked. I also made a YouTube video explaining my lock and locks in general.</p>
                <br />
                <FixedEmbed src="https://www.youtube.com/embed/i_A5MMc-gP0" />
                <br />
            </Project>
            <Project image={ppbcard} title="Pong Revolver" month="Jan" year="2021">
                <h2>Ping-Pong Ball Revolver</h2>
                <br />
                <p>After making the dart launcher (below), I wanted to shoot some more things, and faster. After way too long, I finished making a ping-pong ball launcher with foam boards (a horrible material for this task, by the way) that could shoot 6 balls like a revolver without reloading.</p>
                <br />
                <FixedEmbed src="https://www.youtube.com/embed/Kxz_q2YklFA" />
                <br />
            </Project>
            <Project image={guncard} title="Dart Launcher" month="Feb" year="2020">
                <h2>Paper Dart Launcher</h2>
                <br />
                <p>Being a long-time fan of JoergSprave, aka The Slingshot Channel, and seeing my classmates make small paper darts to throw into classroom ceilings, I made a rubber-powered dart launcher to definitively become the most annoying kid in the class with unparalleled throwing speed and consistency. Unfortunately, this backfired as my science teacher was amused and made me present my launcher in front of the class.</p>
                <br />
                <FixedEmbed src="https://www.youtube.com/embed/ybh8jH-3AfQ" />
                <br />
            </Project>
            <Project image={lockcard} title={"Combo Lock"} month="Nov" year="2019">
                <h2>LEGO Combination Lock</h2>
                <br />
                <p>My combo lock at school stopped working and had to be cut, so I took it apart to see how it worked. Eventually, I recreated the mechanism using LEGO. I even made a YouTube video about it, which admittedly wasn’t very good.</p>
                <br />
                <FixedEmbed src="https://www.youtube.com/embed/ZziNasU4CpY" />
                <br />
            </Project>
            <Project image={fscard} title="Firestorm" month="Feb" year="2018">
                <h2>FIRST Lego League</h2>
                <br />
                <p>In middle school, I joined a FIRST Lego League team, #26746 Firestorm. In my first year, although our robot wasn’t very impressive, we made it to the provincial tournament and even got to share our innovation project (an umbrella that catches rain into a filter water bottle to conserve water) at the Ontario Innovation Celebration. In my second year, we didn’t make it as far, but we did win the Robot Design award at a qualifying tournament.</p>
                <br />
                <p>This was my first ever exposure to robotics, and I’m forever grateful for this experience.</p>
                <br />
                <img width="48%" style={{marginRight: "4%"}} src={fs1} alt="Our robot" />
                <img width="48%" src={fs2} alt="Our innovation" />
                <br />
                <br />
            </Project>
        </Body>
    )
}

export default function Projects() {
    return (
        <>
            <Header text="Projects" rotationAxis="y" object={robotString} debug={false} fov={Math.PI / 4} yTranslate={-0.45} zTranslate={2}/>
            <ProjectsContent />
        </>
    )
}