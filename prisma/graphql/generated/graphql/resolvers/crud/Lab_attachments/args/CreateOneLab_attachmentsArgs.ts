import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Lab_attachmentsCreateInput } from "../../../inputs/Lab_attachmentsCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneLab_attachmentsArgs {
  @TypeGraphQL.Field(_type => Lab_attachmentsCreateInput, {
    nullable: false
  })
  data!: Lab_attachmentsCreateInput;
}
