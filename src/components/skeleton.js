import Skeleton from 'react-loading-skeleton'

export function TrackSkeleton({ tracks }) {
  return Array(tracks)
    .fill(0)
    .map((_, i) => (
      <div className="track-skeleton" key={i}>
        <div className="track-skeleton__col-1">
          <Skeleton width={51} height={51} />
        </div>
        <div className="track-skeleton__col-2">
          <Skeleton width={334} height={20} />
        </div>
        <div className="track-skeleton__col-3">
          <Skeleton width={272} height={20} />
        </div>
        <div className="track-skeleton__col-4">
          <Skeleton width={312} height={20} />
        </div>
      </div>
    ))
}
