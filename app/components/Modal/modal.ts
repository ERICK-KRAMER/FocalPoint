import { ModalBody } from "./Modal_body";
import { Button } from "./Modal_Button";
import { Modal as Container } from "./Modal_container";
import { ModalFooter } from "./Modal_footer";
import { ModalHeader } from "./Modal_header";
import { ModalInput } from "./Modal_input";

const Modal = {
    Root: Container,
    Header: ModalHeader,
    Footer: ModalFooter,
    Body: ModalBody,
    Button: Button,
    Input: ModalInput
}

export { Modal };