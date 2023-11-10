export default function home() {
    return (
      <>
        <div id = "page">
          <div id = "content">
            <h1 class = "welcome">Welcome To</h1>
            <h1 class = "title">Petrpedia!</h1>
            <p>Petrpedia is a ultimate hub for Petr fans, with features to request trades, browse Petrs and contribute to the ever-growing community online.</p>
            <a href="/new_user"><button className="login">+ Create A User</button></a>
            <a href="/new_template"><button className="createTemplate">+ Create Template</button></a>
            <a href="/new_drop"><button className="newdrop">+ Create A Drop</button></a>
            <a href="/new_sticker"><button className="newsticker">Own A Sticker</button></a>
          </div>
        </div>
      </>
    );
  }
