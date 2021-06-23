    import Header from '../component/Header';
    import QuoteForm from '../layout/modal';
    import History from '../layout/ourhistory';
import Contact from './contact';
import Exhibition from '../layout/exhibition';
function Home(){
    return(
        <div>
            <Header /> 
            <QuoteForm />
            <History />
            <Exhibition />
            {/* <Contact /> */}
        </div>
    )
}

export default Home;
