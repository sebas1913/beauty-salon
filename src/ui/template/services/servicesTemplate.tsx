"use client";
import React, { useState } from 'react';
import Modal from '@/ui/organisms/modal/Modal';
import ButtonAdd from '@/ui/molecules/button-add/ButtonAdd';
import ServicesForm from '@/ui/organisms/servicesForm/ServicesForm';
import TableServices from '@/ui/organisms/tables/TableServices';

interface IProps {
    dataResponse: any;
}

const ServicesPageTemplate: React.FC<IProps> = ({ dataResponse }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    return (
        <div>
            <ButtonAdd onClick={openModal} />
            <TableServices dataResponse={dataResponse} />

            <Modal isVisible={isModalOpen} onClose={closeModal}>
                <ServicesForm />
            </Modal>
        </div>
    );
};

export default ServicesPageTemplate;
