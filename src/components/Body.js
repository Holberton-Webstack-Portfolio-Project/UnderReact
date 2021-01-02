import logo from '../assets/snowflake_logo_color.svg';

export default function Body() {
    return (
    <div className="Body">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>UnderReact</h1>
        <p>Yes, I look ugly as frick... for now</p>
        <p>My background color will be gray at the md breakpoint, but teal at every other breakpoint</p>
    </div>
    )
}
