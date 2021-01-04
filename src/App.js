import Body from './components/Body';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Placeholder from './components/Placeholder';

function App() {
  return (
    <div className="
    min-h-screen
    flex items-center
    ">
      <Nav />
      <Body />
{/*       <Placeholder classes="w-96 h-48"/> */}
      <Footer />
    </div>
  );
}

export default App;
