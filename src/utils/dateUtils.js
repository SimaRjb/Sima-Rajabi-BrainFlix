
const formatDate = (timestamp) => {
  const currentDate = new Date();
  const commentDate = new Date(timestamp);

  const timeDifference = currentDate - commentDate;
  const seconds = Math.floor(timeDifference / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (seconds < 60) {
    return seconds + (seconds === 1 ? " second ago" : " seconds ago");
  } else if (minutes < 60) {
    return minutes + (minutes === 1 ? " minute ago" : " minutes ago");
  } else if (hours < 24) {
    return hours + (hours === 1 ? " hour ago" : " hours ago");
  } else if (days < 30) {
    return days + (days === 1 ? " day ago" : " days ago");
  } else if (months < 12) {
    return months + (months === 1 ? " month ago" : " months ago");
  } else {
    return years + (years === 1 ? " year ago" : " years ago");
  }
};
export default formatDate;