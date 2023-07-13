import react from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import Footer from './components/footer';

const App = () =>{
    return (
        <>
            <Header />
            <Body />
            <Footer />
        </>
    );
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App/>);