import Header from '../components/Header'
import Grid from '../components/Grid'
import Modal from 'boron/ScaleModal'
import FullPageModal from '../components/FullPageModal'

const BrowseNewestMysteries = () => (
  <div>
    <Header />
    <FullPageModal />
    <div className="container margin-top-med margin-bottom-med">
      <h1>Help Select The Top Mysteries Of The Day...</h1>
      <h2>Browse recently submitted mysteries and upvote your favorites. The winners of the day will go on to be the mysteries to answer tomorrow. </h2>
      <Grid />
      <div className="center">Show More</div>
    </div>
  </div>
);

export default BrowseNewestMysteries;
