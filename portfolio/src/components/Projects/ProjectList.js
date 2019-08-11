import React from "react";
import Projects from "./Projects"

class ProjectList extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello from ProjectList</h1>
                <Projects />
            </div>
        )
    }
}

export default ProjectList;

//map over project list in data/projects here and render props to Projects