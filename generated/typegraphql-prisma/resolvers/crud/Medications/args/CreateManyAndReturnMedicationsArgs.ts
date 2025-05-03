import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { MedicationsCreateManyInput } from "../../../inputs/MedicationsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnMedicationsArgs {
  @TypeGraphQL.Field(_type => [MedicationsCreateManyInput], {
    nullable: false
  })
  data!: MedicationsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
