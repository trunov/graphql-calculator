import {
  Mutation,
  Arg,
  InputType,
  Field,
  Resolver,
  Float,
  UseMiddleware,
} from "type-graphql";
import { rateLimit } from "../rate-limit";

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
  @UseMiddleware(rateLimit(5))
  addNumbers(@Arg("numbers", () => CalculationInput) input: CalculationInput) {
    const { a, b } = input;
    return a + b;
  }

  @Mutation(() => Number)
  @UseMiddleware(rateLimit(150))
  subtractNumbers(
    @Arg("numbers", () => CalculationInput) input: CalculationInput
  ) {
    const { a, b } = input;
    return a - b;
  }

  @Mutation(() => Number)
  @UseMiddleware(rateLimit(150))
  multiplyNumbers(
    @Arg("numbers", () => CalculationInput) input: CalculationInput
  ) {
    const { a, b } = input;
    return a * b;
  }

  @Mutation(() => Number)
  @UseMiddleware(rateLimit(150))
  divideNumbers(
    @Arg("numbers", () => CalculationInput) input: CalculationInput
  ) {
    const { a, b } = input;
    return a / b;
  }
}
