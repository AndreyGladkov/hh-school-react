import React, { PureComponent } from "react";

import { styled } from '@material-ui/styles';
import FormGroup from '@material-ui/core/FormGroup';
import Button from '@material-ui/core/Button';
import Input from '@material-ui/core/Input';

const StyledButton = styled(Button)({
    background: 'linear-gradient(45deg, #4d9e9a 30%, #5cc9c5 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '0 3px 5px 2px rgba(59, 142, 131, 0.29)',
    height: 40,
    padding: '0 30px',
    margin: '0px 7px !important'
});

const StyledInput = styled(Input)({
    flex: 1,
    height: 40,
    margin: '0px 10px',
    borderBottom: 'none',
    '&:after': {
        borderBottom: '2px solid #4d9e9a'
    },
});


export default class Form extends PureComponent {
    state = {
        rid: ""
    };

    add = func => {
        if (this.state.rid) {
            this.props[func](this.state.rid);
        }
    };

    getRid = () => {
        const URL = "http://localhost:9200/api/feelinglucky";
        fetch(URL)
            .then(res => {
                if (res.status === 200) return res.json();
            })
            .then(json => {
                this.setState({ rid: json.rid });
            });
    };

    render() {
        return (
            <FormGroup row={true}>
                <StyledInput value={this.state.rid} onChange={e => this.setState({rid: e.target.value})}/>
                <StyledButton variant="contained" color="primary" onClick={this.add.bind(this, "search")}>Search</StyledButton>
                <StyledButton variant="contained" color="primary" onClick={this.getRid}>
                    I'm Feeling Lucky
                </StyledButton>
            </FormGroup>
        );
    }
}
