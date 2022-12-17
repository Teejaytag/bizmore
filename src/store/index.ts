import create from "zustand"

export const useStore = create((set) => ({
  step: 0,
  nextStep: () => set((state: { step: number }) => ({ step: state.step + 1 })),
  prevStep: () => set((state: { step: number }) => ({ step: state.step - 1 })),
}))
