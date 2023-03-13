import { useState } from "react";
import { NavLink } from "react-router-dom";
import image from "../assets/image/slider-image.png"

const SinglePage = () => {
    const [service, setService] = useState({});

    return (
        <section className="one-tovar">
            <div className="osnova__one-tovar">
                <div className="leftside-image__one-tovar">
                    <img src={image} alt="" className="single-page__image" />
                </div>
                <div className="rightside-text__one-tovar">
                    <div className="single--name">Naimenovanie</div>
                    <div className="single--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum expedita, facilis iusto, sunt soluta nam minima hic ipsa, alias quod inventore. Quod alias, quas cum aliquid esse officiis vero.</div>
                    <div className="single--price">1150 руб.</div>
                    <div className="single--button">
                        <NavLink to="/"><button className="form-button">Назад</button></NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePage;