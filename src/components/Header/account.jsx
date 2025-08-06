import "../Register-Login/registerLogin.css"; // Assuming you have a CSS file for styling

// MUi
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import Tooltip from "@mui/material/Tooltip";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import { useState } from "react";

import RegisterModal from "../Register-Login/register";
import LoginModal from "../Register-Login/login";
import { ModalForm } from "../Register-Login/modal-Success";

export let AccountHeader = () => {
  const [openRegisterModal, setOpenRegisterModal] = useState(false);
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openModalSuccess, setOpenModalSuccess] = useState(false);

  return (
    <>
      <RegisterModal
        open={openRegisterModal}
        onClose={() => setOpenRegisterModal(false)}
        onSuccessRegister={() => {
          setOpenRegisterModal(false);
          setOpenModalSuccess(true);
        }}
      />

      {/* Success Modal */}
      <ModalForm
        openShow={openModalSuccess}
        onClose={() => setOpenModalSuccess(false)}
      />

      <LoginModal
        open={openLoginModal}
        onClose={() => setOpenLoginModal(false)}
      />

      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <div className="account-header">
            <Tooltip title="Register & Login" followCursor>
              <div className="account" {...bindTrigger(popupState)}>
                <PersonOutlinedIcon className="account-icon" />
              </div>
              <Menu {...bindMenu(popupState)}>
                <MenuItem
                  onClick={() => {
                    popupState.close();
                    setOpenRegisterModal(true);
                  }}
                >
                  Register
                </MenuItem>

                <MenuItem
                  onClick={() => {
                    popupState.close();
                    setOpenLoginModal(true);
                  }}
                >
                  Login
                </MenuItem>
              </Menu>
            </Tooltip>
          </div>
        )}
      </PopupState>
    </>
  );
};
