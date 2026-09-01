import type { PageableProps } from "../../scripts/Types";
import { getRequest } from "../ApiFunctions";
import type { Assignment } from "../assignments/assignments";
import type { Calibration, Equipment } from "../equipments/equipments";
import type { Reservation } from "../reservations/reservations";
import type { LoginResponse } from "../users/users";

export interface IndexPageableProps {
  page: number;
  table?: string;
  sortBy: string;
  ascending: boolean;
  size: number;
    request: null
}

export interface DashboardData {
  equipments: Equipment[];
  users: LoginResponse[];
  assignments: Assignment[];
  reservations: Reservation[];
}

export interface Activities {
  id: number;
  equipmentName: string;
  eventType: string;
  oldValue: string;
  newValue: string;
  performedAt: string;
  note: string;

}

export type IndexType = {
  numTotalEquipment: number;
  numAssignedEquipment: number;
  numAvailableEquipment: number;
  numBrokenEquipment: number;
  numAssignedEquipmentPage: number;
  numActiveReservationsPage: number;
  numCalibrationDuePage: number;
  numHistoryPage: number;
  activities: Activities[];
  assignments: Assignment[];
  calibrations: Calibration[];
  reservations: Reservation[];
};

export async function getIndexData(obj: IndexPageableProps) {
  return await getRequest<IndexType>("/index", obj);
}
export async function ChangePageIndex(obj: PageableProps) {
  return await getRequest<IndexType>("/index", obj);
}
