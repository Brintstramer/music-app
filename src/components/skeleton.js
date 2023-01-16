import Skeleton from 'react-loading-skeleton'
import { StyledTracksSkeleton } from '../styles/styles'

export function TrackSkeleton({ tracks }) {
  return Array(tracks)
    .fill(0)
    .map((_, i) => (
      <StyledTracksSkeleton key={i}>
        <Skeleton width={51} height={51} style={{ marginRight: '12px' }} />
        <Skeleton width={334} height={20} style={{ marginRight: '50px' }} />
        <Skeleton width={272} height={20} style={{ marginRight: '50px' }} />
        <Skeleton width={312} height={20} />
      </StyledTracksSkeleton>
    ))
}
