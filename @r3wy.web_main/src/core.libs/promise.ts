type Delay = (milliseconds: number) => Promise<void>

export const delay: Delay = milliseconds =>
  new Promise(resolve => {
    setTimeout(resolve, milliseconds)
  })
