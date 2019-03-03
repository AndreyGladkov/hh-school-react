import React, {PureComponent, Fragment} from "react";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";

export default class ToolBox extends PureComponent {

    update = () => {
        this.props.search(this.input.value);
    };

    feelLucky = () => {
        this.props.feelLucky();
    };

    render() {
        return (
            <Fragment>
                <div id="toolbox" className="toolbox">
                    <Input className={"searchInput"} inputRef={input => (this.input = input)}>
                    </Input>
                    <Button className={"actionButton"} variant="contained" color="primary"
                            onClick={this.update}>
                        Search
                    </Button>
                    <Button className={"actionButton"} variant="contained" color="primary"
                            onClick={this.feelLucky}>
                        I'm Feeling Lucky
                    </Button>
                </div>
            </Fragment>
        );
    }
}



