
export const NotFoundPage = () => {
    return (
        <div className={`flex gap-10 items-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]`}>
            <div className={`text-2xl`}>404</div>
            <div className={`text-3xl`}>|</div>
            <div className={`text-xl`}>This page could not be found.</div>
        </div>
    )
}