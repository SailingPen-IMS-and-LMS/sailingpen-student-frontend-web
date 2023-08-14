import { reactive } from 'vue'

export const COLS = 2
export const ROWS = 20

export const cells = reactive(
    Array.from(Array(COLS).keys()).map(
        (i) => Array.from(Array(ROWS).keys()).map((i) => '')
    )
)
