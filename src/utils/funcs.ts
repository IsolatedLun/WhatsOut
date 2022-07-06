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

/**
 * @param e
 * @param whitelist - Ignores element with same className
*/
export function toggleDropdowns<T extends Event>(e: T, whitelist: string) {
    e.stopPropagation();

    const target = e.target as HTMLElement;
    const dropdowns = document.querySelectorAll('*[data-dropdown-state]');

    // The id of the possibly clicked dropdown
    const ignoreId = propOrDefault(target.closest('.list')?.id, 'NaE')

    if(!target.classList.contains(whitelist)) {
        dropdowns.forEach(el => {
            if(el.id !== ignoreId)
                el.setAttribute('data-dropdown-state', 'false');
            else
                el.setAttribute('data-dropdown-state', 'true');
        });
    }
}