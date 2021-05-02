export const formatDuration = ([hours, minutes]) => {

    return <div> {(hours > 0) ? <div>{hours}h {minutes}min </div> : <div> {minutes}min </div>}</div>
};