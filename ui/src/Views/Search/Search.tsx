import React from 'react'
import {TextField} from "@material-ui/core"

export class Search extends React.Component {

    constructor(props) {

        super(props);
        this.state={value: ""}

    }

    render() {

        return(

            <div>
                <form className={"asd"} noValidate autoComplete="off" onSubmit={this.handleSubmit.bind(this)}>
                    <TextField id="outlined-basic" label="Film" variant="outlined" onChange={this.handleChange.bind(this)}/>
                </form>
                <div></div>
            </div>

        )

    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        console.log(this.state);
        event.preventDefault();
    }

}
