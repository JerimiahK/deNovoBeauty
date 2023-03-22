import "./cancellationText.css";

export default function CancellationText() {
    return (
        <div className="cancellationTextContainer">
            <h4>
                <strong>What Are The Cancellation Fees?</strong>
            </h4>
            <p>
                The cancellation fee comes from the deposit. Deposits are
                <strong>
                    <i> non-refundable</i>
                </strong>{" "}
                if the service is canceled 24 hours or less before the scheduled
                appointment. However, any appointment canceled with more than a
                24 hour heads-up is eligible for a deposit refund.
            </p>
        </div>
    );
}
