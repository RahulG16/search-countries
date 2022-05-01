import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import './Modal.css'

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#1B1A17",
  color: 'white',
  border: "2px solid #000",
  borderRadius: '10px',
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ weatherData }: any) {

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(weatherData);

  return (
    <div>
      <Button
        variant="outlined"
        onClick={handleOpen}
      >
        Capital
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <h1 className="heading">Weather at {weatherData.location.name}</h1>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <h3>
              Temperature:{" "}
              <span className="info">{weatherData.current.temperature}°C</span>
            </h3>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <img src={weatherData.current.weather_icons[0]} alt="icon" />
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h2>
              Wind Speed:{" "}
              <span className="info">{weatherData.current.wind_speed} m/s</span>
            </h2>
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <h2>
              Precipitation:{" "}
              <span className="info">{weatherData.current.precip}</span>
            </h2>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
