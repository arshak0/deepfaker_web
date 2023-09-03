import { useMedia } from 'react-use';
import { BREAKPOINTS } from '../constants/breakpoints';
import type { Breakpoints } from '../types/breakpoints';

// TODO: add media query array processing: const [isMobile, isTablet, isDesktop] = useMediaQuery([media1, meda2, media3])
function useMediaQuery(size: Breakpoints | number | number[] | Breakpoints[], defaultValue?: boolean) {
    // @ts-ignore
    const minWidth: number = BREAKPOINTS[size] || size;
    return useMedia(`(min-width: ${minWidth}px)`, defaultValue);
}

export default useMediaQuery;
