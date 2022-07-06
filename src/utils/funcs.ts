import type { Props_CubeCSS } from "src/types";

export function propOrDefault<T>(x: T | undefined, def: any): T {
    return x ? x : def;
}

export function createCubeCSSClass(vars: Props_CubeCSS, extra: Props_CubeCSS): string {
    return `
        [ ${propOrDefault(vars.blockClass, '')} ${propOrDefault(extra.blockClass, '')} ] 
        [ ${propOrDefault(vars.compostClass, '')} ${propOrDefault(extra.compostClass, '')} ] 
        [ ${propOrDefault(vars.utilClass, '')} ${propOrDefault(extra.utilClass, '')} ]`;
}