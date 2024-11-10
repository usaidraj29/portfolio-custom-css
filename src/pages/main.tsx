import Intro from "@/components/intro"
import About from "@/components/About"
import Projects from "@/components/project"

export default function Main(){
    return(
        <div
        className="lg:mx-32 md:mx-4"
        ><Intro/>
        <About/>
        <Projects/>
        </div>
        
    )
}