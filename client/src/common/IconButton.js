import IconButton from "@mui/material/IconButton";
import { styled } from "@mui/material/styles";

const ContainedIconButton = styled(IconButton)(
  ({ theme, backgroundcolor, backgroundcolorhover }) => ({
    backgroundColor: backgroundcolor,
    color: theme.palette.primary.contrastText,
    padding: theme.spacing(1),
    borderRadius: theme.shape.borderRadius,
    "&:hover": {
      backgroundColor: backgroundcolorhover,
    },
    "&.Mui-disabled": {
      backgroundColor: backgroundcolor,
      color: "#fff",
      opacity: 0.5,
    },
  })
);

function CustomIconButton(props) {
  const { icon: Icon, backgroundcolor, backgroundcolorhover } = props;

  return (
    <ContainedIconButton
      aria-label="add"
      backgroundcolor={backgroundcolor}
      backgroundcolorhover={backgroundcolorhover}
      {...props}
    >
      <Icon />
    </ContainedIconButton>
  );
}

export default CustomIconButton;
