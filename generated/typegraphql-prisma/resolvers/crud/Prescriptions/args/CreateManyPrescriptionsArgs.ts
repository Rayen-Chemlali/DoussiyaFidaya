import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PrescriptionsCreateManyInput } from "../../../inputs/PrescriptionsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPrescriptionsArgs {
  @TypeGraphQL.Field(_type => [PrescriptionsCreateManyInput], {
    nullable: false
  })
  data!: PrescriptionsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
