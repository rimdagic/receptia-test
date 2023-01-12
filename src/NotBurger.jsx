import Headline from "./Headline.jsx";
import Navigation from "./Navigation.jsx";

export default function () {
    return <>
        <main>
            <Headline/>
            <Navigation/>
        <section id="not-a-burger">
            <article>
            <div className="image">
            </div>
            <div className="text">
                <h2>Not a burger</h2>
                <div className="icons">
                    <div>
                        <i className="fas fa-apple-alt"></i>
                        <i className="fas fa-utensils"></i>
                    </div>
                    <div>
                        <i className="fas fa-dollar-sign"></i>
                    </div>
                    <div>
                        <i className="far fa-star"></i>
                    </div>
                    <i className="far fa-clock"></i>
                </div>
                <p>This vegetarian, vegan and gluten-free mushroom burger recipe may just surprise you with how tasty it
                    is. While mushrooms provide plenty of flavor and texture, the addition of pinto beans makes this
                    veggie burger recipe high in fiber and protein too. There's not much to them, other than that! Just
                    mash everything up together, form into patties, heat and serve!</p>
            </div>
            </article>
        </section>
        </main>
    </>
}