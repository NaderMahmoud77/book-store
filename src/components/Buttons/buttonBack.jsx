import { useNavigate } from "react-router-dom";

// Mui
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";


export function BtnBack() {
  let navigate = useNavigate();

  let handleBack = () => {
    navigate(-1);
  };

  return (
    <button className="back-button" onClick={handleBack}>
      <ArrowBackIosNewIcon fontSize="small" className="back-icon" />
      Back
    </button>
  );
}
