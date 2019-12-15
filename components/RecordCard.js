import { ZiggeoRecorder } from 'react-ziggeo'

const RecordCard = props => (
  <div>
    <ZiggeoRecorder
        apiKey={process.env.ZIGGEO_API_KEY}
        height={180}
        width={320}
        limit={15}
    />
  </div>
)

export default RecordCard
