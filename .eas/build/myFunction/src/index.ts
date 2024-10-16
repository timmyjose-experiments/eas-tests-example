import { BuildStepInputValueTypeName, BuildStepContext, BuildStepInput, BuildStepOutput } from '@expo/steps'

interface FunctionInputs {
  num1: BuildStepInput<BuildStepInputValueTypeName.NUMBER, true>
  num2: BuildStepInput<BuildStepInputValueTypeName.NUMBER, true>
}

interface FunctionOutputs {
  sum: BuildStepOutput<true>
}

async function myFunction(
  ctx: BuildStepContext,
  {
    inputs,
    outputs
  }: {
    inputs: FunctionInputs,
    outputs: FunctionOutputs
  }
): Promise<void> {
  ctx.logger.info(`num1: ${inputs.num1.value}`)
  ctx.logger.info(`num2: ${inputs.num2.value}`)

  const sum = inputs.num1.value + inputs.num2.value
  ctx.logger.info(`sum = ${sum}`)

  outputs.sum.set(sum.toString())
}

export default myFunction
