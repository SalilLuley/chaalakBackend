export interface IDatabaseService {
  find(params: any): Promise<any>;
  findOne(params: any): Promise<any>;
  insert(params: any): Promise<any>;
  update(params: any): Promise<any>;
  delete(params: any): Promise<any>;
  remove(params: any): Promise<any>;
  search(params: any): Promise<any>;
  uploadImage(params: any): Promise<any>;
}
