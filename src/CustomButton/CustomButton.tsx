interface CustomButtonProps {
  title: string;
  handleClick: any;
}

function CustomButton(props: CustomButtonProps) {
  return (
    <>
      <button onClick={props.handleClick}>{props.title}</button>
    </>
  );
}

export default CustomButton;
