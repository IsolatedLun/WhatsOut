import { PUNCTIONAL_NUMERIC_REGEX } from "../consts";
import type { DT_Object, Props_CubeCSS } from "../types";

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

/**
 * @param x
 * @returns 'Louna is my cat' => 'Louna Is My Cat'
*/
export function capitalizeText(x: string): string {
    function capitalizeStr(y: string) {
        return y.charAt(0).toUpperCase() + y.slice(1);
    }

    return x.split(' ').map(z => capitalizeStr(z)).join(' ');
}

export function containsEmptyVal<T>(dict: DT_Object<any>, validators: DT_Object<Function[]>[]= []): boolean {
    function validate(x: any, validators: Function[]) {
        if(!validators)
            return true;

        let bool = false

        validators.forEach(func => {
            bool = func(x);
            if(!bool)
                return;
        });
        return bool;
    }
    const x = Object.keys(dict).every(key => {
        const type = typeof(dict[key]);
        const val = dict[key];

        if((validators as any)[key]) {
            return validate(val, (validators as any)[key]);
        }

        if(type === 'number' && val > 0)
            return true;
        else if(type === 'string' && String(val).length > 0)
            return true;
    });

    return x;
}

export function isPunctionalNumeric(x: string) {
    return PUNCTIONAL_NUMERIC_REGEX.test(x);
}