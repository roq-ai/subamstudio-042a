import { ProjectInterface } from 'interfaces/project';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface MediaInterface {
  id?: string;
  file_name: string;
  file_type: string;
  project_id: string;
  uploaded_by: string;
  created_at?: any;
  updated_at?: any;

  project?: ProjectInterface;
  user?: UserInterface;
  _count?: {};
}

export interface MediaGetQueryInterface extends GetQueryInterface {
  id?: string;
  file_name?: string;
  file_type?: string;
  project_id?: string;
  uploaded_by?: string;
}
