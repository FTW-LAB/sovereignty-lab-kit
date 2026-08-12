/** @securist/sovereignty-lab-kit */
export const packageId = 'sovereignty-lab-kit' as const
export const org = 'securist' as const
export function banner(): string {
  return `[Securist] ${org}/${packageId} · UNCLASSIFIED // PUBLIC SOURCE`
}
