/** @ftw-lab/sovereignty-lab-kit — public scaffold (FTW-LAB). */
export const packageId = 'sovereignty-lab-kit' as const
export const org = 'FTW-LAB' as const
export function banner(): string {
  return `[FTW Lab] ${org}/${packageId} · UNCLASSIFIED // PUBLIC SOURCE`
}
