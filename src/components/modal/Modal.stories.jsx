import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../button';
import Modal from "./Modal";
import ModalBody from "./ModalBody";
import ModalFooter from "./ModalFooter";
import {boolean, withKnobs} from "@storybook/addon-knobs";

storiesOf('Básicos|Modal', module)
    .addDecorator(withKnobs)
    .add('default', () =>
    <div>
        <Modal
            title="Tips"
            size="tiny"
            visible={boolean("Visible", true)}
            lockScroll={ false }
        >
            <ModalBody>
                <span>This is a message</span>
            </ModalBody>
            <ModalFooter className="modal-footer">
                <Button>Cancel</Button>
                <Button type="primary">Confirm</Button>
            </ModalFooter>
        </Modal>
    </div>);