"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Icons } from "@/ui/atoms/Icons";
import { IGetServiceResponse } from "@/app/core/application/dto/services-salon/services-response.dto";
import styles from './table.module.scss';
import Table from "@/ui/molecules/common/table/Table";
import PaginationServices from "../paginations/ServicesPagination";
import Button from "@/ui/atoms/button/Button";

interface TableServicesProps {
    dataResponse: IGetServiceResponse;
    onEdit: (id: number) => void;
}

const TableServices: React.FC<TableServicesProps> = ({ dataResponse, onEdit }) => {
    const router = useRouter();
    const { content } = dataResponse;

    const handleDelete = async (id: number) => {
        const isConfirmed = window.confirm("¿Estás seguro de que deseas eliminar este servicio?");
        if (!isConfirmed) return;
    
        try {
            await fetch(`/api/services/delete/${id}`, {
                method: 'DELETE'
            });
            console.log('Eliminado');
            router.refresh();
    
        } catch (error) {
            console.log('Error', error);
        }
    };
    

    const formattedData = content.map((service) => ({
        name: service.name,
        description: service.description,
        price: service.price,
        actions: (
            <div className={styles.actions}>
                <Button onClick={() => onEdit(service.id)}>{Icons.edit}</Button>
                <Button onClick={() => handleDelete(service.id)}>{Icons.delete}</Button>
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
        </div>
    );
};

export default TableServices;
