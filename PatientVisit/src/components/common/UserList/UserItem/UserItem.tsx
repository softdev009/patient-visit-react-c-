import { Box, Button } from "@mui/material";
import "./UserItem.scss";

interface UserItemProps {
  name: string;
  icon: React.ReactNode;
  onSelect?: () => void;
}

export const UserItem: React.FC<UserItemProps> = ({ name, icon, onSelect }) => {
  return (
    <>
      <Box mt={1}>
        <Button
          variant="outlined"
          fullWidth
          size="large"
          style={{ textTransform: "none" }}
          color="primary"
          onClick={onSelect}
        >
          <Box position={"absolute"} left={10} display={"flex"} justifyContent={"center"}>
            {icon}
          </Box>
          {name}
        </Button>
      </Box>
    </>
  );
};
