import './App.css';
import AboutHome from './containters/AboutHome';
import CustomerReviews from './containters/CustomerReviews';
import DownloadApp from './containters/DownloadApp';
import Footer from './containters/Footer';
import Header from './containters/Header';

function App() {
  return (
    <div className="">
      <Header />
      <AboutHome />
      <CustomerReviews />
      <DownloadApp />
      <Footer />
    </div>
  );
}

export default App;
