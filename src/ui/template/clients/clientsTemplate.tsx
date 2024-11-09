import TableClients from "@/ui/organisms/tables/TableClients";

interface IProps {
    dataResponse: any;
}


const ClientsPageTemplate: React.FC<IProps> = ({dataResponse}) => {
    return(
        <div>
            <TableClients dataResponse={dataResponse}></TableClients>
        </div>
    )
}

export default ClientsPageTemplate;

