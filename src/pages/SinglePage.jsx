import { useState } from "react";
import { NavLink, useParams } from "react-router-dom";

import PRODUCTS from "../data/PRODUCTS";
import formatMoney from "../utils/formatMoney";

const SinglePage = () => {
    const params = useParams();

    const tovar = PRODUCTS.filter(item => item.id == params.id)

    return (
        <section className="one-tovar">
            <div className="osnova__one-tovar" key={tovar[0].id}>
                <div className="leftside-image__one-tovar">
                    <img src={tovar[0].preview} alt="" className="single-page__image" />
                </div>
                <div className="rightside-text__one-tovar">
                    <div className="single--name">{tovar[0].name}</div>
                    <div className="single--description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui eum expedita, facilis iusto, sunt soluta nam minima hic ipsa, alias quod inventore. Quod alias, quas cum aliquid esse officiis vero.</div>
                    <div className="single--price">{formatMoney(tovar[0].price)}</div>
                    <div className="single--button">
                        <NavLink to="/"><button className="form-button">Назад</button></NavLink>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SinglePage;