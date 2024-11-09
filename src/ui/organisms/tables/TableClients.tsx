"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Icons } from "@/ui/atoms/Icons";
import { IGetClientResponse } from "@/app/core/application/dto/clients/clients-response.dto";
import styles from './table.module.scss';
import PaginationClients from "../paginations/ClientsPagination";
import Table from "@/ui/molecules/common/table/Table";
import Button from "@/ui/atoms/button/Button";

interface TableClientsProps{
    dataResponse: IGetClientResponse;
    // onEdit: (id: number) => void;
}


const TableClients: React.FC<TableClientsProps> = ({dataResponse}) => {
    const router = useRouter();
    const { content } = dataResponse;


    const formatedData = content.map((client) => ({
        firstname: client.firstName,
        lastname: client.lastName,
        phone: client.phone,
        email: client.email,
        appointments: client.appointments,
        role: client.role,
        actions: (
            <div className={styles.actions}>
                {/* <Button onClick={() => onEdit(service.id)}>{Icons.edit}</Button>
                <Button onClick={() => handleDelete(service.id)}>{Icons.delete}</Button> */}
                <Button>{Icons.edit}</Button>
                <Button>{Icons.delete}</Button>
            </div>
        ),
    }));

    const headers = [
        { label: "Nombre", key: "firstname" },
        { label: "Apellido", key: "lastname" },
        { label: "Teléfono", key: "phone" },
        { label: "Correo", key: "email" },
        { label: "Citas", key: "appointments" },
        { label: "Rol", key: "role" },
        { label: "Acciones", key: "actions" }
    ];

    return(
        <div>
            <Table headers={headers} data={formatedData}></Table>
            <PaginationClients data={dataResponse}></PaginationClients>
        </div>
    )
}

export default TableClients;





