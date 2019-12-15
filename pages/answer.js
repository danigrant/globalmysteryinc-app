import Header from '../components/Header'
import Grid from '../components/Grid'
import MysteryCard from '../components/MysteryCard'

const AnswerPage = () => (
  <div>
    <Header />
    <i className="material-icons close-modal-button">close_rounded</i>
    <div className="container margin-top-med">
      <h1>The Case Of The Prime Number Spiral</h1>
      <MysteryCard />
      <div>Record your own</div>
      <h1>Other submitted solutions</h1>
      <h2>Vote for your favorite.</h2>
      <Grid />
    </div>
  </div>
);

export default AnswerPage;
