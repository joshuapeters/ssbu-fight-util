export interface BaseModel {
    id          : number | string;
    createdOn   : Date;
    createdBy   : number;
    updatedOn   : Date;
    updatedBy   : number;
    deletedOn   : Date;
    deletedBy   : number;
}