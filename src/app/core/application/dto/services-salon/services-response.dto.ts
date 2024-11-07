export interface IGetServiceResponse {
    totalPages:       number;
    totalElements:    number;
    pageable:         Pageable;
    numberOfElements: number;
    size:             number;
    content:          Content[];
    number:           number;
    sort:             Sort[];
    first:            boolean;
    last:             boolean;
    empty:            boolean;
}

export interface Content {
    id:          number;
    name:        string;
    description: string;
    price:       number;
}

export interface Pageable {
    pageNumber: number;
    pageSize:   number;
    paged:      boolean;
    unpaged:    boolean;
    offset:     number;
    sort:       Sort[];
}

export interface Sort {
    direction:    string;
    nullHandling: string;
    ascending:    boolean;
    property:     string;
    ignoreCase:   boolean;
}
