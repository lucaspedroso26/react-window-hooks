/* eslint-disable @typescript-eslint/no-explicit-any */

type WindowProps = (Window & typeof globalThis) | any
type UseWindowProps = {
  window: WindowProps
}

/** verify the document and tell you if it's from the server or the real window object */
export const useWindow = (): UseWindowProps => {
  const currentProcess: any = process
  let myWindow: WindowProps = {}
  if (currentProcess.browser) {
    myWindow = window
  }

  return {
    window: myWindow,
  }
}

export default useWindow
