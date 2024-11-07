import React from "react";
import Table from "@/ui/molecules/common/table/Table";
import PaginationServices from "../paginations/ServicesPagination";
import { IGetServiceResponse } from "@/app/core/application/dto/services-salon/services-response.dto";
import ButtonAdd from "@/ui/molecules/button-add/ButtonAdd";
interface TableServicesProps {
    dataResponse: IGetServiceResponse;
}

const TableServices: React.FC<TableServicesProps> = ({ dataResponse }) => {
    const { content } = dataResponse;

    const formattedData = content.map((service) => ({
        // id: service.id,
        name: service.name,
        description: service.description,
        price: service.price,
    }));

    const headers = [
        { label: "Nombre del servicio", key: "name" },
        { label: "Descripción", key: "description" },
        { label: "Precio", key: "price" },
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
