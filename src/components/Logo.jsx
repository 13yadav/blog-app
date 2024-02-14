function Logo({ width = '100px', ...props }) {
    return (
        <img
            alt="Logo"
            src="/logo.svg"
            width={width}
            {...props}
        />
    )
}

export default Logo;