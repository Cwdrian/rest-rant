const React = require('react')
const Def = require('../Default')

function show(data) {
    let comments = (
        <h3 className='inactive'>No comments yet!
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant!' : 'Rave!'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <strong>- {c.author}</strong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                </div>
            )
        })
    }
    return (
        <Def>
            <main>
                <div className="row">
                    <div className="col-sm-6">
                        <img style={{ width: 460, height: 500 }} className="pic" src={data.place.pic} alt={data.place.name} />
                    </div>
                    <h3>
                        Located in {data.place.city}, {data.place.state}
                    </h3>
                    <div className="col-sm-6">
                        <h1>{data.place.name}</h1>
                        <h2>Comments</h2>
                        {comments}
                        <br />
                        <h2> Description</h2>
                        <h3>
                            {data.place.showEstablished()}
                        </h3>
                        <h4>
                            Serving {data.place.cuisines}
                        </h4>
                        <form method="POST" action={`/places/:id`}>
                            <div className="form-group">
                                <label htmlFor="author">Author</label>
                                <input className="form-control" id="author" name="author" required />
                            </div>
                            <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="rant" name="rant" />
                                <label class="form-check-label" for="flexCheckDefault">
                                    Rant 'check if it's a rant'
                                </label>
                            </div>
                            <div className="form-group">
                                <label for="customRange3" class="form-label">Stars</label>
                                <input type="range" class="form-range" min="0" max="5" step="0.5" id="stars" name="stars" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="content">Content</label>
                                <input className="form-control" id="content" name="content" />
                            </div>
                            <input className="btn btn-primary" type="submit" value="Add Comment" />
                        </form>
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