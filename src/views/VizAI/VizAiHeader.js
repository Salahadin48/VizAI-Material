import React from "react";

import Header from "../../components/Header/Header";
import HeaderLinks from "../../components/Header/HeaderLinks";
import axios from "axios";

export default class VizAiHeader extends React.Component {
    state = {
        brand: ""
    };

    componentDidMount() {
        axios.get(`http://localhost:8080/1`)
            .then(res => {
                const brand = res.data.header.value;
                this.setState({brand: brand})
                console.log(res.data)
            })
    }

    render() {
        const {...rest} = this.props;
        return <Header
            brand={this.state.brand}
            rightLinks={<HeaderLinks/>}
            fixed
            color="00d8ff"
            changeColorOnScroll={{
                height: 400,
                color: "black"
            }}
            {...rest}
        />;
    }
}
