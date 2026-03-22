import useFetch from "../hooks/userFetch.js";

const FeaturedProperties = () => {
    const { data, loading, error } = useFetch("/api/hotels?featured=true&limit=4");
    console.log(data);

    const capitalWord = (word) => {
        return word.split(" ").map(word=> word[0].toUpperCase() + word.slice(1)).join(" ");
    }

    return (
        <div className='fp'>
            {loading ? (
                "loading"
            ) : (
                <>
                {data?.map((item, i) => (
                    <div className="fpItem" key = {i}>
                        <img
                            src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
                            alt=""
                            className="fpImg"
                        />
                        <span className="fpName">Aparthotel Stare Miasto</span>
                        <span className="fpCity">{capitalWord(item.city)}</span>
                        <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
                        {item.rating && <div className="fpRating">
                            <button>{item.rating}</button>
                            <span>Excellent</span>
                        </div>}
                    </div>
                ))}
                </>
            )}

        </div>
    )
}

export default FeaturedProperties