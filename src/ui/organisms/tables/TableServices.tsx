"use client";
import React from "react";
import Table from "@/ui/molecules/common/table/Table";
import PaginationServices from "../paginations/ServicesPagination";
import { IGetServiceResponse } from "@/app/core/application/dto/services-salon/services-response.dto";
import ButtonAdd from "@/ui/molecules/button-add/ButtonAdd";
import Button from "@/ui/atoms/button/Button";

interface TableServicesProps {
    dataResponse: IGetServiceResponse;
    onEdit: (id: number) => void;
}

const TableServices: React.FC<TableServicesProps> = ({ dataResponse, onEdit }) => {
    const { content } = dataResponse;

    const handleDelete = async (id: number) => {
        try {
            await fetch(`/api/services/delete/${id}`, {
                method: 'DELETE'
            })
            console.log('Eliminado');

        } catch (error) {
            console.log('Error', error);
        }
    };

    const formattedData = content.map((service) => ({
        name: service.name,
        description: service.description,
        price: service.price,
        actions: (
            <div>
                <Button onClick={() => onEdit(service.id)}>Editar</Button>
                <Button onClick={() => handleDelete(service.id)}>Eliminar</Button>
            </div>
        ),
    }));

    const headers = [
        { label: "Nombre del servicio", key: "name" },
        { label: "Descripción", key: "description" },
        { label: "Precio", key: "price" },
        { label: "Acciones", key: "actions" },
    ];

    return (
        <div>
            <Table headers={headers} data={formattedData} />
            <PaginationServices data={dataResponse} />
            <ButtonAdd />
        </div>
    );
};

export default TableServices;
