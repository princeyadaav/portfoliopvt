export type SvmPoint = {
  x: number
  y: number
  label: 1 | -1
}

export type SvmSettings = {
  learningRate: number
  c: number
  epochs: number
}

export type SvmModel = {
  weights: [number, number]
  bias: number
  accuracy: number
}

export const svmDataset: SvmPoint[] = [
  { x: 1.2, y: 1.1, label: -1 }, { x: 1.8, y: 1.6, label: -1 },
  { x: 2.2, y: 1.3, label: -1 }, { x: 2.7, y: 2.1, label: -1 },
  { x: 3.1, y: 2.6, label: -1 }, { x: 3.7, y: 2.9, label: -1 },
  { x: 4.1, y: 3.7, label: 1 }, { x: 4.6, y: 3.4, label: 1 },
  { x: 5.2, y: 4.1, label: 1 }, { x: 5.7, y: 4.8, label: 1 },
  { x: 6.2, y: 4.5, label: 1 }, { x: 6.8, y: 5.2, label: 1 },
]

export function trainLinearSvm(points: SvmPoint[], settings: SvmSettings): SvmModel {
  const weights: [number, number] = [0, 0]
  let bias = 0

  for (let epoch = 0; epoch < settings.epochs; epoch += 1) {
    for (const point of points) {
      const score = weights[0] * point.x + weights[1] * point.y + bias
      if (point.label * score >= 1) {
        weights[0] -= settings.learningRate * weights[0]
        weights[1] -= settings.learningRate * weights[1]
      } else {
        weights[0] += settings.learningRate * (settings.c * point.label * point.x - weights[0])
        weights[1] += settings.learningRate * (settings.c * point.label * point.y - weights[1])
        bias += settings.learningRate * settings.c * point.label
      }
    }
  }

  const correct = points.filter((point) => (
    (weights[0] * point.x + weights[1] * point.y + bias >= 0 ? 1 : -1) === point.label
  )).length

  return { weights, bias, accuracy: correct / points.length }
}
