"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { IGetServiceResponse } from "@/app/core/application/dto/services-salon/services-response.dto";
import { Icons } from "@/ui/atoms/Icons";
import Button from "@/ui/atoms/button/Button";
import styles from './paginations.module.scss';

interface IProps {
    data: IGetServiceResponse;
}

function PaginationServices({ data }: IProps) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const currentPage = data.pageable.pageNumber + 1;
    const totalPages = data.totalPages;

    const onPageChange = (newPage: number) => {
        const params = new URLSearchParams(searchParams.toString());
        params.set("page", newPage.toString());
        router.push(`?${params.toString()}`);
    };

    return (
        <div className={styles.paginationContainer}>
            <div>
                <Button className={styles.button} onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
                    {Icons.paginationPrevious}
                </Button>
            </div>

            <span className={styles.strong}>Página {currentPage} de {totalPages}</span>

            <div>
                <Button className={styles.button} onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
                    {Icons.paginationNext}
                </Button>
            </div>

        </div>
    );
}

export default PaginationServices;