import {Link} from "react-router-dom";

export default function () {
    return <>
        <aside>
            <nav>
                <Link to="/burger">Burgers</Link>
                    <Link to="/soup">Soups</Link>
                        <Link to="/dessert">Desserts</Link>
            </nav>
        </aside>
    </>
}