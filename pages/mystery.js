import Header from '../components/Header'
import Grid from '../components/Grid'
import MysteryCard from '../components/MysteryCard'
import dynamic from 'next/dynamic'

const RecordCard = dynamic(
  () => import('../components/RecordCard'),
  { ssr: false }
)

const MysteryPage = () => (
  <div>
    <Header />
    <i className="material-icons close-modal-button">close_rounded</i>
    <div className="container margin-top-med">
      <h1>The Case Of The Prime Number Spiral</h1>
      <h1>Original Mystery</h1>
      <MysteryCard />
      <RecordCard />
      <h1>Top submitted solutions</h1>
      <h2>Vote for your favorite.</h2>
      <MysteryCard />
      <MysteryCard />
      <MysteryCard />
      <MysteryCard />
    </div>
  </div>
);

export default MysteryPage;
