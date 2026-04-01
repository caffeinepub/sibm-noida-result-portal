import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface StudentData {
    result: boolean;
    applicantName: string;
    applicationNumber: string;
    batchYear: string;
}
export interface backendInterface {
    lookupByApplicationId(arg0: string): Promise<StudentData>;
}
