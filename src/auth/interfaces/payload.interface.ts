import { users_role_enum } from "@prisma/client";

export interface UserPayload {
  id: string;
  address: string | null;
  created_at: Date;
  email: string;
  first_name: string;
  last_name: string;
  is_verified: boolean;
  last_login: Date | null;
  phone: string | null;
  profile_picture: string | null;
  role: users_role_enum;
  associated_id: string | null;
  updated_at: Date;
  associated_data?: any;
}




export interface AssociatedData {
  id: string;
  cin ?: number;
}