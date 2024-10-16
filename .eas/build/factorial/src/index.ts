import { BuildStepContext, BuildStepInput, BuildStepInputValueTypeName, BuildStepOutput } from '@expo/steps'

interface FunctionInputs {
  num: BuildStepInput<BuildStepInputValueTypeName.NUMBER, true>
}

interface FunctionOutputs {
  factorial: BuildStepOutput<true>
}

async function myFunction (
  ctx: BuildStepContext,
  {
    inputs,
    outputs
  } : {
    inputs: FunctionInputs,
    outputs: FunctionOutputs
  }
): Promise<void> {
  ctx.logger.info(`num = ${inputs.num.value}`)

  const fact = factorial(inputs.num.value)
  ctx.logger.info(`factorial(${inputs.num.value}) = ${fact}`)

  outputs.factorial.set(fact.toString())
}

const factorial = (n: number): number => {
  if (n <= 0) {
    return 1
  }

  return n * factorial(n - 1)
}

export default myFunction
