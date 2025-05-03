import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_documentsCreateManyInput } from "../../../inputs/Lab_documentsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAndReturnLab_documentsArgs {
  @TypeGraphQL.Field(_type => [Lab_documentsCreateManyInput], {
    nullable: false
  })
  data!: Lab_documentsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
