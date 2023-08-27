import './Hero.css'
import Menu from './Menu'
const Hero = function () {
    return (
        <>  
            <section className="hero">
                <div className="text">
                    <h2>Delight in every bite</h2>
                    <p>Instead of going out to dinner, buy good food. Cooking at home shows such affection. In a bad economy, it's more important to make yourself feel good.</p>
                </div>

                <Menu />
            </section>
        </>
    )
}

export default Hero 