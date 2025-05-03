import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_attachmentsCreateManyInput } from "../../../inputs/Lab_attachmentsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyLab_attachmentsArgs {
  @TypeGraphQL.Field(_type => [Lab_attachmentsCreateManyInput], {
    nullable: false
  })
  data!: Lab_attachmentsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
