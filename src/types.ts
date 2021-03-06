export interface Props_CubeCSS {
    blockClass?: string;
    compostClass?: string;
    utilClass?: string;
}

export interface Props_Element extends Props_CubeCSS {  };
export interface Props_Idx {
    idx: number;
}

export type DT_Object<T> = object & { [key: string]: T };