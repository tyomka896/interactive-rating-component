export const GRADES = [1, 2, 3, 4, 5] as const;

export type Grade = (typeof GRADES)[number];

export type Steps = "rate" | "final";

export interface StateData {
    grade: number;
}
