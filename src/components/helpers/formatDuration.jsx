export const formatDuration = ([hours, minutes]) => {

    return `${hours < 10 ? `0${hours}` : hours}:${
        minutes < 10 ? `0${minutes}` : minutes
      }`;
};