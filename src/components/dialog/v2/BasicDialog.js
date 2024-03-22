import React, { useEffect } from "react";
import { color, rainbowTheme } from "../../../common/layout";
import { Application, Button, Modal } from "react-rainbow-components";
import { encoderLang } from "../../../common/lang";
import { ACTION_PERMISSIONS, isPermissionDenied } from "../../../common/user";

export default function BasicDialog({ footer, title, children, isOpen, handleClose,handleConfirm,confirmLabel }) {
  useEffect(() => {

  }, [isOpen]);
  const modalStyle = {
    border: '1px solid' + color.blue,
    width:'max-content',
    maxWidth: '90%',
    minWidth:'60%'
  }
  var defaultFooter = 
  <div className="rainbow-flex rainbow-justify_end">
  <Button
      form="redux-form-id"
      className="rainbow-m-right_large"
      label="Cancel"
      variant="neutral"
      onClick={handleClose}
  />
    <Button
        form="redux-form-id"
        className="rainbow-m-right_large"
        label={confirmLabel?confirmLabel:encoderLang.dialog.defaultConfirmButton}
        variant="brand"
        type="submit"
        disabled = {isPermissionDenied(ACTION_PERMISSIONS.BasicDialogActionExecutor)}
        onClick={handleConfirm}
    />

</div>
  return  <Application theme={rainbowTheme}><Modal
    id="modal-11"
    title={title}
    isOpen={isOpen}
    onRequestClose={handleClose}
    style={modalStyle}
    footer={footer ? footer : defaultFooter}
    

  >
    {children}
  </Modal>
  </Application>

}
