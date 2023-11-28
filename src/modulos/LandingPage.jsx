import { Header } from "./header"
import { Text } from "./hero"
import { About } from "./about"
import { Skills } from "./Skills"
import './landing.css'
export function Hero() {

    return (
        <>
        <section className="landing">
            <Header/>
            <Text/>
        </section>
            <About/>
            <Skills/>
        </>
    )
}
