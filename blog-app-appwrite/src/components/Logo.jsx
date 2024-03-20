import appLogo from "../assets/logo.svg"

function Logo({ height = '60px', ...props }) {
    return (
        <img
            alt="Logo"
            src={appLogo}
            style={{height: height}}
            {...props}
        />
        // <div>
        //     <h5 className="text-xl font-bold">Blog App</h5>
        // </div>
    )
}

export default Logo;