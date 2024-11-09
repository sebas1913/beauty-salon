import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { IoIosAddCircle } from "react-icons/io";
import { IoIosCloseCircle } from "react-icons/io";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit3 } from "react-icons/fi";



export const Icons = {
    paginationNext: <FaChevronRight />,
    paginationPrevious: <FaChevronLeft />,
    add: <IoIosAddCircle size={50}/>,
    close: <IoIosCloseCircle size={35}/>,
    delete: <AiOutlineDelete size={17}/>,
    edit: <FiEdit3 size={17}/>
}