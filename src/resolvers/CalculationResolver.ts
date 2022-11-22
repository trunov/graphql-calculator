import { Mutation, Arg, InputType, Field, Resolver, Float } from "type-graphql";

@InputType()
class CalculationInput {
  @Field(() => Float)
  a: number;

  @Field(() => Float)
  b: number;
}

@Resolver()
export class CalculationResolver {
  @Mutation(() => Number)
  addNumbers(@Arg("numbers", () => CalculationInput) input: CalculationInput) {
    const { a, b } = input;
    return a + b;
  }

  @Mutation(() => Number)
  subtractNumbers(
    @Arg("numbers", () => CalculationInput) input: CalculationInput
  ) {
    const { a, b } = input;
    return a - b;
  }

  @Mutation(() => Number)
  multiplyNumbers(
    @Arg("numbers", () => CalculationInput) input: CalculationInput
  ) {
    const { a, b } = input;
    return a * b;
  }

  @Mutation(() => Number)
  divideNumbers(
    @Arg("numbers", () => CalculationInput) input: CalculationInput
  ) {
    const { a, b } = input;
    return a / b;
  }
}
