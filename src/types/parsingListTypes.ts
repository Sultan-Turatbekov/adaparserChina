import {AllParsingsType} from "@/src/types/allParsingsType.ts";

export interface ParsingListTypes {
    category : string,
    title: string,
    specification?: string,
    data?: AllParsingsType[],
}