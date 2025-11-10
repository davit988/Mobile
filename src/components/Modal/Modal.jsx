import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "darkBlue",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export function BasicModal({ open, closeModal }) {
  return (
    <div>
      <Modal open={open} onClose={closeModal}>
        <Box sx={style}>
          <Typography variant="h6" component="h2" sx={{ color: "#fff" }}>
            Welcome to Mobile App
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
