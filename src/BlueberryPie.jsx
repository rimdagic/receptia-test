import Headline from "./Headline.jsx";
import Navigation from "./Navigation.jsx";

export default function () {
    return <>
        <main>
        <Headline/>
        <Navigation/>

        <section id="blueberry-pie">
            <article>
            <div className="image">
            </div>
            <div className="text">
                <h2>Blueberry pie</h2>
                <div className="icons">
                    <div>
                        <i className="fas fa-stroopwafel"></i>
                        <i className="fas fa-utensils"></i>
                    </div>
                    <div>
                        <i className="fas fa-dollar-sign"></i>
                        <i className="fas fa-dollar-sign"></i>
                    </div>
                    <div>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                        <i className="far fa-star"></i>
                    </div>
                </div>
                <p>Blueberry pie is a pie with a blueberry filling. Blueberry pie is considered one of the easiest pies
                    to make because it does not require pitting or peeling of fruit. It usually has a top and bottom
                    crust. The top crust can be a circular crust but the pie can also have a crumble crust or no top
                    crust at all. Blueberry pies are often eaten in the summertime because that is when blueberries are
                    in season.</p>
            </div>
            </article>
        </section>

        </main>
    </>
}