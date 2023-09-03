import { Modal } from "antd";
import React from "react";

type ModalWindowProps = {
    isOpenedModal: boolean;
    onCancel: () => void;
    width: string;
    children: React.ReactElement;
}

export const ModalWindow = ({isOpenedModal, onCancel, width, children}: ModalWindowProps) => {
    return (
        <Modal open={isOpenedModal} footer={null}
               onCancel={onCancel}
               closeIcon={null}
               width={width}
               bodyStyle={{'background': '#3A3C47'}}
               centered
        >
            {children}
        </Modal>
    )
}