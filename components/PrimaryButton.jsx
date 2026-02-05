import Button from "./Button";

export default function PrimaryButton({ children, onClick }) {
    return (
        <Button onClick={onClick} variant="primary">
            {children}
        </Button>
    );
}
