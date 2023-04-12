export default function SpinnerComponent() {
    return (
        <div className="text-center">
            <div className="spinner-border text-success" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}