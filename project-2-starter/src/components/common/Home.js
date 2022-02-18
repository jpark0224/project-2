function Home() {
  return (
    <section className="hero is-fullheight-with-navbar is-warning">
      <div className="hero-body">
        <div className="container">
          <div className="has-text-centered">
            <img className="has-text-centered" width="500"
              height="300" src="https://media4.giphy.com/media/l0Iych4GHWMRxci2I/giphy.gif?cid=790b761194122cfca4d97229dc5a95369c32bf677d08d9ad&rid=giphy.gif&ct=g" alt="space dog" />
          </div>
          <div style={{margin:`20px`}}>
            <p className="title is-1 has-text-centered has-text-black">
              Welcome to the LSS (Local Space Station)
            </p>
            <p className="subtitle has-text-centered">a calendar of images from space...</p>
          </div>
        </div>
        </div>
        <footer className="footer">
          <div className="container">
            <div className="content has-text-centered">
            <p style={{ padding: `2rem` }}>✨ Made with love by Julie, Laura, and Rachel 🚀 project 2 GA-sei-flex-22-ldn 🌙 </p>
            </div>
          </div>
        </footer> 
    </section>
  )
}

export default Home
