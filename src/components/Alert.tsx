interface Props {
  onClick: () => void;
}

const Alert = ({ onClick }: Props) => {
  return (
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
      You clicked on the button!
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick = {onClick}
      ></button>
    </div>
  );
};

export default Alert;
