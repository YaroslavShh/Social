import a from "./about.module.css"

export function About() {
    return (
        <div className={a.container}>
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Messages</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
                <li><a href="#">Settings</a></li>
            </ul>
        </div>
    )
}
