"use client";
import React, { useState } from 'react';
import TableClients from "@/ui/organisms/tables/TableClients";
import Modal from "@/ui/organisms/modal/Modal";
import ButtonAdd from "@/ui/molecules/button-add/ButtonAdd";
import ClientForm from '@/ui/organisms/clientsForm/clientsForm';

interface IProps {
    dataResponse: any;
}


const ClientsPageTemplate: React.FC<IProps> = ({dataResponse}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [clientID, setClientID] = useState<number>();

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setClientID(undefined);
    };

    const handleEdit = (id : number) => {
        setIsModalOpen(true);
        setClientID(id);
    };

    return(
        <div>
            <ButtonAdd onClick={openModal}></ButtonAdd>
            <TableClients dataResponse={dataResponse} onEdit={handleEdit}></TableClients>

            <Modal isVisible={isModalOpen} onClose={closeModal}>
                <ClientForm closeModal={closeModal} clientID={clientID}/>
            </Modal>
        </div>
    )
}

export default ClientsPageTemplate;

