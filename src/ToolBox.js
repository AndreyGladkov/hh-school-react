import React, {PureComponent, Fragment} from "react";
import Input from "@material-ui/core/Input/Input";
import Button from "@material-ui/core/Button/Button";

export default class ToolBox extends PureComponent {
    input = React.createRef();

    render() {
        return (
            <Fragment>
                    <div id="toolbox" className="toolbox">
                        <Input className={"searchInput"} ref={this.input}>
                        </Input>
                        <Button className={"actionButton"}
                                variant="contained"
                                color="primary">
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



