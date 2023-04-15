const root = ReactDOM.createRoot(document.getElementById("root"));
const heading = React.createElement("h1", {
    id: "tittle",
    key: 'heading'
}, "Namaste React!");
const text = React.createElement("p", {
    className: 'tittle-metadata',
    id: "text-container",
    key: 'para'
}, "react course")
const child = React.createElement("div", {
    id: "heading"
}, [heading, text]);
root.render(child);