const React = require('react')
const Def = require('../Default')

function show(data) {
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img style={{ width: 460, height: 500 }} className="pic" src={data.place.pic} alt={data.place.name} />
                    </div>
                    <h3>
                        Located in { data.place.city}, {data.place.state}
                    </h3>
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>
                        <h2>Rating</h2>
                        <h3 className="inactive">Not Rated</h3>
                        <br />
                        <h2> Description</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <br />
                        <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                            Edit
                        </a>{` `}
                        <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                            <button type="submit" className="btn btn-danger">
                                Delete
                            </button>
                        </form>
                    </div>
                </div>
                <hr />
            </main>
        </Def>
    )
}

module.exports = show
