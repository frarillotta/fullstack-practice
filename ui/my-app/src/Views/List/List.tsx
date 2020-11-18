import React from "react";

export interface ListProps{

    films: Array<Object>

}

export class List extends React.Component<ListProps> {

    constructor(props) {

        super(props);

    }

    render() {

        return(
            this.renderEntries()
        )

    }


    listEntries(film) {

        return(<div>{film}</div>)

    }


    // componentDidUpdate() {
    //
    //     this.renderEntries();
    //
    // }


    renderEntries() {

        return(

             <div>{this.props.films.map(film=>{

                 // return <div>{JSON.stringify(film)}</div>

             })}</div>
            // this.props.films.map((film)=>{
            //
            //     return <div>film</div>
            //
            // })

        )

    }

}
