export type RepairType = 'small' | 'medium' | 'large' | 'valve';
export type RepairLocation = 'canopy' | 'seam' | 'strut' | 'leading';

export interface RepairDetails {
  repairType: RepairType;
  repairLocation: RepairLocation;
  estimatedPrice: number;
}

export const repairTypeLabels: Record<RepairType, string> = {
  small: 'Kleiner Riss (bis 5cm)',
  medium: 'Mittlerer Riss (5-15cm)',
  large: 'Großer Riss (über 15cm)',
  valve: 'Ventil-Austausch',
};

export const repairLocationLabels: Record<RepairLocation, string> = {
  canopy: 'Tuch (Standard)',
  seam: 'Naht',
  strut: 'Strut',
  leading: 'Leading Edge',
};

export const basePrices: Record<RepairType, number> = {
  small: 40, // Kleiner Riss
  medium: 60, // Mittlerer Riss
  large: 80, // Großer Riss
  valve: 35, // Ventil-Austausch
};

export const locationMultipliers: Record<RepairLocation, number> = {
  canopy: 1.0, // Standard für Tuch
  seam: 1.2, // Naht (komplexer)
  strut: 1.25, // Strut
  leading: 1.5, // Leading Edge (am komplexesten)
};

export function calculatePrice(repairType: RepairType, repairLocation: RepairLocation): number {
  const price = basePrices[repairType] * locationMultipliers[repairLocation];
  return Math.round(price);
} 