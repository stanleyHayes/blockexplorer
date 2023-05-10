const display = item => {
    return `${item?.slice(0, 3)}...${item?.slice(-3)}`
}

export const UTILS = {display};