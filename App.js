
const heading1 = React.createElement("h1",{id:"h1", key:"h1"},"Heading1");

const heading2 = React.createElement("h2",{id:"h2", key:"h2"},"Heading2");

const div1 = React.createElement("div",{id:"div1", key:"div1"},[heading1, heading2]);

const container = React.createElement("div",{id:"container", key:"container"},div1);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);