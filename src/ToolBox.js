import React, {PureComponent, Fragment} from "react";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";

export default class ToolBox extends PureComponent {

    render() {
        return (
            <Fragment>
                <div id="toolbox" className="toolbox">
                    <Input className={"searchInput"} inputRef={input => (this.input = input)}/>
                    <Button className={"actionButton"} variant="contained" color="primary"
                            onClick={() => this.props.search(this.input.value)}>
                        Search
                    </Button>
                    <Button className={"actionButton"} variant="contained" color="primary"
                            onClick={this.props.feelLucky}>
                        I'm Feeling Lucky
                    </Button>
                </div>
            </Fragment>
        );
    }
}



