export interface IGetClientResponse {
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

export interface Appointment {
    id:       number;
    dateTime: Date;
    duration: number;
    comments: string;
    service:  Service;
    employee: Content;
}

export interface Content {
    id:            number;
    firstName:     string;
    lastName:      string;
    phone:         string;
    email:         string;
    appointments?: Appointment[];
    role?:         string;
}

export interface Service {
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
