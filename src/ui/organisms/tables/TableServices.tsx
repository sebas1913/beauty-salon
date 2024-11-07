import React from "react";
import Table from "@/ui/molecules/common/table/Table";
import PaginationServices from "../paginations/ServicesPagination";
import { IGetServiceResponse } from "@/app/core/application/dto/services-salon/services-response.dto";

interface TableServicesProps {
  dataResponse: IGetServiceResponse;
}

const TableServices: React.FC<TableServicesProps> = ({ dataResponse }) => {
  const { content } = dataResponse;

  const formattedData = content.map((service) => ({
    id: service.id,
    name: service.name,
    description: service.description,
    price: service.price,
  }));

  const headers = ["id", "name", "description", "price"];

  return (
    <div>
      <Table headers={headers} data={formattedData} />
      <div>
        <PaginationServices data={dataResponse} />
      </div>
    </div>
  );
};

export default TableServices;
