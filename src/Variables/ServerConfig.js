import {returnMinutesFromNumber} from "./functions";

export const DOMAIN_SERVER = "8af7-85-174-192-8.ngrok-free.app";
export const BASE_URL = `https://${DOMAIN_SERVER}`;
export const API_ID_SMS = "3644ABC4-AAC5-7628-CA3C-F781BD026520";
export const TIME_TO_DELETE_THE_SMS = returnMinutesFromNumber(5);
