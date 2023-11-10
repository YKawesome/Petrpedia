import { useState, Component} from "react";
import { useParams } from "react-router-dom";

async function postData(url = "", data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    });
    return response.json(); // parses JSON response into native JavaScript objects
  }


class NewSticker extends Component {
    constructor(props) {
        super(props);
        this.state = {location: "", template_id: 0, user_id: 0};
        this.submit = this.submit.bind(this);
    }
    submit() {
        postData("//localhost:5000/stickers-post?template_id=" + this.state.template_id + '&user_id=' + this.state.user_id, {current_location: this.state.location, willing_to_trade: true});
    }
    render() {

        return(
            <>
                <h1 className="templatecreate">Create a Sticker</h1>
                <div className="templateoptions">
                    
                    <h2 className="ntname"> User ID: </h2>
                    <input type = "number" value={this.state.user_id} onChange={event => this.setState({user_id:event.target.value})} ></input>
                    <h2 className="ntname"> Template ID: </h2>
                    <input type = "number" value={this.state.template_id} onChange={event => this.setState({template_id:event.target.value})} ></input>
                    <h2 className="ntcreator">Current Location: </h2>
                    <input type = "text" value={this.state.location} onChange={event=> this.setState({location:event.target.value})}></input>
                </div>
                <button className='moveup' onClick={this.submit}>Submit</button>
            </>

        )
    }

}
export default NewSticker;