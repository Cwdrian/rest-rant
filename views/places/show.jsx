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
                        Located in { data.place.city}, {data.place.state}
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