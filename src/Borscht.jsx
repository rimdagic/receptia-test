import Headline from "./Headline.jsx";
import Navigation from "./Navigation.jsx";

export default function (){
    return <>
        <main>
            <Headline/>
            <Navigation/>

    <section id="borscht">
        <article>
        <div className="image">
        </div>
        <div className="text">
            <h2>Borscht</h2>
            <div className="icons">
                <div>
                    <i className="fas fa-utensils"></i>
                </div>
                <div>
                    <i className="fas fa-dollar-sign"></i>
                    <i className="fas fa-dollar-sign"></i>
                    <i className="fas fa-dollar-sign"></i>
                </div>
                <div>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            </div>
            <p>Borscht is a sour soup popular in several Eastern European cuisines, including Ukrainian, Russian,
                Polish, Lithuanian, Belarusian, Romanian, Ashkenazi Jewish and Armenian cuisines. The variety most
                commonly associated with the name in English is of Ukrainian origin and includes beetroots as one of the
                main ingredients, which gives the dish its distinctive red color.</p>
        </div>
            </article>
    </section>

        </main>
    </>
}