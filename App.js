import react from 'react';
import ReactDOM from 'react-dom';

const h1 = react.createElement("h1",{id: "title"},"Welcome to RocketMeal");
const h2 = react.createElement("h2",{},"Get your food delivered at rocket Speed");

const container = react.createElement("div", {}, [h1,h2]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);