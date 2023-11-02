const React = require('react')
const Def = require('./Default')

function home() {
    return (
        <Def>
            <main>
                <h1>REST-RANT</h1>
                <div>
                    <img style={{ width: 300, height: 200 }} src="/images/chef.jpg" alt="Chef cooking" />
                    <div>
                        Photo by <a href="AUTHOR_LINK">Sebastian Coman</a> on <a href="https://unsplash.com/">Unsplash</a>
                    </div>
                </div>
                <a href="/places">
                    <button className="btn-primary">Places Page</button>
                </a>
            </main>

        </Def>
    )
}

module.exports = home