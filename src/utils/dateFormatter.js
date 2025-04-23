import moment from 'moment';

export function formatTimeDifference(timestamp) {
  const now = moment.utc();
  const past = moment.utc(timestamp);
  const diffInSeconds = now.diff(past, 'seconds');

  const units = [
    {name: 'y', seconds: 31536000},
    {name: 'm', seconds: 2592000},
    {name: 'd', seconds: 86400},
    {name: 'h', seconds: 3600},
    {name: 'm', seconds: 60},
    {name: 's', seconds: 1},
  ];

  for (const unit of units) {
    const interval = Math.floor(diffInSeconds / unit.seconds);
    if (interval >= 1) {
      return `${interval}${unit.name}`;
    }
  }
  return 'now';
}