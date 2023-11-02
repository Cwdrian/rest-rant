const React = require('react')
const Def = require('../Default')

function index(data) {
    let placesFormatted = data.places.map((place, index) => {
        return (
            <div className="col-sm-6" key={index}>
                <h2>
                    <a href={`/places/${index}`} >
                        {place.name}
                    </a>
                </h2>
                <p className="text-center">
                    {place.cuisines}
                </p>
                <img   style={{ width: 300, height: 200 }} src={place.pic} alt={place.name} />
                <div>
                        Photo from <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                <p className="text-center">
                    Located in {place.city}, {place.state}
                </p>
            </div>
        )
    })

    return (
        <Def>
            <main>
                <h1>Places</h1>
                {placesFormatted}
            </main>
        </Def>
    )
}

module.exports = index
