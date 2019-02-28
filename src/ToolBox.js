import React, {PureComponent, Fragment} from "react";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";

export default class ToolBox extends PureComponent {

    update = text => {
        console.log("In update: " + text);
        console.dir(this.input.value);
    };

    render() {
        return (
            <Fragment>
                <div id="toolbox" className="toolbox">
                    <Input className={"searchInput"}  inputRef={input => (this.input = input)}>
                    </Input>
                    <Button className={"actionButton"}
                            variant="contained"
                            color="primary"
                            onClick={this.update.bind(this, "some text")}>
                        Search
                    </Button>
                    <Button className={"actionButton"} variant="contained" color="primary">
                        I'm Feeling Lucky
                    </Button>
                </div>
            </Fragment>
        );
    }
}



