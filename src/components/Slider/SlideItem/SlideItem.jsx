const SlideItem = ({item}) => {
    return (
        <div className="slide" style={{filter: item.filter}}>
            <div className="one-slide">
                <img src={item.url} className="slider-image-back" />
            </div>
        </div>
    )
}

export default SlideItem;