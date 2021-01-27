import Body from './components/Body';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {
  return (
    <div className="
    min-h-screen
    flex items-center
    dark:bg-r_gray-2020
    ">
      <Nav />
      <div className="w-full px-4 md:px-12">
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default App;
