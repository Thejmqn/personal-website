import drive from "./SudleyRoad.mp4";

export default function Note6() {
    return (
        <video width="440" height="440" controls>
            <source src={drive} type="video/mp4" />
        </video>
    )
}
